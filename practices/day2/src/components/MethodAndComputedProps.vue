<script setup>
import { ref, computed } from "vue";

// const myFname = "Rahul";
// const myLname = "Shrestha";
// const myFullName = () => {
//     return myFname + " " + myLname;
// };
// console.log("My Full Name:", myFullName());

const fname = ref("Rabin");
const lname = ref("Shrestha");

const updateFullName = () => {
    fname.value = "Rabin Kumar";
    lname.value = "Shrestha";
};

const fullName = computed(() => `${fname.value} ${lname.value}`);
console.log("Full Name:", fullName.value);

const upperCaseName = computed(() => fullName.value.toUpperCase());

const greetUser = () => `Hello, ${fullName.value}!`;

const resetName = () => {
    fname.value = "Rabin";
    lname.value = "Shrestha";
};
</script>

<template>
  <div>
    <h2>Methods and Computed Properties</h2>


    <h3>Full Name: {{ fullName }}</h3>
    <h3>Upper Case: {{ upperCaseName }}</h3>

    <p>{{ greetUser() }}</p>

    <button @click="updateFullName">Update Full Name</button>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<style scoped>
button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #367c6b;
}
</style>
