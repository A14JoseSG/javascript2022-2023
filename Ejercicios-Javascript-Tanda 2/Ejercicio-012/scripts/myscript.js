/***************************************************************************************************************
 *
 *   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros desde 0 hasta ese numero
 *
 *
 *   Entrada : numero entero n
 *
 *
 *   Salida  : 0,1,2,3,4,5,....,n
 *
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

let n = pedirDato("Introduce un número: ", "entero");

let salida = "";
for (let i = 0; i <= n; i++) salida += n != i ? `${i}, ` : `${i}`;
console.log(salida);

// Con arrays. Version 1
/*
const numeros=[]
for (let i = 0; i <= n; i++) 
   numeros.push(i)
console.log(numeros.join(", "))
*/

// Con arrays. Version 2
/*
const numeros=Array.from({length:n},(el,indice)=>indice)
console.log(numeros.join(", "))
*/
