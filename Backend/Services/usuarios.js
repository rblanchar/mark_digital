const { getOffset, emptyOrRows } = require('../helper');
const db = require('./db');
const config = require('../config');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendVerificationEmail, sendResetPasswordEmail } = require('../Services/emailService');
const crypto = require('crypto');

async function getMultiple(page = 1, listPerPage = 10) {
    const offset = getOffset(page, listPerPage);

    const rows = await db.query(
        `SELECT u.nombre_apellidos as 'NOMBRE Y APELLIDOS', u.nombre_usuario as 'NOMBRE USUARIO', u.correo AS 'CORREO', 
	        c.id_curso AS 'ID CURSO', c.nombre AS 'NOMBRE CURSO', cu.fecha_inscripcion AS 'FECHA INSCRIPCION'
        FROM usuarios u
        JOIN cursos_usuarios cu
        ON u.id_usuario = cu.id_usuario
        JOIN cursos c
        ON cu.id_curso = c.id_curso ORDER BY cu.id_c_usuario DESC LIMIT ${listPerPage} OFFSET ${offset}`
    );

    const data = emptyOrRows(rows);
    return {
        data,
        meta: { page }
    }
}

async function getAll(userType) {
    if (userType !== 101) {
        return { error: 'No tienes permiso para acceder a esta información' };
    }

    const rows = await db.query('SELECT * FROM usuarios ORDER BY id_usuario DESC');
    const data = emptyOrRows(rows);
    return { data };
}


async function getById(id_usuario) {
    const sql = `SELECT u.nombre_apellidos as 'NOMBRE Y APELLIDOS', u.nombre_usuario as 'NOMBRE USUARIO', u.correo AS 'CORREO', 
	                c.id_curso AS 'ID CURSO', c.nombre AS 'NOMBRE CURSO', cu.fecha_inscripcion AS 'FECHA INSCRIPCION'
                FROM usuarios u
                JOIN cursos_usuarios cu
                ON u.id_usuario = cu.id_usuario
                JOIN cursos c
                ON cu.id_curso = c.id_curso 
                WHERE u.id_usuario = ?
                ORDER BY cu.id_c_usuario;`;
    const result = await db.query(sql, [id_usuario]);

    if (result && result.length > 0) {
        return result;
    } else {
        return { message: 'Error in retrieving the User' };
    }
}

async function findByEmailOrUsername(emailOrUsername) {
    const query = `
        SELECT * FROM usuarios
        WHERE correo = ? OR nombre_usuario = ?
        LIMIT 1
    `;
    try {
        const result = await db.query(query, [emailOrUsername, emailOrUsername]);

        if (result.length > 0) {
            return result[0]; 
        } else {
            return null; 
        }
    } catch (error) {
        console.error('Error al buscar usuario por correo o nombre de usuario:', error.message);
        throw error;
    }
}

async function verifyAccount(user) {
    try {
        console.log('Verificando cuenta para usuario:', user.id_usuario);

        await db.query(
            `UPDATE usuarios SET is_verified = true WHERE id_usuario = ?`,
            [user.id_usuario]
        );

        return { message: 'Cuenta verificada con éxito. Puedes iniciar sesión ahora.' };
    } catch (error) {
        console.error('Error al verificar la cuenta:', error.message);
        throw new Error('Error del servidor'); // Puedes cambiar este mensaje si es necesario
    }
}



async function create(usuario) {
    const connection = await db.pool.getConnection();
    try {
        await connection.beginTransaction();

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(usuario.contrasena, saltRounds);
        const nombreApellidosMayuscula = usuario.nombre_apellidos.toUpperCase();
        const idTipo = usuario.id_tipo || 103;

        const [result] = await connection.query(
            `INSERT INTO usuarios (id_usuario, nombre_apellidos, nombre_usuario, contrasena, correo, id_tipo) 
            VALUES (null, ?, ?, ?, ?, ?)`,
            [nombreApellidosMayuscula, usuario.nombre_usuario, hashedPassword, usuario.correo, idTipo]
        );

        const userId = result.insertId;

        await connection.query(
            `INSERT INTO cursos_usuarios (id_c_usuario, id_usuario, id_curso) 
            VALUES (null, ?, 201)`,
            [userId]
        );

        await connection.commit();

        const verificationToken = generateVerificationToken(); // Función para generar un token de verificación
        await connection.query(
            `UPDATE usuarios SET verification_token = ? WHERE id_usuario = ?`,
            [verificationToken, userId]
        );

        const verificationLink = `http://localhost:3001/verify-account/${verificationToken}`;
        await sendVerificationEmail(usuario.correo, nombreApellidosMayuscula, verificationLink);

        return {
            message: ' '
        };

    } catch (error) {
        await connection.rollback(); // Revierte la transacción en caso de error
        if (error.code === 'ER_DUP_ENTRY') {
            return { message: 'El nombre de usuario o correo ya está en uso' };
        } else {
            console.error('Error al crear el usuario:', error.message);
            throw error;
        }
    } finally {
        connection.release(); // Libera la conexión
    }
}

function generateVerificationToken() {
    return require('crypto').randomBytes(32).toString('hex');
}

const MAX_ATTEMPTS = 5;
const BLOCK_TIME = 15 * 60 * 1000;
async function login(usuario, req) {
    const ip_address = req.ip || 'desconocido';

    if (!usuario.nombre_usuario) {
        return { mensaje: "El nombre de usuario o correo electrónico es obligatorio." };
    }

    const isEmail = /\S+@\S+\.\S+/.test(usuario.nombre_usuario);
    const query = isEmail
        ? `SELECT * FROM usuarios WHERE correo = ?`
        : `SELECT * FROM usuarios WHERE nombre_usuario = ?`;

    try {
        const userResult = await db.query(query, [usuario.nombre_usuario]);

        if (!userResult || userResult.length === 0) {
            return { mensaje: "No se pudo encontrar el usuario." };
        }

        const dbUser = userResult[0];
        if (!dbUser.is_verified) {
            return { mensaje: "Por favor, activa tu cuenta desde tu correo electrónico para continuar." };
        }

        const attempts = await getRecentAttempts(dbUser.id_usuario, ip_address);
        if (attempts >= MAX_ATTEMPTS) {
            return { mensaje: "Demasiados intentos fallidos. Intente nuevamente más tarde." };
        }

        if (!dbUser.contrasena) {
            return { mensaje: "La contraseña no puede estar vacía." };
        }

        const esPasswordValido = await bcrypt.compare(usuario.contrasena, dbUser.contrasena);
        if (!esPasswordValido) {
            await logAttempt(dbUser.id_usuario, ip_address, false);
            return { mensaje: "Usuario o Contraseña incorrecto" };
        }

        const token = jwt.sign(
            { id_usuario: dbUser.id_usuario, nombre_usuario: dbUser.nombre_usuario, id_tipo: dbUser.id_tipo },
            config.jwtSecret
        );

        await logAttempt(dbUser.id_usuario, ip_address, true);

        return {
            token,
            usuario: { nombre_usuario: dbUser.nombre_usuario, is_verified: dbUser.is_verified }
        };

    } catch (error) {
        console.error('Error en login:', error.message);
        throw new Error('Error en el proceso de inicio de sesión.');
    }
}



async function logAttempt(id_usuario, ip_address, intento_exitoso) {
    try {
        await db.query(
            `INSERT INTO intentos_login (id_usuario, ip_address, exito, timestamp) 
                    VALUES (?, ?, ?, NOW())`,
            [id_usuario, ip_address, intento_exitoso]
        );
    } catch (error) {
        console.error('Error al registrar el intento de inicio de sesión:', error.message);
    }
}

async function getRecentAttempts(id_usuario, ip_address) {
    try {
        const result = await db.query(
            `SELECT COUNT(*) AS attempts 
                     FROM intentos_login 
                     WHERE id_usuario = ? 
                     AND ip_address = ? 
                     AND exito = FALSE 
                     AND timestamp > DATE_SUB(NOW(), INTERVAL 45 MINUTE)`,
            [id_usuario, ip_address]
        );

        const rows = result;
        if (!rows || rows.length === 0) {
            return 0;
        }

        return rows[0].attempts || 0;
    } catch (error) {
        console.error('Error al obtener intentos recientes:', error.message);
        return 0;
    }
}


async function update(id_usuario, usuario, userType) {
    try {
        if (userType !== 101) {
            return { message: 'No tienes permiso para realizar esta acción' };
        }

        // Construir el conjunto de columnas para actualizar
        const updates = [];
        const params = [];

        // Añadir los campos a actualizar
        if (usuario.id_usuario) {
            updates.push('id_usuario = ?');
            params.push(usuario.id_usuario);
        }
        if (usuario.nombre_apellidos) {
            updates.push('nombre_apellidos = ?');
            params.push(usuario.nombre_apellidos);
        }
        if (usuario.nombre_usuario) {
            updates.push('nombre_usuario = ?');
            params.push(usuario.nombre_usuario);
        }
        if (usuario.contrasena) {
            // Si se proporciona una nueva contraseña, hashearla
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(usuario.contrasena, saltRounds);
            updates.push('contrasena = ?');
            params.push(hashedPassword);
        }
        if (usuario.correo) {
            updates.push('correo = ?');
            params.push(usuario.correo);
        }
        if (usuario.id_tipo) {
            updates.push('id_tipo = ?');
            params.push(usuario.id_tipo);
        }

        // Comprobar si hay algo para actualizar
        if (updates.length === 0) {
            return { message: 'No hay campos para actualizar' };
        }

        // Añadir la condición para actualizar el usuario específico
        params.push(id_usuario);
        const sql = `UPDATE usuarios SET ${updates.join(', ')} WHERE id_usuario = ?`;

        const result = await db.query(sql, params);

        if (result.affectedRows === 0) {
            return { message: 'Usuario no encontrado' };
        }

        return {
            message: 'Usuario actualizado exitosamente'
        };

    } catch (error) {
        if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.code === 'ER_ROW_IS_REFERENCED_2') {
            return { message: 'Error: No se puede crear o actualizar el registro debido a una restricción de clave foránea.' };
        } else {
            console.error('Error al actualizar el Usuario:', error.message);
            throw error;
        }
    }
}

async function remove(id_usuario, userType) {
    try {
        // Verificar si el usuario tiene permisos para eliminar
        if (userType !== 101) {
            return { message: 'No tienes permiso para eliminar usuarios' };
        }

        // Ejecutar la consulta de eliminación del usuario
        const result = await db.query(
            `DELETE FROM usuarios WHERE id_usuario = ?`,
            [id_usuario]
        );

        let message = 'Error al eliminar el usuario';

        // Verificar si se eliminó alguna fila
        if (result.affectedRows > 0) {
            message = 'Usuario eliminado exitosamente';
        }

        return { message };

    } catch (error) {
        // Verificar si el error es una violación de restricción de clave foránea
        if (error.code === 'ER_ROW_IS_REFERENCED_2') {
            return { message: 'No se puede eliminar el usuario por restriccion de clave foranea.' };
        } else {
            console.error('Error al eliminar el usuario:', error.message);
            throw error;
        }
    }
}

async function generateResetToken(email) {
    try {
        // Buscar el usuario por correo
        const userResult = await db.query(`SELECT * FROM usuarios WHERE correo = ?`, [email]);

        if (userResult.length === 0) {
            return { message: 'Usuario no encontrado' };
        }

        const user = userResult[0];

        // Generar un token aleatorio
        const resetToken = crypto.randomBytes(32).toString('hex');
        const tokenExpiry = new Date(Date.now() + 3600000); // Token válido por 1 hora

        // Guardar el token y la fecha de expiración en la base de datos
        await db.query(
            `UPDATE usuarios SET reset_token = ?, reset_token_expiry = ? WHERE id_usuario = ?`,
            [resetToken, tokenExpiry, user.id_usuario]
        );

        // Enviar un correo al usuario con el token
        const resetLink = `http://localhost:3001/reset-password/${resetToken}`;
        await sendResetPasswordEmail(user.correo, resetLink);

        return { message: 'Correo de restablecimiento enviado' };
    } catch (error) {
        console.error('Error al generar el token de restablecimiento:', error.message);
        throw error;
    }
}

async function resetPassword(userId, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await db.query(
            `UPDATE usuarios SET contrasena = ?, reset_token = NULL, reset_token_expiry = NULL WHERE id_usuario = ?`,
            [hashedPassword, userId]
        );

        return { message: 'Contraseña actualizada exitosamente' };
    } catch (error) {
        console.error('Error al restablecer la contraseña:', error.message);
        throw new Error('Error del servidor');
    }
}

module.exports = {
    getMultiple,
    getAll,
    getById,
    verifyAccount,
    findByEmailOrUsername,
    create,
    update,
    remove,
    login,
    generateResetToken,
    resetPassword
}