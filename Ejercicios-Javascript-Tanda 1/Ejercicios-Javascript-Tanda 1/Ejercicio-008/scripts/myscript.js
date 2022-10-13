/***************************************************************************************************************
 *
 *   Objetivo: Determinar si un número entero introducido es par o impar
 *             Crear para ello una función
 *
 *   Entrada : n
 *
 *   Salida  : El número n es (par|impar)
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

n = pedirDato("Introduce un número: ", "entero");

document.write(
  n % 2 == 0 ? `El número ${n} es par` : `El número ${n} es impar`
);

console.log(n % 2 == 0 ? `El número ${n} es par` : `El número ${n} es impar`);
