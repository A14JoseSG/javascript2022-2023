/*
Añadiremos imágenes (5 filas y 3 columnas) al contenedor. Las imágenes las obtendremos de https://source.unsplash.com/random/tamaño, 
donde tamaño, que irá en formato anchoxalto, indica el ancho y alto de la imagen (que indicaremos a través de números aleatorios entre 100 y 300)
*/

tamañoAletorio = (max,min)=>Math.floor(min+(max-min)*Math.random());

const $contenedor = document.querySelector(".contenedor");

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        let $img = document.createElement("img");
        let ancho = tamañoAletorio(100,300);
        let alto = tamañoAletorio(100,300);
        $img.setAttribute("src",`https://source.unsplash.com/random/${ancho}x${alto}`)
        $contenedor.appendChild($img);
    }
}