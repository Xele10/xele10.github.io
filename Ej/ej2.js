let contenedor = document.getElementById("contenedor");

function creaObjetoAjax() {
    var obj;
    if (window.XMLHttpRequest) {
        obj = new XMLHttpRequest();
    } else {
        obj = new ActiveXObject(Microsoft.XMLHTTP);
    }
    return obj;
}

docTxtEmisor = creaObjetoAjax();
docTxtEmisor.open("GET", "emisor.txt", true);
docTxtEmisor.onreadystatechange = cargarTXTemisor;
docTxtEmisor.send();


docTxtReceptor = creaObjetoAjax();
docTxtReceptor.open("GET", "receptor.txt", true);
docTxtReceptor.onreadystatechange = cargarTXTreceptor;
docTxtReceptor.send();

function cargarTXTemisor() {
    if (docTxtEmisor.readyState == 4 && docTxtEmisor.status == 200) {
        texto = docTxtEmisor.responseText;

        let divEmisor = document.createElement("div");
        contenedor.appendChild(divEmisor);
        divEmisor.id = "emisor";

        textoEmisor = document.getElementById("emisor");
        textoEmisor.innerHTML = texto + "<br/>";
    }
}

function cargarTXTreceptor() {
    if (docTxtReceptor.readyState == 4 && docTxtReceptor.status == 200) {
        texto2 = docTxtReceptor.responseText;

        let divReceptor = document.createElement("div");
        contenedor.appendChild(divReceptor);
        divReceptor.z = "receptor";

        textoReceptor = document.getElementById("receptor");
        textoReceptor.innerHTML = texto2 + "<br/>";
    }
}

function reCargar() {
    recargarEmisor = cargarTXTemisor();
    recargarReceptor = cargarTXTreceptor();
}

setInterval(reCargar, 10000);