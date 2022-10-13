/***************************************************************************************************************
 *
 *   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
 *
 *
 *   Entrada : numero1, numero2, numero3
 *
 *
 *   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
 *
 *   Nota: - Resolver de forma "clasica"
 *         - Resolver empleando el objeto Math
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

let n1 = pedirDato("Introduce el primer número: ", "entero");
let n2 = pedirDato("Introduce el segundo número: ", "entero");
let n3 = pedirDato("Introduce el tercer número: ", "entero");

/***Solución de manera clásica *************************************/
/*

let mayor = n1;
if (n2 > n1) 
    mayor = n2
if (n3 > n2) 
    mayor = n3

document.write(`El mayor número entre ${n1}, ${n2} y  ${n3} es ${mayor}`);*/

/*******Solución usando el objeto Math *********************************************************************************/

document.write(
  `El mayor número entre ${n1}, ${n2} y  ${n3} es ${Math.max(n1, n2, n3)}`
);

/**********Solución empleando el operador ternario */
/*
let mayor = n1
mayor =  mayor > n2 ? n2 : mayor;
mayor = mayor > n3 ? n3 : mayor;

document.write(`El mayor número entre ${n1}, ${n2} y  ${n3} es ${mayor}`);*/

/********************************************************** */
