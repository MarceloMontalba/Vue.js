<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todosList">
        <ItemUnico v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)"/>
    </div>
  </div>
</template>

<script>
  import ItemUnico from './ItemUnico.vue'

  export default {
    name: 'TodoItem',
    props: ['todosList'],
    components: {ItemUnico}
  }
</script>