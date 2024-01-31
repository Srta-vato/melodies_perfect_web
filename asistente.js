var data = {
    chatinit: {
        title: ["Hola <span class='emoji'> &#128075;</span>", "yo Soy Melody", "En que te puedo ayudar?"],
        options: ["Instrumentos", "Tutoriales", "Herramientas", "Quejas"]
    },

    instrumentos: {
        title: ["Porfavor escoge la categoria"],
        options: ['Cuerda', 'Viento', 'Percusion', 'Eletricos'],
        url: {

        }
    },

    cuerda: {
        title: ["OHHH! ecxelente eleccion pero ¿Que isntrumento seria?"],
        options: ['Guitarra y familia', 'Violines y familia', 'Arpa y familia', 'Pianos'],
        url: {

        }
    },


    guitarra: {
        title: ["Bien, bien"],
        options: ["Da clic aqui"],
        url: {
            more: "file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/guitarras.html",
            link: ["file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/guitarras.html"]
        }
    },

    violines: {
        title: ["Bien, bien"],
        options: ["Da clic aqui"],
        url: {
            more: "file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/frotantes.html",
            link: ["file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/frotantes.html"]
        }
    },

    tutoriales: {
        title: ["Si eres nuevo y quieres aprender a usar el sitio es la mejor opcio"],
        options: ["Seguir los tutoriales es facil da click aqui para acceder"],
        url: {
            more: "file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/tutoriales.html",
            link: ["file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/tutoriales.html"]
        }
    },



    quejas: {
        title: ["Que mal que hayas tenido una mala experiencia, pero aqui estoy para ayudarte a solucionarlo escoge la opcion segun corresponda"],
        options: ['Producto', 'Servicio', 'Solicitud', 'Otro'],
        url: {

        }
    },


    producto: {
        title: ["Te enviere aun sitio para que puedas escribir los problemas que tuviste en poco tiempo resiviras una respuesta a tu correo"],
        options: ['Da clic en:'],
        url: {
            more: "file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/solicitud.html",
            link: ["file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/solicitud.html"]
        }
    },

    servicio: {
        title: ["Te enviere aun sitio para que puedas escribir los problemas que tuviste en poco tiempo resiviras una respuesta a tu correo"],
        options: ['Da clic en:'],
        url: {
            more: "file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/solicitud.html",
            link: ["file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/solicitud.html"]
        }
    },

    solicitud: {
        title: ["Te enviere aun sitio para que puedas escribir los problemas que tuviste en poco tiempo resiviras una respuesta a tu correo"],
        options: ['Da clic en:'],
        url: {
            more: "file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/solicitud.html",
            link: ["file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/solicitud.html"]
        }
    },

    otro: {
        title: ["Te enviere aun sitio para que puedas escribir los problemas que tuviste en poco tiempo resiviras una respuesta a tu correo"],
        options: ['Da clic en:'],
        url: {
            more: "file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/solicitud.html",
            link: ["file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/solicitud.html"]
        }
    },


    herramientas: {
        title: ["Sabias que contamos con herramientas para que personas con discapacidades especiales tambien puedan usar nuestro sitio?"],
        options: ['Bueno esta es una de estas da clic aqui para iniciar con mi compañero Kai'],
        url: {
            more: "file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/chat%20voz.html",
            link: ["file:///C:/Users/siglo22/Desktop/Archivos%20Melodies%20Perfect/chat%20voz.html"]
        }
    },

}

document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;

function showChatBot() {
    console.log(this.innerText);
    if (this.innerText == 'Iniciar Chat') {
        document.getElementById('test').style.display = 'block';
        document.getElementById('init').innerText = 'Cerrrar Chat';
        initChat();
    } else {
        location.reload();
    }
}

function initChat() {
    j = 0;
    cbot.innerHTML = '';
    for (var i = 0; i < len1; i++) {
        setTimeout(handleChat, (i * 500));
    }
    setTimeout(function() {
        showOptions(data.chatinit.options)
    }, ((len1 + 1) * 500))
}

var j = 0;

function handleChat() {
    console.log(j);
    var elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<div>' + options[i] + '</div>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt() {
    console.log(this);
    var str = this.innerText;
    var textArr = str.split(" ");
    var findText = textArr[0];

    document.querySelectorAll(".opt").forEach(el => {
        el.remove();
    })
    var elm = document.createElement("p");
    elm.setAttribute("class", "test");
    var sp = '<span class="rep">' + this.innerText + '</span>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj = data[findText.toLowerCase()];
    handleResults(tempObj.title, tempObj.options, tempObj.url);
}

function handleDelay(title) {
    var elm = document.createElement("p");
    elm.innerHTML = title;
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
}


function handleResults(title, options, url) {
    for (let i = 0; i < title.length; i++) {
        setTimeout(function() {
            handleDelay(title[i]);
        }, i * 500)

    }

    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }

    if (isObjectEmpty(url) == true) {
        console.log("having more options");
        setTimeout(function() {
            showOptions(options);
        }, title.length * 500)

    } else {
        console.log("end result");
        setTimeout(function() {
            handleOptions(options, url);
        }, title.length * 500)

    }
}

function handleOptions(options, url) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<a class="m-link" href="' + url.link[i] + '">' + options[i] + '</a>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        cbot.appendChild(opt);
    }
    var opt = document.createElement("span");
    var inp = '<a class="m-link" href="' + url.more + '">' + 'Ver Opciones</a>';

    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll() {
    var elem = document.getElementById('chat-box');
    elem.scrollTop = elem.scrollHeight;
}