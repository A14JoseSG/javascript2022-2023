/***************************************************************************************************************
 *
 *   Objetivo: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
 *
 *
 *   Entrada : edad
 *
 *
 *   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
 *             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
 *             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
 *
 *   Notas   : Debemos comprobar si:
 *                   - La edad es un número entero mayor que 0 (indicaremos el error)
 *                   - La edad no puede ser superior a 120 (indicaremos el error)
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

let edad;
let edadValida = true;

do {
  edad = pedirDato("Introduce tu edad: ", "entero");
  if (edad > 120 || edad < 0) alert("Edad no válida");
} while (edad < 0 || edad > 120);

if (edad < 30) console.log("Ponte a trabajar");
else if (edad < 65) console.log("Qué ganas tengo de jubilarme");
else console.log("Descansa un poco");
