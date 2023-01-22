/*********
 * Entrada

El programa deberá solicitar tres números separados por un espacio. Los dos primeros corresponden a los
sumandos, y el tercero al resultado. Cada uno de los tres números tendrá siempre un único valor desconocido,
representado por el carácter "-". Ningún número tendrá más de 9 dígitos ni ceros superfluos a la izquierda.
Además, los "-" deben siempre interpretarse como incógnitas, es decir, no hay números negativos en la entrada.

Salida
Se escribirá la/s suma/s buscada/s pero sin valores desconocidos. Para que la suma sea considerada correcta,
todos los números deben tener la misma cantidad de dígitos que tenían en el planteamiento del acertijo, y no
deben tener ceros superfluos a la izquierda.
Si hay varias soluciones posibles se escribirán todas las posibles soluciones. Si no hay ninguna, se escribirá
"IMPOSIBLE"

***********************************************************************************************************/

function pedirDato(msg, tipo) {
    let centinela;
    let dato;
    do {
      dato = prompt(msg);
      if (dato.length >s 9 ) centinela =  false;
      for (let i = 0; i < dato.length; i++) {
        const element = array[i];
        
      }
      if (dato.split("")=>)
        centinela =
          !isNaN(dato) && !Number.isInteger(parseFloat(dato)) ? true : false;
      if (tipo == "numero") centinela = !isNaN(dato) ? true : false;
    } while (!centinela);
    return dato;
}