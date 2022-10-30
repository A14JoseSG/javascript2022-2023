/***************************************************************************************************************
*  
*   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. Se mostrará una pirámide de la forma:
*
*               1
*               2 2
*               3 3 3
*               4 4 4 4
*                 ...
*               n n n n n n n (n veces)
*
*   Entrada : numero entero n
*
*
*   Salida  : La pirámide mostrada en el objetivo del ejercicio
*
*
***************************************************************************************************************/
let n = 0;

do {
    n = parseInt(prompt("Introduce un número: "));
} while (isNaN(n) || (n > 20 ||n< 1));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(i," ");
    }

    document.write("<br>");

}