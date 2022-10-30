/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con 
*             el producto del numero de fila por el número de columna
*
*
*   Entrada : nfilas, ncols (números enteros)
*
*
*   Salida  : tabla html con nfilas y ncols. Cada celda contendrá el producto del número de fila por la columna
*
*
***************************************************************************************************************/
let nfilas = 0;
let ncols = 0;

do {
    nfilas = parseFloat(prompt("Introduce el número de filas: "));
    ncols = parseFloat(prompt("Introduce el número de columnas: "));
} while ((isNaN(nfilas) || isNaN(ncols)) || (nfilas <1 || ncols <1));

document.write("<table>");
    for (let i = 1; i <= nfilas; i++) {
        document.write("<tr>");
            for (let j = 1; j <= nfilas; j++) {
                document.write(`<td>${i*j}</td>`);
                
            }
        document.write("</tr>");
        
    }
document.write("</table>");