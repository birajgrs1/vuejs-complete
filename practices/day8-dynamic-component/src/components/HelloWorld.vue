<script setup>
import Guest from './Guest.vue';
import Popular from './Popular.vue';
import Recent from './Recent.vue';
import {ref} from 'vue';


// const currentTab = ref('guest');

const currentTab = ref(Guest);


</script>

<template>

  <!-- Without dynamic component -->
  <!-- {{ currentTab }} -->

  <!-- <button @click="currentTab = 'guest'">Guest</button>
  <button @click="currentTab = 'popular'">Popular</button>
  <button @click="currentTab = 'recent'">Recent</button>
   <Guest v-if="showGuest"/>
  <Popular v-if="showPopular"/>
  <Recent v-if="showRecent"/> -->

  <!-- With dynamic component -->
  <component :is="currentTab"></component>
  <button @click="currentTab = Guest">Guest</button>
  <button @click="currentTab = Popular">Popular</button>
  <button @click="currentTab = Recent">Recent</button>

  

  
  
  <!-- <Guest/>
  <Popular/>
  <Recent/>  -->
</template>

<style scoped>

</style>
