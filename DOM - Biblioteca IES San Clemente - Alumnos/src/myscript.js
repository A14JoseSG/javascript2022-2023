const $container = document.querySelector("#libros-container"),
      $listaLibros = $container.querySelector("ul"),
      $form = document.querySelector("#libro-add"),
      $tituloLibro = $form.querySelector("input[type=text]"),
      $ocultar = document.querySelector("#ocultar"),
      $añadir = $form.querySelector("button"),
      $buscar = document.querySelector("#buscarLibros").firstElementChild;
      $borrar = document.querySelectorAll(".borrar");


const ocultaroMostrarLibros = (valor) =>{
    if (valor) {
        $container.style.display = "none";
    } else {
        $container.style.display = "block";
    }
}
const borrarLibros = (elemento)=>{
    elemento.parentElement.style.display = "none";
}
const añadirLibro = ()=>{
    let $li = document.createElement("li");
    let $titulo = document.createElement("span");
    let $botonBorrar = document.createElement("span");

    $titulo.appendChild(document.createTextNode($tituloLibro.value));
    $botonBorrar.appendChild(document.createTextNode("-"));
    $botonBorrar.setAttribute("class","borrar");
    $botonBorrar.addEventListener('click',event=>{
        borrarLibros(event.currentTarget);
    });  
    $li.appendChild($titulo);
    $li.appendChild($botonBorrar);
    $listaLibros.appendChild($li);
}
const buscar = (event)=>{
    let $libros = $listaLibros.querySelectorAll("li");
   
        //$buscar.value += event.key;
        $libros.forEach(element=>{
          if(element.firstElementChild.textContent.substring(0,$buscar.value.length) != $buscar.value){ 
                element.style.display = "none"
            }else{
                element.style.display = "list-item"
            }
        })
    
    console.log($buscar.value);
}
$ocultar.addEventListener("click",event =>{
    event.preventDefault;
    ocultaroMostrarLibros($ocultar.checked)
})

$borrar.forEach(element => {
    element.addEventListener('click',event=>{
        borrarLibros(event.currentTarget);
    });  
});
$añadir.addEventListener('click',element=>{
    element.preventDefault();
    añadirLibro();
})
$buscar.addEventListener('keyup',buscar);