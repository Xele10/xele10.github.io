'use strict';

console.log("Hola mundo"); //Imprimir una cadena de caracteres
console.log("Hola mundo.", "Curso 2021");
console.log("Hola mundo. Curso " +  2020 +1);//Veremos que si un operando es de tipo cadena, el operador + concatena
console.log("Hola mundo. Curso", 2020 + 1); //Si todos los operandos son de tipo numérico, se produce la suma
console.log("%cHola mundo", "color: red; font-size: 20pt;"); //Puedo aplicar algunos estilos usando %c
let curso = 2021;
console.log(`Hola mundo ${curso}`); //Puedo usar variables dentro de la cadena, delimitando esta con la tilde invertida, que serán sustituidas por orden por los valores que vengan detrás de las ,
console.log("Hola" + curso); // tambien puedo hacerlo así