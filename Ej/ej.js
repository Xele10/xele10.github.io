/*
<!-- __________________________________________________________________________________________________________________________________________________________ -->
<!-- __________________________________________________________________________________________________________________________________________________________ -->

                                                                        <!-- JS -->


//Nombres válidos de variables (aunque recuerda que usaremos lower camelCase)
let $numero;
let _numero;
let _$numero1;
let numeroPar;

// Variable sin inicializar. Su valor es undefined
// var numero;
// console.log(numero)

// Las variables contienen valores de un tipo. La variable cogerá el tipo del primer valor asignado. Para ver el tipo de datos usaremos la instrucción typeof
let variable1 = 5.15171819;
console.log("Tipo variable 1 " + typeof variable1)

// Tipo numérico: el tipo de datos es number. Tenemos disponibles una serie de propiedades y métodos
console.log(variable1.toFixed(2))
console.log(3.148920.toFixed(2))
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

// Tipo cadena: el tipo de datos String se delimita por comillas. Tenemos disponibles una serie de propiedades y métodos
console.log("hola mundo".charAt(0));
let variable5 = 'Informática';
console.log(variable5.length);  // Longitud de la cadena

// Estructura condicional
let precio = 65;

if( precio < 50)
    console.log("Super barato")
else if (precio < 100)
    console.log("Está bien")
else
    console.log("Caro");


// Switch. Se pueden hacer evaluaciones en los propios casos

let edad = prompt("¿Cuál es tu edad?")

switch(true)
{
    case Number(edad)<18:
        console.log(`Eres muy pequeño, ${edad
    } para entrar`)
    break;
    case +edad<65:
        console.log("Adelante!")
    break;
    default:
        console.log("Te has ganado la zona VIP")
    break;
}

// Estructuras repetitivas
let valor= 1;
while(valor <= 5 ) console.log(valor++)
valor = 1;
do { console.log(valor++ )
} while(valor <= 5);
let limite = 5;
for(let i =0; i < limite; i++)
    console.log(i)
//console.log(i) //¡Ámbito de la variable!
let j=5;
for(let i =0;j>0 && i < limite;j--, i++)
    console.log(i + " " + j)

// Imprimir los números, excepto los múltiplos de 3
//Existe también la instrucción break
for(let i=0; i < 10; i++)
{
    if(i % 3 == 0) continue
    console.log(i)
}

// Creación de arrays
//Crear array usando el constructor
  let a = new Array();
  //Crear arrays usando el operador []
  let d = [1,2,3,4,5,6,7]

// Longitud del array
  let b = new Array(12)
  console.log("Longitud después de crearlo: " + b.length)


//Imprimir y recorrer arrays
  let c = new Array("a","b","c","d","f","g")
  console.log(c)

  for(let i in c)
    console.log("C[" + i + "]:" + c[i])

  for(let i of c)
    console.log("C["  + "]:" + i)

//Métodos
// Insertar y extraer elementos del ppo y del final
  console.log("-------------------")
  let e = []
//Insertar elementos al final
  e.push("b",5,"s")
  console.log(e)
  //Insertar elementos al ppo
  e.unshift("a")
  console.log(e)
  //Borrar elementos al final
  e.pop();
  console.log(e)
  //Borrar elementos al ppo
  e.shift()
  console.log(e)


  //Convertir array a string
  console.log(e.join())
  //Puedo incorporar un separador
  console.log(e.join("/"))


  //Slice y splice
  let f = [1,2,3,4,5,6,7,8]
  let g = f.slice(2,4)
  console.log("Subarray: " + g)
  console.log("Array original: "+ f)
  console.log(f.slice(2))


//Rest
function imprimirLenguajes(nombre,...lenguajes)
{
    console.log(nombre + " sabe " + lenguajes.length + " lenguajes: " + lenguajes.join(","))
}
imprimirLenguajes("Pedro","Java","C#","C++")
imprimirLenguajes("María","JS","PHP")

//Spread
let numeros = [12,32,6,8]
console.log(Math.max(numeros))
console.log(Math.max(...numeros))

// Desestructurar arrays
//Extraigo todos los elementos del array
  let [primero,segundo,tercero,cuarto] = numeros;
  alert(primero)
  alert(segundo)
  alert(tercero)
  alert(cuarto)

// Funcion lambda
let arrayTest = [21,22,23,24]
let sumArray = 0;
arrayTest.forEach(num => sumArray += num)
console.log(sumArray)

// Funciones y Arrays
let frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']
let puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
let numbers = [4,2,5,1,3];
numbers.sort(function(a, b) {
  return a - b;}); // [1, 2, 3, 4, 5]
let cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']

// Every. Devuelve un booleano indicando si todos los elementos del array cumplen determinada condición
console.log(o.every(n1 => n1 < 100 ))
console.log(o.every(n1 => n1 % 2 == 0 ))

// Some. Igual que every. Devuelve cierto en el momento que uno de los elementos del array cumple la condición
let secreto = 86;
console.log(o.some(n1=>n1==secreto)?'Sí':'No')

// Foreach.Itera los elementos del array, podemos llevar el índice y el array
let sum = 0;
console.log(o)
o.forEach(num=>sum+=num);
console.log(sum)

// Modificar todos los elementos del array: map. Con esta función transformamos cada elemento y se retorna un array con los elementos cambiados
let p = [4,21,33,12,9,54];
console.log(p.map(num=>num*2))
console.log(p)

// Filtrar los elementos de un array: filter. Retorna un nuevo array con aquellos elementos que cumplan la condición
console.log(p.filter(num=>num%2 == 0));

// Objetos en JS. Constructor de la clase
function Clase(curso, numAlumnos)
{
    this.curso = curso;
    this.numAlumnos = numAlumnos;

    this.toString=function()
    {
        return this.curso + "(" + this.numAlumnos + ")";
    }
}
let clases=[];
clases[0] = new Clase("DamA",17)
clases[1] = new Clase("DamB",15)
clases[2] = new Clase("ASIR",22)
console.log(clases.toString())
console.log(clases.sort((c1,c2) => c1.numAlumnos-c2.numAlumnos))

//Crear cadenas
let cadena1= "Esto es una cadena"
let cadena2 = 'Esto es otra cadena'
let cadena3 = new String("Esto también es una cadena"); //No es necesario saberla, es sólo por si la veis
let cadena5 = 'a'


//Longitud de la cadena (.length)
console.log("Longitud cadena 1: " + cadena1.length)

//Sacar un carácter en determinada posición
console.log(cadena1.charAt(5)) //Mejor usar esta
console.log(cadena1[cadena1.length-1
]) //Última posición

//Cambiar un carácter -- no funciona con el corchete, hay que coger los pedazos de cadena (substr)
cadena1[
    0
] = 'A'
console.log(cadena1)
cadena1 = 'A' + cadena1.substr(1, cadena1.length-1)

//Cambiar a mayúscuals/minúsuculas
console.log(cadena1.toLowerCase());
console.log(cadena1.toUpperCase());

//Unir cadenas
console.log(cadena1 + " y " + cadena2)
console.log(cadena1.concat(" y ", cadena2))
console.log(cadena1)

//Saber si una cadena incluye otra
console.log("Ballena azul".includes('ballena'));

//Obtener un trozo de una cadena
console.log("Clases especiales".slice(6,
-2))

// Creación de un objeto
let o1 = {};

// Creación de una función, usando una expresión
let f1 = function () {};
// Creación de una función usando el constructor de la clase
//let f2 = new fuction(parametro1,parametro2...,código)
// Declaración de funciones:
function decirNombre(nombre)
{
    console.log("Hola " + nombre)
}
// Funciones lambda. (param1,param2,param3,...) => {sentencios}
//Con una sola expresión se pueden omitir las llaves
let suma = (num1,num2) => num1 + num2;
console.log("Suma: "  + suma(8,
7))
    //Si solo hay un parámetro no hace falta paréntesis
let cuadrado = num => num*num;
console.log("Cuadrado: " + cuadrado(3))
    //Si hay más de una sentencia son necesarias las {} y el return
let sumarInteres = (precio,porcentaje)=>
{
    let interes = precio*porcentaje/100;
    return precio + interes;
}
console.log("Precio final: ", sumarInteres(100,
20));

    //Rest y spread para funciones
function getNotas(nombre,...notas)
{
    console.log("Las notas de " + nombre + " son " + notas)
}
getNotas("Juan",3);
getNotas("Silvia"3,10);
getNotas("María",3,9,8,10,11,-1);
getNotas();



// Métodos Arrays:

▪ unshift: Inserta todos los parámetros recibidos al principio del array.
▪ push: Inserta todos los parámetros recibidos al final del array
▪ shift: elimina la primera posición del array y la devuelve.
▪ pop: elimina la última posición del array y la devuelve.
▪ join: convierte un array a String. Además puede pasarle un carácter que se use como separador entre los elementos que están en las diferentes posiciones.
▪ concat: Usamos concat para unir dos arrays
▪ slice: Nos devuelve un subarray. Si le indicamos dos parámetros me devuelve desde el primer parámetro (posición de inicio incluida) hasta el segundo parámetro (posición final excluida). El array original no es modificado.
▪ splice: Elimina los elementos del array original y devuelve los elementos eliminados. Si además al final le indicamos nuevos valores, los inserta. El primer parámetro es la posición de inicio, el segundo el número de elementos a eliminar y por último se le pueden pasar nuevos elementos para el array en esa posición primeramente indicada.
▪ reverse: devuelve el array original invertido.



        // 	// esto es un comentario
        // 	/*esto es comentario
        // 	multilinea*/

//   // alerta en el navegador:
// 	 alert("Hola esto es una prueba año");
//   // escriba en pantalla:

//   document.write("Hola mundo!");

//   // escribir por consola:
//   console.log("escribo por consola");

//   // variables:
//   var edad = 25;
//   edad = edad+1;
//   var nombre = "Jose";
//   document.write("<br/>")
//   var nacimiento = 1995;
//   document.write("<br/>")
//   var lugar = "Alicante";
//   document.write("<br/>")

//   document.write(edad);
//   document.write("<br/>")
//   document.write(nombre);
//   document.write("<br/>")
//   document.write("Tu lugar y año de nacimiento es: " +nacimiento+" "+lugar);
//   document.write("<br/>")

//   // booleanos: true o false:
//   var suma = 5+5;
//   var suma1=5;
//   var suma2=4;
//   var total=suma1+suma2;

//   document.write(suma);
//   document.write("<br/>")
//   document.write(total);
//   document.write("<br/>")
//   document.write(suma1+suma2);
//   document.write("<br/>")

//   /* Operadores:
//   == igualdad
//   < menor que
//   > mayor que
//   <=
//   >=
//   +, -, *, /, % */

//   // Condicional:
//   if (condicion){
//   }
//   else if(condicion){
//   }

// 	// Bucle for:
// 	for(var x=0; x<5; x++){
// 		document.write("Hola mundo")
// 		document.write("<br/>")

// 	}

// 	// Arrays:
// 	var ciudades = ["Avila","Salamanca","Zamora","León"];
// 	//una forma de declarar el array
// 	var miarray = new Array(4);
// 	//se rellena asi:
// 	miarray[0] = "Avila"; miarray[1] = "Salamanca"; miarray[2] = "Zamora"; miarray[3] = "León";
// 	//otra forma de crear un array rellenandolo directamente
// 	var ciudades = new Array("Avila" , "Salamanca" , "Zamora" , "León");
// 	//otra forma de crear un array rellenandolo directamente
// 	var ciudades = ["Avila","Salamanca","Zamora","León"];
// 	//creo array mixto
// 	var miarraymixto = ["Avila" , 2 , 2.5 ,"Victor"];

// 	// Funciones básicas sin contenido:
// 	function saludo(){
// 		 document.write("hola equipo!<br/>"); 
// 	}

// 	saludo(); 

// 	// Otro ejemplo función:
// 	function imprimeNumeros(){
// 		for(var i=0; i<10;i++){
// 			document.write(i + " ");
// 		}
// 		document.write("<br/>");
// 	}

// 	imprimeNumeros();

// 	// Funciones con contenido de parámetro:
// 	function escribirBienvenida(nombre){ 
// 		document.write("<H1>Hola " + nombre + "</H1>"); 
// 	}

// 	escribirBienvenida("Jose");

// 	// Ejemplo función suma:
// 	function suma(operador1, operador2){
// 		document.write(operador1+ operador2);
// 	}

// 	suma(2, 3);

// 	// Ejemplo modulos prompt con función de parámetro:
// 	var numero1= Number(prompt("Escribe el primer número: "));
// 	var numero2= Number(prompt("Escribe el segundo número: "));

// 	suma(numero1, numero2);

// 	// Funciones con return:
// 	function media(valor1,valor2){ 
// 		var resultado 
// 		resultado = (valor1 + valor2) / 2 
// 		return resultado; 
// 	} 

// 	var miMedia; 
// 	miMedia = media(12,8); 

// 	document.write (miMedia);

// 	// for in:
//     var tamano = Number(prompt("dame numero"));
//     var miArray = new Array(tamano);

//     document.write("El tamaño de mi array es "+  miArray.length +  "<hr/>");

//     var ejemarray1 = new Array(8);
//     ejemarray1[5]=100;

//     for(var c in ejemarray1){
//         document.write(c + " " + ejemarray1[c]  +"<br/>");
//     }

//     document.write("<hr/>");

//     var ejemarray2 = [];

//     ejemarray2[2]=15;
//     document.write("tamaño " + ejemarray2.length  +"<br/>");

//     for(var i=0; i< ejemarray2.length; i++){
//         document.write(i + " " + ejemarray2[i] +"<br/>");
//     }

//     document.write("<hr/>");

//     for(celda in ejemarray2){
//         document.write(celda + " " + ejemarray2[celda]  +"<br/>");
//     }


//     var miArray3=[10,15,88,485,"armando"];
//     miArray3[1000]=10000;

//     for(celda in miArray3){
//         document.write(celda + " " + miArray3[celda]  +"<br/>");
//     }
//     document.write("<hr/>");

//     for(var i=0; i< miArray3.length; i++){
//         if(miArray3[i]!=undefined){
//             document.write(i + " " + miArray3[i] +"<br/>");
//         }
// 	}

// 	// Arrays asociativo
// 	var miArrayAsociativo=[];
//     miArrayAsociativo["nombre"]="Armando";
//     miArrayAsociativo["edad"]=36;
//     miArrayAsociativo["nif"]="11111111";
//     miArrayAsociativo["apellidos"]="Albert";

//     for(celda in miArrayAsociativo){
//         document.write(celda + " " + miArrayAsociativo[celda]  +"<br/>");
// 	}

// <!-- __________________________________________________________________________________________________________________________________________________________ -->
//                                                                        <!-- DOM -->

// Eventos:
/*
- Abort: evitar que no se cargue una imágen.
- Blur: cambiar el foco a otra parte de la ventana o fram.
- Click: devuelve al hacer click sobre aquello.
- Change: cuando cambia el valor de algo.
- Error: cuando hay un error.
- Focus: pasar el foco a otro elemento.
- Load: cuando se carga la página.
- Mouseout: no pasar el puntero del ratón.
- Mouseover: pasar el ratón por encima.
- Reset: cuando se resetea un formulario.
- Select: seleccionarun campo de entrada del formulario.
- Submit: cuando se envía un formulario.
- Unload: cuando se sale de la página.



// Acceso a los Nodos:

elemento = document.getElementsByTagName("div");
elemento2 = document.getElementsByName("nombre");
elemento3 = document.getElementById("elemento");

document.querySelector(“selector”);
ocument.querySelectorAll(“selector”);


// Propiedades:
- Node.ELEMENT_NODE: nombre de la etiqueta sin los <>.
- Node.TEXT_NODE: texto del nodo.
- Node.COMMENT_NODE: text del comentario.
- Node.DOCUMENT_TYPE_NODE: nombre de la etiqueta raíz del DOCTYPE.
- Node.DOCUMENT_NODE: #document null.

.attributes: array con los atributos de un HTML.
.className: acceder al atrobuto class.
.id: acceder al id.
.style: acceder al estilo.
.hasAttribute("attrName"): devuelve true si tiene un atributo con ese nombre.
.addEventListener("click" function(x)): añadir un evento.


- .firstChild   /   .lastChild  / childNodes.length    / childNodes[0]
/ .lastChild.firstChild   /   .parentNode.parentNode   /  .nextSibling


// Crear un Nodo:

var div = document.CreateElement("div");
var contenido = document.createTextNode("Hola Mundo");
div.appendChild(contenido);
document.body.appendChild(div);


// Eliminar un Nodo:
.removeChild(elemento);

// Reemplazar un nodo:
.replaceChild(nuevoElemento, viejoElemento);

// Acceso a los atributos:
nodo.style.atributo="";


// Propiedades:
nodo.propiedad(nombre, tipo, value, pattern, etc)="";
nodo.textContent="";


// Objetos:
// Eliminar una propiedad:
delete obj1.nombre;

// Crear un método:
obj1.saluda = function() { alert("hola"); }


// Timers:
.setTimeout(function, milisegundos, argumentos);
.cleartimeout(id);
.setInterval(function, milisegundos, argumentos);
.clearInterval(id);

.Location: info sobre la url actual.
.History: contiene páginas que hemos navegado.
.Document: árbol de HTML.


//setTimeout. Ejecuta la función pasados los milisegundos
function saludar()
{
    alert("Hola mundo")
}
setTimeout(saludar,
5000)

//setInterval. Ejecuta la función cada vez que pasen los milisegundos
let num =0;
/*function sumar()
{
    console.log(num++)
}
setInterval(sumar,1000)

let parar = 40;
function sumar2()
{
    console.log(num++)
    if (num == parar)
        clearInterval(idInterval)
}
let idInterval = setInterval(sumar2,
1000)

//Pasar argumentos a setInterval
function multiplicar(num1,num2)
{
    alert(num1*num2)
}

let num1 = prompt("Dime un número por favor");
let num2 = prompt("Dime otro")
setInterval(multiplicar,
1000,num1,num2)



let body = document.body;
let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

let capa = document.createElement("div");
container.appendChild(capa);
capa.id = "capa";
capa.textContent = "Ejercicio3";


document.querySelector("input").addEventListener("click", function() {
  //Podemos ver todos los atributos que tiene un nodo
  //console.log(document.querySelector("div").attributes)
  //Puedo acceder con el nombre del atributo o con el índice
  //console.log(document.querySelector("div").attributes["id"])
  //console.log(document.querySelector("div").attributes[1])
  //Podemos cambiar las propiedades CSS a través del atributo style
  //document.querySelector("main").style.backgroundColor = "blue"
  //Podemos asignar clases ya creadas en mi hoja de estilos con className
  //Recupero párrafo aleatorio
    let aleatorio = Math.floor(Math.random() * 6) + 1
    let parrafo = document.querySelector("p:nth-child(" + aleatorio + ")")

    //Le asigno una clase aleatoria
    let aleatoria = Math.floor(Math.random() * 3) + 1
    parrafo.className = "clase" + aleatoria
    console.log(parrafo.className)
})


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
parrafo.parentElement.replaceChild(capa, parrafo);

//Por último cambio la opción seleccionada
document.querySelector("select").selectedIndex = 2;


//Añadir un elemento a la lista. En este ejemplo está puesto con un evento. Aún no has dado eventos pero puedes ir familiarizándote por la sintaxis (se explica un poco más adelante en la teoría).
document.querySelector("input").addEventListener("click", function(event) {
  //Obtiene la lista que deseamos. En nuestro caso la primera lista. Recuerda que puedes usar querySelector u otro de los métodos de selección de elementos del dom.
    let ul = document.getElementsByTagName("ul")[
    0
  ];

    //Escoge el tercer elemento. Podríamos usar otra vez querySelector, pero usamos las relaciones de parentesco.
    let li3 = ul.children[
    2
  ];

    //Crea un eleemnto en la lista. Creamos un nodo nuevo, queremos que sea un elemento li.
    let newLi3 = document.createElement("li");

    //Le asigna un texto nuevo. Le insertamos texto
    newLi3.textContent = "Soy el tercer elemento";

    //Lo inserta antes del elemento actual.
    ul.insertBefore(newLi3, li3);

    //Cambia el texto del antiguo tercer elemento
    li3.textContent = "Soy el cuarto elemento...";
})


/*Selecciona todos los a dentro de div1 pero al estar usando querySelector sólo me retorna el primero. Accede a su atributo title e imprime Hola Mundo
console.log("Título: " + document.querySelector("#div1 a").title);

/*Selecciona todos los a dentro de div1 pero al estar usando querySelector sólo me retorna el primero. Accede a su atributo title e imprime Hola Mundo Contenido
console.log("TextContent: " + document.querySelector("#div1 a").textContent);


/*No selecciona ningún nodo, pues no hay ningún hijo directo de div1 que sea a. Cuando intenta acceder a la propiedad title da error puesto que no existe title para el tipo de datos null
console.log("Selector CSS incorrecto: " + document.querySelector("#div1 > a"))
    //console.log(document.querySelector("#div1 > a").title);
/*Selecciona un nodo por selector CSS de atributo. En este caso dentro de los dos nodos con clase enlaceNormal, selecciona aquel cuyo atributo tittle comienza por la cadena adiós
console.log(document.querySelector(".enlaceNormal[title^='Adiós']").title);

/*Selecciona todos los nodos que cumplen el selector CSS. En este caso todos los que su atributo class tiene el valor de enlaceEspecial.Después recorremos los elementos del array con el método forEach y de cada uno sacamos el valor de su contenido
let enlaces = document.querySelectorAll(".enlaceNormal");
enlaces.forEach(function(elem) {
    console.log(elem.textContent);
});




/*Uso las relaciones de parentesco para acceder a la información:
  - Desde document, objeto global, voy al nodo llamado body. El primer hijo de body es div, su primer hijo es p, y nodeName es una propiedad que contiene el nombre de la etiqueta (mirar diapositiva 17)
alert(document.body.firstChild.firstChild.nodeName)
    /*Haz una prueba y pon un intro entre body y div y observa a ver qué pasa. Los \n y los comentarios también formarán parte del árbol, por lo que habría que cambiar el path para acceder al nodo que queramos. ¡Con esto debemos tener cuidado!
/*Volviendo a quitar el intro anterior, pues los ejemplos están preparados sin ese salto de línea, de esta manera podemos acceder al contenido del nodo.
alert(document.body.firstChild.firstChild.firstChild.nodeValue)


'use strict'

/*Recuperamos todas las imágenes con el método querySelectorAll. Este método nos devuelve un array con todos los elementos imágenes. Recorremos el array con el método forEach y le añadimos el evento click. Al producirse esta interacción, el usuario hace click, se ejecuta la función muestra color.
document.querySelectorAll("img").forEach(n => n.addEventListener("click", MuestraColor))

/*Esta función accede al elemento con this y muestra el valor de su atributo alt
function MuestraColor() {
    alert(this.alt)
}


let lista = document.querySelector("ul");


lista.addEventListener("mouseover", function(e) {
    let n = e.target;
    if (n.nodeName === "IMG") {
        n.className = "borde";
  }
});

lista.addEventListener("mouseout", function(e) {
    let n = e.target;
    if (n.nodeName === "IMG") {
        n.className = "sinBorde";
  }
}, false);


function cambiarImagen() {
    var fotos = document.getElementsByTagName('img');
    fotos[
    0
  ].src = 'https: //i.blogs.es/5e9f97/captura-de-pantalla-2020-04-05-a-las-18.39.45/450_1000.png';
}

function cambiar() {
    var r = document.getElementById("renault");
    var c = document.getElementById("citroen");
    var sm = document.getElementById("selectorMarca");
    var marca = sm.value;

    if (marca == "Renault") {
        r.style.display = "block";
        c.style.display = "none";
  } else {
        r.style.display = "none";
        c.style.display = "block";
  }
}


function inicial() {
  //alert("Esto es un alert puesto en la funcion del evento inicio");
  //alert("Este es el texto de explanation: " + document.getElementById("explanation").innerHTML);
    dameHora()
    setInterval(dameHora,
  1000);

    colorSubtitulo = document.getElementById("subtitulo").style.color = "red";
}

function cambiarSubtitulo() {
    botonCambiarSubtitulo = document.getElementById("subtitulo").innerHTML = "Este es el subtitulo";
}

function cambiarDiv() {
    explanation = document.getElementById("explanation").innerHTML;
    participation = document.getElementById("participation").innerHTML;

    document.getElementById("explanation").innerHTML = participation;
    document.getElementById("participation").innerHTML = explanation;
}

function cambiarTitulo() {
    botonCambiarTitulo = document.getElementById("subtitulo").innerHTML = "Este es mi titulo";
}

function dameHora() {
    var fecha = new Date();
    var fechaActual = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" +
        fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    document.getElementById("hora").innerHTML = fechaActual;
}

function insertarImagenes() {
    imagenNueva = document.getElementById("imagenes").innerHTML = "<img id='imagenAnadida' src='imagenes/imagen.jpg'/>"
}

function reducirImagenes() {
    imagenNueva = document.getElementById("imagenAnadida")
    imagenNueva.style.width = "100px";
}

function ocultarParticipation() {
    participation = document.getElementById("participation");
    participation.style.display = "none";
}

function mostrarParticipation() {
    participation = document.getElementById("participation");
    participation.style.display = "block";
}

function clickP1() {
    parrafo1 = document.getElementById("parra1");
    if (parrafo1.style.display == "none") {
        parrafo1.style.display = "block";
  } else {
        parrafo1.style.display = "none";
  }
}

function validar() {
    var errorNombre = document.getElementById("errornombre");
    errorNombre.innerHTML = "";
    var errorEmail = document.getElementById("erroremail");
    errorEmail.innerHTML = "";
    var resultado = true;

    var nom = document.getElementById("nombre");
    if (nom.value.length < 5) {
        errorNombre.innerHTML = "El nombre tiene que contener al menos 5 letras.";
        document.getElementById("nombre").style.border = "1px solid red"
        resultado = false;
  }

    var email = document.getElementById("email");
    if (email.value.indexOf("@") < 3) {
        errorEmail.innerHTML = "Introduzca un email correcto.";
        document.getElementById("email").style.border = "1px solid red"
        resultado = false;
  }
    return resultado;
}

function ocultarMenu(enlace) {
    enlaces = document.getElementsByTagName("a");
    enlaces[enlace
  ].style.display = "none";
}


*/



// <!-- __________________________________________________________________________________________________________________________________________________________ -->
//                                                                        <!-- AJAX -->
/*

if (window.XMLHttpRequest) { // Mozilla, Safari, ... peticion =
new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
peticion = new ActiveXObject("Microsoft.XMLHTTP");
}
Decir a qué función se debe llamar cuando éste responda
//Observar que es solo el nombre, sin ( )
peticion.onreadystatechange = nombreDeLaFuncion


function loadLDocA(fichero, tipo) {
    let http = new XMLHttpRequest(); //Se crea petición al servidor
    http.open("GET", fichero, true); //Se pide procesar el fichero. Continua la ejecución hasta recibir la respuesta
    //http.setRequestHeader("Content-type", "text/xml");
    http.send();
    http.addEventListener('load', (event) => { //Cuando se reciba la respuesta, se ejecuta esta función
        if (http.status === 200) {
            if (tipo == "xml") {
                gestionarFicheroXML(http.responseXML)
      } else
                gestionarFicheroTXT(http.responseText)
    }
  })
}



function gestionarFicheroXML(xmlDoc) {

    alert(xmlDoc.getElementsByTagName('alumno')[
    0
  ].firstChild.nodeValue)
    alert(xmlDoc.getElementsByTagName('alumnos')[
    0
  ].childNodes[
    1
  ].firstChild.nodeValue)

    document.getElementById('ficheroXML').innerHTML += "<b>" + xmlDoc.querySelector('alumno:nth-child(2)').textContent + "</b>"
}

document.querySelector("div:nth-child(1)").addEventListener("click", () => {

    let xmlDoc = loadLDocA("leerFicheroXML.xml",
  "xml");
})

*/
/*
<!-- __________________________________________________________________________________________________________________________________________________________ -->









<!-- __________________________________________________________________________________________________________________________________________________________ -->
<!-- __________________________________________________________________________________________________________________________________________________________ -->

//------------------------------------------------//------------------------------------------------

                                                                        // EJEMPLOS


let body = document.body;
let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

let capa = document.createElement("div");
container.appendChild(capa);
capa.id = "capa";
capa.textContent = "Ejercicio3";


email.pattern = "[A-Za-z0-9\.]+@iesdoctorbalmis.com";
email.required = true;

passw.pattern = "[0-9]{8}";
passw.required = true;


#contenedor {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%,
  -50%);
}

<!-- __________________________________________________________________________________________________________________________________________________________ -->


window.addEventListener("load", function() { setInterval(cargarTXT,1000);
  }, true);

function cargarTXT() {
    let httpAjax = new XMLHttpRequest();

    httpAjax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) Gestiona(this);
  };
    httpAjax.open("GET",
  "leerTXT.txt", true);
    httpAjax.send();
}

contador = 0;
Emisor = "Emisor";
Receptor = "Receptor";


function Gestiona(TXT) {
    contenedor = document.getElementById("contenedor");

    let mensajesTXT = TXT.responseText;
    let mensajes = mensajesTXT.split(/\r\n|\n/);
    let numMensajesTotales = mensajes.length;
    let numMensajesNuevos = numMensajesTotales - contador;
    mensajesNuevos = mensajes.slice(contador);


    mensajesNuevos.forEach((mensaje) => {
        let parrafoMensaje = document.createElement("p");
        let textoMensaje = document.createTextNode(mensaje);
        parrafoMensaje.appendChild(textoMensaje);
        contenedor.appendChild(parrafoMensaje);
        if (mensaje.split("@@@")[
      0
    ] == Emisor)
            parrafoMensaje.classList.add("emisor");
        else if (mensaje.split("@@@")[
      0
    ] == Receptor)
            parrafoMensaje.classList.add("receptor");
  });
    contador = contador + numMensajesNuevos;
}


<!-- __________________________________________________________________________________________________________________________________________________________ -->
* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

header {
    display: flex;
    max-width: 100vw;
    min-height: 15vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: burlywood;
}

main {
    display: flex;
    max-width: 100vw;
    min-height: 70vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: darkkhaki;
}

footer {
    display: flex;
    max-width: 100vw;
    min-height: 12vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: aquamarine;
}

#formulario1 {
    width: 300px;
    height: 280px;
    background-color: crimson;
    margin: auto;
    border-radius: 5px;
    color: whitesmoke;
    font-weight: bold;
    font-size: 8pt;
}

.tabla {
    display: table
}

.fila {
    display: table-row;
}

.titulo {
    padding: 5px;
    text-align: center;
}

#name,
#direccion,
#fecha,
#contraseña {
    display: table-cell;
    padding: 3px;
    margin-top: 5px;
    margin-left: 3px;
    margin-bottom: 10px;
    border-radius: 5px;
    width: 150px;
}

article {
    padding: 5px;
}

aside {
    padding: 5px;
}

#formulario1 label {
    display: table-cell;
    padding-left: 15px;
    padding-right: 0px;
    text-align: right;
}

.boton {
    display: block;
    text-align: center;
    margin-top: 15px;
}

.titulo1 {
    padding: 5px;
    text-align: center;
    font-size: 12px;
}

#formulario2 {
    color: #FFFFFF;
    width: 300px;
    height: 280px;
    padding: 10px 5px 10px 10px;
    border-radius: 10px;
    margin: auto;
    background-color: #504BFA;
    box-shadow: 5px 8px 14px -6px rgba(255,
  250,
  255,
  1);
    font-size: 10px;
    position: relative;
}

#name1,
#direccion1,
#fecha1,
#contraseña1 {
    width: 150px;
    padding: 3px 10px;
    border: 1px solid #f6f6f6;
    border-radius: 3px;
    background-color: #f6f6f6;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
}

#direccion1 {
    margin-left: 74px;
}

#name1 {
    margin-left: 30px;
}

#fecha1 {
    margin-left: 20px;
}

#contraseña1 {
    margin-left: 63px;
}

#formulario2 label {
    display: inline-block;
}

#boton1 {
    display: inline;
    position: relative;
    margin-top: 15px;
    margin-left: 100px;
}
<!-- __________________________________________________________________________________________________________________________________________________________ -->

            <form id="formulario1">
                <div class="titulo">
                    <p>FORMULARIO</p>
                </div>
                <div class="tabla">
                    <div class="fila">
                        <label for="nombre">Nombre y apellidos: </label>
                        <input type="text" id="name" name="nombre" required>
                    </div>
                    <div class="fila">
                        <label for="direccion">Direccion: </label>
                        <input type="text" id="direccion" name="direccion" required>
                    </div>
                    <div class="fila">
                        <label for="fecha">Fecha de Nacimiento: </label>
                        <input type="date" id="fecha" name="fecha" required>
                    </div>
                    <div class="fila">
                        <label for="contraseña">Contraseña: </label>
                        <input type="password" id="contraseña" name="contraseña" required>
                    </div>
                </div>
                <div class="boton">
                    <input type="button" id="boton" value="Registro">
                </div>
            </form>


<!-- __________________________________________________________________________________________________________________________________________________________ -->

*{
    font-size: 10pt;
    font-family: Arial, Helvetica, sans-serif
}

#inicio
{
    display: flex;
    max-width: 100vw;
    min-height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

#formulario {
    background: linear-gradient(to bottom right, rgb(2,
  75,
  47), rgb(116,
  250,
  172));
    width: 350px;
    height: 350px;
    border-radius: 8px;
    border: rgb(54,
  90,
  250) 4px solid;
    color:whitesmoke;
    font-weight: bold;
    font-size: 10pt;
}

#formulario label
{
    display: table-cell;
    padding-left: 15px;
    padding-right: 0px;
    text-align: right;
}

.tabla
{
    display:table;
    margin-top: 90px;
    margin-left: 30px;
}

.fila
{
    display:table-row;
}

#email, #contraseña
{
    display: table-cell;
    padding: 3px;
    margin-top: 15px;
    margin-left: 3px;
    margin-bottom: 10px;
    border-radius: 5px;
    width: 150px;
}

#boton
{
    display:block;
    text-align: center;
    margin-top: 25px;
    position: absolute;
    margin-left: 120px;
    font-size: 18px;
    background-color: rgb(54,
  90,
  250);
    color:white;
    border-radius: 4px;
}

form input[type="email"
]:invalid
{
    background: linear-gradient(to top left, rgb(250,
  120,
  148), rgb(161,
  6,
  45));
}

form input[type="email"
]:valid
{
    background: linear-gradient(to bottom right, rgb(140,
  141,
  141), rgb(69,
  70,
  69));
}

form input[type="password"
]:invalid
{
    background: linear-gradient(to top left, rgb(250,
  120,
  148), rgb(161,
  6,
  45));
}

form input[type="password"
]:valid
{
    background: linear-gradient(to bottom right, rgb(140,
  141,
  141), rgb(69,
  70,
  69));
}

<!-- __________________________________________________________________________________________________________________________________________________________ -->

<button type="button" onclick="loadDoc()">Get my CD collection</button>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET",
  "cd_catalog.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[
      0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
</script>


<!-- __________________________________________________________________________________________________________________________________________________________ -->


* {
    font-family: Arial;
    margin: 1%;
    padding: 1%;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
}

#container {
    display: table;
    align-items: center;
    justify-content: center;
    background-color: rgb(6,
  76,
  155);
    border: 2px solid rgba(173,
  181,
  196,
  0.9);
    border-radius: 5px;
}

#tr {
    display: table-row;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
    text-align: center;
    color: white;
}
/* #tr {
    display: inline-block;
    max-width: 100vw;
    align-items: center;
    justify-content: center;
    border: 5px solid white;
    text-align: center;
    border-collapse: separate;
    border-spacing: 50px 5px;
}

#td {
    display: table-cell;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
    text-align: center;
    color: white;
}

#bajo {
    display: table-cell;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
    text-align: center;
    color: white;
    background-color: red;
}


<!-- __________________________________________________________________________________________________________________________________________________________ -->

function leerXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarXML(this);
    }
  };
    xhttp.open("GET",
  "libros.xml", true);
    xhttp.send();
}

function cargarXML(xml) {
    var xmlDoc = xml.responseXML;
    var encabezado = "<div id='tr'><div div id = 'td' > ISBN</div><div id='td'>Titulo</div><div id='td'>NivelProfundidad</div><div id='td'>Autores</div><div id='td'>Autores</div><div id='td'>FechaPublicacion</div><div id='td'>PaginaWeb</div><div id='td'>Precio</div></div>";
    var libro = xmlDoc.getElementsByTagName("libro");
    for (var i = 0; i < libro.length; i++) {
        encabezado += "<div id='tr'><div id='td'>" +
            libro[i].getElementsByTagName("ISBN")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("nivelProfundidad")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("autor")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("editorial")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("fechaPublicacion")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("paginaWeb")[0].childNodes[0].nodeValue +
            "</div><div id='td'>" +
            libro[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue +
            "</div></div><br>";
  }
    document.getElementById("container").innerHTML = encabezado;

    var precio = document.getElementsByTagName("precio")[0].childNodes[0
  ]
    precio.id = "bajo";
    // var min = precio[0];
  // for (var i = 0; i < precio.length; i++) {
  //     if (precio[i] < min) {
  //         console.log('Anterior minimo: ' + min + ', nuevo minimo: ' + precio[i]);
  //         min = precio[i];
  //     }
  // }
  // console.log('Valor mínimo: ' + min);
}

<!-- __________________________________________________________________________________________________________________________________________________________ -->


let body = document.body;
let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

let capa = document.createElement("div");
container.appendChild(capa);
capa.id = "capa";
capa.textContent = "Ejercicio3";

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
capa.style.marginTop = "150px"
capa.style.textAlign = "center";

capa.style.border = "2px solid blue";
capa.style.width = "50%";
capa.style.height = "50%";
capa.style.borderRadius = "10px";

capa.style.background = "linear-gradient(to right, lightgray, lightblue)";

capa.innerHTML += "<br><br>";
let formulario = document.createElement("form");
capa.appendChild(formulario);
formulario.id = "formulario";


let email = document.createElement("input");
formulario.appendChild(email);
email.type = "email";
email.id = "email";
email.placeholder = "Email";
email.setAttribute("required",
"");
email.pattern = ".+@iesdoctorbalmis.com"

let contrasena = document.createElement("input");
formulario.appendChild(contrasena);
contrasena.type = "password";
contrasena.id = "contrasena";
contrasena.placeholder = "Contraseña";
contrasena.setAttribute("required",
"");
contrasena.setAttribute("minlength",
"8");


let enviar = document.createElement("input");
formulario.appendChild(enviar);
enviar.type = "submit";
enviar.id = "enviar";

formulario.addEventListener("submit", validar);
// formulario.onsubmit = "return validar();";

function validar(event) {
    event.preventDefault();
    let contrasena2 = document.getElementById("contrasena").value;
    let resultado = true;
    if (isNaN(contrasena2) || contrasena2.length != 8) {
        document.getElementById("contrasena2").style.backgroundColor = "lightgray";
        document.getElementById("contrasena2").style.borderRightColor = "gray";
        document.getElementById("contrasena2").style.borderBottomColor = "gray";
        resultado = false;
  } else {
        document.getElementById("contrasena2").style.backgroundColor = "lightcoral";
        document.getElementById("contrasena2").style.borderLeftColor = "darkred";
        document.getElementById("contrasena2").style.borderTopColor = "darkred";
  }
    return resultado;
};



<!-- __________________________________________________________________________________________________________________________________________________________ -->


function validar() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var contrasena2 = document.getElementById("contrasena2").value;
    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;

    var error = document.getElementById("error");
    error.innerHTML = "";
    var resultado = true;

    debugger;
    if (esMinuscula(usuario.charAt(0))) {
        error.innerHTML += "La primera letra del usuario tiene que ser mayúscula" + "<br>";
        document.getElementById("usuario").style.border = "1px solid red";
        resultado = false;
  } else document.getElementById("usuario").style.border = "2px solid green";

    var ultimoCaracter = usuario.charAt(usuario.length - 1);
    if (isNaN(ultimoCaracter)) {
        error.innerHTML += "El usuario tiene que terminar en número." + "<br>";
        document.getElementById("usuario").style.border = "1px solid red";
        resultado = false;
  } else document.getElementById("usuario").style.border = "2px solid green";

    if (contrasena.length != 8) {
        error.innerHTML += "La contraseña tiene que tener 8 caracteres." + "<br>";
        document.getElementById("contrasena").style.border = "1 px solid red";
        resultado = false;
  } else document.getElementById("contrasena").style.border = "2px solid green";

    if (isNaN(contrasena.charAt(0))) {
        error.innerHTML += "El primer caracter tiene que ser un número" + "<br>";
        document.getElementById("contrasena").style.border = "1px solid red";
        resultado = false;
  } else document.getElementById("contrasena").style.border = "2px solid green";

    var ultimoCaracterPas = contrasena.charAt(contrasena.length - 1);
    if (esMinuscula(ultimoCaracterPas)) {
        error.innerHTML = "La contraseña tiene que terminar en mayúscula" + "<br>";
        document.getElementById("contrasena").style.border = "1px solid red";
        resultado = false;
  } else document.getElementById("contrasena").style.border = "2px solid green";

    if (contrasena2 != contrasena) {
        error.innerHTML += "Las contraseñas tienen que coincidir" + "<br>" + "<br>";
        document.getElementById("contrasena2").style.border = "1px solid red";
        resultado = false;
  } else document.getElementById("contrasena").style.border = "2px solid green";

    if (esMinuscula(nombre.charAt(0))) {
        error.innerHTML += "El nombre tiene que empezar por mayúscula" + "<br>";
        document.getElementById("nombre").style.border = "1px solid red";
        resultado = false;
  } else document.getElementById("nombre").style.border = "2px solid green";

    if (esMinuscula(apellidos.split(' ')[
    0
  ].charAt(0))) {
        error.innerHTML = "Los apellidos han de empezar por mayúscula" + "<br>";
        document.getElementById("apellidos").style.border = "1px solid red";
        resultado = false;
  } else document.getElementById("apellidos").style.border = "2px solid green";

    if (isNaN(telefono)) {
        error.innerHTML += "El teléfono debe ser numérico" + "<br>";
        document.getElementById("telefono").style.border = "1px solid red";
        resultado = false;
  } else document.getElementById("telefono").style.border = "2px solid green";

    if (telefono.charAt(0) != 6 && telefono.charAt(0) != 7 && telefono.charAt(0) != 9) {
        error.innerHTML += "El primer número del teléfono tiene que ser 6, 7 o 9" + "<br>";
        document.getElementById("telefono").style.border = "1px solid red";
        resultado = false;
  } else document.getElementById("telefono").style.border = "2px solid green";

    if (isNaN(edad)) {
        error.innerHTML += "La edad debe ser numérica" + "<br>";
        document.getElementById("edad").style.border = "1px solid red";
        resultado = false;
  } else document.getElementById("edad").style.border = "2px solid green";

    return resultado;
}

function esMinuscula(letra) {
    return letra === letra.toLowerCase();
}

<!-- __________________________________________________________________________________________________________________________________________________________ -->

function loadDocA(fichero,tipo)
{
    let http = new XMLHttpRequest(); //Se crea petición al servidor
    http.open("GET",fichero,true); //Se pide procesar el fichero. Continua la ejecución hasta recibir la respuesta
    //http.setRequestHeader("Content-type", "text/xml");
    http.send();
    http.addEventListener('load', (event) => { //Cuando se reciba la respuesta, se ejecuta esta función
        if(http.status === 200) {
            if(tipo == "xml")
            {
                gestionarFicheroXML(http.responseXML)
      }
            else
			    gestionarFicheroTXT(http.responseText)
    }
  })
}


function  gestionarFicheroTXT(txt)
{
  let lineas = txt.split("-")
  for(let i of lineas)
    document.querySelector("div:nth-child(2)").innerHTML += "<p>" + i + "</p>"
}

document.querySelector("div:nth-child(1)").addEventListener("mouseover",()=>{
 loadLDocA("leerFicherotxt.txt",
  "txt");
})

function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let alumnos = xmlDoc.querySelectorAll("alumno")
	for(let i=0; i<alumnos.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + alumnos[i
  ].textContent + "</p>"
}

let capa = document.querySelector("div:nth-child(1)")
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("leerFicheroXML.xml",
  "xml");
}

<!-- __________________________________________________________________________________________________________________________________________________________ -->



let contenedor = document.getElementById("contenedor");

function creaObjetoAjax() {
    var obj;
    if (window.XMLHttpRequest) {
        obj = new XMLHttpRequest();
  } else {
        obj = new ActiveXObject(Microsoft.XMLHTTP);
  }
    return obj;
}

docTxtEmisor = creaObjetoAjax();
docTxtEmisor.open("GET",
"emisor.txt", true);
docTxtEmisor.onreadystatechange = cargarTXTemisor;
docTxtEmisor.send();


docTxtReceptor = creaObjetoAjax();
docTxtReceptor.open("GET",
"receptor.txt", true);
docTxtReceptor.onreadystatechange = cargarTXTreceptor;
docTxtReceptor.send();

function cargarTXTemisor() {
    if (docTxtEmisor.readyState == 4 && docTxtEmisor.status == 200) {
        texto = docTxtEmisor.responseText;

        let divEmisor = document.createElement("div");
        contenedor.appendChild(divEmisor);
        divEmisor.id = "emisor";

        textoEmisor = document.getElementById("emisor");
        textoEmisor.innerHTML = texto + "<br/>";
  }
}

function cargarTXTreceptor() {
    if (docTxtReceptor.readyState == 4 && docTxtReceptor.status == 200) {
        texto2 = docTxtReceptor.responseText;

        let divReceptor = document.createElement("div");
        contenedor.appendChild(divReceptor);
        divReceptor.z = "receptor";

        textoReceptor = document.getElementById("receptor");
        textoReceptor.innerHTML = texto2 + "<br/>";
  }
}

function reCargar() {
    recargarEmisor = cargarTXTemisor();
    recargarReceptor = cargarTXTreceptor();
}

setInterval(reCargar,
10000);


<!-- __________________________________________________________________________________________________________________________________________________________ -->


window.addEventListener("load", Carga, true);

function Carga() {
    misLibrerias = document.getElementById("librerias");
    let solicitud = new XMLHttpRequest();

    solicitud.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            Gestiona(this)
  };
    solicitud.open("GET",
  "libros.xml", true);
    solicitud.send();
}

function Gestiona(XML) {
    let ficheroXML = XML.responseXML;
    let librerias = ficheroXML.getElementsByTagName("libreria");

    for (let i = 0; i < librerias.length; i++) {
        let tabla = document.createElement("div");
        tabla.classList.add("tabla")
        misLibrerias.appendChild(tabla);

        let nombreLibreria = librerias[i
    ].getElementsByTagName("nombre");
        let filaNombre = CreaFilaNombreApartirDe(nombreLibreria);
        filaNombre.classList.add("fila");
        tabla.appendChild(filaNombre);

        let libros = librerias[i
    ].getElementsByTagName("libro");
        let nodosDeUnLibro = libros[
      0
    ].childNodes;

        let cabeceraLibreria = CreaFilaCabeceraAPartirDe(nodosDeUnLibro);
        cabeceraLibreria.classList.add("fila");
        tabla.appendChild(cabeceraLibreria);

        let precioMinimo = Number.MAX_VALUE;
        let libroPrecioMinimo;

        for (let i = 0; i < libros.length; i++) {
            let fila = document.createElement("div");
            fila.classList.add("fila");
            tabla.appendChild(fila);

            let nodosLibro = libros[i
      ].childNodes;
            nodosLibro.forEach(nodoLibro => {
                if (nodoLibro.nodeType == 1) {
                    let celda = CreaCeldaAPartirDe(nodoLibro);
                    celda.classList.add("celda");
                    fila.appendChild(celda);
        }
                if (nodoLibro.nodeName == "precio") {
                    let precioLibro = nodoLibro.childNodes[
            0
          ].nodeValue;
                    if (precioLibro < precioMinimo) {
                        precioMinimo = precioLibro;
                        libroPrecioMinimo = fila;
          }
        }
      });
    };
        libroPrecioMinimo.id = "precioMinimo";
  };
}

function CreaFilaNombreApartirDe(nombreLibreria) {
    let fila = document.createElement("div");
    fila.innerHTML = "Libreria " + nombreLibreria[
    0
  ].textContent;
    return fila;
}

function CreaFilaCabeceraAPartirDe(nodosDeUnLibro) {
    let fila = document.createElement("div");

    nodosDeUnLibro.forEach((nodoDeUnLibro) => {
        if (nodoDeUnLibro.nodeType == 1) {
            let celda = document.createElement("div");
            celda.classList.add("celda");
            fila.appendChild(celda);
            let texto = nodoDeUnLibro.tagName;
            celda.innerHTML = texto;
    }
  });
    return fila;
}

function CreaCeldaAPartirDe(elementoLibro) {
    let celda = document.createElement("div");
    let texto = document.createTextNode(elementoLibro.childNodes[
    0
  ].nodeValue);
    celda.appendChild(texto);

    elementoLibro.childNodes.forEach((nodoEnElementoLibro) => {
        if (nodoEnElementoLibro.nodeType == 1) {
            let subcelda = document.createElement("div");
            subcelda.classList.add("subcelda");
            celda.appendChild(subcelda);
            let textoSubcelda = document.createTextNode(nodoEnElementoLibro.childNodes[
        0
      ].nodeValue);
            subcelda.appendChild(textoSubcelda);
    }
  });
    return celda;
}



<!-- __________________________________________________________________________________________________________________________________________________________ -->

#librerias {
    display: flex;
    flex-direction: column;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50vh;
    width: 90vw;
    justify-content: space-around;
    align-items: stretch;
}

.tabla {
    display: table;
    font-size: 17px;
    margin: 20px;
}

.fila {
    display: table-row;
}

.fila>:nth-child(1) {
    min-width: 120px;
}

.fila>:nth-child(2) {
    min-width: 355px;
}

.fila>:nth-child(4) {
    min-width: 110px;
}

.fila>:nth-child(5) {
    min-width: 410px;
}

.fila>:nth-child(7) {
    min-width: 310px;
}

.celda {
    padding: 0px 10px 0px 5px;
    display: table-cell;
    border: 1px solid;
}

#precioMinimo {
    background-color: rgb(240,
  197,
  194);
}

<!-- __________________________________________________________________________________________________________________________________________________________ -->

numMensajesLeidos = 0;
idEmisor = "Frodo";
idReceptor = "Gandalf";


window.addEventListener("load", function() { setInterval(LeerTXT,
  3000);
}, true);

function LeerTXT() {
    let solicitud = new XMLHttpRequest();

    solicitud.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) Gestiona(this);
  };
    solicitud.open("GET",
  "mensajes.txt", true);
    solicitud.send();
}

function Gestiona(TXT) {
    divMensajes = document.getElementById("mensajes");

    let textoCompleto = TXT.responseText;
    let mensajes = textoCompleto.split(/\r\n|\n/);
    let numMensajesTotales = mensajes.length;
    let numMensajesNuevos = numMensajesTotales - numMensajesLeidos;
    mensajesNuevos = mensajes.slice(numMensajesLeidos);

    divTitulo = document.getElementById("titulo");
    divTitulo.innerText = "Conversación con " + idEmisor;

    mensajesNuevos.forEach((mensaje) => {
        let parrafoMensaje = document.createElement("p");
        let textoMensaje = document.createTextNode(mensaje);
        parrafoMensaje.appendChild(textoMensaje);
        divMensajes.appendChild(parrafoMensaje);
        if (mensaje.split(":")[
      0
    ] == idEmisor)
            parrafoMensaje.classList.add("mensaje_emisor");
        else if (mensaje.split(":")[
      0
    ] == idReceptor)
            parrafoMensaje.classList.add("mensaje_receptor");
  });
    numMensajesLeidos = numMensajesLeidos + numMensajesNuevos;
}

<!-- __________________________________________________________________________________________________________________________________________________________ -->

#lector_mensajes {
    display: flex;
    flex-direction: column;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90vh;
    width: 30vw;
    background-color: #03151d;
    border-radius: 10px;
}

#titulo {
    display: flex;
    padding-left: 20px;
    align-items: center;
    height: 30px;
    font-size: 1.2em;
    font-weight: bolder;
    margin-top: 15px;
    color: #91aaae;
    background-color: #243035;
    color: white;
}

#titulo:nth-child(2) {
    padding-left: 10px;
}

#mensajes {
    margin: 30px;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    margin: 10px 10px;
    border-radius: 10px;
    overflow-y: auto;
}

.mensaje_emisor {
    background-color: #243035;
    align-self: flex-start;
    margin-left: 10px;
    color: white;
    padding: 7px;
    border-radius: 10px;
    max-width: 65%;
}

.mensaje_receptor {
    align-self: flex-end;
    background-color: #370626;
    max-width: 65%;
    margin-right: 10px;
    color: white;
    padding: 7px;
    border-radius: 10px;
}


<!-- __________________________________________________________________________________________________________________________________________________________ -->


window.addEventListener("DOMContentLoaded", Comienza, false);

function Comienza() {
    let formulario = CreaFormulario();
    document.body.appendChild(formulario);
    let [labelEmail, inputEmail
  ] = CreaCampoEmail();
    formulario.append(labelEmail, inputEmail);
    let [labelContraseña, inputContraseña
  ] = CreaCampoContraseña();
    formulario.append(labelContraseña, inputContraseña);
    let boton = CreaBotonEnviar();
    formulario.appendChild(boton);

    AlañadeEstilos();
    boton.addEventListener('click', Valida);
}

function AlañadeEstilos() {

    css = document.styleSheets[
    0
  ];
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
    return [label, input
  ];
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

    return [label, input
  ];
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



<!-- __________________________________________________________________________________________________________________________________________________________ -->



function inicial(){
  //alert("Esto es un alert puesto en la funcion del evento inicio");
  //alert("Este es el texto de explanation: " + document.getElementById("explanation").innerHTML);
	dameHora()
	setInterval(dameHora,
  1000);

	colorSubtitulo=document.getElementById("subtitulo").style.color="red";
}

function cambiarSubtitulo(){
	botonCambiarSubtitulo=document.getElementById("subtitulo").innerHTML="Este es el subtitulo";
}

function cambiarDiv(){
	explanation=document.getElementById("explanation").innerHTML;
	participation=document.getElementById("participation").innerHTML;

	document.getElementById("explanation").innerHTML=participation;
	document.getElementById("participation").innerHTML=explanation;
}

function cambiarTitulo(){
	botonCambiarTitulo=document.getElementById("subtitulo").innerHTML="Este es mi titulo";
}

function dameHora(){
	var fecha = new Date();
	var fechaActual= fecha.getDate() + "/" + (fecha.getMonth()+1)+ "/"
					+ fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
	document.getElementById("hora").innerHTML= fechaActual;
}

function insertarImagenes(){
	imagenNueva=document.getElementById("imagenes").innerHTML="<img id='imagenAnadida' src='imagenes/imagen.jpg'/>"
}

function reducirImagenes(){
	imagenNueva=document.getElementById("imagenAnadida")
	imagenNueva.style.width="100px";
}

function ocultarParticipation(){
	participation=document.getElementById("participation");
	participation.style.display="none";
}

function mostrarParticipation(){
	participation=document.getElementById("participation");
	participation.style.display="block";
}

function clickP1() {
    parrafo1 = document.getElementById("parra1");
    if (parrafo1.style.display=="none"){
        parrafo1.style.display="block";
  } else{
        parrafo1.style.display="none";
  }
}

function validar() {
	var errorNombre = document.getElementById("errornombre");
	errorNombre.innerHTML = "";
	var errorEmail = document.getElementById("erroremail");
	errorEmail.innerHTML = "";
	var resultado = true;

	var nom = document.getElementById("nombre");
	if (nom.value.length < 5) {
		errorNombre.innerHTML = "El nombre tiene que contener al menos 5 letras.";
		document.getElementById("nombre").style.border="1px solid red"
		resultado = false;
  }

	var email = document.getElementById("email");
	if (email.value.indexOf("@") < 3) {
		errorEmail.innerHTML = "Introduzca un email correcto.";
		document.getElementById("email").style.border="1px solid red"
		resultado = false;
  }
	return resultado;
}

function ocultarMenu(enlace){
	enlaces=document.getElementsByTagName("a");
	enlaces[enlace
  ].style.display="none";
}


<!-- __________________________________________________________________________________________________________________________________________________________ -->



'use strict';

function MostrarRestaurantes(...restaurantes)
{
  if(restaurantes.length)
  {
      let preciosMinimos =[];
      for(let r of restaurantes)
        preciosMinimos.push(r[
      2
    ])
      let min = Math.min(...preciosMinimos);

      for(let r of restaurantes)
        r[
      2
    ] == min?console.log("%c" + r.join("-") ,
    "color: green;"):console.log(r.join("-"))
  }
  else {
    console.error("No hay restaurantes que mostrar")
  }
}

function Test( ){
	MostrarRestaurantes([
    "rest1",
    "calle1",
    5,
    10,
    "mexicana"
  ],
  [
    "rest2",
    "calle2",
    10,
    20,
    "italiana"
  ],
  [
    "rest3",
    "calle3",
    15,
    20,
    "japonesa"
  ])
	console.log("-----------------------------------");
	MostrarRestaurantes(["rest1","calle1",5,10,"mexicana"],
  [
    "rest2",
    "calle2",
    10,
    20,
    "italiana"
  ],
  [
    "rest3",
    "calle3",
    15,
    20,
    "japonesa"
  ],
  [
    "rest4",
    "calle4",
    20,
    25,
    "española"
  ],
  [
    "rest5",
    "calle5",
    25,
    30,
    "hindú"
  ])
	console.log("-----------------------------------");
	MostrarRestaurantes()
}


<!-- __________________________________________________________________________________________________________________________________________________________ -->



"use strict";


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

Ejercicio1("hola mundo",
"2",
[
  1,
  2,
  3,
  4
], () => {alert("Se acabó el juego.");
});
Ejercicio1("hola mundo",
true,
[
  1,
  2,
  "eo",
  4
], () => {alert("Se acabó el juego.");
});
Ejercicio1("hola mundo",
true,
[
  1,
  2,
  3,
  4
], () => {alert("Se acabó el juego.");
});
Ejercicio1("hola mundo",
true,
[
  10,
  20,
  30,
  40
], () => {alert("Se acabó el juego.");
});
Ejercicio1("Sí",
true,
[
  10,
  20,
  30,
  40
], () => {alert("Se acabó el juego.");
});
Ejercicio1("Sí",
false,
[
  10,
  20,
  30,
  40
], () => {alert("Se acabó el juego.");
});




<!-- __________________________________________________________________________________________________________________________________________________________ -->


"use strict";


Ejercicio 2. Crea una función llamada verAsignaturas. Esta función va a recibir un
número indeterminado de alumnos. De cada alumno va a recibir un array. En ese array
estará almacenado el nombre, el curso y las asignaturas de las que está matriculado
(una asignatura en cada posición). Muestra por pantalla el nombre del alumno – el curso
– asignaturas: y el nombre de las asignaturas separadas por un /. Si el número de datos
de alumnos es 0 debes mostrar la cadena “No hay datos para mostrar”. Debes usar el
operador rest, la desestructuración de arrays y el código lo más compacto posible.


function verAsignaturas(...alumnos) {
  if (alumnos.length == 0) console.log("No hay datos para mostrar.");
  else
    alumnos.forEach(([alumno, curso, ...asignaturas
  ]) => {
      console.log(`${alumno
    }-${curso
    }-asignaturas:${asignaturas.join("/")
    }`);
  });
}

verAsignaturas(
  [
  "Sara",
  "DAMA",
  "Programación",
  "ED"
],
[
  "Martin",
  "DAMB",
  "Programación",
  "LM",
  "ED",
  "BBDD",
  "FOL",
  "SI"
],
[
  "Emma",
  "ASIR",
  "ISO",
  "BBDD",
  "LM"
]
);
verAsignaturas([
  "Alvaro",
  "Semi",
  "BBDD"
]);
verAsignaturas();




<!-- __________________________________________________________________________________________________________________________________________________________ -->



"use strict";


Ejercicio 3. Pide datos al usuario y crea un array insertando los datos al principio. Los
datos tienen que ser de tipo numérico, si introduce uno que no sea de tipo numérico
dejarás de pedir datos (puedes utilizar isNaN(caracter) que te devuelve un booleano
indicando si el carácter definido es un número o no).
Si estamos ante un número de vez (iteración) par en la que pedimos datos al usuario,
utiliza el operador + para convertir a número, si no conviértelo mediante el constructor Number().
Seguidamente, ordena el array de mayor a menor conservando del array original sólo los múltiplos de 3
(usa el método filter). Muestra ambos por pantalla. Por último, muestra los dos arrays por pantalla.


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

let arrayOrdenado = [...arr
]
  .sort((num1, num2) => num1 - num2)
  .filter((num) => num % 3 == 0);

console.log(
  `array: [${arr.join(", ")
  }
]` +
  `\narray ordendo con los multiplos de 3: [${arrayOrdenado.join(", ")
  }
]`);



<!-- __________________________________________________________________________________________________________________________________________________________ -->


"use strict";


Ejercicio 4. Realiza con funciones el siguiente ejercicio:
Supón que trabajas en un pequeño negocio familiar de imprenta. El gerente te pide que
escribas un programa que calcule el salario semanal de una serie de trabajadores.
Para ello tendrás un array y en cada posición del array los datos de cada trabajador:
Un empleado introducirá el nombre del trabajador, el número de horas que ha trabajado
(no están permitidas las horas extras) y el precio hora que cobra el trabajador.
Tu programa deberá calcular el Impuesto de Hacienda que se le retiene (un 20 por ciento
del salario bruto) y el Impuesto de la Seguridad Social (un 8 por ciento del salario bruto).
El programa deberá mostrar en líneas separadas la siguiente información:
el nombre del trabajador,
el salario bruto,
la cantidad retenida para el pago del Impuesto de Hacienda,
la cantidad correspondiente al pago del impuesto de la Seguridad Social
y el salario neto del trabajador. Recuerda, cuanto más comprimido el código, mejor.


function calculaSalarioSemanal(empleados) {
  let empleado = prompt("¿De qué empleado quieres calcular el salario semanal?");
  let empleadoCorrecto = false;
  let empleadosRegistrados = [];

  for (let i = 0; i < empleados.length; i++) { //por cada empleado
    empleadosRegistrados.push(empleados[i
    ][
      0
    ]);
    if (empleados[i
    ][
      0
    ] == empleado) { //si el empleado introducido está registrado
      empleadoCorrecto = true;
      console.log(`Nombre: ${empleados[i
        ][
          0
        ]
      }`); //muesta nombre empleado
      let salarioBruto = empleados[i
      ][
        1
      ] * empleados[i
      ][
        2
      ];
      console.log(`Salario bruto: ${salarioBruto.toFixed(2)
      }€`); //muestra salario bruto
      let impuestoHaciendia = salarioBruto * 0.2;
      console.log(`Cantidad retenida para impuesto de Hacienda: ${impuestoHaciendia.toFixed(2)
      }€`); //muestra impuesto Hacienda
      let impuestoSeguridadSocial = salarioBruto * 0.08;
      console.log(`Cantidad retenida para impuesto de Seguridad Social: ${impuestoSeguridadSocial.toFixed(2)
      }€`); //muesta impuesto seguridad social
      let salarioNeto = salarioBruto - impuestoHaciendia - impuestoSeguridadSocial;
      console.log(`Salario neto de ${empleado
      }: ${salarioNeto.toFixed(2)
      }€`); //muestra salario neto
    }
  }
  if (!empleadoCorrecto)
    alert(`Empleado no registrado. Empleados registrados: ${empleadosRegistrados.join("\n")
  }`);
}

function añadeEmpleado() {
  let empleado = [];
  empleado.push(prompt("Nombre del empleado:"));
  empleado.push(parseInt(prompt("Horas trabajadas:")));
  empleado.push(parseFloat(prompt("Salario por hora:")));
  trabajadores.push(empleado);
}

let trabajadores = [];
let opcion;

do {
  opcion = parseInt(prompt("1: Añadir empleado.\n2: Calcular salario semanal.\n3: Salir.")); //selecciona opcion
  switch (opcion) {
    case 1:
      añadeEmpleado();
      break;
    case 2:
      calculaSalarioSemanal(trabajadores);
      break;
    case 3:
      break;
    default:
      alert("Opción no válida.");
      break;
  }
} while (opcion != 3);



<!-- __________________________________________________________________________________________________________________________________________________________ -->


// */