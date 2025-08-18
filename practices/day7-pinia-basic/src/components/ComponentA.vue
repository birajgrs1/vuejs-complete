<script setup>
import { useCounterStore } from "../store/counter";
import { storeToRefs } from "pinia";

const counter = useCounterStore();

// Destructuring state and methods
// const { count, doubleCount, increment, decrement, reset } = counter;

// Using storeToRefs
const { count, doubleCount } = storeToRefs(counter);
const { increment, decrement, reset } = counter;
</script>

<template>
  <h2>Component A</h2>
  <!-- <h1>Component A</h1>   -->
  <!-- <h2>Counter: {{ counter.count }}</h2>
  <h2>Double Counter: {{ counter.doubleCount }}</h2> -->
  <!-- <button @click="counter.increment">Increment</button>
  <button @click="counter.decrement">Decrement</button>
  <button @click="counter.reset">Reset</button> -->

  <h2>Counter: {{ count }}</h2>
  <h2>Double Counter: {{ doubleCount }}</h2>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <button @click="reset">Reset</button>
</template>

<style scoped>
h2 {
  font-family: 'Arial', sans-serif;
  color: #2C3E50;
  margin: 10px 0;
}

button {
  padding: 10px 20px;
  background-color: #3498db; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9; 
}

button:active {
  background-color: #1abc9c; 
}
</style>
