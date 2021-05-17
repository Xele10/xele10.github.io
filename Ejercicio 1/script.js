function leerXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarXML(this);
        }
    };
    xhttp.open("GET", "libros.xml", true);
    xhttp.send();
}

function cargarXML(xml) {
    var xmlDoc = xml.responseXML;
    var encabezado = "<div id='tr'><div div id = 'td' > ISBN</div><div id='td'>Titulo</div><div id='td'>NivelProfundidad</div><div id='td'>Autores</div><div id='td'>Autores</div><div id='td'>FechaPublicacion</div><div id='td'>PaginaWeb</div><div id='td'>Precio</div></div>";
    var libro = xmlDoc.getElementsByTagName("libro");
    for (var i = 0; i < libro.length; i++) {
        encabezado += "<div id='tr'><div id='td'>" +
            libro[i].getElementsByTagName("ISBN")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("nivelProfundidad")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("autor")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("editorial")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("fechaPublicacion")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("paginaWeb")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue +
            "</div></div><br>";
    }
    document.getElementById("container").innerHTML = encabezado;

    var precio = document.getElementsByTagName("precio")[0].childNodes[0]
    precio.id = "bajo";
    // var min = precio[0];
    // for (var i = 0; i < precio.length; i++) {
    //     if (precio[i] < min) {
    //         console.log('Anterior minimo: ' + min + ', nuevo minimo: ' + precio[i]);
    //         min = precio[i];
    //     }
    // }
    // console.log('Valor mínimo: ' + min);
}