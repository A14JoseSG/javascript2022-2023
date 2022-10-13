/***************************************************************************************************************
 *
 *   Objetivo: Eliminar caracteres expeciales de una cadena. Se permiten
 *             guion, subrayado y espacios
 *
 *
 *
 *   Entrada : cadena
 *
 *
 *   Salida  : cadena sin . ! @ # $ % & \ * ( )
 *
 *
 ***************************************************************************************************************/

let cadena = "Hola. ! ¿que tal?@ # $ % &  * ( )";
let caracteres = ".!@#$%&*()";

caracteres.split("").forEach((el) => (cadena = cadena.replaceAll(el, "")));
console.log(cadena);
