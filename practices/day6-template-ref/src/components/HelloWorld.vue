<script setup>
import { onMounted, ref, watchEffect } from "vue";

// const inputRef = ref("Biraj");

// Accessing ref

// console.log(inputRef.value);
// onMounted(() => {
//   console.log(inputRef.value);
//   inputRef.value.focus();
// })

// Working with watch
const inputRef = ref(null);


watchEffect(() => {
  console.log("Watch effect called");
  console.log(inputRef.value);

  if (inputRef.value) {
    console.log(inputRef.value);
    inputRef.value.focus();
  }
  else {
    console.log("Not mounted yet!");
  }

})
</script>

<template>
  <!-- Registering ref -->
  <!-- <div>
    <label for="name">Name:</label>
    <input id="name" type="text"  ref="inputRef"/>
  </div> -->
  <!-- Working with watch -->
  <div>
    <label for="name">Name:</label>
    <input id="name" type="text" ref="inputRef" />
  </div>
</template>

<style scoped></style>
