const express = require('express');
const authRoutes = require('../dataConections/conectServices');
const router = express.Router();

//Valida Permisos del Usuario
router.post('/pauth', async(req, res) => {
    
    const { perfil_id } = req.body;
    console.log("+++++++++ nueva", perfil_id)
    
    try{

        const result = await authRoutes.query('SELECT * FROM perfiles where id = $1', [perfil_id]);
        
        if(result.rows.length  === 0) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        const permisos = result.rows[0];

        return res.json({
            permisos: {
                id: permisos.id,
                perfil_id: permisos.perfil
            }
        });
    
    } catch(error) {
        res.status(500).json({ message: 'Error del servidor'});
    }
})
module.exports = router;