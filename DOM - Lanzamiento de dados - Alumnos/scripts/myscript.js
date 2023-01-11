const $d = document,
      $contenedor = $d.querySelector('#container'),
      $resultado = $d.querySelector("h1");
      $dado1 = $d.querySelector('.img1'),
      $dado2 = $d.querySelector('.img2'),
      $botonLanzar = $d.querySelector('#jugar'),
      tirada = (min,max)=>Math.floor(min+(max-min)*Math.random());
      
      
      function lanzarDados() {
        let numero1 = tirada(1,7);
          $dado1.src=`imagenes/dado${numero1}.png`;
          
          let numero2 = tirada(1,7);
          $dado2.src=`imagenes/dado${numero2}.png`;
          
          if (numero1 > numero2) {
              $resultado.innerHTML="&#128681; Jugador 1 gana"
          } else if (numero1 < numero2) {
            $resultado.innerHTML="Jugador 2 gana &#128681;"
          }
          else {
            $resultado.innerHTML="&#128681; Empatamos &#128681;"
          }
      }

      $botonLanzar.addEventListener("click",event =>{lanzarDados()})
      $d.addEventListener("DOMContentLoaded",lanzarDados)

