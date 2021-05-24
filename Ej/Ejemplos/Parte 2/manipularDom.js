'use strict'

//Voy a cambiar el tercer párrafo por una capa. Fíjate que en el ejemplo html inicial hay tres párrafos y que cuando cargo la página sin embargo hay una capa.
  let seleccion = 3

//Creo un nodo de tipo elemento. Al pasarle la etiqueta div, ese nodo será una capa
  let capa = document.createElement("div")

//Para añadirle contenido textual creo un nodo de tipo texto. Le paso por parámetro el texto que quiero introducir.
  let textoCapa = document.createTextNode("Capa " + seleccion)

//Añado el nodo texto a la capa, para poder añadirlo después al árbol.
  capa.appendChild(textoCapa)

//Inserto la capa en el DOM en la posición correspondiente. Selecciono el elemento que quiero remplazar y después desde su padre remplazo los hijos.
  let parrafo = document.querySelector("p:nth-child(" + seleccion + ")");
  parrafo.parentElement.replaceChild(capa,parrafo);

//Por último cambio la opción seleccionada
 document.querySelector("select").selectedIndex = 2;
