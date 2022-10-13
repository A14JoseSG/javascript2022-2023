/***************************************************************************************************************
 *
 *   Objetivo: Crear un array con objetos tipo persona (con nombre y edad) y determinar cuantos son mayores de edad
 *             Devolver el promedio de todas las edades
 *             Devolver el promedio de las personas mayores de edad
 *             Devolver el promedio de las personas menores de edad
 *
 *   Entrada : --
 *
 *
 *   Salida  : El array de objetos creados y los datos indicados en el objetivo del ejercicio
 *
 *   Nota: Escogemos el nombre de la persona aleatoriamente entre los declarados en un array con nombres de personas
 *         La edad de la persona será un número aleatorio entero entre 1 y 100
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

const nombres = [
  "Juan",
  "Ana",
  "Luis",
  "Maria",
  "Alberto",
  "Rosa",
  "Fernando",
  "Laura",
  "Martin",
  "Eugenia",
  "Alberto",
  "Cristina",
];

const aleatorio = (min, max) => Math.floor(min + (max - min) * Math.random());

let nPersonas;
do {
  nPersonas = pedirDato("Introduce el numero de personas: ", "entero");
} while (nPersonas <= 0);

const personas = Array.from({ length: nPersonas }, () => {
  return {
    nombre: nombres[aleatorio(0, nombres.length - 1)],
    edad: aleatorio(0, 100),
  };
});

console.log(personas);

const personasMayoresEdad = personas.filter((el) => el.edad >= 18);
const personasMenoresEdad = personas.filter((el) => el.edad < 18);

let sumaEdades = personas.reduce(
  (anterior, actual) => anterior + actual.edad,
  0
);

let sumaEdadesMayores = personasMayoresEdad.reduce(
  (anterior, actual) => anterior + actual.edad,
  0
);
let sumaEdadesMenores = personasMenoresEdad.reduce(
  (anterior, actual) => anterior + actual.edad,
  0
);

console.log(
  `La media de edades de las personas es: ${(
    sumaEdades / personas.length
  ).toFixed(2)}`
);

console.log(
  personasMenoresEdad.length
    ? `La media de edades de las personas menores de edad es: ${(
        sumaEdadesMenores / personasMenoresEdad.length
      ).toFixed(2)}`
    : `No hay personas menores de edad`
);

console.log(
  personasMayoresEdad.length
    ? `La media de edades de las personas mayores de edad es: ${(
        sumaEdadesMayores / personasMayoresEdad.length
      ).toFixed(2)}`
    : `No hay personas mayores de edad`
);
