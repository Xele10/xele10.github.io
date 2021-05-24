window.addEventListener("load", Carga, true);

function Carga() {
    misLibrerias = document.getElementById("librerias");
    let solicitud = new XMLHttpRequest();

    solicitud.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            Gestiona(this)
    };
    solicitud.open("GET", "libros.xml", true);
    solicitud.send();
}

function Gestiona(XML) {
    let ficheroXML = XML.responseXML;
    let librerias = ficheroXML.getElementsByTagName("libreria");

    for (let i = 0; i < librerias.length; i++) {
        let tabla = document.createElement("div");
        tabla.classList.add("tabla")
        misLibrerias.appendChild(tabla);

        let nombreLibreria = librerias[i].getElementsByTagName("nombre");
        let filaNombre = CreaFilaNombreApartirDe(nombreLibreria);
        filaNombre.classList.add("fila");
        tabla.appendChild(filaNombre);

        let libros = librerias[i].getElementsByTagName("libro");
        let nodosDeUnLibro = libros[0].childNodes;

        let cabeceraLibreria = CreaFilaCabeceraAPartirDe(nodosDeUnLibro);
        cabeceraLibreria.classList.add("fila");
        tabla.appendChild(cabeceraLibreria);

        let precioMinimo = Number.MAX_VALUE;
        let libroPrecioMinimo;

        for (let i = 0; i < libros.length; i++) {
            let fila = document.createElement("div");
            fila.classList.add("fila");
            tabla.appendChild(fila);

            let nodosLibro = libros[i].childNodes;
            nodosLibro.forEach(nodoLibro => {
                if (nodoLibro.nodeType == 1) {
                    let celda = CreaCeldaAPartirDe(nodoLibro);
                    celda.classList.add("celda");
                    fila.appendChild(celda);
                }
                if (nodoLibro.nodeName == "precio") {
                    let precioLibro = nodoLibro.childNodes[0].nodeValue;
                    if (precioLibro < precioMinimo) {
                        precioMinimo = precioLibro;
                        libroPrecioMinimo = fila;
                    }
                }
            });
        };
        libroPrecioMinimo.id = "precioMinimo";
    };
}

function CreaFilaNombreApartirDe(nombreLibreria) {
    let fila = document.createElement("div");
    fila.innerHTML = "Libreria " + nombreLibreria[0].textContent;
    return fila;
}

function CreaFilaCabeceraAPartirDe(nodosDeUnLibro) {
    let fila = document.createElement("div");

    nodosDeUnLibro.forEach((nodoDeUnLibro) => {
        if (nodoDeUnLibro.nodeType == 1) {
            let celda = document.createElement("div");
            celda.classList.add("celda");
            fila.appendChild(celda);
            let texto = nodoDeUnLibro.tagName;
            celda.innerHTML = texto;
        }
    });
    return fila;
}

function CreaCeldaAPartirDe(elementoLibro) {
    let celda = document.createElement("div");
    let texto = document.createTextNode(elementoLibro.childNodes[0].nodeValue);
    celda.appendChild(texto);

    elementoLibro.childNodes.forEach((nodoEnElementoLibro) => {
        if (nodoEnElementoLibro.nodeType == 1) {
            let subcelda = document.createElement("div");
            subcelda.classList.add("subcelda");
            celda.appendChild(subcelda);
            let textoSubcelda = document.createTextNode(nodoEnElementoLibro.childNodes[0].nodeValue);
            subcelda.appendChild(textoSubcelda);
        }
    });
    return celda;
}