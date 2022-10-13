/***************************************************************************************************************
 *
 *   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
 *             cuantos caramelos tocan por niño y cuantos sobran.
 *
 *   Entrada : nCaramelos, nPeques
 *
 *
 *   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
 *                   El número de caramelos por niño es: XXXX
 *                   El número de caramelos que sobran es: YYYY
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

let nCaramelos = pedirDato("Introduce el número de caramelos: ", "entero");
let nPeques = pedirDato("Introduce el número de peques: ", "entero");

console.log(`El número de caramelos por niño es: ${parseInt(
  nCaramelos / nPeques
)}
El número de caramelos que sobran es ${nCaramelos % nPeques}`);
