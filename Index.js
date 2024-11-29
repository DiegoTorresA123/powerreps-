const express = require('express');
const app = express();

const PORT = 3307; // Configurar el puerto 3307

// Middleware básico
app.use(express.json());

// Servir archivos estáticos desde la carpeta "assets"
app.use('/assets', express.static('assets'));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Escuchar en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
