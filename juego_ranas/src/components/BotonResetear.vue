<template>
  <!--Contiene el boton de reseteo de juego-->
  <div class="recarga">
    <img src="../assets/img/recarga.png" @click="$emit('resetear')">
  </div>
</template>

<script>
  export default{
    name: "BotonResetear"
  }
</script>