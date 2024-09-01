const { getOffset, emptyOrRows } = require('../helper');
const db = require('./db');
const config = require('../config');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getMultiple(page = 1, listPerPage = 10) {
    const offset = getOffset(page, listPerPage);

    const rows = await db.query(
        `SELECT * FROM intentos_login ORDER BY id_intento DESC LIMIT ${listPerPage} OFFSET ${offset}`
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
    const rows = await db.query(`SELECT il.id_intento, il.id_usuario, u.nombre_apellidos, u.nombre_usuario, u.correo, il.ip_address, il.timestamp, il.exito
                                FROM intentos_login il
                                JOIN usuarios u
                                ON il.id_usuario = u.id_usuario
                                ORDER BY il.id_intento DESC`);
    const data = emptyOrRows(rows);
    return { data };
}



async function remove(id_intento) {
    try {
        // Ejecutar la consulta de eliminación
        const result = await db.query(
            `DELETE FROM intentos_login WHERE id_intento = ?`,
            [id_intento]
        );

        let message = 'Error al eliminar el Intento_login';

        // Verificar si se eliminó alguna fila
        if (result.affectedRows > 0) {
            message = 'Intento_login eliminado exitosamente';
        }

        return { message };

    } catch (error) {
        console.error('Error al eliminar el Intento_login:', error.message);
        throw error;
    }
}

async function removeUnSuccessfully() {
    try {

        await db.query(`SET SQL_SAFE_UPDATES = 0;`);
        const result = await db.query(`DELETE FROM intentos_login WHERE exito = 0;`);
        await db.query(`SET SQL_SAFE_UPDATES = 1;`);

        let message = 'Error al eliminar el Login UnSuccessfully';

        if (result.affectedRows > 0) {
            message = 'UnSuccessfully Login eliminado exitosamente';
        }

        return { message };

    } catch (error) {
        console.error('Error al eliminar el Login UnSuccessfully:', error.message);

        try {
            await db.query(`SET SQL_SAFE_UPDATES = 1;`);
        } catch (innerError) {
            console.error('Error al reactivar SQL_SAFE_UPDATES:', innerError.message);
        }

        throw error;
    }
}


module.exports = {
    getMultiple,
    getAll,
    remove,
    removeUnSuccessfully
}