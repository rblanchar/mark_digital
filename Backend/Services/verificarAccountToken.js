const db = require('../Services/db'); 

const verificarAccountToken = async (req, res, next) => {
    const { token } = req.params;
    try {
        const [user] = await db.query(
            `SELECT * FROM usuarios WHERE verification_token = ?`,
            [token]
        );

        if (!user) {
            return res.status(400).json({ message: 'Token inválido o expirado' });
        }

        if (user.is_verified) {
            return res.status(400).json({ message: 'Cuenta activada con éxito. Puedes iniciar sesión ahora.' });
        }

        req.user = user; 
        
        next();
    } catch (error) {
        console.error('Error al verificar la cuenta:', error.message);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};



module.exports = verificarAccountToken;
