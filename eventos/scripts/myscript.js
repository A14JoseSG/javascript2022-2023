const $d=document,
    $contenedorI = $d.querySelector("#contInt"),
    $contenedorE = $d.querySelector("#contExt"),
    $enlace=$d.querySelector("a"),
    $enlaces=$d.querySelectorAll("a")

/*
$contenedorE.onclick = function (event){
    alert("Contenedor Exterior");
}


$contenedorI.onclick = function (event){
    event.stopPropagation();
    alert("Contenedor Interior");
}*/

$contenedorE.addEventListener("click",event=>{alert("contenedor Exterior")})
$contenedorI.addEventListener("click",event=>{
    //alert("contenedor Interior")
    event.preventDefault(); // no hace la opción por defecto
    alert(` ${event.target.textContent}`)
})

/*$enlaces.forEach(enlace=>enlace.addEventListener("click",evento=>{
    console.log(evento.target)
    evento.stopPropagation()
    alert(`boton ${evento.target.textContent}`)
}))*/

