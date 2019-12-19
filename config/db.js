// Cargamos las variables de entorno
require('dotenv').config({path: 'vars.env'});
const Sequelize = require('sequelize');

// Cargamos las variables de entorno
const DATABASE = process.env.DB_NAME;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;

const db = new Sequelize(DATABASE, USER, PASS, {
    dialect: 'mariadb',
    host: HOST,
    port: PORT,
    define: {
        timestamps: false
    },
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;
