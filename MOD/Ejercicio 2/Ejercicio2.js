window.addEventListener("load", function() { setInterval(cargarTXT, 1000); }, true);

function cargarTXT() {
    let httpAjax = new XMLHttpRequest();

    httpAjax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) Gestiona(this);
    };
    httpAjax.open("GET", "leerTXT.txt", true);
    httpAjax.send();
}

contador = 0;
Emisor = "Emisor";
Receptor = "Receptor";


function Gestiona(TXT) {
    contenedor = document.getElementById("contenedor");

    let mensajesTXT = TXT.responseText;
    let mensajes = mensajesTXT.split(/\r\n|\n/);
    let numMensajesTotales = mensajes.length;
    let numMensajesNuevos = numMensajesTotales - contador;
    mensajesNuevos = mensajes.slice(contador);


    mensajesNuevos.forEach((mensaje) => {
        let parrafoMensaje = document.createElement("p");
        let textoMensaje = document.createTextNode(mensaje);
        parrafoMensaje.appendChild(textoMensaje);
        contenedor.appendChild(parrafoMensaje);
        if (mensaje.split("@@@")[0] == Emisor)
            parrafoMensaje.classList.add("emisor");
        else if (mensaje.split("@@@")[0] == Receptor)
            parrafoMensaje.classList.add("receptor");
    });
    contador = contador + numMensajesNuevos;
}


/*
numMensajesLeidos = 0;
idEmisor = "Frodo";
idReceptor = "Gandalf";


window.addEventListener("load", function() { setInterval(LeerTXT, 3000); }, true);

function LeerTXT() {
    let solicitud = new XMLHttpRequest();

    solicitud.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) Gestiona(this);
    };
    solicitud.open("GET", "mensajes.txt", true);
    solicitud.send();
}

// 
// Ejercicio 2. 


function verAsignaturas(...alumnos) {
  if (alumnos.length == 0) console.log("No hay datos para mostrar.");
  else
    alumnos.forEach(([alumno, curso, ...asignaturas]) => {
      console.log(`${alumno}-${curso}-asignaturas:${asignaturas.join("/")}`);
    });
}

verAsignaturas(
  ["Sara", "DAMA", "Programación", "ED"],
  ["Martin", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"],
  ["Emma", "ASIR", "ISO", "BBDD", "LM"]
);
verAsignaturas(["Alvaro", "Semi", "BBDD"]);
verAsignaturas();

// 

function Gestiona(TXT) {
    divMensajes = document.getElementById("mensajes");

    let textoCompleto = TXT.responseText;
    let mensajes = textoCompleto.split(/\r\n|\n/);
    let numMensajesTotales = mensajes.length;
    let numMensajesNuevos = numMensajesTotales - numMensajesLeidos;
    mensajesNuevos = mensajes.slice(numMensajesLeidos);

    divTitulo = document.getElementById("titulo");
    divTitulo.innerText = "Conversación con " + idEmisor;

    mensajesNuevos.forEach((mensaje) => {
        let parrafoMensaje = document.createElement("p");
        let textoMensaje = document.createTextNode(mensaje);
        parrafoMensaje.appendChild(textoMensaje);
        divMensajes.appendChild(parrafoMensaje);
        if (mensaje.split(":")[0] == idEmisor)
            parrafoMensaje.classList.add("mensaje_emisor");
        else if (mensaje.split(":")[0] == idReceptor)
            parrafoMensaje.classList.add("mensaje_receptor");
    });
    numMensajesLeidos = numMensajesLeidos + numMensajesNuevos;
}
*/