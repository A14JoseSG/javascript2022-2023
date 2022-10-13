/***************************************************************************************************************
 *
 *   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
 *
 *   Entrada : inicio, fin
 *
 *
 *   Salida  : inicio², (inicio+1)², ..... (fin)²
 *
 *   Notas: Emplearemos la forma "clasica" de hacerlo.
 *         ¿Cómo podemos hacerlo empleando arrays haciendo uso del método map?
 *
 ***************************************************************************************************************/

function pedirDato(msg, tipo) {
  let centinela;
  let dato;
  do {
    dato = prompt(msg);
    if (tipo == "cadena") centinela = isNaN(dato) ? true : false;
    if (tipo == "entero")
      centinela =
        !isNaN(dato) && Number.isInteger(parseFloat(dato)) ? true : false;
    if (tipo == "flotante")
      centinela =
        !isNaN(dato) && !Number.isInteger(parseFloat(dato)) ? true : false;
    if (tipo == "numero") centinela = !isNaN(dato) ? true : false;
  } while (!centinela);
  return dato;
}

let inicio = pedirDato("Introduce el primer número: ", "entero");
let fin;
do {
  fin = pedirDato("Introduce el segundo número: ", "entero");
} while (fin <= inicio);

/* Con Arrays */
const arrayNumeros = Array.from({ length: fin - inicio + 1 }, (el, indice) =>
  Math.pow(parseInt(inicio) + parseInt(indice), 2)
);
console.log(arrayNumeros.join(", "));
