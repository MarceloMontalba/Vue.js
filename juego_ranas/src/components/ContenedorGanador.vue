<template>
  <div class="contenedor-ganador">
    <img src="../assets/img/ganador.png">
    <br>
    <button class="pushy__btn pushy__btn--sm btn-recargar" @click="$emit('jugarNuevamente')">Volver a jugar</button>
  </div>
</template>

<script>
  export default{
    name: "ContenedorGanador"
  }
</script>