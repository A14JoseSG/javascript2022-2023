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

let n1;
let n2;
let n3;
let mayor = 0;

do {
    n1 = parseInt(prompt("Introduce el primer número: "));
    n2 = parseInt(prompt("Introduce el segundo número: "));
    n3 = parseInt(prompt("Introduce el tercer número: "));
} while (isNaN(n1) || isNaN(n2) || isNaN(n3));

/***Solución de manera clásica *************************************/
/*if (n1 > n2) {
    mayor = n1
    if (n1 > n3) {
        mayor = n1;
    }else{
        mayor = n3;
    }
} else if(n2 > n3){
    mayor = n2;
} else{
    mayor = n3;
}

document.write(`El mayor número entre ${n1}, ${n2} y  ${n3} es ${mayor}`);*/


/*******Solución usando el objeto Math *********************************************************************************/

document.write(`El mayor número entre ${n1}, ${n2} y  ${n3} es ${Math.max(n1,n2,n3)}`);

/**********Solución empleando el operador ternario */
/*
mayor = mayor <= n1 ? n1 : mayor;
mayor =  mayor <= n2 ? n2 : mayor;
mayor = mayor <= n3 ? n3 : mayor;

document.write(`El mayor número entre ${n1}, ${n2} y  ${n3} es ${mayor}`);*/

/********************************************************** */