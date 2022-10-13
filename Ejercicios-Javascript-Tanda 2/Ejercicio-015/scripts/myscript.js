/***************************************************************************************************************
 *
 *   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 1 hasta
 *             ese numero. Realizarlo con los tres tipos de bucles.
 *
 *   Entrada : numero entero n
 *
 *
 *   Salida  : 2,4,6,....,n
 *
 *   Notas: La salida finalizará en n o n-1 dependiendo de si n es par o impar
 *
 *   Notas: Resolver inicialmente e ejercicio de forma "clasica". Trataremos de realizarlo con arrays:
 *          - ¿Como defenir un array con esos valores de forma rápida?
 *          - ¿Cómo recorrer el array uno a uno con métodos (funcion aplicada sobre el objeto) del mismo?
 *          - ¿Cómo "unir" los elementos de un array y convertirlos en una cadena?
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

/*****Solución usando arrays */

let n = pedirDato("Introduce un número entero: ", "entero");

/* 
const arrayResultados = [];
for (let i=2; i<=n; i+=2) 
    arrayResultados.push(i);
*/

const arrayResultados = Array.from(
  { length: n },
  (el, indice) => indice + 1
).filter((el) => el % 2 == 0);
console.log(`Unimos elementos del array: ${arrayResultados.join(", ")} `);

// Soluciones clasicas
/*
let n = pedirDato("Introduce un número entero: ","entero");
 
console.log("Bucle while ");
let numeroMostrar = 2;
while (numeroMostrar <= n) {
    console.log(numeroMostrar);
    numeroMostrar += 2;
}

console.log("Bucle do while ");
numeroMostrar = 2;
do {
    console.log(numeroMostrar);
    numeroMostrar+=2;
} while (numeroMostrar<=n);

console.log("Bucle for ");
for (let i=2; i<=n; i+=2) 
    console.log(i);
*/
