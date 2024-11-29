<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Conectar a la base de datos
    include('conexionApi.php');  // Incluye tu archivo de conexión

    $correo = $_POST['correo'];
    $direccion = $_POST['direccion'];
    $nombre = $_POST['nombre'];
    $contraseña = $_POST['contrasena'];

    // Encriptar la contraseña
    $hash_contraseña = password_hash($contraseña, PASSWORD_DEFAULT);

    // Guardar el nuevo usuario en la base de datos
    $query = "INSERT INTO clientes (correo, direccion, nombre, contrasena) 
              VALUES ('$correo', '$direccion', '$nombre', '$hash_contraseña')";
    if (mysqli_query($conexion, $query)) {
        echo "Usuario registrado con éxito";
    } else {
        echo "Error al registrar: " . mysqli_error($conexion);
    }
}
?>

<form method="POST" action="register.php">
    <input type="text" name="nombre" placeholder="Nombre">
    <input type="email" name="correo" placeholder="Correo">
    <input type="text" name="direccion" placeholder="Dirección">
    <input type="password" name="contrasena" placeholder="Contraseña">
    <button type="submit">Registrar</button>
</form>
