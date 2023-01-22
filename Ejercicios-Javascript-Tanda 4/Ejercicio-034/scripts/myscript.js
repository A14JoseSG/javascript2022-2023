/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores, empezando con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,2,3,5,8,13,....
*
*   Notas:  ¿Cómo hacerlo de forma iterativa?
*           ¿Cómo hacerlo de forma recursiva?
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

  let n = pedirDato("Introduce un número : ", "numero");
  let f1 = 0;
  let f2 = 1;
  let aux = 0;

  /*********************** Fibonacci con bucle
  do {
    console.log(f1+f2);
    aux = f2;
    f2 = f1 + f2;
    f1 = aux;

  } while (f1 + f2 <= n);
******************************/

  let fibonacci = f1 => {
    //base case
    if (f1 <= n) {
        return;
    }
    console.log(f1);
    
    return fibonacci(f1+1 * f1+2);
};

fibonacci();