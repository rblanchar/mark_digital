const bcrypt = require('bcrypt'); // Importar bcrypt
const db = require('../Services/db'); // Asegúrate de importar el módulo de conexión a la base de datos

async function verificarResetToken(req, res, next) {
    const { token } = req.body; // Token en el cuerpo de la solicitud

    try {
        // Buscar el usuario por el token y verificar que no haya expirado
        const userResult = await db.query(
            `SELECT * FROM usuarios WHERE reset_token = ? AND reset_token_expiry > NOW()`, 
            [token]
        );
        console.log(userResult);
        if (userResult.length === 0) {
            return res.status(401).json({ error: "Token inválido o expirado" });
        }

        req.user = userResult[0]; // Pasamos el usuario al siguiente middleware o controlador
        next();
    } catch (error) {
        console.error('Error al verificar el token de restablecimiento:', error.message);
        res.status(500).json({ error: "Error del servidor" });
    }
}

module.exports = verificarResetToken;
