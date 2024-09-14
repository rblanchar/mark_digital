const bcrypt = require('bcrypt'); // Importar bcrypt
const db = require('../Services/db'); 

async function verificarResetToken(req, res, next) {
    const { token } = req.body;

    try {
        const userResult = await db.query(
            `SELECT * FROM usuarios WHERE reset_token = ? AND reset_token_expiry > NOW()`, 
            [token]
        );
        if (userResult.length === 0) {
            return res.status(401).json({ error: "Token inválido o expirado" });
        }

        req.user = userResult[0]; 
        next();
    } catch (error) {
        console.error('Error al verificar el token de restablecimiento:', error.message);
        res.status(500).json({ error: "Error del servidor" });
    }
}

module.exports = verificarResetToken;
