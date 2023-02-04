// Datos del Personal
const personal = [
  {
    id: 1,
    nombre: "Ana Lopez",
    trabajo: "Desarrolladora Web",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    nombre: "Rosa Martinez",
    trabajo: "Desarrolladora Web",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    nombre: "Pedro Rodriguez",
    trabajo: "Becario",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    nombre: "Marcos Alonso",
    trabajo: "El Jefe",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const $contenedor = document.querySelector("section"),
      $empleado = document.querySelector("article"),
      $nombre = document.querySelector("#nombre"),
      $trabajo = document.querySelector("#trabajo"),
      $text = document.querySelector("#info"),
      $botonPrev = document.querySelector(".prev-btn"),
      $botonNext = document.querySelector(".next-btn"),
      $foto = document.querySelector(".img-contenedor"),
      $random = document.querySelector(".random-btn");

let personaInicial  = {                                         // Recogemos los datos que están en el html para añadirlos al objeto
  id : 0,
  nombre: $nombre.textContent,
  trabajo: $trabajo.textContent,
  foto: $foto.firstElementChild.getAttribute("src"),
  text: $text.textContent
}
personal.splice(0,0,personaInicial);

aleatorio = (min,max) => Math.floor(min+(max-min)*Math.random());
posicion = 0;

// Pinta el empleado. Recibe el sentido del botón pulsado para elegir el anterior o posterior.
const cambiarEmpleado = (boton) =>{
 
  if(boton == $botonPrev){
    posicion--;
    if (posicion == -1) posicion = personal.length-1;
    
    $nombre.textContent =personal[posicion].nombre;
    $trabajo.textContent = personal[posicion].trabajo;
    $foto.firstElementChild.setAttribute("src",personal[posicion].foto);
    $text.textContent = personal[posicion].text;  
  }else if(boton == $botonNext){
    posicion++;
    if (posicion == personal.length) posicion = 0;
    $nombre.textContent =personal[posicion].nombre;
    $trabajo.textContent = personal[posicion].trabajo;
    $foto.firstElementChild.setAttribute("src",personal[posicion].foto);
    $text.textContent = personal[posicion].text; 
  }else{
    do{
      $aleatorio = aleatorio(0,personal.length);
    }while($aleatorio == posicion);
    posicion = $aleatorio;
    $nombre.textContent =personal[posicion].nombre;
    $trabajo.textContent = personal[posicion].trabajo;
    $foto.firstElementChild.setAttribute("src",personal[posicion].foto);
    $text.textContent = personal[posicion].text;
  }         
  $empleado.replaceChild($foto, $empleado.querySelector(".img-contenedor"));
  $empleado.replaceChild($nombre,$empleado.querySelector("#nombre"));
  $empleado.replaceChild($trabajo,$empleado.querySelector("#trabajo"));
  $empleado.replaceChild($text,$empleado.querySelector("#info"));
}
$botonPrev.addEventListener("click",event=>{
  event.preventDefault;
  cambiarEmpleado(event.currentTarget);
})
$botonNext.addEventListener("click",event=>{
  event.preventDefault;
  cambiarEmpleado(event.currentTarget);
})
$random.addEventListener("click",event=>{
  event.preventDefault;
  cambiarEmpleado(event.currentTarget)
})
