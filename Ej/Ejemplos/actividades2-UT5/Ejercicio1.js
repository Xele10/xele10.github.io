"use strict";

/*
Ejercicio 1. Crea una función que reciba una cadena, un booleano, una función y un
array numérico por parámetro. 
Si el tipo de algún parámetro no es el esperado debes imprimir un error 
(suponemos que si nos pasan un array sí que en todas sus posiciones habrá un dato numérico). 
Si es lo esperado, si el valor del booleano es true, recorre el array con la estructura foreach. 
Si el producto de todos los ítems en mayor a 100 entonces comprueba si en la cadena hay alguna “a”. 
Si hay alguna a muestra por pantalla un mensaje diciendo que la “a” no está permitida. 
Si no la hay, muestra por pantalla un mensaje diciendo, “Muy bien, no has usado la ‘a’”. 
En caso de que el producto del array fuera menor de 100 informa al usuario: 
“El resultado de tu array es insuficiente para comprobar la cadena”. 
Si el valor del booleano es false entonces ejecuta la función recibida por parámetro.
*/

function Ejercicio1(cadena, booleano, array, funcion) {
  let mensajeError = "El tipo de algún parámetro no es el esperado.";
  let error = false;

  if (typeof cadena != "string" || typeof booleano != "boolean" || typeof funcion != "function" || Array.isArray(array) == "false") { //si algun parámetro no es del tipo esperado
      error = true;
    } else { //si todos los parámetros del array son del tipo esperado, comprobar el array de números
        array.forEach((element) => {
            if (typeof element != "number") {
                error = true;
                mensajeError = mensajeError + `\n- El elemento "${element}" del array no es un número.`;
            }
        });
    }
    if (error == true) { //si hay error en el tipo de parámetros o en el array de números, imprimir error.
        console.error(mensajeError);
    } else { //si no hay error
        if (booleano == true) { //si el valor del booleano es true, recorre el array con la estructura foreach. 
            let producto = 1;
            array.forEach((element) => {
                producto *= element;
            });
            if (producto > 100) { // Si el producto de todos los ítems en mayor a 100 entonces comprueba si en la cadena hay alguna “a”. 

                if (cadena.includes("a")) {
                    console.log("La letra 'a' no está permitida en la cadena.");
                } else {
                    console.log("Muy bien, no has usado ninguna letra 'a' en la cadena.");
                }
            } else {
                console.log(`El resultado del producto del array es insuficiente para comprobar la cadena.`); 
            }
        } else {
            funcion();
        }
    }
}

Ejercicio1("hola mundo", "2", [1, 2, 3, 4], () => {alert("Se acabó el juego.");});
Ejercicio1("hola mundo", true, [1, 2, "eo", 4], () => {alert("Se acabó el juego.");});
Ejercicio1("hola mundo", true, [1, 2, 3, 4], () => {alert("Se acabó el juego.");});
Ejercicio1("hola mundo", true, [10, 20, 30, 40], () => {alert("Se acabó el juego.");});
Ejercicio1("Sí", true, [10, 20, 30, 40], () => {alert("Se acabó el juego.");});
Ejercicio1("Sí", false, [10, 20, 30, 40], () => {alert("Se acabó el juego.");});