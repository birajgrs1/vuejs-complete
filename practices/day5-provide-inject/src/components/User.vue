<script setup>
import Guest2 from './Guest2.vue';
// import NewGuest from './NewGuest.vue';

// import Guest from './Guest.vue';
// import { inject } from 'vue';
// import inject from 'vue';
// const props = defineProps({
//     name: String
// });
// const message = inject('message'); 

</script>

<template>
    <!-- <Guest :name="props.name"/>
    <h2>I am User. My name is {{ props.name }}.</h2> -->

    <!-- Message provided by App -->
    <!-- <h2>{{ message }}</h2> -->
    <!-- <Guest /> -->

    <!-- working with reactivity -->
     <!-- <NewGuest/> -->

     <!-- working with symbol keys -->
      <Guest2/>

</template>

<style scoped>

</style>
