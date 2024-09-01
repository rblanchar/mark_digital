const express = require('express');
const router = express.Router();
const curso = require('../Services/cursos');
const verificarToken = require('../Services/authMiddleware');

router.get('/', verificarToken, async function (req, res, next) {
  if (req.userType === 103) {
    return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
}
  try {
    res.json(await curso.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Courses `, err.message);
    next(err);
  }
});

router.get('/all', verificarToken, async function(req, res, next) {
  try {
      const result = await curso.getAll(req.userType);

      if (result.error) {
          return res.status(403).json({ error: result.error });
      }

      res.json(result);
  } catch (err) {
      console.error(`Error while getting Courses`, err.message);
      next(err);
  }
});

router.get('/:id',verificarToken,  async function (req, res, next) {
  if (req.userType === 103) {
    return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
}
  try {
    const { id } = req.params;
    const result = await curso.getById(id);
    res.json(result);
  } catch (err) {
    console.error(`Error while getting Courses by id`, err.message);
    next(err);
  }
});

router.post('/', verificarToken, async function (req, res, next) {
  if (req.userType === 103) {
    return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
}
  try {
    const userType = req.userType;
    const result = await curso.create(req.body, userType);

    if (result.message === 'El nombre del Curso ya está en uso') {
      return res.status(400).json(result);
    }

    res.json(result);
  } catch (err) {
    console.error(`Error while creating Courses`, err.message);
    next(err);
  }
});


router.put('/:id', verificarToken, async function (req, res, next) {
  if (req.userType === 103) {
    return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
}
  const { id } = req.params;
  const usuarioData = req.body;
  const userType = req.userType;

  try {
    const result = await curso.update(id, usuarioData, userType);
    if (result.message === 'Not found Course') {
      return res.status(404).json(result);
    }
    res.json(result);
  } catch (err) {
    console.error(`Error while updating Courses`, err.message);
    next(err);
  }
});


router.delete('/:id', verificarToken, async function (req, res, next) {
  if (req.userType === 103) {
    return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
}
  try {
    const { id } = req.params;
    const userType = req.userType;

    const result = await curso.remove(id, userType);
    res.json(result);
  } catch (err) {
    console.error(`Error while deleting Course`, err.message);
    next(err);
  }
});



module.exports = router;