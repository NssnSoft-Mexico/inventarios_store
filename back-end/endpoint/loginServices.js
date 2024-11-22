const express = require("express");
const authRoutes = require('../dataConections/conectServices'); // Importar las rutas de autenticación
const router = express.Router();

//Ruta de registro
router.post('/register', async (req, res) => {

    const {
        nombre,
        correo,
        password,
        perfil_id,
        estatus
    } = req.body;

    try{

        const encryptedPass = Buffer.from(password).toString('base64');

        const result = await authRoutes.query(
            'INSERT INTO usuarios (nombre, correo, password, perfil_id, estatus) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nombre, correo, encryptedPass, perfil_id, estatus]
        );

        const newUser = result.rows[0];

        res.json({
            message: "Usuario registrado",
            user: {
                id: newUser.id,
                nombre: newUser.nombre,
                correo: newUser.correo,
                perfil_id: newUser.perfil_id,
                estatus: newUser.estatus
            }
        });

    }catch(error){
        console.error('Error en el registro: ', error);
        res.status(500).json({error: 'Error en el servidor'});
    }
});

// EndPoint Bitacora
router.post('/bitacora', async(req, res) => {
    const { idPerfil, fecha } = req.body;

    try {
        const result = await authRoutes.query('INSERT INTO bitacora (idPerfil, fecha_movimiento) VALUES ($1, $2) RETURNING *',
            [idPerfil, fecha]
        );

        const newBitacora = result.rows[0];

        res.json({
            message: "Bitacora registrada",
            newBitacora: {
                id: newBitacora.id
            }
        });
    } catch (error) {
        console.error('Error en la Bitacora: ', error);
        res.status(500).json({error: 'Error en el servidor'});
    }
})

// Ruta de login
router.post('/login', async(req, res) => {

    const { username, password } = req.body;

    try{
        const result = await authRoutes.query('SELECT * FROM usuarios WHERE correo = $1', [username]);

        if(result.rows.length  === 0) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        const user = result.rows[0];

        var b = Buffer.from(user.password, 'base64');
        var s = b.toString();

        if(password === s){

            return res.json({
                success: true,
                token: process.env.JWT_SECRET,
                user: {
                    nombre: user.nombre,
                    perfil_id: user.perfil_id
                },
                msg: 'Authentication was succesful'
            });

        } else {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

    } catch (err) {
        res.status(500).json({ message: 'Error del servidor'});
    }
});

module.exports = router;