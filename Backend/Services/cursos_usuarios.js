const { getOffset, emptyOrRows } = require('../helper');
const db = require('./db');
const config = require('../config');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getMultiple(page = 1, listPerPage = 10) {
    const offset = getOffset(page, listPerPage);

    const rows = await db.query(
        `SELECT * FROM cursos_usuarios ORDER BY id_c_usuario DESC LIMIT ${listPerPage} OFFSET ${offset}`
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

    const rows = await db.query('SELECT * FROM cursos_usuarios ORDER BY id_c_usuario DESC');
    const data = emptyOrRows(rows);
    return { data };
}

async function getCursosByUsuario(idUsuario) {
    try {
        const result = await db.query(
            `SELECT c.nombre
                FROM cursos c
                JOIN cursos_usuarios cu ON c.id_curso = cu.id_curso
                WHERE cu.id_usuario = ?`,
            [idUsuario]
        );
        return result;
    } catch (error) {
        console.error('Error al obtener los cursos del usuario:', error.message);
        throw error;
    }
}

async function create(curso_usuario, userType) {
    try {
        if (userType !== 101) {
            return { message: 'No tienes permiso para crear Cursos_Usuarios' };
        }

        const result = await db.query(
            `INSERT INTO cursos_usuarios (id_c_usuario, id_usuario, id_curso) 
      VALUES (null, ?, ?)`,
            [curso_usuario.id_usuario, curso_usuario.id_curso]
        );

        return {
            message: 'Curso Asignado exitosamente',
            // insertId: result.insertId // Descomentar para mostrar el ID insertado
        };
    } catch (error) {
        if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.code === 'ER_ROW_IS_REFERENCED_2') {
            return { message: 'Error: No se puede crear o actualizar el registro debido a una restricción de clave foránea.' };
        } else {
            console.error('Error al crear el Curso_Usuario:', error.message);
            throw error;
        }
    }
}


async function update(id_c_usuario, curso_usuario, userType) {
    try {
        if (userType !== 101) {
            return { message: 'No tienes permiso para realizar esta acción' };
        }

        // Construir el conjunto de columnas para actualizar
        const updates = [];
        const params = [];

        // Añadir los campos a actualizar
        if (curso_usuario.id_usuario) {
            updates.push('id_usuario = ?');
            params.push(curso_usuario.id_usuario);
        }
        if (curso_usuario.id_curso) {
            updates.push('id_curso = ?');
            params.push(curso_usuario.id_curso);
        }

        // Comprobar si hay algo para actualizar
        if (updates.length === 0) {
            return { message: 'No hay campos para actualizar' };
        }

        // Añadir la condición para actualizar el usuario específico
        params.push(id_c_usuario);
        const sql = `UPDATE cursos_usuarios SET ${updates.join(', ')} WHERE id_c_usuario = ?`;

        const result = await db.query(sql, params);

        if (result.affectedRows === 0) {
            return { message: 'Curso_Usuario no encontrado' };
        }

        return {
            message: 'Curso_Usuario actualizado exitosamente'
        };

    } catch (error) {
        if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.code === 'ER_ROW_IS_REFERENCED_2') {
            return { message: 'Error: No se puede crear o actualizar el registro debido a una restricción de clave foránea.' };
        } else {
            console.error('Error al actualizar el Curso_Usuario:', error.message);
            throw error;
        }
    }
}


async function remove(id_c_usuario) {
    try {
        // Ejecutar la consulta de eliminación
        const result = await db.query(
            `DELETE FROM cursos_usuarios WHERE id_c_usuario = ?`,
            [id_c_usuario]
        );

        let message = 'Error al eliminar el Curso_Usuario';

        // Verificar si se eliminó alguna fila
        if (result.affectedRows > 0) {
            message = 'Curso_Usuario eliminado exitosamente';
        }

        return { message };

    } catch (error) {
        console.error('Error al eliminar el Curso_Usuario:', error.message);
        throw error;
    }
}


module.exports = {
    getMultiple,
    getAll,
    getCursosByUsuario,
    create,
    update,
    remove
}