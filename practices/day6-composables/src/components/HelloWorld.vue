<script setup>
import { useName } from '../composables/name';

const { firstName, lastName } = useName();
// import { ref, onMounted, onUnmounted } from "vue";
// import { faker } from "@faker-js/faker";

// const firstName = ref("");
// const lastName = ref("");

// const updateName = () => {
//   firstName.value = faker.person.firstName();
//   lastName.value = faker.person.lastName();
// };

// onMounted(() => window.addEventListener("mousemove", updateName));
// onUnmounted(() => window.removeEventListener("mousemove", updateName));

</script>

<template>
  <h2>From HelloWorld Component</h2>
  <h3> Full Name: {{ firstName }} {{ lastName }}</h3>
</template>

<style scoped></style>
