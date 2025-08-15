<script setup>
// import Users from './Users.vue';
import { defineAsyncComponent, ref } from "vue";

// Async Component
const showUserComponent = ref(false);
const AsyncUserComponent = defineAsyncComponent(()=>{
  return import('./Users.vue')
})
</script>

<template>
  <h4>I am HelloWorld Component.</h4>
  <!-- <Users v-if="showUserComponent"/> -->
  <AsyncUserComponent v-if="showUserComponent"/>
  <button @click="showUserComponent = !showUserComponent">Toggle Users</button>

  
</template>



