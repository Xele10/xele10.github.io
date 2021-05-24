

/*Uso las relaciones de parentesco para acceder a la información:
  - Desde document, objeto global, voy al nodo llamado body. El primer hijo de body es div, su primer hijo es p, y nodeName es una propiedad que contiene el nombre de la etiqueta (mirar diapositiva 17)*/
alert(document.body.firstChild.firstChild.nodeName)
/*Haz una prueba y pon un intro entre body y div y observa a ver qué pasa. Los \n y los comentarios también formarán parte del árbol, por lo que habría que cambiar el path para acceder al nodo que queramos. ¡Con esto debemos tener cuidado!*/


/*Volviendo a quitar el intro anterior, pues los ejemplos están preparados sin ese salto de línea, de esta manera podemos acceder al contenido del nodo.*/
alert(document.body.firstChild.firstChild.firstChild.nodeValue)
