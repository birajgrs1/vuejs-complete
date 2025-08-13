<script setup>
// const props = defineProps(['name']);
import { ref, computed } from 'vue';

// declare props
// const props = defineProps(['fullName']);
const props = defineProps(['firstName', 'lastName']);
// const fname = ref(props.firstName);
// const lname = ref(props.lastName);

const fullName = computed(() => {
  return `${props.firstName} ${props.lastName}`;
});

console.log(props);


</script>

<template>
  <!-- <h1>Hello {{ name }}!</h1> -->
   <!-- using prop -->
  <!-- <h1>Hello {{ fullName }}!</h1> -->
  <!-- <p>My name is {{ firstName }} {{ lastName }}.</p> -->
  <p>My name is {{ fullName }}.</p>

  <!-- <p>My name is {{ fname }} {{ lname }}.</p> -->
</template>

<style scoped></style>
