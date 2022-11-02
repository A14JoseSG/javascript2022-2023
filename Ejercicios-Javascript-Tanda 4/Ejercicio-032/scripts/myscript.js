/***************************************************************************************************************
*  
*   Objetivo: Buscar el numero perdido en un array de n elementos. 
*             Están todos los enteros en el array menos uno
*             Array desordenado
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

let array = [7,8,2,5,6,1,0,3,9];
let perdido;

array.sort((a,b)=>{
    if(a==b) return 0;
    if(a >b) return -1;
    return 1;
});

for (let i = 0; i < array.length; i++) {
    if(array[i] - array[i+1] == 2)perdido = array[i]-1;
    
}

console.log(`El numero pedido es ${perdido}`)