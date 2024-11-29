
// interfaz.js

// Mostrar u ocultar secciones
function mostrarSeccion(idSeccion) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';  // Ocultar todas las secciones
    });

    const seccionVisible = document.getElementById(idSeccion);
    if (seccionVisible) {
        seccionVisible.style.display = 'block';  // Mostrar la sección seleccionada
    }
}

// Configurar el botón de navegación
const btnInicio = document.querySelector('#inicioBtn');
const btnProductos = document.querySelector('#productosBtn');
const btnCategorias = document.querySelector('#categoriasBtn');

btnInicio.addEventListener('click', () => mostrarSeccion('inicio'));
btnProductos.addEventListener('click', () => mostrarSeccion('productos'));
btnCategorias.addEventListener('click', () => mostrarSeccion('categorias'));

// Configurar el formulario de registro
const formulario = document.querySelector('#registroForm');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const datosFormulario = new FormData(formulario);
    const datos = {};
    datosFormulario.forEach((value, key) => {
        datos[key] = value;
    });
    console.log(datos);  // Aquí puedes enviar los datos al servidor o procesarlos
    alert('Formulario enviado');
});

