"use strict";

/*
Ejercicio 2. Crea una función llamada verAsignaturas. Esta función va a recibir un 
número indeterminado de alumnos. De cada alumno va a recibir un array. En ese array 
estará almacenado el nombre, el curso y las asignaturas de las que está matriculado 
(una asignatura en cada posición). Muestra por pantalla el nombre del alumno – el curso 
– asignaturas: y el nombre de las asignaturas separadas por un /. Si el número de datos 
de alumnos es 0 debes mostrar la cadena “No hay datos para mostrar”. Debes usar el 
operador rest, la desestructuración de arrays y el código lo más compacto posible.
*/

function verAsignaturas(...alumnos) {
  if (alumnos.length == 0) console.log("No hay datos para mostrar.");
  else
    alumnos.forEach(([alumno, curso, ...asignaturas]) => {
      console.log(`${alumno}-${curso}-asignaturas:${asignaturas.join("/")}`);
    });
}

verAsignaturas(
  ["Sara", "DAMA", "Programación", "ED"],
  ["Martin", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"],
  ["Emma", "ASIR", "ISO", "BBDD", "LM"]
);
verAsignaturas(["Alvaro", "Semi", "BBDD"]);
verAsignaturas();