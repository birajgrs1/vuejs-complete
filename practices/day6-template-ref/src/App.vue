<script setup>
import { onMounted, ref } from 'vue';
import User from './components/User.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import StudentRefDemo from './components/StudentRefDemo.vue';
const userRef = ref(null);

onMounted(() => {
  console.log(userRef.value);
})
</script>

<template>
  <!-- <HelloWorld /> -->
  <!-- <StudentRefDemo/> -->
   <User ref="userRef"/>
</template>

<style scoped>
</style>
