<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});
const count = ref(0);

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
button{
  margin: 10px;
  border: 1px salmon solid;
}
button:hover{
  background-color: aqua;
}
</style>
