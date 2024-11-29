// Función para cargar productos desde la API
async function cargarProductos() {
    try {
        const response = await fetch('http://localhost:3307/api/products'); // Cambia el puerto si es necesario
        const productos = await response.json();

        mostrarProductos(productos);
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

// Mostrar productos en la página
function mostrarProductos(productos) {
    const contenedorProductos = document.querySelector(".productos .box-container");
    contenedorProductos.innerHTML = ''; // Limpiar productos previos

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("box");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="productos-txt">
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}</p>
                <a href="#" class="agregar-carrito" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</a>
            </div>
        `;
        contenedorProductos.appendChild(div);
    });
}

// Función para agregar productos al carrito (aquí solo como ejemplo, lo ideal es usar localStorage o backend)
function agregarAlCarrito(idProducto) {
    alert(`Producto ${idProducto} agregado al carrito.`);
    // Aquí podrías guardar el producto en el localStorage o enviarlo al backend
}

// Filtrar productos por categoría
function filtrarPorCategoria(categoria) {
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    mostrarProductos(productosFiltrados);
}

// Navegación suave entre secciones
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Cargar productos al cargar la página
document.addEventListener('DOMContentLoaded', cargarProductos);

// Funcionalidad del menú hamburguesa
const menuCheckbox = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

menuCheckbox.addEventListener('change', () => {
    navbar.style.display = menuCheckbox.checked ? 'flex' : 'none';
});
