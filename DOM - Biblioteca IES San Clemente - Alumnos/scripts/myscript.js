const $container = document.querySelector("#libros-container"),
      $form = docoument.querySelector("#libro-add"),
      $ocultar = document.querySelector("#ocultar"),
      $añadir = $form.querySelector("button");


const ocultarMostrarLibros = (valor) =>{
    if (valor) {
        $container.style.display = "none";
    } else {
        $container.style.display = "block";
    }
}

$ocultar.addEventListener("click",event =>{
    ocultarMostrarLibros()
})