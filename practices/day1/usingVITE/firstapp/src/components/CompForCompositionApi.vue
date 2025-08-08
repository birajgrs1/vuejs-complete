<script setup>
import { onMounted, ref } from "vue";
const value = ref(0)
const increment = () => {
    value.value++
}  
function onIncrement() {
    console.log(`Value: ${value.value}`);
} 
onMounted(onIncrement);
</script>

<template>
    <p>Value: {{ value }}</p>
    <button @click="increment">Increment</button>
</template>

<style>
p{
    color: #234567;
    margin: 10px;

}
button{
    margin: 10px;
    border: 1px salmon solid;
}
</style>    