document.addEventListener("DOMContentLoaded",eventDoc =>{
    const formulario = document.querySelector("form");
    const palo = document.querySelector("#palo");
    const numero = document.querySelector("#numero");
    const addCarta = document.querySelector("#addCarta");
    const delCarta = document.querySelector("#delCarta");
    const figuras = document.querySelector("#figuras");

    var cartas = [];

    const renderCartas = ()=>{
        figuras.innerHTML = "";
        
        const fragmentoCarta = document.createDocumentFragment();
        cartas.forEach(carta => {
            const img = document.createElement("img");
            img.setAttribute("src",`imagenes/${carta.palo}${carta.numero}.png`)
            fragmentoCarta.appendChild(img)
            
        });
        figuras.appendChild(fragmentoCarta);
    }

    const añadirCarta = () =>{
        carta = {
            palo: palo.value,
            numero: numero.value
        }
       
        if(cartas.find(element=> element.palo == carta.palo && element.numero == carta.numero )) {
            alert("La carta ya está en la mesa");
        }else {
            cartas.push(carta);
        }
        renderCartas();
    }
    const borrarCarta = ()=>{
        carta = {
            palo: palo.value,
            numero: numero.value
        }
       
        cartas.forEach((element,posicion) => {
            if(carta.palo == element.palo && carta.numero == element.numero) {
                cartas.splice(posicion,1);
            }
        });
        renderCartas();
    }

    addCarta.addEventListener("click", event =>{
        event.preventDefault;
        añadirCarta();
        
    })

    delCarta.addEventListener("click", event =>{
        event.preventDefault;
        borrarCarta();
        
    })


})

