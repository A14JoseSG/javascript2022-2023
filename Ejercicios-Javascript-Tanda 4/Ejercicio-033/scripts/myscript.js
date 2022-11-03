/***************************************************************************************************************
*  
*   Objetivo: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
*             P.j: Dabale arroz a la zorra el abad
*
*Dabalearroza
 l
 azorraelabad
*   Entrada : Cadena de texto
*
*
*   Salida  : La cadena .... (es|no es) un palíndromo
*             ¿Podríamos resolverlo empleando métodos de Array?
*             ¿Podríamos resolverlo empleando recursividad?
*
***************************************************************************************************************/
function pedirDato(msg, tipo) {
  let centinela;
  let dato;
  do {
    dato = prompt(msg);
    if (tipo == "cadena") centinela = isNaN(dato) ? true : false;
    if (tipo == "entero")
      centinela =
        !isNaN(dato) && Number.isInteger(parseFloat(dato)) ? true : false;
    if (tipo == "flotante")
      centinela =
        !isNaN(dato) && !Number.isInteger(parseFloat(dato)) ? true : false;
    if (tipo == "numero") centinela = !isNaN(dato) ? true : false;
  } while (!centinela);
  return dato;
}

let cadena = pedirDato("Introduce una cadena para comprobar si es palíndromo: ","cadena");
let palindromo = true;
let cadena2="";

for (let i = 0; i < cadena.length; i++) {
  if (cadena.charAt(i)!=" ") {
    cadena2+=cadena.charAt(i).toLocaleLowerCase();
  }
  
}

/*******************Hecho con strings ***********************************************************/

for (let i = 0; i < Math.trunc(cadena2.length/2); i++) {
  if (cadena2.charAt(i) != cadena2.charAt(cadena.length-1-i)) {
    palindromo = false
  }
  (palindromo) ? console.log(`La cadena es un palíndromo`) : console.log(`La cadena no es un palíndromo`);
}

/** Hecho con arrays ***********************************************************
const array1 = cadena2.split("");
const array2 = cadena2.split("").reverse();

array1.forEach((el,indice) => {
  if (!(array2[indice] == el)) palindromo = false;
  
});

(palindromo) ? console.log(`La cadena es un palíndromo`) : console.log(`La cadena no es un palíndromo`);


/******************************************************************/