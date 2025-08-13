<script setup>
// import Hello from './components/Hello.vue';
// import PropsValidationDemo from "./components/PropsValidationDemo.vue";
import ComponentEvents from "./components/ComponentEvents.vue";
import { ref } from "vue";
// const count = ref(0);

const name = ref("");
const isValid = ref(true);

const rules = [
  (val) => val.length >= 3 || "Minimum 3 characters required.",
  (val) => /^[a-zA-Z0-9 ]+$/.test(val) || "No special characters allowed.",
];

// import { Employee } from "./Employee";
// const firstName = ref('Biraj');
// const lastName = ref('Ghorasaine');

// const employees = [
//   new Employee(1, "Biraj", 25000),
//   new Employee(2, "Raj", 20000),
// ];
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

  <!-- <PropsValidationDemo :employee="employees[0]" /> -->

  <!-- Component Events -->
  <!-- <h2>Value: {{ count }}</h2> -->
  <!-- <ComponentEvents @increaseCount="count++" /> -->

  <div class="form-wrapper">
    <h2>Register</h2>
    <ComponentEvents
      v-model="name"
      :rules="rules"
      @validation="(v) => (isValid = v)"
    />
    <button :disabled="!isValid" class="submit-btn">Submit</button>
  </div>
</template>

<style scoped>
.form-wrapper {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 6px;
  background: #fafafa;
}
h2 {
  margin-bottom: 1rem;
}
.submit-btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

<!-- <style scoped>
h2{
    color: #253801;
}

</style> -->
