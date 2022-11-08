<template>
  <div>
    <div id="header">
      <SearchItem @query-change="querySearch"/>
    </div>

    <div id="main-container">
      <h2>Todos</h2>
      <TodoAdd v-on:add-todo="addTodo" />
      <TodoItem v-bind:todosList="copyTodos" v-on:delete-todo="deleteTodo" />

    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import TodoAdd from './components/TodoAdd.vue'
import SearchItem from './components/SearchItem.vue'

export default {
  name: 'App',
  components: {
    TodoItem, TodoAdd, SearchItem
  },
  methods: {
    deleteTodo: function(id){
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.copyTodos = [... this.todos];
    },
    addTodo: function(todo){
      this.todos.push(todo);
      this.copyTodos = [... this.todos]
    },
    querySearch: function(query){
      if(query.trim()==''){
        this.copyTodos = [... this.todos]
      }
      else{
        const temp = this.todos.filter(todo => {
          return todo.title.includes(query)
        });
        this.copyTodos = [... temp]
      }
    }
  },  
  data: function(){
    return{
      todos: [
        {
          id: 0,
          title: "Comprar de cenar",
          completed: true
        },
        {
          id: 1,
          title: "Leer un libro",
          completed: false
        },
        {
          id: 2,
          title: "Estudiar",
          completed: false
        },
        {
          id: 3,
          title: "Ver una serie",
          completed: true
        }
      ],
      copyTodos: []
    }
  },
  created: function(){
    this.copyTodos = [... this.todos];
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    padding: 0;
    margin: 0;
  }

  #main-container{
    border: solid 1px #ccc;
    width: 600px;
    margin: 100px auto;
  }

  #header{
    background: black;
    padding: 10px;
  }

  h2{
    padding: 0 10px;
  }
</style>
