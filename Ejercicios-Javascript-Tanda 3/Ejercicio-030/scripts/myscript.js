/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*
*   Entrada : cadenas de texto: texto, palabra
*
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*   Notas: Métodos del objeto String
*
***************************************************************************************************************/
 let texto;
 let palabra;

 do {
    texto = prompt("Introduce un texto");
    palabra = prompt("Introduce una palabra");
 } while (texto == "" || palabra == "");

 texto = texto.split(" ");

const coincidencias = texto.filter(el=>palabra == el)


console.log(coincidencias.length);