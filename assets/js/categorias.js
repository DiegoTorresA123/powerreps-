// categorias.js

// Lista de categorías disponibles
const categorias = ['Mancuernas', 'Accesorios', 'Ejercicio', 'Ropa Fitness'];

// Función para generar botones de categorías
function generarCategorias() {
    const contenedorCategorias = document.querySelector(".categorias");
    categorias.forEach(categoria => {
        const button = document.createElement("button");
        button.textContent = categoria;
        button.classList.add("categoria-btn");
        button.addEventListener("click", function() {
            filtrarPorCategoria(categoria);
        });
        contenedorCategorias.appendChild(button);
    });
}

// Llamamos a la función para generar los botones cuando se carga la página
document.addEventListener("DOMContentLoaded", function() {
    generarCategorias();
});
