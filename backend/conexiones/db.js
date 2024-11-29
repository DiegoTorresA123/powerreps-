// backend/conexiones/db.js

const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Cargar las variables de entorno del archivo .env
dotenv.config();

// Crear una nueva instancia de Sequelize para la conexión a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME, 'powerreps',  
  process.env.DB_USER,    'root',
  process.env.DB_PASSWORD,  '',   
  {
    host: process.env.DB_HOST,  // Dirección del host de la base de datos
    dialect: process.env.DB_DIALECT, // El tipo de base de datos (MySQL)
  }
);

// Verificar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
  });

module.exports = sequelize;

