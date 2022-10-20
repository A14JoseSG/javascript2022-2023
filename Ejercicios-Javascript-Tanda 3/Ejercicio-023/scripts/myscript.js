/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
*             según la siguiente tabla
*
*                Cualificación    Porcentaje
*                     A             90-100
*                     B             80-90
*                     C             70-79
*                     D             60-69
*                     F             0-59
*
*   Entrada : nota
*
*
*   Salida  : El examen se cualifica con un XXX
*
*
***************************************************************************************************************/

let n ;
let cualificacion;

do {
    n = parseInt(prompt("Introduce la nota del examen: "));
} while (isNaN(n) || (n < 0 || n>100));

switch (true) {

    case n < 60:
        cualificacion = 'F';
        break;
    case n<70:
        cualificacion = 'D';
        break;
    
    case n < 80:
        cualificacion = 'C'
        break;

    case n < 90:
        cualificacion = 'B'
        break;
    
    case n <= 100:
        cualificacion = 'A'
        break;

}

console.log(`La nota es ${cualificacion}`);
