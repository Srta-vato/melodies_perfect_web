<?php
// Conectar a la base de datos
$servername = "localhost";
$username = "sara";
$password = "1062275223";
$dbname = "melodies_perfect";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Recibir datos del formulario
$gmail = $_POST['email'];
$contrasena = $_POST['pass'];

// Validar usuario
$sql = "SELECT * FROM usuarios WHERE gmail = '$gmail'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($contrasena, $row['contrasena'])) {
        // La contraseña es correcta, puedes redirigir al usuario a la primera interfaz
        header("Location: Primera interfaz.php");
        exit();
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "Usuario no encontrado";
}

// Cerrar la conexión
$conn->close();
?>
<html>

<!doctype html>

<head>
    <meta charset="utf-8">
    <title>Inicio de sesion</title>
    <link rel="stylesheet" href="inicio gmail.css" />
</head>


<body>

    <div id="container">
        <h1>&bull; Melodies Perfect - Ingresar &bull;</h1>
        <div class="underline"></div>


        <form action="#" method="post" id="contact_form">


            <div class="nombre">
                <label for="nombre"></label>
                <input type="text" placeholder="Usuario" name="nombre" id="nombre_input" required>
            </div>


            <div class="a">
                <label for="a"></label>
                <input type="password" name="pass" placeholder="Contraseña" id="contraseña_input" required>
            </div>


            <div class="submit">
                <input type="submit" value="Ingresar" id="form_button" onclick="red()" />



                <script>
                    function red() {
                        location.href = "Primera interfaz.html";
                    }
                </script>
            </div>
        </form>
    </div>
</body>

</html>