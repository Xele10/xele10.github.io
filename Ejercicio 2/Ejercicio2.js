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