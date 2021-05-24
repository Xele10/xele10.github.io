"use strict";

/*
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
*/

function calculaSalarioSemanal(empleados) {
  let empleado = prompt("¿De qué empleado quieres calcular el salario semanal?");
  let empleadoCorrecto = false;
  let empleadosRegistrados = [];

  for (let i = 0; i < empleados.length; i++) { //por cada empleado
    empleadosRegistrados.push(empleados[i][0]);
    if (empleados[i][0] == empleado) { //si el empleado introducido está registrado
      empleadoCorrecto = true;
      console.log(`Nombre: ${empleados[i][0]}`); //muesta nombre empleado
      let salarioBruto = empleados[i][1] * empleados[i][2];
      console.log(`Salario bruto: ${salarioBruto.toFixed(2)}€`); //muestra salario bruto
      let impuestoHaciendia = salarioBruto * 0.2;
      console.log(`Cantidad retenida para impuesto de Hacienda: ${impuestoHaciendia.toFixed(2)}€`); //muestra impuesto Hacienda
      let impuestoSeguridadSocial = salarioBruto * 0.08;
      console.log(`Cantidad retenida para impuesto de Seguridad Social: ${impuestoSeguridadSocial.toFixed(2)}€`); //muesta impuesto seguridad social
      let salarioNeto = salarioBruto - impuestoHaciendia - impuestoSeguridadSocial;
      console.log(`Salario neto de ${empleado}: ${salarioNeto.toFixed(2)}€`); //muestra salario neto
    }
  }
  if (!empleadoCorrecto)
    alert(`Empleado no registrado. Empleados registrados: ${empleadosRegistrados.join("\n")}`);
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