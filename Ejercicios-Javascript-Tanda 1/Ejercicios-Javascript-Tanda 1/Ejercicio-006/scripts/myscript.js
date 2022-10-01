/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
*             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
*
*   Entrada : catetoA, catetoB
*
*
*   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
*
*
***************************************************************************************************************/
let catetoA;
let catetoB;
let hipotenusa;
do {
    catetoA = parseInt(prompt("Introduce el primer número: "));
    catetoB = parseInt(prompt("Introduce el segundo número: "));
} while (isNaN(catetoA && isNaN(catetoB)));

hipotenusa = Math.sqrt(Math.pow(catetoA,2),Math.pow(catetoB,2));

console.log(`La hipotenusa del triángulo con catetos ${catetoA} y ${catetoB} es ${hipotenusa}`);