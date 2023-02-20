const $form = document.querySelector('#formulario'),
      $textArea = document.querySelector('#textArea'),
      $boton = document.querySelector('input'),
      $seccionComentarios = document.querySelector('#comentarios');

$comentarios = [];

const renderComentarios = ()=>{
    $fragmento = document.createDocumentFragment();
    $article = document.createElement("article");
    $h4 =  document.createElement("h4");
    $p = document.createElement("p");
   
    $comentario = {
        titulo: "comentario",
        texto: $textArea.value
    }
    
    $comentarios.push($comentario);
   
$h4.textContent = $comentario.titulo + $comentarios.length ;
        $p.textContent = $comentario.texto;
        $article.appendChild($h4);
        $article.appendChild($p);
       
        $fragmento.appendChild($article);
          
   
   $seccionComentarios.appendChild($fragmento);
   
}

$boton.addEventListener('click',event=>{
    event.preventDefault;
    renderComentarios();
   
})