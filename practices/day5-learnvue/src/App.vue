<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
const showHello = ref(true);
const count = ref(0);

onBeforeMount(() => {
  console.log("onBeforeMount: Component is about to be mounted.");
});
onMounted(() => {
  console.log("onMounted: Component has been mounted.");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate: Component is about to be updated.");
});
onUpdated(() => {
  console.log("onUpdated: Component has been updated.");
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount: Component is about to be unmounted.");
});
onUnmounted(() => {
  console.log("onUnmounted: Component has been unmounted.");
});


</script>

<template>
  <h1>Hello from Parent Component</h1>
  <HelloWorld v-if="showHello" />
  <button @click="showHello = !showHello">show/hide</button>
  <button @click="count++">Count: {{ count }}</button>
  <p v-if="count > 0">You have clicked the button {{ count }} times.</p>
  <p v-else>Click the button to start counting!</p>
</template>

<style scoped></style>
