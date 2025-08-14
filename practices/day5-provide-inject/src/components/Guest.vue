<script setup>
// const props = defineProps({
//     name: String
// })
import { inject } from 'vue';
// const guestName = inject('name');  //injecting the provided value
// const guestName = inject('name', 'Hari');   // Default value if 'name' is not provided
// passing function 
// const guestName = inject('name', () => 'Hari', true); // Default value as a function
const course = inject('course');

const price = inject('price'); 

</script>

<template>
    <!-- <h2>I am Guest. My name is {{ props.name }}.</h2> -->
    <!-- <h2>I am Guest. My name is {{ guestName }}.</h2> -->
     <ul>
        <li>Course Name: {{ course.name }}</li>
        <li>Duration: {{ course.duration }}</li>
        <li>Price: {{ course.price }}</li>
     </ul>
     <p>Price from App:{{ price}}</p>
     

</template>

<style scoped>

</style>
