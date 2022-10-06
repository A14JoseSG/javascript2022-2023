/***************************************************************************************************************
*  
*   Objetivo: Pedimos reiteradamente cadenas al usuario hasta que la cadena de texto introducida es "cancelar". 
*
*
*   Entrada : cadenas de texto
*
*
*   Salida  : Cada cadena introducida se muestra en un párrafo del documento HTML
*
*
***************************************************************************************************************/

let cadena;

do {
    cadena = prompt("Introduce una cadena de texto: ");
    document.write(`<p>${cadena}</p>`);
    
} while (cadena != "cancelar");