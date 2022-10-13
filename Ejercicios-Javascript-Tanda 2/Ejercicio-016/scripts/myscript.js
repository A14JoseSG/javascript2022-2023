/***************************************************************************************************************
 *
 *   Objetivo: Solicitaremos de forma repetida un número entero entre 1 y 9 mientras no esté entre esos valores.
 *             Cuando el número esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
 *
 *   Entrada : numero     1 <= numero <= 9
 *
 *   Salida  : 1 x numero = numero
 *             2 x numero = ....
 *             3 x numero = ....
 *                   ....
 *             9 x numero = ....
 *
 *   Nota:  * Mostraremos el resultado de dos formas:
 *            - En la consola del navagador, empleando template strings
 *            - En el documento HTML, formateando la salida empleando una tabla con 5 columnas y nueve filas
 *          * Declararemos y emplearemos funciones
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

function tablaenConsola(numero) {
  let salida = "";
  for (let i = 1; i < 10; i++) salida += `${i} X ${numero} = ${i * numero} \n`;
  return salida;
}

function tablaenHml(numero) {
  let salida = "<table>";
  for (let i = 1; i < 10; i++)
    salida += `<tr><td>${i}</td><td>X</td><td>${numero}</td><td>=</td><td>${
      i * numero
    }</td></tr>`;
  salida += "</table>";
  return salida;
}

let numero;
do {
  numero = pedirDato("Introduce un número entre 1 y 9: ", "entero");
} while (numero < 1 || numero > 9);

console.log(tablaenConsola(numero));
document.write(tablaenHml(numero));
