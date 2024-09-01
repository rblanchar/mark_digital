const express = require('express');
const router = express.Router();
const intento_login = require('../Services/intentos_login');
const verificarToken = require('../Services/authMiddleware');

router.get('/', verificarToken, async function (req, res, next) {
    if (req.userType !== 101) {
        return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
    }
    try {
        res.json(await intento_login.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting login attempt`, err.message);
        next(err);
    }
});

router.get('/all', verificarToken, async function (req, res, next) {
    try {
        const result = await intento_login.getAll(req.userType);

        if (result.error) {
            return res.status(403).json({ error: result.error });
        }

        res.json(result);
    } catch (err) {
        console.error(`Error while getting login attempt`, err.message);
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

        const result = await intento_login.remove(id, userType);
        res.json(result);
    } catch (err) {
        console.error(`Error while deleting login attempt`, err.message);
        next(err);
    }
});

router.delete('/unsuccessfully/all', verificarToken, async function (req, res, next) {
    if (req.userType !== 101) {
        return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
    }
    try {
        const result = await intento_login.removeUnSuccessfully();
        res.json(result);
    } catch (err) {
        console.error(`Error while deleting unsuccessful login attempts`, err.message);
        next(err);
    }
});


module.exports = router;