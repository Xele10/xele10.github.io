'use strict';

function MostrarRestaurantes(...restaurantes)
{
  if(restaurantes.length)
  {
      let preciosMinimos =[];
      for(let r of restaurantes)
        preciosMinimos.push(r[2])
      let min = Math.min(...preciosMinimos);

      for(let r of restaurantes)
        r[2] == min?console.log("%c" + r.join("-") , "color: green;"):console.log(r.join("-"))
      
  }
  else {
    console.error("No hay restaurantes que mostrar")
  }

}

function Test( ){
	MostrarRestaurantes(["rest1","calle1",5,10,"mexicana"],["rest2","calle2",10,20,"italiana"],["rest3","calle3",15,20,"japonesa"])
	console.log("-----------------------------------");
	MostrarRestaurantes(["rest1","calle1",5,10,"mexicana"],["rest2","calle2",10,20,"italiana"],["rest3","calle3",15,20,"japonesa"],["rest4","calle4",20,25,"española"],["rest5","calle5",25,30,"hindú"])
	console.log("-----------------------------------");
	MostrarRestaurantes()
}
