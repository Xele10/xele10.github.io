function validar() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var contrasena2 = document.getElementById("contrasena2").value;
    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;

    var error = document.getElementById("error");
    error.innerHTML = "";
    var resultado = true;

    debugger;
    if (esMinuscula(usuario.charAt(0))) {
        error.innerHTML += "La primera letra del usuario tiene que ser mayúscula" + "<br>";
        document.getElementById("usuario").style.border = "1px solid red";
        resultado = false;
    } else document.getElementById("usuario").style.border = "2px solid green";

    var ultimoCaracter = usuario.charAt(usuario.length - 1);
    if (isNaN(ultimoCaracter)) {
        error.innerHTML += "El usuario tiene que terminar en número." + "<br>";
        document.getElementById("usuario").style.border = "1px solid red";
        resultado = false;
    } else document.getElementById("usuario").style.border = "2px solid green";

    if (contrasena.length != 8) {
        error.innerHTML += "La contraseña tiene que tener 8 caracteres." + "<br>";
        document.getElementById("contrasena").style.border = "1 px solid red";
        resultado = false;
    } else document.getElementById("contrasena").style.border = "2px solid green";

    if (isNaN(contrasena.charAt(0))) {
        error.innerHTML += "El primer caracter tiene que ser un número" + "<br>";
        document.getElementById("contrasena").style.border = "1px solid red";
        resultado = false;
    } else document.getElementById("contrasena").style.border = "2px solid green";

    var ultimoCaracterPas = contrasena.charAt(contrasena.length - 1);
    if (esMinuscula(ultimoCaracterPas)) {
        error.innerHTML = "La contraseña tiene que terminar en mayúscula" + "<br>";
        document.getElementById("contrasena").style.border = "1px solid red";
        resultado = false;
    } else document.getElementById("contrasena").style.border = "2px solid green";

    if (contrasena2 != contrasena) {
        error.innerHTML += "Las contraseñas tienen que coincidir" + "<br>" + "<br>";
        document.getElementById("contrasena2").style.border = "1px solid red";
        resultado = false;
    } else document.getElementById("contrasena").style.border = "2px solid green";

    if (esMinuscula(nombre.charAt(0))) {
        error.innerHTML += "El nombre tiene que empezar por mayúscula" + "<br>";
        document.getElementById("nombre").style.border = "1px solid red";
        resultado = false;
    } else document.getElementById("nombre").style.border = "2px solid green";

    if (esMinuscula(apellidos.split(' ')[0].charAt(0))) {
        error.innerHTML = "Los apellidos han de empezar por mayúscula" + "<br>";
        document.getElementById("apellidos").style.border = "1px solid red";
        resultado = false;
    } else document.getElementById("apellidos").style.border = "2px solid green";

    if (isNaN(telefono)) {
        error.innerHTML += "El teléfono debe ser numérico" + "<br>";
        document.getElementById("telefono").style.border = "1px solid red";
        resultado = false;
    } else document.getElementById("telefono").style.border = "2px solid green";

    if (telefono.charAt(0) != 6 && telefono.charAt(0) != 7 && telefono.charAt(0) != 9) {
        error.innerHTML += "El primer número del teléfono tiene que ser 6, 7 o 9" + "<br>";
        document.getElementById("telefono").style.border = "1px solid red";
        resultado = false;
    } else document.getElementById("telefono").style.border = "2px solid green";

    if (isNaN(edad)) {
        error.innerHTML += "La edad debe ser numérica" + "<br>";
        document.getElementById("edad").style.border = "1px solid red";
        resultado = false;
    } else document.getElementById("edad").style.border = "2px solid green";

    return resultado;
}

function esMinuscula(letra) {
    return letra === letra.toLowerCase();
}