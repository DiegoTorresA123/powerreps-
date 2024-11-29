<?php
session_start();
include('conexionApi.php'); // Asegúrate de incluir tu conexión

// Obtener datos del formulario
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

// Proteger contra SQL Injection
$correo = mysqli_real_escape_string($conexion, $correo);
$contrasena = mysqli_real_escape_string($conexion, $contrasena);

// Consultar en la base de datos
$query = "SELECT * FROM clientes WHERE correo = '$correo' AND contrasena = '$contrasena'";
$resultado = mysqli_query($conexion, $query);

// Verificar si el usuario existe
if (mysqli_num_rows($resultado) == 1) {
    // El usuario existe, iniciar sesión
    $_SESSION['usuario'] = $correo; // Guardar en sesión
    header("Location: index.php"); // Redirigir a la página principal
} else {
    // Usuario no encontrado
    echo "Correo o contraseña incorrectos.";
}

mysqli_close($conexion); // Cerrar la conexión
?>
