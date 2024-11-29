<?php
$servidor = "localhost";
$usuario = "root";
$contraseña = "";  // Si no tienes contraseña, déjalo vacío
$base_datos = "powerreps";  // Cambia esto por el nombre de tu base de datos

// Crear la conexión
$conexion = mysqli_connect($servidor, $usuario, $contraseña, $base_datos);

// Comprobar si la conexión fue exitosa
if (!$conexion) {
    die("Conexión fallida: " . mysqli_connect_error());
}
?>
