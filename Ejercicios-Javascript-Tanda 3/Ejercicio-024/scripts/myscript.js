/***************************************************************************************************************
*  
*   Objetivo: n es automorfico si su cuadrado termina en n
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
let n;


do {
    n = parseInt(prompt("Introduce un número "));
} while (isNaN(n));

const  cadena = Math.pow(n,2).toString();
let salida=""

//cadena.slice(-n.toString().length)==n.toString()
if (cadena.endsWith(n)){
    salida="Numero automorfico"
} else {
    salida="El número no es autmófico"
}

console.log(salida)
