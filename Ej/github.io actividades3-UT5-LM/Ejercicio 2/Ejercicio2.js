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