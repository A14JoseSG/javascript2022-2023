/***************************************************************************************************************
*  
*   Objetivo: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
*             a hacer frio o calor. Crear un script Javascript que solicite una temperatura en grados
*             Fahrenheit y la convierta a grados Celsius. El script puede realizar un comentario sobre el
*             tiempo dependiendo de si la temperatura Celsius es superior o igual a 25 grados, inferior a
*             10 o inferior cero grados. Ten en cuenta que la temperatura Celsius se calcula a través de
*             Celsius = (5/9) * (Fahrenheit-32)
*
*   Entrada : Número decimal
*
*
*   Salida  : Númeero decimal (2 dígitos como máximo en la parte decimal)
*             Ejemplo: Fahrenheit=100, Celsius=38.33
*
*   Notas: Emplear una funcion con un parámetro
*
***************************************************************************************************************/
function farenheitToCelsius(temperatura) {
    let celsius = (5/9) * (temperatura-32);
    return celsius;
}

let temperatura;

do {
    temperatura = parseFloat(prompt("Introduce la temperatura: "));
   
} while (isNaN(temperatura));

console.log(`La tempratura en celsius es: ${farenheitToCelsius(temperatura).toFixed(2)}`);

