<script setup>
// import TeleportDemo from './components/TeleportDemo.vue';
// import HelloWorld from './components/HelloWorld.vue';
import { Suspense } from "vue";
import MyPosts from "./components/MyPosts.vue";
// import { ref } from 'vue'

// const isMobile = ref(false);
</script>

<template>
  <!-- 
  <HelloWorld/>

  <Teleport to='body' :disabled="isMobile">
  <TeleportDemo/>
  </Teleport> -->

  <!-- <MyPosts/> -->
  <Suspense v-on:fallback="console.log('fallback')">
    <template #default>
      <MyPosts />
    </template>
  </Suspense>
</template>

<style scoped></style>
