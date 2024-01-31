<?php
// Conectar a la base de datos
$servername = "localhost";
$username = "sara";
$password = "1062275223";
$dbname = "melodies_perfect";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexin
if ($conn->connect_error) {
    die("Error de conexion a la base de datos: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $primer_nombre = $_POST['nombre'];
    $apellido = $_POST['Apellido'];
    $gmail = $_POST['email'];
    $tipo_id = $_POST['ID'];
    $numero_id = $_POST['NumID'];
    $numero_celular = $_POST['telefono'];
    $contrasena = password_hash($_POST['pass'], PASSWORD_DEFAULT); // Almacenar la contraseña de manera segura

    // Insertar datos en la tabla de usuarios
    $sql = "INSERT INTO usuarios (primer_nombre, apellido, gmail, tipo_id, numero_id, numero_celular, contrasena)
            VALUES (?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("sssssss", $primer_nombre, $apellido, $gmail, $tipo_id, $numero_id, $numero_celular, $contrasena);

        if ($stmt->execute()) {
            echo "Usuario registrado exitosamente";
            header("Location: Primera interfaz.php"); // Redirigir a la primera interfaz después del registro
            exit();
        } else {
            echo "Error al registrar el usuario: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Error en la preparación de la consulta: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Melodies Perfect - Registro</title>
    <link rel="stylesheet" href="inicio gmail.css" />
</head>
<body>
    <div id="container">
        <h1>&bull; Melodies Perfect - Gmail &bull;</h1>
        <div class="underline"></div>

        <form action="" method="post" id="contact_form">
            <div class="nombre">
                <label for="nombre"></label>
                <input type="text" placeholder="Mi Primer nombre" name="nombre" id="nombre_input" required>
            </div>

            <div class="apellido">
                <label for="apellido"></label>
                <input type="text" placeholder="Mis Apellidos son" name="Apellido" id="apellido_input" required>
            </div>

            <div class="email">
                <label for="email"></label>
                <input type="email" placeholder="Mi Gmail es" name="email" id="email_input" required>
            </div>

            <select type=text placeholder="ID" name="ID" id="ID_input" required>
                <option disabled hidden selected>Tipo de ID</option>
                <option>Cedula de ciudadania</option>
                <option>Documento de extranjero</option>
                <option>Tarjeta de ID</option>
            </select>

            <div class="NumID">
                <label for="NumID"></label>
                <input type="number" placeholder="Numero de ID" name="NumID" id="NumID_input" required>
            </div>

            <div class="telefono">
                <label for="telefono"></label>
                <input type="number" placeholder="Mi numero celular es:" name="telefono" id="telefono_input" required>
            </div>

            <div class="a">
                <label for="a"></label>
                <input type="password" name="pass" placeholder="Contraseña" id="contraseña_input" required>
            </div>

            <div class="submit">
                <input type="submit" value="Registrarme" id="form_button" />
            </div>
        </form>
    </div>
</body>
</html>
