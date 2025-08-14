<script setup>
import {inject} from 'vue';
const count =inject('count');
function increaseCount() {
    count.value++;
}
</script>

<template>
    <h3>Count Guest velues: {{ count }}</h3>
    <button @click="increaseCount">Click Guest count button</button>
</template>

<style scoped>

</style>
