<script setup>
import User from "./components/User.vue";
import { provide, ref, readonly } from "vue";
import myInjectionKeys from "./utils/keys.js";

// const count = ref(0);
// const increaseCount = () => {
//     count.value++;
// };
// Provide a reactive state
// provide("count", readonly(count));

// const name = "Hari";
// provide("name");

// provide("course",{
//     name: "Vue 3",
//     duration: "2 months",
//     price: 10000
// })

// Provide reactive state
// const price = ref(100);
// provide("price", price);

// Working with symbol keys

const count = ref(0);
const increaseCount = () => {
    count.value++;
};
provide(myInjectionKeys.count, readonly(count));
provide(myInjectionKeys.increment, increaseCount);
provide(myInjectionKeys.decrement, () => {
    count.value--;
});
provide(myInjectionKeys.reset, () => {
    count.value = 0;
});
</script>

<template>
    <!-- Props -->
    <!-- <User name="Ram"/> -->
     <!-- <User :name="name"/> -->
      <h2>Count: {{ count }}</h2>
    <button @click="increaseCount">Increase Count</button>
    <button @click="decrement">Decrease Count</button>
    <button @click="reset">Reset Count</button>
      <!-- <button @click="increaseCount">Increase with count</button> -->
    <User />   
</template>
