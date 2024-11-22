const express = require("express");
const authRoutes = require('../dataConections/conectServices');
const router = express.Router();

//Endpoint consulta de usuarios
router.get('/users', async(req, res) => {
    try {

        const result = await authRoutes.query('SELECT nombre, correo, p.perfil as perfil, e.descripcion as estatus FROM usuarios us JOIN perfiles p ON us.perfil_id = p.id join estatus e on us.estatus = e.id');

        if(result.rows.length === 0) {
            return res.status(400).json({ message })
        }

        return res.json({
            success: true,
            user: result.rows
        })

    } catch (Error) {
        res.status(500).json({ message: 'Error del servidor'});
    }
});

router.post('/deluser', async(req, res) => {
    try {
         const result = await authRoutes.query('UPDATE usuarios SET estatus = 2 where id = $1', [idUsuario]);
        
         if(result.rows.length === 0){
            return res.status(400).json({message})
         }

         return res.json({
            success: true
         })

    } catch (Error) {
        res.status(500).json({ message: 'Error del servidor'})
    }
});

router.post('/upduser', async(req, res) => {

    try {
        const result = await authRoutes.query('', []);

        if(result.rows.length === 0){
            return res.status(400).json({message})
        }

        return res.json({
            success: true
        })

    } catch (Error) {
        res.status(500).json({ message: 'Error del servidor'})
    }
});

module.exports = router;