const bcrypt = require('bcrypt'); // Importar bcrypt
const db = require('../Services/db');
const express = require('express');
const router = express.Router();
const usuario = require('../Services/usuarios');
const verificarToken = require('../Services/authMiddleware');
const verificarResetToken = require('../Services/verificarResetToken');
const verificarAccountToken = require('../Services/verificarAccountToken');


router.get('/', /* verificarToken, */ async function (req, res, next) {
  try {
    res.json(await usuario.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting usuario `, err.message);
    next(err);
  }
});

router.get('/all',/* verificarToken , */ async function (req, res, next) {
  try {
    const result = await usuario.getAll(req.userType);

    if (result.error) {
      return res.status(403).json({ error: result.error });
    }

    res.json(result);
  } catch (err) {
    console.error(`Error while getting usuarios`, err.message);
    next(err);
  }
});

router.get('/:id', verificarToken, async function (req, res, next) {
  try {
      const { id } = req.params;
      const userIdFromToken = req.userId; 

      if (parseInt(id, 10) !== userIdFromToken) {
          return res.status(403).json({ message: 'No tienes permiso para ver esta información' });
      }

      const result = await usuario.getById(id);
      res.json(result);
  } catch (err) {
      console.error(`Error while getting User by id`, err.message);
      next(err);
  }
});



router.post('/', async function (req, res, next) {
  try {
    const result = await usuario.create(req.body);
    if (result.message === 'El nombre de usuario o correo ya está en uso') {
      return res.status(400).json(result);
    }
    res.json(result);
  } catch (err) {
    console.error(`Error while creating usuario`, err.message);
    next(err);
  }
});


router.post('/login', async function (req, res, next) {
  try {
    const result = await usuario.login(req.body, req); 
    res.json(result);
  } catch (err) {
    console.error(`Error while logging in`, err.message);
    next(err);
  }
});


router.put('/:id', verificarToken, async function (req, res, next) {
  const { id } = req.params;
  const usuarioData = req.body;
  const userType = req.userType;

  try {
    const result = await usuario.update(id, usuarioData, userType);
    if (result.message === 'Usuario no encontrado') {
      return res.status(404).json(result);
    }
    res.json(result);
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
});


router.delete('/:id', verificarToken, async function (req, res, next) {
  try {
    const { id } = req.params;
    const userType = req.userType;

    const result = await usuario.remove(id, userType);
    res.json(result);
  } catch (err) {
    console.error(`Error while deleting usuario`, err.message);
    next(err);
  }
});


router.post('/forgot-password', async function (req, res, next) {
  try {
      const result = await usuario.generateResetToken(req.body.email);
      if (result.message === 'Usuario no encontrado') {
          return res.status(404).json(result);
      }
      res.json(result);
  } catch (err) {
      console.error(`Error while generating reset token`, err.message);
      next(err);
  }
});

router.get('/verify-account/:token', verificarAccountToken, async (req, res) => {
  const user = req.user;

  try {
    const result = await usuario.verifyAccount(user);  // Verifica si estás llamando a la función correctamente
    console.log('Resultado de verifyAccount:', result);

    res.json(result);  // Asegúrate de devolver el resultado correctamente
  } catch (error) {
    console.error('Error al verificar la cuenta:', error.message);
    res.status(500).json({ error: 'Error del servidor' });
  }
});



router.post('/reset-password', verificarResetToken, async (req, res) => {
  const { password } = req.body;
  const user = req.user; 

  try {
    const result = await usuario.resetPassword(user.id_usuario, password);
    res.json(result);
  } catch (error) {
    console.error('Error al restablecer la contraseña:', error.message);
    res.status(500).json({ error: 'Error del servidor' });
  }
});



module.exports = router;