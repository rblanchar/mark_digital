const { getOffset, emptyOrRows } = require('../helper');
const db = require('./db');
const config = require('../config');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getMultiple(page = 1, listPerPage = 10) {
  const offset = getOffset(page, listPerPage);

  const rows = await db.query(
    `SELECT * FROM tipo_usuarios ORDER BY id_tipo DESC LIMIT ${listPerPage} OFFSET ${offset}`
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

  const rows = await db.query('SELECT * FROM tipo_usuarios ORDER BY id_tipo DESC');
  const data = emptyOrRows(rows);
  return { data };
}


async function getById(id_usuario) {
  const sql = `SELECT * FROM tipo_usuarios WHERE id_usuario = ?`;
  const result = await db.query(sql, [id_usuario]);

  if (result && result.length > 0) {
    return result[0];
  } else {
    return { message: 'Error in retrieving the User' };
  }
}


async function create(tipo_usuario, userType) {
  try {
    if (userType !== 101) {
      return { message: 'No tienes permiso para crear tipos de usuarios' };
    }

    const result = await db.query(
      `INSERT INTO tipo_usuarios (id_tipo, descripcion) 
      VALUES (null, ?)`,
      [tipo_usuario.descripcion]
    );

    return {
      message: 'Tipo de Usuario creado exitosamente',
      // insertId: result.insertId // Descomentar para mostrar el ID insertado
    };
  } catch (error) {
    console.error('Error al crear el tipo de usuario:', error.message);
    throw error;
  }
}


async function update(id_tipo, tipo_usuario, userType) {
  try {
    if (userType !== 101) {
      return { message: 'No tienes permiso para realizar esta acción' };
    }

    // Construir el conjunto de columnas para actualizar
    const updates = [];
    const params = [];

    // Añadir los campos a actualizar
    if (tipo_usuario.descripcion) {
      updates.push('descripcion = ?');
      params.push(tipo_usuario.descripcion);
    }

    // Comprobar si hay algo para actualizar
    if (updates.length === 0) {
      return { message: 'No hay campos para actualizar' };
    }

    // Añadir la condición para actualizar el usuario específico
    params.push(id_tipo);
    const sql = `UPDATE tipo_usuarios SET ${updates.join(', ')} WHERE id_tipo = ?`;

    const result = await db.query(sql, params);

    if (result.affectedRows === 0) {
      return { message: 'Tipo de Usuario no encontrado' };
    }

    return {
      message: 'Tipo de Usuario actualizado exitosamente'
    };

  } catch (error) {
    console.error('Error al actualizar el Tipo de usuario:', error.message);
    throw error;
  }
}

async function remove(id_tipo, userType) {
  try {
    if (userType !== 101) {
      return { message: 'No tienes permiso para eliminar tipo_usuarios' };
    }

    // Ejecutar la consulta de eliminación
    const result = await db.query(
      `DELETE FROM tipo_usuarios WHERE id_tipo = ?`,
      [id_tipo]
    );

    let message = 'Error al eliminar el Tipo de Usuario';

    // Verificar si se eliminó alguna fila
    if (result.affectedRows > 0) {
      message = 'Tipo de Usuario eliminado exitosamente';
    }

    return { message };

  } catch (error) {
    console.error('Error al eliminar el Tipo de Usuario:', error.message);
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