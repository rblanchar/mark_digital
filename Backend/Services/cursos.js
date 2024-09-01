const { getOffset, emptyOrRows } = require('../helper');
const db = require('./db');
const config = require('../config');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getMultiple(page = 1, listPerPage = 10) {
    const offset = getOffset(page, listPerPage);

    const rows = await db.query(
        `SELECT * FROM cursos ORDER BY id_curso DESC LIMIT ${listPerPage} OFFSET ${offset}`
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

    const rows = await db.query('SELECT * FROM cursos ORDER BY id_curso DESC');
    const data = emptyOrRows(rows);
    return { data };
}


async function getById(id_curso) {
    const sql = `SELECT * FROM cursos WHERE id_curso = ?`;
    const result = await db.query(sql, [id_curso]);

    if (result && result.length > 0) {
        return result[0];
    } else {
        return { message: 'Error in retrieving the Course' };
    }
}


async function create(curso, userType) {
    try {
        if (userType !== 101) {
            return { message: 'No tienes permiso para crear Cursos' };
        }

        const result = await db.query(
            `INSERT INTO cursos (id_curso, nombre, valor) 
      VALUES (null, ?, ?)`,
            [curso.nombre, curso.valor]
        );

        return {
            message: 'Curso creado exitosamente',
            // insertId: result.insertId // Descomentar para mostrar el ID insertado
        };
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return { message: 'El nombre del Curso ya está en uso' };
        } else {
            console.error('Error al crear el Curso:', error.message);
            throw error;
        }
    }
}


async function update(id_curso, curso, userType) {
    try {
        if (userType !== 101) {
            return { message: 'No tienes permiso para realizar esta acción' };
        }

        // Construir el conjunto de columnas para actualizar
        const updates = [];
        const params = [];

        // Añadir los campos a actualizar
        if (curso.id_curso) {
            updates.push('id_curso = ?');
            params.push(curso.id_curso);
        }
        if (curso.nombre) {
            updates.push('nombre = ?');
            params.push(curso.nombre);
        }
        if (curso.valor) {
            updates.push('valor = ?');
            params.push(curso.valor);
        }

        // Comprobar si hay algo para actualizar
        if (updates.length === 0) {
            return { message: 'No hay campos para actualizar' };
        }

        // Añadir la condición para actualizar el usuario específico
        params.push(id_curso);
        const sql = `UPDATE cursos SET ${updates.join(', ')} WHERE id_curso = ?`;

        const result = await db.query(sql, params);

        if (result.affectedRows === 0) {
            return { message: 'Curso no encontrado' };
        }

        return {
            message: 'Curso actualizado exitosamente'
        };

    } catch (error) {
        console.error('Error al actualizar el Curso:', error.message);
        throw error;
    }
}

async function remove(id_curso, userType) {
    try {
        if (userType !== 101) {
            return { message: 'No tienes permiso para eliminar Cursos' };
        }

        // Ejecutar la consulta de eliminación
        const result = await db.query(
            `DELETE FROM cursos WHERE id_curso = ?`,
            [id_curso]
        );

        let message = 'Error al eliminar el Curso';

        // Verificar si se eliminó alguna fila
        if (result.affectedRows > 0) {
            message = 'Curso eliminado exitosamente';
        }

        return { message };

    } catch (error) {
        console.error('Error al eliminar el Curso:', error.message);
        throw error;
    }
}



module.exports = {
    getMultiple,
    getAll,
    getById,
    create,
    update,
    remove
}