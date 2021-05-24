"use strict";

/*
Ejercicio 3. Pide datos al usuario y crea un array insertando los datos al principio. Los 
datos tienen que ser de tipo numérico, si introduce uno que no sea de tipo numérico 
dejarás de pedir datos (puedes utilizar isNaN(caracter) que te devuelve un booleano 
indicando si el carácter definido es un número o no). 
Si estamos ante un número de vez (iteración) par en la que pedimos datos al usuario, 
utiliza el operador + para convertir a número, si no conviértelo mediante el constructor Number(). 
Seguidamente, ordena el array de mayor a menor conservando del array original sólo los múltiplos de 3 
(usa el método filter). Muestra ambos por pantalla. Por último, muestra los dos arrays por pantalla.
*/

let arr = new Array();
let contador = 0;
let entrada;

do {
  contador += 1;
  entrada = prompt("Introduce un número");
  if (!isNaN(entrada)) {
    if (contador % 2 == 0) {
      arr.unshift(+entrada);
    } else if (contador % 2 != 0) {
      arr.unshift(Number(entrada));
    }
  }
} while (!isNaN(entrada));

let arrayOrdenado = [...arr]
  .sort((num1, num2) => num1 - num2)
  .filter((num) => num % 3 == 0);

console.log(
  `array: [${arr.join(", ")}]` +
  `\narray ordendo con los multiplos de 3: [${arrayOrdenado.join(", ")}]`);