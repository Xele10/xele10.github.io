'use strict'

//Añadir un elemento a la lista. En este ejemplo está puesto con un evento. Aún no has dado eventos pero puedes ir familiarizándote por la sintaxis (se explica un poco más adelante en la teoría).
document.querySelector("input").addEventListener("click",function(event)
{

    //Obtiene la lista que deseamos. En nuestro caso la primera lista. Recuerda que puedes usar querySelector u otro de los métodos de selección de elementos del dom.
    let ul = document.getElementsByTagName("ul")[0];

    //Escoge el tercer elemento. Podríamos usar otra vez querySelector, pero usamos las relaciones de parentesco.
    let li3 = ul.children[2];

    //Crea un eleemnto en la lista. Creamos un nodo nuevo, queremos que sea un elemento li.
    let newLi3 = document.createElement("li");

    //Le asigna un texto nuevo. Le insertamos texto
    newLi3.textContent = "Soy el tercer elemento";

    //Lo inserta antes del elemento actual.
    ul.insertBefore(newLi3, li3);

    //Cambia el texto del antiguo tercer elemento
    li3.textContent = "Soy el cuarto elemento...";
})
