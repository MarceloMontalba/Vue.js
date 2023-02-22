<template>
  <div>
    <ContenedorGanador @jugarNuevamente="resetearJuego"></ContenedorGanador>
    <BotonResetear @resetear="resetearJuego"></BotonResetear>

    <!--Contiene las imagenes de las ranas-->
    <div class="contenedor-ranas">
      <img :src="urlRanas[0]" id="0" class="rana" @click=saltar($event)>
      <img :src="urlRanas[1]" id="1" class="rana" @click=saltar($event)>
      <img :src="urlRanas[2]" id="2" class="rana" @click=saltar($event)>
      <img :src="urlRanas[3]" id="3" class="rana" @click=saltar($event) style="visibility: hidden;">
      <img :src="urlRanas[4]" id="4" class="rana" @click=saltar($event)>
      <img :src="urlRanas[5]" id="5" class="rana" @click=saltar($event)>
      <img :src="urlRanas[6]" id="6" class="rana" @click=saltar($event)>
    </div>
  </div>
</template>

<script>
  import sonidoRana from "../assets/sounds/rana.mp3"
  import sonidoNo from "../assets/sounds/error.mp3"
  import sonidoAgua from "../assets/sounds/resetear.mp3"
  import sonidoGanador from "../assets/sounds/ganar.mp3"

  import BotonResetear from "./BotonResetear.vue"
  import ContenedorGanador from "./ContenedorGanador.vue"

  export default{
    name: "ContenedorRanas",
    components: {
      BotonResetear,
      ContenedorGanador,
    },
    data: function(){
      return{
        ranas : [1,1,1,0,2,2,2],
        urlRanas: [require("../assets/img/rana_1.png"),
                   require("../assets/img/rana_1.png"),
                   require("../assets/img/rana_1.png"),
                   require("../assets/img/rana_1.png"),
                   require("../assets/img/rana_2.png"),
                   require("../assets/img/rana_2.png"),
                   require("../assets/img/rana_2.png")
        ]
      }      
    }, 
    methods: {
      saltar: function(evento){
        const idRana = parseInt(evento.currentTarget.id)
        const sonidoSalto = new Audio(sonidoRana)
        const sonidoError = new Audio(sonidoNo)

        //Si son ranas tipo 1
        if(this.ranas[idRana] === 1){
          if(idRana+1<this.ranas.length){
            if(this.ranas[idRana+1] === 0){
              this.ranas[idRana]   = 0
              this.ranas[idRana+1] = 1

              sonidoSalto.play()
            }
            else{
              if(idRana+2<this.ranas.length && this.ranas[idRana+2]===0 && this.ranas[idRana+1]!==1){
                this.ranas[idRana]   = 0
                this.ranas[idRana+2] = 1

                sonidoSalto.play();
              }
              else{
                sonidoError.play();
              }
            }
          }
          else{
            sonidoError.play();
          }
        }

        //Si son ranas tipo 2
        if(this.ranas[idRana] === 2){
          if(idRana-1 >= 0){
            if(this.ranas[idRana-1] === 0){
              this.ranas[idRana]   = 0
              this.ranas[idRana-1] = 2

              sonidoSalto.play();
            }
            else{
              if(idRana-2>=0 && this.ranas[idRana-2]===0 && this.ranas[idRana-1]!==2){
                this.ranas[idRana]   = 0
                this.ranas[idRana-2] = 2

                sonidoSalto.play()
              }
              else{
                sonidoError.play()
              }
            }
          }
          else{
            sonidoError.play()
          }
        }

        //Se pintan las imagenes de las ranas y si la piedra está
        //vacia se vuelve invisible la imagen de dicha rana.
        for(let i=0;i<7;i++){
          let rana = document.getElementById(i)

          if(this.ranas[i]===0){
            rana.style.visibility = "hidden"
          }
          else{
            rana.style.visibility = "visible"
            if(this.ranas[i]===1){
              this.urlRanas[i] = require("../assets/img/rana_1.png")
            }
      
            if(this.ranas[i]===2){
              this.urlRanas[i] = require("../assets/img/rana_2.png")
            }
          }
        }

        //Si el arreglo tiene los elementos en el orden señalado, 
        //significa que el jugador ganó.
        if(this.ranas.every((val, i) => val === [2,2,2,0,1,1,1][i])){
          this.ganar()
        }
      },
      ganar: function(){
        document.querySelector(".recarga").style.visibility = "hidden"
        document.querySelector(".contenedor-ganador").style.visibility = "visible"

        const sonidoGanar = new Audio(sonidoGanador)
        sonidoGanar.play()
      },
      //Se resea el juego si se recibe la señal del componente de boton resetear
      resetearJuego: function(){
        document.querySelector(".recarga").style.visibility = "visible"
        document.querySelector(".contenedor-ganador").style.visibility = "hidden"

        this.ranas    = [1,1,1,0,2,2,2]
        this.urlRanas = [require("../assets/img/rana_1.png"),
                         require("../assets/img/rana_1.png"),
                         require("../assets/img/rana_1.png"),
                         require("../assets/img/rana_1.png"),
                         require("../assets/img/rana_2.png"),
                         require("../assets/img/rana_2.png"),
                         require("../assets/img/rana_2.png")
        ]

        for(let i=0; i<7; i++){
          let rana = document.getElementById(i);

          if (i === 3){
            rana.style.visibility = "hidden"
          }
          else{
            rana.style.visibility = "visible"
          }
        }

        const sonidoResetear = new Audio(sonidoAgua)
        sonidoResetear.play()
      }
    }
  }
</script>