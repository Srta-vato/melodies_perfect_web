function start() {
    if (annyang) {
        annyang.setLanguage("es-CO")
        annyang.start({ autoRestart: true, continuous: false });
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        document.getElementById("btn").style.display = "none"
    }
}

let bandera = false;
annyang.addCallback('soundstart', function() {
    if (!bandera) {
        document.getElementById("all2").style.display = "block"
        setTimeout(() => {
            voz('Bienvenido')
            bandera = true;
        }, 1000);
    }
    console.log("sound detected")
});

annyang.addCallback('result', function() {
    console.log('sound stopped');
});


const comandos = {
    // SALUDO
    "Buenas noches": () => {
        voz("Buenas noches, Yo soy Kai tu asistente virtual y estoy para ayudarte, para escuchar las opciones de servicios di Opciones ");
    },

    "Hola Kai": () => {
        voz("Hola que tal, Yo soy Kai tu asistente virtual y estoy para ayudarte, para escuchar las opciones de servicios di Opciones ");
    },

    "hola": () => {
        voz("Hola que tal, Yo soy Kai tu asistente virtual y estoy para ayudarte, para escuchar las opciones de servicios di Opciones ");
    },

    "Buen día": () => {
        voz("buen día, Yo soy Kai tu asistente virtual y estoy para ayudarte, para escuchar las opciones de servicios di Opciones ");
    },

    "Buenas tardes": () => {
        voz("buenas tardes, Yo soy Kai tu asistente virtual y estoy para ayudarte, para escuchar las opciones de servicios di Opciones ");
    },


    //Opciones

    "Opciones": () => {
        voz("Los servicios que ofrecemos son Compra y Alquiler de productos ¿Cual de los dos deseas?");
    },

    "compra": () => {
        voz("Exelente opcion, ¿Que tipo de instrumento buscas? cuerda, percusión, viento, elétrico");
    },

    "Alquiler": () => {
        voz("Exelente opcion, este es un servicio nuevo y eficaz ¿Que tipo de instrumento buscas? Alquilar cuerda, Alquilar percisión, Alquilar viento, Alquilar elétrico");
    },

    "cuerda": () => {
        voz("En nuestro catalogo de cuerda encontramos: arpas, guitarras y sus familias, violines y sus familias y pianos, escoge para seguir");
    },

    "viento": () => {
        voz("En nuestro catalogo de viento encontramos: tronpetas, Flautas, clarinetes, zaxofon, cornetas y tuvas escoge para seguir");
    },


    "percusión": () => {
        voz("En nuestro catalogo de Percusion encontramos: baterias y sus componentes, bombos, Metalofonos, Tamaboras y sus familias, triangulos y varios escoge para seguir");
    },

    "Eletricos": () => {
        voz("En nuestro catalogo de eletricos encontramos: Guitarras, violines, baterias, bajos, teclados y microfonos escoge para seguir");
    },


    //trompetas

    "trompetas": () => {
        voz("Para pasar de opción di trompeta opcion y el numero de la opcion que deseas escuchar");
    },

    "trompeta opción 1": () => {
        voz("TROMPETA JINBAO JBTR300L DORADO, precio 825600 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "trompeta opción 2": () => {
        voz("TROMPETA POCKET JBMT-500L, precio 945000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "trompeta opción 3": () => {
        voz("(L) HERALDO JINBAO JBHT-1300L NACIONAL, precio 983000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "trompeta opción 4": () => {
        voz("TROMPETA BACH TR655DIR, precio 2576000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "trompeta opción 6": () => {
        voz("(EV) TROMPETA STUDENT TR650 BACH, precio 2889000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "trompeta opción 7": () => {
        voz("TROMPETA JBTR-410L, precio 1376000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "trompeta opción 8": () => {
        voz("No hay mas trompetas por ahora");
    },


    //Flautas

    "flauta": () => {
        voz("Para pasar de opción di trompeta opcion y el numero de la opcion que deseas escuchar");
    },

    "flauta opción 1": () => {
        voz("Flauta Dulce Soprano Gamma, precio 12000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "flauta opción 2": () => {
        voz("FLAUTA TRAVERSA CON SISTEMA CERRADO, precio 759000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "flauta opción 3": () => {
        voz("FLAUTA TRAVERSA CON SISTEMA ABIERTO., precio 777000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "flauta opción 4": () => {
        voz("Flauta Soprano Maped, precio 27000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "flauta opción 5": () => {
        voz("Flauta Soprano Maped, precio 27000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "flauta opción 6": () => {
        voz("Flauta Soprano Maped, precio 27000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "flauta opción 7": () => {
        voz("Flauta Soprano Maped, precio 27000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },


    //cuerda

    "guitarras y sus familias": () => {
        voz("Puedes escoger entre Guitarra, Ukelele, Guitarron y Charango escoge para continuar ");
    },
    "guitarras": () => {

        voz("Guitarras, Ukeleles, Guitarron y Charango escoge para continuar ");
    },

    "arpas": () => {
        voz("");
    },

    "Violines y sus familias": () => {
        voz("de acuerdo escucha con atencion, te dare una lista de opciones de 10 en 10 asi que presta atencion y di listo violines para iniciar");
    },

    "Violines": () => {
        voz("de acuerdo escucha con atencion, te dare una lista de opciones de 10 en 10 asi que presta atencion y di listo violines para iniciar");
    },

    "pianos": () => {
        voz("de acuerdo escucha con atencion, te dare una lista de opciones de 10 en 10 asi que presta atencion y di listo pianos para iniciar");
    },

    //Guitarras


    "Guitarra": () => {
        voz("Para pasar de opción di guitarra opcion y el numero de la opcion que deseas escuchar");
    },

    "Guitarra opción 1": () => {
        voz("GUITARRA YAMAHA C40 ACUSTICA NATURAL, color acustico natural, precio 540900 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "Guitarra opción 2": () => {
        voz(" GUITARRA BOQUETE AZUL, color azul mar y azul agua marina combinados,precio 316000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "Guitarra opción 3": () => {
        voz(" GUITARRA FENDER FA-235E ELECTROACUSTICA 3T SBR, color acustico natural con bordes negros, precio 1600000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "Guitarra opción 4": () => {
        voz("COMBO GUITARRA YAMAHA C40 ACUSTICA ACCESORIOS NATURAL, color acustico natural, precio 6000000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "Guitarra opción 5": () => {
        voz("GUITARRA ACÚSTICA CORT EARTH-GRAND Poro Abierto/ CON ESTUCHE, color acustico natural, precio 1060000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "Guitarra opción 6": () => {
        voz("GUITARRA ELECTROACUSTICA CORT CON CUERDAS DE ACERO SFX-DAO NATURAL, color acustico rustico oscuro natural, precio 1087000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "Guitarra opción 7": () => {
        voz("GUITARRA VALENCIA VC350 NATURAL CON ESTUCHE, color acustico natural, precio 450000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "Guitarra opción 8": () => {
        voz("GUITARRA VALENCIA VC350 NATURAL CON ESTUCHE, color acustico anaranjado natural, precio 375000 pesos si desea comprar diga comprar de lo contrario pase a la siguiente opción");
    },

    "Guitarra opción 9": () => {
        voz("Lo siento actualmente solo hay esas opciones disponibles");
    },


    //Comprar

    "Comprar": () => {
        voz("Repite la opcion escogida despues de decir escogí");
    },

    "escogí *frase": frase => {
        voz("Haz escogido")
        voz(frase);
        voz("Di comprar ya para continuar")
        voz("Pero si la opción es incorreta di comprar")
    },

    "Comprar ya": () => {
        voz("Ok acontinuacion el formulario para completar la compra, si estas listo di de acuerdo");
    },

    "de acuerdo": () => {
        voz("Primero dime tu nombres despues de decir mi nombre es");
    },

    "mi nombre es *frase": frase => {
        voz("Que lindo nombre")
        voz(frase);
        voz("¿Esta bien o lo necesitas corregir? si lo necesitas corregir vueve a decir mi nombre es y despues tu nombre")
        voz("De lo contrario continuemos con tu apellido para registrarlo di mi apellido es seguido de tu apellido")
    },

    "mi apellido es *frase": frase => {
        voz("lindo apellido")
        voz(frase);
        voz("¿Esta bien o lo necesitas corregir? si lo necesitas corregir vueve a decir mi apellido  es y despues tu apellido")
        voz("De lo contrario continuemos con tu numero de cuenta, esta puede ser de credito, ahorro o Banco virtual ¿Que opcion escoges?")
    },

    "Credito": () => {
        voz("¿Cual es el numero de tu tarjeta?");
        voz("Para responder di mi cuenta es seguido de tu numero de tarjeta");
    },

    "Banco virtual": () => {
        voz("¿Cual es el numero de tu cuenta");
        voz("Para responder di mi cuenta virtual es seguido de tu numero");
    },

    "mi cuenta virtual es *numero": numero => {
        voz("Okey, repito para rectificar")
        voz(numero);
        voz("¿Esta bien o lo necesitas corregir? si lo necesitas corregir vueve a decir mi cuenta virtual es seguido de tu numero ")
        voz("De no tener problema seguimos con el codigo de confirmacion de compra")
        voz("Generalo y cuando lo tengas listo di")
        voz("clave seguido del codigo")
        voz("No te preocupes yo te espero")
    },


    "mi cuenta es *cuenta": cuenta => {
        voz("Okey, repito para rectificar")
        voz(cuenta);
        voz("¿Esta bien o lo necesitas corregir? si lo necesitas corregir vueve a decir mi cuenta es seguido de tu numero ")
        voz("De no tener problemas ahora dinos tu codigo cvv")
        voz("Para responder di clave seguido del codigo")
    },

    "clave *numero": numero => {
        voz("Okey, repito para rectificar")
        voz(numero);
        voz("¿Esta bien o lo necesitas corregir? si lo necesitas corregir vueve a decir di clave es seguido del codigo")
        voz("Ok todos los datos han sido guardados con exito para finalizar la compra di Acepto")
    },


    "ahorros": () => {
        voz("¿Cual es el numero de tu cuenta de ahorro");
        voz("Para responder di mi cuenta  es seguido de tu numero");
    },


    "acepto": () => {
        voz("Estamos verificando el pago un momento porfavor");
        voz("Exelente tu pago ha sido procesado tu pedido sera enviado");
        voz("Para preguntar la fecha de pedido pregunta por la fecha");
    },


    "Fecha": () => {
        var date = new Date;
        var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        voz("hoy es " + date.getDate() + " de " + mes[date.getMonth()] + "del" + date.getFullYear());
    },


    // DESPEDIDA

    "gracias": () => {
        voz("Un placer haber ayudado, ¿Necesitas algo mas? de lo contrario di cerrar para finalizar o si quieres ponenerme en pause solo di apagarte por y el tiempo que desees que este desactivado");
    },

    "hasta luego": () => {
        voz("Hasta luego, querido amigo,  di finalizar para acabar el proceso con exito");
    },

    "adios": () => {
        voz("Adios espero que vuelvas pronto, di finalizar para acabar el proceso con exito");
    },

    "finalizar": () => {
        voz('ok, adios')
        annyang.abort();
    },

    "Cerrar": () => {
        voz('ok, adios')
        annyang.abort();
    },

    "apágate por *tiempo minutos": tiempo => {
        voz('ok, vuelvo en' + tiempo + 'minutos');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hola, he vuelto, ¿me extrañaste?')
        }, tiempo * 60000);
    },

    // PREGUNTAS

    "qué hora es": () => {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        voz('son las ' + strTime)
    },

    "quién te creo": () => {
        voz("Los desarrolladores de Melodies Perfect");
    },

    "qué eres": () => {
        voz("soy un asistente virtual");
    },

    "cuál es tu nombre": () => {
        voz("mi nombre es Kai");
    },



    "qué día es hoy": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es " + dia[date.getDay() - 1]);
    },

    // ORDENES

    "reiniciate": () => {
        voz("entendido");
        location.reload();
    },


    "busca *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + " para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },

    "quiero escuchar *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },

    "escribe *dicto": dicto => {
        document.getElementById("text").innerHTML = dicto;
    },

    // AMABILIDAD

    "increible": () => {
        voz('Me hace sonrojar')
    },

    "Cómo estás": () => {
        voz('mejor que ayer, espero que usted tambien lo esté')
    },

    "Te presento a *nombre": nombre => {
        voz("Hola" + nombre + ", mi nombre es Kai, es un placer conocerte");
    },

    // LLAMADA A LA ACCIÓN

    "Kai": () => {
        voz("aquí estoy");
    },

    "Hey": () => {
        voz("aquí estoy");
    },

    "Me puedes ayudar": () => {
        voz("claro que sí");
    },

    "Oye": () => {
        voz("aquí estoy");
    },

    "Estás ahí": () => {
        voz("aquí estoy");
    }

}

function voz(texto) {
    document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.9;
    mensaje.pitch = 1;
    // ¡Parla!
    document.getElementById("all").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("all").style.visibility = "hidden";
        document.getElementById("all2").style.visibility = "visible";
    }, 4000);
    speechSynthesis.speak(mensaje);
}