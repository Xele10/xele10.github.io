window.addEventListener("DOMContentLoaded", Comienza, false);

function Comienza() {
    let formulario = CreaFormulario();
    document.body.appendChild(formulario);
    let [labelEmail, inputEmail] = CreaCampoEmail();
    formulario.append(labelEmail, inputEmail);
    let [labelContraseña, inputContraseña] = CreaCampoContraseña();
    formulario.append(labelContraseña, inputContraseña);
    let boton = CreaBotonEnviar();
    formulario.appendChild(boton);

    AlañadeEstilos();
    boton.addEventListener('click', Valida);
}

function AlañadeEstilos() {

    css = document.styleSheets[0];
    css.insertRule(
        "#form { display: flex; flex-direction : column; padding : 20px; " +
        "height : 240px; width : 700px; font-size : 2em; position : absolute; " +
        "bottom : 0; top : 0; left : 0; right : 0; margin : auto; " +
        "border : 3px solid rgb(39, 223, 255); border-radius : 20px; " +
        "background : linear-gradient(90deg, rgba(25,1,1,1) 0%, rgba(32,2,2,1) 42%, rgba(55,6,6,1) 100%); " +
        "overflow : hidden; }", css.cssRules.length);
}

function Valida() {
    let e1 = document.getElementById('correoElectronico');
    let c1 = document.getElementById('contraseña');

    if (e1.validity.valid == false)
        e1.setCustomValidity("El email no termina en \"@iesdoctorbalmis.com\"");
    e1.reportValidity();
    if (c1.validity.valid == false)
        c1.setCustomValidity("La contraseña no es de 8 dígitos");
    c1.reportValidity();

    css.insertRule("#correoElectronico:valid, #contraseña:valid { background : #b3b3b3; box-shadow: 5px 5px grey}", css.cssRules.length);
    css.insertRule("#correoElectronico:invalid, #contraseña:invalid { background : #f5baba; box-shadow: 5px 5px #f85757}", css.cssRules.length);

    e1.setCustomValidity("");
    c1.setCustomValidity("");
}

function CreaFormulario() {
    let formulario = document.createElement("div");
    formulario.id = "form";
    document.body.innetHTML = formulario;
    return formulario;
}


function CreaCampoEmail() {
    let label = document.createElement("label");
    label.for = "correoElectronico";
    label.appendChild(document.createTextNode("Introduce email:"))
    label.style.color = "white";

    let input = document.createElement("input");
    input.type = "email";
    input.pattern = "^([a-zA-Z0-9])+@iesdoctorbalmis.com$";
    input.id = "correoElectronico";
    input.required = true;
    input.style.width = "95%";
    input.style.fontSize = "1em";
    return [label, input];
}

function CreaCampoContraseña() {
    let label = document.createElement("label");
    label.for = "contraseña";
    label.appendChild(document.createTextNode("Introduce contraseña:"))
    label.style.color = "white";

    let input = document.createElement("input");
    input.type = "password";
    input.pattern = "[0-9]{8}";
    input.id = "contraseña";
    input.required = true;
    input.style.width = "40%";
    input.style.fontSize = "1em";

    return [label, input];
}

function CreaBotonEnviar() {
    let boton = document.createElement("button");
    boton.type = "submit";
    boton.id = "botonEnviar"
    boton.appendChild(document.createTextNode("Enviar"))
    boton.style.width = "30%";
    boton.style.alignSelf = "center";
    boton.style.marginTop = "5%";
    boton.style.fontSize = "1em";
    return boton;
}