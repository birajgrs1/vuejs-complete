<script setup>
import { inject } from 'vue';
const count = inject('count');
const increment = inject('increment');
const decrement = inject('decrement');
const reset = inject('reset');
</script>

<template>
    <h2>Count: {{ count }}</h2>
    <button @click="increment">Increase Count</button>
    <button @click="decrement">Decrease Count</button>
    <button @click="reset">Reset Count</button>
</template>

<style scoped>
</style>
