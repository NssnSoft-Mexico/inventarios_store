const express = require("express");
const { Pool } = require('pg');

// Crear un nuevo router de Express
const router = express.Router();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = pool;