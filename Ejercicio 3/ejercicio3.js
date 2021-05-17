let body = document.body;
let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

let capa = document.createElement("div");
container.appendChild(capa);
capa.id = "capa";
capa.textContent = "Ejercicio3";

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
capa.style.marginTop = "150px"
capa.style.textAlign = "center";

capa.style.border = "2px solid blue";
capa.style.width = "50%";
capa.style.height = "50%";
capa.style.borderRadius = "10px";

capa.style.background = "linear-gradient(to right, lightgray, lightblue)";

capa.innerHTML += "<br><br>";
let formulario = document.createElement("form");
capa.appendChild(formulario);
formulario.id = "formulario";


let email = document.createElement("input");
formulario.appendChild(email);
email.type = "email";
email.id = "email";
email.placeholder = "Email";
email.setAttribute("required", "");
email.pattern = ".+@iesdoctorbalmis.com"

let contrasena = document.createElement("input");
formulario.appendChild(contrasena);
contrasena.type = "password";
contrasena.id = "contrasena";
contrasena.placeholder = "Contraseña";
contrasena.setAttribute("required", "");
contrasena.setAttribute("minlength", "8");


let enviar = document.createElement("input");
formulario.appendChild(enviar);
enviar.type = "submit";
enviar.id = "enviar";

formulario.addEventListener("submit", validar);
// formulario.onsubmit = "return validar();";

function validar(event) {
    event.preventDefault();
    let contrasena2 = document.getElementById("contrasena").value;
    let resultado = true;
    if (isNaN(contrasena2) || contrasena2.length != 8) {
        document.getElementById("contrasena2").style.backgroundColor = "lightgray";
        document.getElementById("contrasena2").style.borderRightColor = "gray";
        document.getElementById("contrasena2").style.borderBottomColor = "gray";
        resultado = false;
    } else {
        document.getElementById("contrasena2").style.backgroundColor = "lightcoral";
        document.getElementById("contrasena2").style.borderLeftColor = "darkred";
        document.getElementById("contrasena2").style.borderTopColor = "darkred";
    }
    return resultado;
};