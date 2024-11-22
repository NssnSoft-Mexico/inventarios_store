const express = require('express');
require('dotenv').config(); // Cargar variables de entorno
const authRoutes = require('./endpoint/loginServices'); // Importar las rutas de autenticación
const pServices = require('./endpoint/permisosServices');
const sServices = require('./endpoint/settingsServices');
const cServices = require('./endpoint/catServices');
const cors = require('cors'); // Importar el paquete cors
const app = express();

app.use(express.json()); // Middleware para analizar el JSON en las peticiones
app.use(cors());
app.use('/auth', authRoutes);
app.use('/permisos', pServices);
app.use('/settings', sServices);
app.use('/catalogos', cServices);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');
});