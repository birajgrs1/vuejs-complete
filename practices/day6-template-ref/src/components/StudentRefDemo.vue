<script setup>
import { onMounted, ref, watchEffect } from "vue";
// const students = ref(["Biraj", "Raj", "Usha", "Ramesh", "Hari"]);
// const studentsRef = ref([]);

// onMounted(() => {
//     console.log(studentsRef.value);
// })

// watchEffect(() => {
//     console.log(studentsRef.value);
// })

// Function

const students = ref(["Biraj", "Raj", "Usha", "Ramesh", "Hari"]);
const elements = ref([]);

onMounted(() => {
  console.log(elements.value);
  // console.log(elements.value[0]);
});

const funcRef = (ele) => {
  console.log(ele.value);
};
</script>
<template>
  <!-- ref inside v-for -->
  <!-- <h3 v-for="(student, i) in students" :key="i" ref="studentsRef">{{ student }}</h3> -->
  <!-- Function ref -->
  <!-- <h3 v-for="(student, i) in students" :key="i" 
  :ref="(ele) => (ele[i] = ele)"
  >
    {{ student }}
  </h3> -->
  <h3 v-for="(student, i) in students" :key="i" :ref="funcRef">
    {{ student }}
  </h3>
</template>

<style scoped></style>
