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

const persona = {
    nombre: "Jose",
    edad: 17,
    mayorEdad() {
        return (this.edad>=18)?`Es mayor de edad`:`Es menor de edad`
    }
}

console.log(persona.mayorEdad())