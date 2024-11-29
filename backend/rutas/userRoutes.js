// backend/rutas/userRoutes.js
const express = require('express');
const bcrypt = require('bcrypt'); // Para encriptar contraseñas
const User = require('../modelos/user.js'); // Asegúrate de que esté importando el modelo correcto
const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', async (req, res) => {
    try {
        const { nombre, correo, direccion, contraseña } = req.body;

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10);

        // Crear un nuevo usuario
        const newUser = await User.create({
            nombre,
            correo,
            direccion,
            contraseña: hashedPassword
        });

        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
});

// Ruta para el login
router.post('/login', async (req, res) => {
    try {
        const { correo, contraseña } = req.body;

        // Buscar el usuario por correo
        const user = await User.findOne({ where: { correo } });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Comparar la contraseña ingresada con la almacenada en la base de datos
        const match = await bcrypt.compare(contraseña, user.contraseña);

        if (!match) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        res.status(200).json({ message: 'Login exitoso', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el login' });
    }
});

module.exports = router;
