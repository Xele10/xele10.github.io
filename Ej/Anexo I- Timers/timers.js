'use strict'

//setTimeout. Ejecuta la función pasados los milisegundos
function saludar()
{
	alert("Hola mundo")
}
setTimeout(saludar,5000)

//setInterval. Ejecuta la función cada vez que pasen los milisegundos
let num =0;
/*function sumar()
{
	console.log(num++)
}
setInterval(sumar,1000)*/

let parar = 40;
function sumar2()
{
	console.log(num++)
	if (num == parar)
		clearInterval(idInterval)

}
let idInterval = setInterval(sumar2,1000)

//Pasar argumentos a setInterval
function multiplicar(num1,num2)
{
	alert(num1*num2)
}

let num1 = prompt("Dime un número por favor");
let num2 = prompt("Dime otro")
setInterval(multiplicar,1000,num1,num2)
