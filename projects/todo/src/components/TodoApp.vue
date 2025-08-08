<template>
    <div class="todo-app">  
      <h1>Todo App</h1>
      <div class="input-container">
        <input 
          v-model="newTodo" 
          @keyup.enter="addTodo" 
          placeholder="Add new todo" 
        />
        <button @click="addTodo">
          <span class="material-icons">add_task</span>
        </button>
      </div>
  
      <table v-if="todos.length > 0">
        <thead>
          <tr>
            <th>No.</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in todos" :key="index">
            <td>{{ index + 1 }}</td>
            <td :class="{ done: todo.done }" @click="toggleDone(index)">
              {{ todo.text }}
            </td>
            <td>
              <button @click="removeTodo(index)" class="delete-btn">
                <span class="material-icons">delete</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <p v-else class="no-data">No todos yet. Add one above!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "TodoApp",
    data() {
      return {
        newTodo: "",
        todos: []
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== "") {
          this.todos.push({ text: this.newTodo, done: false });
          this.newTodo = "";
        }
      },
      toggleDone(index) {
        this.todos[index].done = !this.todos[index].done;
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
      }
    }
  };
  </script>
  <style src="../style.css"></style>
  
