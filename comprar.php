<?php
// Conectar a la base de datos
$servername = "localhost";
$username = "sara";
$password = "1062275223";
$dbname = "melodies_perfect";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Obtener el ID del producto seleccionado
if (isset($_GET['id'])) {
    $producto_id = $_GET['id'];

    // Consulta para obtener los detalles del producto
    $sql = "SELECT * FROM productos WHERE id = $producto_id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $producto = $result->fetch_assoc();
    } else {
        echo "<p>Producto no encontrado.</p>";
        exit();
    }
} else {
    echo "<p>ID de producto no proporcionado.</p>";
    exit();
}

// Procesar el formulario de compra
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $info_envio = $_POST['info_envio'];
    $forma_pago = $_POST['forma_pago'];
    $nombre_dueño = $_POST['nombre_dueño'];
    $direccion_envio = $_POST['direccion_envio'];
    $codigo_cvv = $_POST['codigo_cvv'];
    $fecha_vencimiento = $_POST['fecha_vencimiento'];

    // Insertar datos en la tabla de compras
    $sql_insert = "INSERT INTO compras (producto_id, info_envio, forma_pago, nombre_dueño, direccion_envio, codigo_cvv, fecha_vencimiento)
                    VALUES ('$producto_id', '$info_envio', '$forma_pago', '$nombre_dueño', '$direccion_envio', '$codigo_cvv', '$fecha_vencimiento')";

    if ($conn->query($sql_insert) === TRUE) {
        echo "<p>¡Compra realizada con éxito!</p>";
    } else {
        echo "Error al realizar la compra: " . $conn->error;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Comprar Producto</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .container {
            width: 80%;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 8px;
            color: #555;
        }

        input, select {
            padding: 10px;
            margin-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }

        button {
            background-color: #4caf50;
            color: #fff;
            padding: 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 18px;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Comprar Productos</h1>
        <form action="#" method="post">
            <label for="forma_pago">Forma de Pago:</label>
            <select name="forma_pago" id="forma_pago" required>
                <option value="debito">Tarjeta de Débito</option>
                <option value="credito">Tarjeta de Crédito</option>
                <option value="nequi">Nequi</option>
            </select>

            <label for="nombre_dueño">Nombre del Dueño:</label>
            <input type="text" name="nombre_dueño" id="nombre_dueño" required>

            <label for="direccion_envio">Dirección de Envío:</label>
            <input type="text" name="direccion_envio" id="direccion_envio" required>

            <label for="codigo_cvv">Código CVV:</label>
            <input type="text" name="codigo_cvv" id="codigo_cvv" required>

            <label for="fecha_vencimiento">Fecha de Vencimiento:</label>
            <input type="text" name="fecha_vencimiento" id="fecha_vencimiento" required>

            <button type="submit">Realizar Compra</button>
        </form>
    </div>
</body>
</html>

