const $d = document,

    $contenedor1 = $d.querySelector("#container"),
    $contenedor2 = $d.querySelector("#container2"),
    $ul = $d.querySelector("ul"),
    $li3 = $d.querySelector("li:nth-child(3)"), // recoge el 3 li
    $parrafos = $d.querySelectorAll("p")


/* metodos obsoletos
const $contenedor2 = $d.getElementById("container");
console.log($contenedor2);

const $li2 = $d.getElementsByClassName("item2");
console.log($li2);

const $contenedores = $d.getElementsByTagName("div");
console.log($contenedores);

*/

primero=$contenedor1.firstElementChild // primero o último hijo
ultimo=$contenedor1.lastElementChild.textcontent // el texto dentro del elemento
//console.log(primero);

//console.log($li3.previousElementSibling); // Elemento previo al elemento 3

//console.log($contenedor1.firstElementChild.nextElementSibling); // siguiente elmeento del primer hijo

//console.log($contenedor1.childNodes) // Saca los nodos hijos
//console.log($contenedor1.hasChildNodes());

const $li5 = $d.createElement("li");
const $texto = $d.createTextNode("Item 5");
$li5.appendChild($texto); // añade un nodo hijo
$ul.appendChild($li5);
$li5.append("Item5"); // apend crea nuevo nodo

const $liN=$d.createElement("li");
$liN.append("Insertado");
$ul.insertBefore($liN,$li3); // que queremos insertar y delante de que elemento queremos insertarlo

$ul.lastElementChild.remove();

const $parrafo = $d.createElement("p");
$parrafo.append("Parrafo sustituido");
$contenedor1.replaceChild($parrafo,$contenedor1.firstElementChild); // reemplazar elementos

$li3.previousElementSibling.previousElementSibling.classList.add("blackWhite"); // añadir estilos css 
$li3.previousElementSibling.previousElementSibling.classList.remove("blackWhite"); // borrar estilos css 
$contenedor1.firstElementChild.nextElementSibling.style.backgroundColor="white" // cambio de color de fondo



/*******Creación de atributos y manejo */

$ul.firstElementChild.setAttribute("data-list","4"); // esto añade atributos
