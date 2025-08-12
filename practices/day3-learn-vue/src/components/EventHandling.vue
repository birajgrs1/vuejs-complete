<script setup>
import { ref } from "vue";

/*
// Event handler
const count = ref(0);

const increment = () => {
  count.value++;
};
const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
};
const reset = () => {
  count.value = 0;
};
*/

// calling methods 
const sayHello = () => {
    alert("Hello, Vue!");
}
const sayGoodbye = (str) => {
    alert(str);
}
</script>

<template>
  <!-- <div class="counter">
    <h1>Counter: {{ count }}</h1>
    <!-- <button v-on="{ click: increment }">Increment</button>
        <button v-on="{ click: decrement }">Decrement</button>
        <button v-on="{ click: reset }">Reset</button> -->

    <!-- using focusin
    <input type="text" @focusin="increment" placeholder="Focus to increment" />
   // using focusout
    <input
      type="text"
      @focusout="decrement"
      placeholder="Focus out to decrement"
    />
    //using keyup.enter
    <input
      type="text"
      @keyup.enter="reset"
      placeholder="Press Enter to reset"
    /> 

    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>

  </div>  -->
  <div class="calling-methods">
        <button @click="sayHello()">Hello</button>
        <button @click="sayGoodbye('Goodbye vue!')"> Goodbye</button>

        <!-- Accessing event arguments -->
         <!-- with $event -->
        <button @click="sayGoodbye($event.target.innerText)">Goodbye with Event</button>
    </div>
</template>

<style scoped>
/* .counter {
  text-align: center;
  margin-top: 20px;
}
.counter h1 {
  font-size: 2em;
  color: #42b983;
}
.counter button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}

.counter button:hover {
  background-color: #42b983;
  color: white;
}

.counter input {
  margin: 6px;
  padding: 4px;
  font-size: 1em;
} */
.calling-methods {
  text-align: center;
  margin-top: 20px;
}
.calling-methods button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}
.calling-methods button:hover {
  background-color: #42b983;
  color: white;
}

</style>

<!-- 
Note:
v-on directive is used to listen for events in Vue.js.
The shorthand for v-on is @, so @click is equivalent to v-on:click.


https://vuejs.org/guide/essentials/event-handling

 -->



