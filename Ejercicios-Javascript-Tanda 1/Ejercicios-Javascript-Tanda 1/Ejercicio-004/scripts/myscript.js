/***************************************************************************************************************
*  
*   Objetivo: Crea un script Javascript que solicite el nombre a un usuario y su edad al abrir la página.
*             Tenemos que comprobar que se introduce una cadena y un número entero
*
*
*   Entrada : cadena de texto, numero: nombre, edad
*
*
*   Salida  : Tiene que mostrar la información solicitada a través de la consola de depuración
*                       Tu nombre es .... y tienes .... años
*
*
***************************************************************************************************************/
let nombre;
let edad;
let validacion;

do {
    nombre = prompt("Introduce tu nombre: ")
    validacion = parseInt(nombre);

} while (!isNaN(validacion));

do {
    edad = parseFloat(prompt("Introduce la edad: "));
} while (isNaN(edad) || !Number.isInteger(edad));


console.error(`Nombre: ${nombre} y tienes ${edad}`);