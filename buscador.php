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

// Procesar la búsqueda
if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['busqueda'])) {
    $busqueda = $_GET['busqueda'];

    // Consulta para buscar productos por nombre
    $sql = "SELECT * FROM productos WHERE nombre LIKE '%$busqueda%'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<h2>Resultados de la búsqueda:</h2>";
        while ($row = $result->fetch_assoc()) {
            echo "<div class='producto'>";
            echo "<p>Nombre: " . $row['nombre'] . "</p>";
            echo "<p>Descripción: " . $row['descripcion'] . "</p>";
            echo "<p>Precio: $" . $row['precio'] . "</p>";
            echo "<img src='mostrar_imagen.php?id=" . $row['id'] . "' alt='Imagen del producto'>";
            echo "<button onclick='comprarProducto(" . $row['id'] . ")'>Comprar</button>";
            echo "</div>";
        }
    } else {
        echo "<p>No se encontraron productos.</p>";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Buscador de Productos</title>
    <style>
  
  body {
    font-family: Arial, sans-serif;
    background: url(Imagenes/asistente.jpg);
    background-size: 200vw 200vh;
    background-repeat: no-repeat;
    margin-top: 200px;
    margin-left: 300px;
    margin-right: 300px;
}

h1 {
    text-align: center;
    color: #333;
}

form {
    text-align: center;
    margin-bottom: 20px;
}

#resultados {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.producto {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    width: 200px;
    text-align: center;
}

.boton-comprar {
    display: block;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
}
body {
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    color: #333;
}

form {
    text-align: center;
    margin-bottom: 20px;
}

#resultados {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.producto {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    width: 200px;
    text-align: center;
}

.boton-comprar {
    display: block;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
}

    </style>

</head>
<body>
    <h1>Bienvenido al Buscador de Productos</h1>
    
    <form action="buscador.php" method="GET">
        <label for="busqueda">Buscar Productos:</label>
        <input type="text" name="busqueda" id="busqueda" placeholder="Ingrese el nombre del producto">
        <button type="submit">Buscar</button>
    </form>

    <div id="resultados">
        <!-- Aquí se mostrarán los resultados de la búsqueda -->
    </div>

    <script>
        // La función comprarProducto redirige a comprar.php con el ID del producto
        function comprarProducto(id) {
            window.location.href = "comprar.php?id=" + id;
        }
    </script>
</body>
</html>
