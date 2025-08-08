<script setup>
import { ref } from 'vue'

const num = 10
const msg = 'Learning vuejs from scratch'

const currentDate = new Date()

const currentTime = ref(0)
setInterval(() => {
    currentTime.value++
}, 1000)


const isOn = ref(false)

function toggle() {
  isOn.value = !isOn.value
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

function formatTime(time) {
  const hours = String(time.getHours()).padStart(2, '0')
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const seconds = String(time.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

const messageWords = msg.split(' ')
</script>

<template>
  <div>
    <h2> Interpolated Texts</h2>

    <p>Number + 20: {{ num + 20 }}</p>
    <p>String Concatenation: {{ "Hello " + "World" }}</p>
    <p>Original Message: {{ msg }}</p>

    <p>Current Date (DD-MM-YYYY): {{ formatDate(currentDate) }}</p>
    <p>Current Time (HH:MM:SS): {{ formatTime(currentDate) }}</p>

    <p>Message Words:</p>
    <ul>
      <li v-for="(word, index) in messageWords" :key="index">{{ word }}</li>
    </ul>

    <button @click="toggle">Toggle</button>
    <p>Status: <strong>{{ isOn ? 'ON' : 'OFF' }}</strong></p>
 
 </div>
</template>

<style scoped>
button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  margin-top: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

strong {
  color: green;
}

strong:has-text("OFF") {
  color: red;
}
</style>
