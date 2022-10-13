/***************************************************************************************************************
 *
 *   Objetivo: Crear un objeto persona con nombre y edad y un metodo que determine si es mayor o no de edad
 *
 *
 *   Entrada :
 *
 *
 *   Salida  :
 *
 *
 ***************************************************************************************************************/

const persona1 = {
  nombre: "Jose",
  edad: 17,
  mayorEdad() {
    return this.edad >= 18 ? `Es mayor de edad` : `Es menor de edad`;
  },
};

const persona2 = {
  nombre: "Jose",
  edad: 25,
  mayorEdad: function () {
    return this.edad >= 18 ? `Es mayor de edad` : `Es menor de edad`;
  },
};

console.log(persona1.mayorEdad());
console.log(persona2.mayorEdad());
