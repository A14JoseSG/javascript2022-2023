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
      $botonNext = document.querySelector(".nex-btn"),
      $foto = document.querySelector("img");

posicion = 0;
const cambiarEmpleado = (direcion) =>{
  let $fragmento = document.createDocumentFragment();
  $nombre.textContent =personal[posicion+1].nombre;
  $trabajo.textContent = personal[posicion+1].trabajo;
  $foto.textContent = personal[posicion+1].foto;
  $text.textContent = personao[posicion+1].text;

  $fragmento.appendChild($nombre);
  $fragmento.appendChild($trabajo);
  $fragmento.appendChild($text);

  $empleado.appendChild($fragmento);
}
$botonPrev.addEventListener("click",event=>{
  event.preventDefault;
  cambiarEmpleado("prev");
})
$botonNext.addEventListener("click",event=>{
  event.preventDefault;
  cambiarEmpleado("next");
})