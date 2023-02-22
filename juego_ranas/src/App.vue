<template>
  <div>
    <ContenedorPiedras></ContenedorPiedras>
    <ContenedorRanas></ContenedorRanas>
  </div>
</template>

<script>
import sonidoFondo from "./assets/sounds/ambiente.mp3"

import ContenedorPiedras from "./components/ContenedorPiedras.vue"
import ContenedorRanas from "./components/ContenedorRanas.vue"

export default {
  name: 'App',
  components: {
    ContenedorPiedras,
    ContenedorRanas,
  },
  beforeMount: function(){
    //Se reproduce el audio de fondo en ciclo
    const sonido = new Audio(sonidoFondo)
    sonido.loop = true
    sonido.play()
  }
}
</script>

<style>
  @import "./assets/css/pushy-buttons.min.css";
  @import "./assets/css/styles.css";
</style>
