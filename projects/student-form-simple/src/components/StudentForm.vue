<template>
  <div class="container">
    <h2> Student Form</h2>

    <form @submit.prevent="addStudent" class="student-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" v-model="studentForm.name" type="text" required />
      </div>

      <div class="form-group">
        <label for="class">Class:</label>
        <input id="class" v-model="studentForm.class" type="text" required />
      </div>

      <div class="form-group">
        <label for="address">Address:</label>
        <input id="address" v-model="studentForm.address" type="text" required />
      </div>

      <div class="form-group">
        <label for="mark">Mark:</label>
        <input id="mark" v-model="studentForm.mark" type="number" required min="0" />
      </div>

      <button type="submit" class="submit-btn">Add Student</button>
    </form>

    <h3> Student Table</h3>
    <table class="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Address</th>
          <th>Mark</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.name }}</td>
          <td>{{ student.class }}</td>
          <td>{{ student.address }}</td>
          <td>{{ student.mark }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  class: '',
  address: '',
  mark: ''
})

const studentForm = computed({
  get: () => form.value,
  set: (val) => {
    form.value = val
  }
})

const students = ref([])

const addStudent = () => {
  students.value.push({ ...studentForm.value })
  studentForm.value = {
    name: '',
    class: '',
    address: '',
    mark: ''
  }
}
</script>

