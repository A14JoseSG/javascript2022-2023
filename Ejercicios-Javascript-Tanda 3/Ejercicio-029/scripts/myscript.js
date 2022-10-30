/***************************************************************************************************************
*  
*   Objetivo: n es pandigital si contiene al menos una vez todos los digitos del 0 al 9
*
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
let pandigital = true;
let n= 0;
let  arrayDigitos;
const comprobarDigitos = ['0','1','2','3','4','5','6','7','8','9'];

do {
    n = prompt("Introduce un número: ");
} while (isNaN(n));

arrayDigitos = n.split("");

   comprobarDigitos.forEach((el)=>  pandigital = arrayDigitos.includes(el));

 (pandigital) ? console.log(`El numero ${n} es pandigital `) : console.log(`El numero ${n} no es pandigital`);