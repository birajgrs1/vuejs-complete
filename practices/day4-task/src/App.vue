<script setup>
// import Hello from './components/Hello.vue';
import PropsValidationDemo from "./components/PropsValidationDemo.vue";
import { Employee } from "./Employee"; 
// import { ref } from 'vue';
// const firstName = ref('Biraj');
// const lastName = ref('Ghorasaine');

const employees = [
  new Employee(1, "Biraj", 25000),
  new Employee(2, "Raj", 20000),
];
</script>

<template>
  <!-- <Hello name="Biraj"/>
    <Hello name="Abhishek"/>
    <Hello name="Suraj"/> -->

  <!-- Static prop -->
  <!-- <Hello fullName="Biraj Ghorasaine"/>  Passing prop -->

  <!-- Dynamic prop -->
  <!-- <Hello :firstName="Biraj" :lastName="Ghorasaine"/> -->
  <!-- <Hello :firstName="firstName" :lastName="lastName"/> -->

  <!-- Boolean Casting -->
  <!-- <PropsValidationDemo :isLogout="true"/> -->

  <!-- Prop validation -->

  <!-- <PropsValidationDemo
    fullName="Biraj Ghorasaine"
    :age="23"
    profession="Web Developer"
    :skills="[
      'Vue.js',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Django',
      'Flask',
    ]"
    :study="{
      database: ['MongoDB', 'MySQL', 'PostgreSQL'],
      javascript: ['Vue.js', 'React.js', 'Node.js'],
      python: 'Django',
    }"
    :maritalStatus="false"
  /> -->

  <PropsValidationDemo :employee="employees[0]" />
</template>

<style scoped></style>
