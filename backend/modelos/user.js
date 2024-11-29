// backend/modelos/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../conexiones/db'); // Importa la conexión

// Definir el modelo de Usuario
const User = sequelize.define('User', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'powerreps', // Cambia el nombre de la tabla a 'powerreps'
    timestamps: true // Si quieres que se gestionen automáticamente las fechas de creación y actualización
});

module.exports = User;
