/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos de forma repetida un número entero entre 1 y 9 mientras no esté entre esos valores. 
*             Cuando el número esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 <= numero <= 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota:  * Mostraremos el resultado de dos formas:
*            - En la consola del navagador, empleando template strings
*            - En el documento HTML, formateando la salida empleando una tabla con 5 columnas y nueve filas
*          * Declararemos y emplearemos funciones
*
***************************************************************************************************************/
function tablaenConsola(numero) {
    for (let i = 1; i < 10; i++) {
        console.log(`${i} X ${numero} = ${i * numero}`);
    }
    
}

function tablaenHml(numero) {
    document.write("<table>");
    for (let i = 1; i < 10; i++) {
        document.write(`<tr><td>${i}</td><td>X</td><td>${numero}</td><td>=</td><td>${i * numero}</td></tr>`);
    }
    document.write("</table>");
}

let numero;


    do {
        numero = parseInt(prompt("Introduce un número entre 1 y 9: "));
    } while ((numero < 1 || numero >9) || isNaN(numero));
    

tablaenConsola(numero);
tablaenHml(numero);