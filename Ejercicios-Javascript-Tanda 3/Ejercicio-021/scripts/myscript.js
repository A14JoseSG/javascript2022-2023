/***************************************************************************************************************
*  
*   Objetivo: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
*             Crear tres funciones: 
*                1.- Devuelve un array con los elementos comunes en los arrays
*                2.- Devuelve los elementos del primer array que no están en el segundo array
*                3.- Devuelve los elementos del segundo array que no están en el primer array
*       
*             Rellenar los arrays con númeos aleatorios entre -100 y 100
*
*   Entrada : La longitud del array (numero entero n)
*
*   Salida  : Los elementos del Array1
*             Los elementos del Array2
*             Los arrays tienen XX elementos comunes: .... (los elementos comunes separados por comas)
*             Elementos del primer array no presentes en el segundo array: ...
*             Elementos del segundo array no presentes en el primer array: ....
*
***************************************************************************************************************/
let n;
let array1 = [];
let array2 = [];

function elementosComunes(array1,array2) {
    let arrayComun = [];
    array1.forEach((elemento,indice) => {
        if (array2.includes(elemento)) {
            arrayComun.push(elemento);
        }
    });
    return arrayComun;
}

do {
    n = parseInt(prompt("Introduce la longitud del array: "));
} while (isNaN(n));

// Crear datos aleatorios
const aleatorio=(min,max)=>Math.floor(min+(max-min)*Math.random())
const LIMITE=10

// Llenar los arrays
for (let i = 0; i < n; i++) {
    array1.push(aleatorio(-LIMITE,LIMITE));
    array2.push(aleatorio(-LIMITE,LIMITE));  
}

// llevar y comparar arrays
//const array1=Array.from({length:n},()=>aleatorio(-LIMITE,LIMITE))
//const array2=Array.from({length:n},()=>aleatorio(-LIMITE,LIMITE))
//const elementosComunes=array1.filter(el=>array2.includes(el))
const elementosNoComunesPrimerArray=array1.filter(el=>!array2.includes(el))
const elementosNoComunesSegundoArray=array2.filter(el=>!array1.includes(el));

console.log(`Valores del array1 ${array1.join(", ")}`);
console.log(`Valores del array2 ${array2.join(", ")}`);
console.log(`Valores comunes de los arrays: ${elementosComunes(array1,array2).join(", ")}`);
console.log(`Valores primer array que no están en el segundo ${elementosNoComunesPrimerArray.join(", ")}`);
console.log(`Valores segundo array que no están en el primer ${elementosNoComunesSegundoArray.join(", ")}`);