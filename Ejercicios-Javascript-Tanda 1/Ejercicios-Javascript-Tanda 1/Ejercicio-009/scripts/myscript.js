/***************************************************************************************************************
*  
*   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
*             cuantos caramelos tocan por niño y cuantos sobran. 
*
*   Entrada : nCaramelos, nPeques
*
*
*   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
*                   El número de caramelos por niño es: XXXX
*                   El número de caramelos que sobran es: YYYY
*
***************************************************************************************************************/

let nCaramelos;
let nPeques;

do {
    nCaramelos = parseInt(prompt("Introduce el número de caramelos: "));
    nPeques = parseInt(prompt("Introduce el número de peques: "));
} while (isNaN(nCaramelos) || isNaN(nPeques) );

console.log(`El número de caramelos por niño es: ${Math.trunc(nCaramelos / nPeques)}
El número de ccaramelos que sobran es ${nCaramelos % nPeques}`);