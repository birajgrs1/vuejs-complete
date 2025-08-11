<script setup>
import { ref } from 'vue';

const num = ref(0); // reactive number

setTimeout(() => {
  console.log("SetTimeout called");
  console.log("Before:", num.value);
  num.value = 10;
  console.log("After:", num.value);
}, 2000);


const increment = () => {
  num.value++;
};

const reset = () => {
  num.value = 0;
};

/*
const num = ref(10);
setTimeout(() => {
    console.log("Settimeout called");
    console.log(num.value);
    num.value = 20; 
    console.log(num.value);
}, 2000);
*/
</script>

<template>
  <div class="container">
    <h1>Reactivity with Ref </h1>
    <h2>Current Number: <span class="num">{{ num }}</span></h2>

    <div class="buttons">
      <button @click="increment">Increment</button>
      <button @click="reset">Reset</button>
    </div>

  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 30px;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  color: #333;
}

.num {
  font-weight: bold;
  color: #007acc;
}

.buttons {
  margin-top: 20px;
}

button {
  margin: 0 10px;
  padding: 10px 18px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007acc;
  border: none;
  color: white;
  border-radius: 4px;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #005fa3;
}

</style>
