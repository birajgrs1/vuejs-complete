<script setup>
// const props = defineProps(["name", "age", "profession"]);
// const props = defineProps({
//     name: String,
//     age: Number,
//     profession: String,
// });

// const props = defineProps({
//     isLogout: Boolean
// })

/*
const props = defineProps({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  profession: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  study: {
    type: Object,
    required: true,
  },
  maritalStatus: {
    type: Boolean,
    required: false,
    default: false,
  },
});
*/

const props = defineProps({
  employee: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <!-- <h4>
    Name: {{ fullName }}, Age: {{ age }}, Profession: {{ profession }}, Is
    Married?: {{ maritalStatus }}
  </h4>
  <ul>
    <li v-for="skill in skills" :key="skill">
      {{ skill }}
    </li>
  </ul>

  <h4>Study Details</h4>
  <ul>
    <li>{{ study }}</li>
  </ul> -->

  <h4>Employee Details:</h4>
  <hr/>
  <ul>
    <li>Id: {{ employee.id }}</li>
    <li>Name: {{ employee.name }}</li>
    <li>Salary: {{ employee.salary }}</li>
  </ul>
</template> 

<style scoped></style>
