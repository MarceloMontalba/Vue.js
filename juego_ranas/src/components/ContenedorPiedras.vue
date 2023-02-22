<template>
  <!--Contiene las imagenes de las piedras-->
  <div class="contenedor-piedras">
    <img v-for="piedra in 7" :key="piedra" src="../assets/img/piedra.png" class="piedra">
  </div>
</template>
  
<script>
  export default{
    name: "ContenedorPiedras"
  }
</script>