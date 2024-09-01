const jwt = require('jsonwebtoken');
const config = require('../config');

function verificarToken(req, res, next) {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ error: "Acceso denegado" });
    }

    try {
        const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;
        const payload_decoded = jwt.verify(tokenWithoutBearer, config.jwtSecret);

        req.userId = payload_decoded.id_usuario;
        req.userName = payload_decoded.nombre_usuario;
        req.userType = payload_decoded.id_tipo || 0; // Default a 0 si no está presente

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ error: "Token expiró", expiroEn: error.expiredAt });
        } else {
            res.status(401).json({ error: "Token no válido" });
        }
    }
}

module.exports = verificarToken;
