<?php
session_start();

function cerrarSesion() {
    $_SESSION = array();
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params["path"],
        $params["domain"],
        $params["secure"],
        $params["httponly"]
    );
    session_destroy();
    header("Location: registro.html");
    exit();
}

if (isset($_GET['cerrar_sesion'])) {
    cerrarSesion();
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Bienvenida</title>
    <link rel="stylesheet" href="Primera interfaz.css" />
</head>

<body>

    <header class="header">
        <div class="container">
            <div class="btn-menu">
                <label for="btn-menu">☰</label>
            </div>
            <div class="logo">
                <h1>Servicios</h1>
            </div>
            <nav class="menu">
                <a href="perfil.html">Perfil</a>
                <a href="#ancla 1">Nosotros</a>
                <a href="terminos.html">Terminos...</a>
                <a href="contacto.html">Contacto</a>
                <a href="asistente.html">Ayuda</a>
            </nav>
        </div>
    </header>
    <div class="capa"></div>

    <input type="checkbox" id="btn-menu">
    <div class="container-menu">
        <div class="cont-menu">
            <nav>
                <a href="buscador.php"><img src="Imagenes/buscar (1).png" width="20" height="20" alt="" /> Buscar</a>
                <a href="Percucion.html"><img src="Imagenes/tambor.png" width="20" height="20" alt="" />Percusión</a>
                <a href="viento.html"><img src="Imagenes/flauta.png" width="20" height="20" alt="" />Viento</a>
                <a href="cuerda.html"><img src="Imagenes/guitarra.png" width="20" height="20" alt="" />Cuerda</a>
                <a href="eletronicos.html"><img src="Imagenes/guitarra-electrica.png" width="20" height="20" alt="" />Eletricos</a>
                <a href="solicitud.html"><img src="Imagenes/notepad.png" width="20" height="20" alt="" />Solicitudes</a>
                <a href="pedidos.html"><img src="Imagenes/bolsa-de-la-compra.png" width="20" height="20" alt="" />Mis pedidos</a>
                <li><a href="?cerrar_sesion=true">Cerrar Sesión</a></li>
            </nav>
            <label for="btn-menu">✖️</label>
        </div>
    </div>

    <nav class="menu">
        <ul>
            <li><button id="btnEscuchar">Escuchar</button></li>
            <li><button id="btnDetener">Detener</button></li>
            <li><a href="mapa de navegacion.html">Mapa</a></li>
            <li><a href="chat voz.html">Hablar</a></li>
        </ul>
    </nav>
    <h1 class="hint">.</h1>
    <p class="hint">.</p>

    <section>
        <div class="noticia">
            <a name="ancla 1"><img class="izquierda" src="Imagenes/familia.jpg" width="500" height="500" alt="" /></a>
            <h1>Melodies Perfect - Nuestro origen</h1>
            <p>Todo comenzó en 1960, nuestro fundador en esa época, mi abuelo William Perez, se dedicaba a la fabricación de instrumentos de cuerda y algunos de viento con excelentes técnicas, las cuales fueron enseñadas a mi padre y tíos. Actualmente,
                quien dirige el negocio soy yo, Jose Antonio Perez, quien al igual que mi padre, tiene un gran amor por la música e instrumentos musicales.</p>
            <p>Es así como mantenemos viva a Melodies Perfect y cada año seguimos creciendo gracias a ustedes. Es por eso que se creó esta página, para darnos a conocer en todo Colombia y muy pronto en todo el mundo.</p>
            <div class="reset"></div>
        </div>

        <div class="noticia">
            <img class="derecha" src="Imagenes/trabajos.jpg" width="700" height="500" alt="" />
            <h1>Fabricaciones</h1>
            <p>Nuestra familia está capacitada para crear desde cero guitarras, violines, flautas y otros instrumentos más, al igual que arreglar y dar mantenimiento a otra gran gama de instrumentos. Es cierto que en nuestra tienda vendemos instrumentos de
                otras marcas (muy buenas por cierto), ya que la fabricación de instrumentos lleva tiempo. Preferimos venderlos como instrumentos personalizados. Aunque este servicio aún no está activo en este sitio, esperamos ponerlo a producir en todo
                el país muy pronto.</p>
            <div class="reset"></div>
        </div>

        <div class="noticia">
            <a name="ancla 1"><img class="izquierda" src="Imagenes/alquiler.jpg" width="500" height="500" alt="" /></a>
            <h1>Melodies Perfect - Servicios a Ofrecer</h1>
            <p> Los servicios que ofreceremos por aquí son bastante simples pero muy útiles. Compra de instrumentos musicales: Sabemos lo importante que es para un músico amante de las melodías perfectas producidas en un instrumento de buena calidad, el
                encontrar tu instrumento perfecto. Es por eso que Melodies Perfect ofrece este servicio junto con un gran catálogo para que puedas escoger a tu gusto desde marca hasta color. Alquiler de Productos: sabemos lo costoso que pueden llegar a ser
                algunos productos y lo triste que es simplemente quedarte con las ganas o no poder realizar un evento por no tenerlo. Melodies Perfect pensó en eso, es por eso que en este servicio te prestamos instrumentos de alta gama a un precio accesible,
                solo necesitas ser apto para el servicio y listo. Esperamos seguir creciendo con tu ayuda, muchas gracias de antemano.</p>
            <div class="reset"></div>
        </div>
    </section>

    <script>
        document.getElementById('btnEscuchar').addEventListener('click', function () {
            var contenido = document.querySelector('section').innerText;
            leerContenido(contenido);
        });

        function leerContenido(contenido) {
            if ('speechSynthesis' in window) {
                var utterance = new SpeechSynthesisUtterance(contenido);
                window.speechSynthesis.speak(utterance);
            } else {
                alert('Lo siento, la funcionalidad de Text-to-Speech no es compatible en este navegador.');
            }
        }

        document.getElementById('btnDetener').addEventListener('click', function () {
            window.speechSynthesis.cancel();
        });

    </script>

</body>

<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <h6>Melodies Perfect</h6>
                <p class="text-justify">MelodiesPerfect.com <i>FOOTER </i> Te invitamos a sumergirte en nuestro showroom, donde podrás explorar una amplia gama de instrumentos, desde guitarras y pianos hasta instrumentos de viento y percusión. Nuestro personal experto estará encantado de guiarte a través de nuestras colecciones, respondiendo a todas tus preguntas y ayudándote a encontrar el instrumento perfecto que se adapte a tus necesidades y preferencias.</p>
            </div>


            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by Melodies Perfect
                            <a href="#"> Melodies Perfect</a>.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a class="facebook" href="#"><i class="fa fa-facebook"><img src="Imagenes/facebook.png" width="40" height="40" alt="" /></i></a></li>
                            <li><a class="twitter" href="#"><i class="fa fa-twitter"><img src="Imagenes/gorjeo.png" width="40" height="40" alt="" /></i></a></li>
                            <li><a class="dribbble" href="#"><i class="fa fa-dribbble"><img src="Imagenes/instagram (1).png" width="40" height="40" alt="" /></i></a></li>
                            <li><a class="linkedin" href="#"><i class="fa fa-linkedin"><img src="Imagenes/pinterest.png" width="40" height="40" alt="" /></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
</footer>
</html>