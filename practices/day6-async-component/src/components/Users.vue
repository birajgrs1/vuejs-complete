<script setup>
import { ref } from "vue";

const users = ref(["Biraj", "Raj", "Usha", "Ramesh", "Hari"]);



</script>
<template>

  <h3 v-for="(user, i) in users" :key="i"  >
    {{ user }}
  </h3>
</template>

<style scoped></style>
