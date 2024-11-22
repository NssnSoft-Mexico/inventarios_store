const express = require("express");
const authRoutes = require('../dataConections/conectServices');
const router = express.Router();

//Endopoint catPerfil
router.get('/catP', async(req, res) => {
    try{
        const result = await authRoutes.query('SELECT id, perfil FROM perfiles');

        if(result.rows.length === 0) {
            return res.status(400).json({ message: "Error al consultar el catalogo" });
        }

        return res.json({
            success: true,
            data: result.rows
        });

    } catch (Error) {
        res.status(500).json({ message: 'Error del servidor'});
    }
});

module.exports = router;