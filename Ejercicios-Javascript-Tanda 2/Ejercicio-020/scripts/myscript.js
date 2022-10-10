/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
*
*   Notas: Emplearemos la forma "clasica" de hacerlo.
*         ¿Cómo podemos hacerlo empleando arrays haciendo uso del método map? 
*
***************************************************************************************************************/

let inicio;
let fin;
let arrayNumeros = [];

/*
do {
    inicio = parseInt(prompt("Introduce el primer número: "));
    fin = parseInt(prompt("Introduce el segundo número: "));
} while (isNaN(inicio) && isNaN(fin) || (inicio >= fin));

for (let i = inicio; i <= fin; i++) {
    console.log(Math.pow(i,2));
    
}*/

/******* Con Arrays */

function cuadrado( n){
    return n*n;
}

do {
    inicio = parseInt(prompt("Introduce el primer número: "));git 
    fin = parseInt(prompt("Introduce el segundo número: "));
} while (isNaN(inicio) && isNaN(fin) || (inicio >= fin));


for (let i = inicio; i <=fin; i++) {
     arrayNumeros.push(i);
}


console.log(arrayNumeros.map(cuadrado));