const express = require('express');
const router = express.Router();
const tipoUsuario = require('../Services/tipo_usuarios');
const verificarToken = require('../Services/authMiddleware');

router.get('/', /* verificarToken, */ async function (req, res, next) {
  try {
    res.json(await tipoUsuario.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting tipoUsuario `, err.message);
    next(err);
  }
});

router.get('/all', verificarToken, async function(req, res, next) {
  try {
      const result = await tipoUsuario.getAll(req.userType);

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
  if (req.userType === 103) {
    return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
}
  try {
    const { id } = req.params;
    const result = await tipoUsuario.getById(id);
    res.json(result);
  } catch (err) {
    console.error(`Error while getting tipoUsuario by id`, err.message);
    next(err);
  }
});

router.post('/', verificarToken, async function (req, res, next) {
  try {
    const userType = req.userType;
    const result = await tipoUsuario.create(req.body, userType);

    if (result.message === 'El nombre de tipoUsuario ya está en uso') {
      return res.status(400).json(result);
    }

    res.json(result);
  } catch (err) {
    console.error(`Error while creating tipoUsuario`, err.message);
    next(err);
  }
});



router.put('/:id', verificarToken, async function (req, res, next) {
  const { id } = req.params;
  const usuarioData = req.body;
  const userType = req.userType;

  try {
    const result = await tipoUsuario.update(id, usuarioData, userType);
    if (result.message === 'Error while updating tipoUsuario') {
      return res.status(404).json(result);
    }
    res.json(result);
  } catch (err) {
    console.error(`Error while updating tipoUsuario`, err.message);
    next(err);
  }
});


router.delete('/:id', verificarToken, async function (req, res, next) {
  try {
    const { id } = req.params;
    const userType = req.userType;

    const result = await tipoUsuario.remove(id, userType);
    res.json(result);
  } catch (err) {
    console.error(`Error while deleting tipoUsuario`, err.message);
    next(err);
  }
});



module.exports = router;