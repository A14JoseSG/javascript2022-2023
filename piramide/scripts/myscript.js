function getDato(msg, tipo){
    let centinela;
    let dato;

    do {
        dato = prompt(msg);
        if(tipo == "cadena") centinela = isNaN(dato) ? true : false;
        if(tipo == "entero") centinela = (!isNaN(dato) && Number.isInteger(parseFloat(dato))) ? true : false;
        if(tipo == "floatante") centinela = (!isNaN(dato) && !Number.isInteger(parseFloat(dato))) ? true : false;
        if(tipo == "numero") centinela = !isNaN(dato) ? true : false; 
    } while (!centinela);
    return dato;
}

let fichas;

let cuspide = 1;
let fichasUsadas = 0;
let exito = false;
let piramide = []
let pos = 0;
 

fichas = getDato("Introduce el número de fichas: ","entero");

while(!exito){
    piramide[pos] = cuspide;
    fichasUsadas += piramide[pos];
    
    while((fichasUsadas + piramide[pos]+1 <= fichas )){
        pos++;
        piramide[pos] = piramide[pos-1]+ 1;
        fichasUsadas += piramide[pos];
       
    }
    
    
    if((fichasUsadas < fichas )){
        cuspide++;
        pos = 0;
        piramide = [];
        fichasUsadas = 0;
    } else {
        exito = true;
    }  
  
}

console.log(`Con ${fichas} fichas de dominó Blanca puede crear una pirámide de altura ${piramide.length} con ${piramide[piramide.length-1]} en la base
y ${piramide[0]} en la cúspide`);