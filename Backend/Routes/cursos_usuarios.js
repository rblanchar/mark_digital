const express = require('express');
const router = express.Router();
const curso_usuario = require('../Services/cursos_usuarios');
const verificarToken = require('../Services/authMiddleware');

router.get('/', verificarToken, async function (req, res, next) {
  if (req.userType === 103) {
    return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
}
  try {
    res.json(await curso_usuario.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting User_Courses `, err.message);
    next(err);
  }
});


router.get('/all', verificarToken, async function(req, res, next) {
  try {
      const result = await curso_usuario.getAll(req.userType);

      if (result.error) {
          return res.status(403).json({ error: result.error });
      }

      res.json(result);
  } catch (err) {
      console.error(`Error while getting User_Courses`, err.message);
      next(err);
  }
});


router.get('/cursos', verificarToken, async function (req, res, next) {
  try {
      const cursos = await curso_usuario.getCursosByUsuario(req.userId, req.userType);
      res.json(cursos);
  } catch (err) {
      console.error(`Error while getting cursos for user`, err.message);
      next(err);
  }
});


router.post('/', /* verificarToken,  */async function (req, res, next) {

  try {
    const userType = req.userType;
    const result = await curso_usuario.create(req.body, userType);

    res.json(result);
  } catch (err) {
    console.error(`Error while creating User_Courses`, err.message);
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
    const result = await curso_usuario.update(id, usuarioData, userType);
    if (result.message === 'Not found User_Course') {
      return res.status(404).json(result);
    }
    res.json(result);
  } catch (err) {
    console.error(`Error while updating User_Courses`, err.message);
    next(err);
  }
});


router.delete('/:id', verificarToken, async function (req, res, next) {
  if (req.userType !== 101) {
    return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
}
  try {
    const { id } = req.params;
    const userType = req.userType;

    const result = await curso_usuario.remove(id, userType);
    res.json(result);
  } catch (err) {
    console.error(`Error while deleting User_Course`, err.message);
    next(err);
  }
});


module.exports = router;