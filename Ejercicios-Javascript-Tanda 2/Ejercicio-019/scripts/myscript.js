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

let cadena = "Hola. ! ¿que tal?@ # $ % & \ * ( )";
let cadenaSalida = "";




cadena = cadena.slice();
for (const value of cadena) {
    if ((value != ".") && (value != "!") && (value != "@") && (value != "#") && (value != "$") && (value != "%") && (value != "&") && (value != '*') && (value != "(") && (value != ")") && (value != "\\")){
      
        cadenaSalida = cadenaSalida.concat(value);
    }

        
}


console.log(cadenaSalida);