<script setup>
import { reactive } from "vue";
// const myNum = reactive({count: 0});
// setTimeout(() => {
//   myNum.count = 20;
// }, 2000);

// without reactive
// const num = {a: 10, b: 20};
// setTimeout(() => {
//     console.log("Settimeout called");
//     console.log(num.a);
//   num.a = 30; // This won't trigger reactivity
//     console.log(num.a);
// }, 2000);

// With reactive
const num = reactive({ a: 10, b: 20 });
setTimeout(() => {
  console.log("Settimeout called");
  console.log(num.a);
  num.a = 40; // This will trigger reactivity
  console.log(num.a);
}, 2000);

// const person = reactive({
//   name: "Ram",
//   age: 25,
// });
// function updatePerson() {
//   person.name = "Shyam";
//   person.age = 30;
// }

// Deep reactivity example
const person = reactive({
  name: "Ram",
  age: 25,
  address: {
    city: "Kathmandu",
    country: "Nepal",
  },
});
function updatePerson() {
  person.name = "Shyam";
  person.age = 30;
  person.address.city = "Pokhara"; // This will also trigger reactivity
}
</script>
<template>
  <div>
    <!-- <h1>{{myNum.count}}</h1> -->
    <!-- <h1>Sum without reactive:{{num.a+num.b}}</h1> -->
    <h1>Sum with reactive:{{ num.a + num.b }}</h1>

    <p>Name: {{ person.name }}</p>
    <p>Age: {{ person.age }}</p>
    <p>City: {{ person.address.city }}</p>
    <p>Country: {{ person.address.country }}</p>
    <button @click="updatePerson">Update Person</button>
  </div>
</template>

<style scoped>
button {
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
