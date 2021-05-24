/*Selecciona todos los a dentro de div1 pero al estar usando querySelector sólo me retorna el primero. Accede a su atributo title e imprime Hola Mundo*/
  console.log("Título: " + document.querySelector("#div1 a").title);

/*Selecciona todos los a dentro de div1 pero al estar usando querySelector sólo me retorna el primero. Accede a su atributo title e imprime Hola Mundo Contenido*/
  console.log("TextContent: " + document.querySelector("#div1 a").textContent);


/*No selecciona ningún nodo, pues no hay ningún hijo directo de div1 que sea a. Cuando intenta acceder a la propiedad title da error puesto que no existe title para el tipo de datos null*/
  console.log("Selector CSS incorrecto: " + document.querySelector("#div1 > a"))
  //console.log(document.querySelector("#div1 > a").title);

/*Selecciona un nodo por selector CSS de atributo. En este caso dentro de los dos nodos con clase enlaceNormal, selecciona aquel cuyo atributo tittle comienza por la cadena adiós*/
console.log(document.querySelector(".enlaceNormal[title^='Adiós']").title);

/*Selecciona todos los nodos que cumplen el selector CSS. En este caso todos los que su atributo class tiene el valor de enlaceEspecial.Después recorremos los elementos del array con el método forEach y de cada uno sacamos el valor de su contenido*/
  let enlaces = document.querySelectorAll(".enlaceNormal");
  enlaces.forEach(function(elem) {
   console.log(elem.textContent); });
