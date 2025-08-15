<script setup>
import { ref } from 'vue';

const count = ref(5);
const a = 10;
function increaseCount () {
    count.value++;
}

defineExpose({
    count, a,
    increaseCount    
})

</script>

<template>
    <h3>User Component</h3>

    <h4>Counter: {{ count }}</h4>
    <h4>A: {{ a }}</h4>
    <button @click="increaseCount">Increase</button>
    
</template>

<style scoped></style>