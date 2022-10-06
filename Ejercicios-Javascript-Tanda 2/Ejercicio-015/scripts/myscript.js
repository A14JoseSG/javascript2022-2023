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

/***Solución clásica *

let n ;
let numeroMostrar = 2;

do {
    n = parseInt(prompt("Introduce un número entero: "));
 
} while (isNaN(n));



console.log("Bucle while ");

while (numeroMostrar <= n) {
    console.log(numeroMostrar);
    numeroMostrar += 2;
}

numeroMostrar = 2;

console.log("Bucle do while ");

do {
    console.log(numeroMostrar);
    numeroMostrar+=2;
} while (numeroMostrar<=n);



console.log("Bucle for ");

for (let i = 2; i <= n; i = i+2) {
    console.log(i);
}

*/

/*****Solución usando arrays */

let n = 0;
let arrayResultados = [];

do {
    n = parseInt(prompt("Introduce un número entero: "));
 
} while (isNaN(n));

for (let i = 2; i <= n; i = i+2) {
    arrayResultados.push(i);
}

console.log("Recorremos el array");

arrayResultados.forEach((el,index)=>console.log(`${el}`));

console.log(`Unimos elementos del array: ${arrayResultados.join("")} `);

