/***************************************************************************************************************
*  
*   Objetivo: Funcion que devuelve un objeto con la frecuencia de cada vocal en una frase
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Frecuencia de vocales { "a":6, "e":1, "i":0, "o":0, "u":1 }
*
*
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

  function limpiarCaracter(caracter){
    let caracterLimpio = caracter.toLowerCase();
    switch (caracterLimpio) {
        case "á":
            caracterLimpio = "a";
            break;
        case "é":
            caracterLimpio = "e";
            break;
        case "í":
            caracterLimpio = "i";
            break;
        case "ú":
            caracterLimpio = "u";
            break;
        case "ó":
            caracterLimpio = "o";
            break;        
    }
    return caracterLimpio;
  }

let cadena = pedirDato(`Introduce una cadena de texto: `, `cadena`);
let resultado = {a:0, e:0, i:0, o:0, u:0};

cadena = cadena.split("");

cadena.forEach(element => {
    switch (limpiarCaracter(element)) {
        case 'a':
            resultado["a"]++;
            break;
        case 'e':
            resultado["e"]++;
            break;
        case 'i':
            resultado["i"]++;
            break;
        case 'o':
            resultado["o"]++;
            break;
        case 'u':
            resultado["u"]++;
            break;
        
    }
});

for (const clave in resultado) {
        console.log(`El número de vocales es: ${clave} frecuencia ${resultado[clave]}`);
    
}