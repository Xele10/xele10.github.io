'use strict';

document.querySelector("input").addEventListener("click",function(){
	//Podemos ver todos los atributos que tiene un nodo
	//console.log(document.querySelector("div").attributes)
		//Puedo acceder con el nombre del atributo o con el índice
		//console.log(document.querySelector("div").attributes["id"])
		//console.log(document.querySelector("div").attributes[1])
	
	//Podemos cambiar las propiedades CSS a través del atributo style
	//document.querySelector("main").style.backgroundColor = "blue"
	
	//Podemos asignar clases ya creadas en mi hoja de estilos con className
		//Recupero párrafo aleatorio
		let aleatorio = Math.floor(Math.random() *6) + 1
		let parrafo = document.querySelector("p:nth-child(" + aleatorio + ")")
		
		//Le asigno una clase aleatoria
		let aleatoria = Math.floor(Math.random() *3) + 1
		parrafo.className = "clase" + aleatoria
		console.log(parrafo.className)
})






