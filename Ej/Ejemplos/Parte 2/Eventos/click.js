'use strict'

/*Recuperamos todas las imágenes con el método querySelectorAll. Este método nos devuelve un array con todos los elementos imágenes. Recorremos el array con el método forEach y le añadimos el evento click. Al producirse esta interacción, el usuario hace click, se ejecuta la función muestra color.*/
document.querySelectorAll("img").forEach(n=>n.addEventListener("click",MuestraColor))

/*Esta función accede al elemento con this y muestra el valor de su atributo alt*/
function MuestraColor()
{
  alert(this.alt)
}
