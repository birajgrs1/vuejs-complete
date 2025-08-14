<script setup>
import FallThroughDemo from './components/FallThroughDemo.vue';
import { ref } from 'vue';
const style = ref({
    backgroundColor: 'green',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
});

const btnClicked = () => {
    alert('Button clicked!');
};
</script>
<template>
    <!-- <FallThroughDemo id="btn" class="btn-green"/> -->
    <!-- <FallThroughDemo id="btn" :style="style" @click="btnClicked"/> -->
     <!-- Merging -->
     <!-- <FallThroughDemo id="btn" :style="style" @click="btnClicked"/> -->
    <!-- <CustomButton /> -->
    <!-- <FallThroughDemo id="btn" :style="style" @click="btnClicked"/> -->
     <FallThroughDemo class="myBtn btn-green" />
</template>

<style scoped>
</style>