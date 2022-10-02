/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número entero introducido es par o impar
*             Crear para ello una función
*
*   Entrada : n
*
*   Salida  : El número n es (par|impar)
*
***************************************************************************************************************/
let n;

do {
    n = parseInt(prompt("Introduce un número: "));
} while (isNaN(n));

if (n%2==0) {
    document.write(`El número ${n} es par`);
} else {
    document.write(`El número ${n} es impar`);
}