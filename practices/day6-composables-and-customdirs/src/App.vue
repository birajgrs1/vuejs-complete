<script setup>
// import UserList from './components/UserList.vue';
// import HelloWorld from './components/HelloWorld.vue';

// Custom directives
import CustomDirs from './components/CustomDirs.vue';

import { onMounted } from 'vue';

const focusDirective = {
  beforeMount(el) {
    onMounted(() => {
      el.focus();  
    });
  }
};

defineExpose({ directives: { focus: focusDirective } });
</script>

<template>
  <!-- <HelloWorld/> -->
   <!-- <UserList/> -->

   <!-- Custom directives -->
    <div id="app">
    <input v-focus placeholder="This input will be focused on page load">
  </div>

  <CustomDirs />

</template>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
}

input {
  padding: 10px;
  font-size: 16px;
}
</style>
