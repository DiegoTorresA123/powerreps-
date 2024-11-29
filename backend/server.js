const express = require('express');
const app = express();
const port = 3307;

// Middleware para manejar JSON en las solicitudes
app.use(express.json());

// Simular una lista de productos
const productos = [
  { id: 1, nombre: 'Mancuerna 10kg', precio: 50 },
  { id: 2, nombre: 'Banda de resistencia', precio: 15 },
  { id: 3, nombre: 'Colchoneta para yoga', precio: 25 },
];

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola, PowerReps Backend!');
});

// Ruta para obtener todos los productos
app.get('/api/products', (req, res) => {
  res.json(productos);
});

// Ruta para obtener un producto por su ID
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((p) => p.id === id);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Ruta para agregar un nuevo producto
app.post('/api/products', (req, res) => {
  const nuevoProducto = req.body;
  nuevoProducto.id = productos.length + 1;
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// Ruta para actualizar un producto por su ID
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex((p) => p.id === id);

  if (index !== -1) {
    productos[index] = { id, ...req.body };
    res.json(productos[index]);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Ruta para eliminar un producto por su ID
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex((p) => p.id === id);

  if (index !== -1) {
    const eliminado = productos.splice(index, 1);
    res.json(eliminado);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
