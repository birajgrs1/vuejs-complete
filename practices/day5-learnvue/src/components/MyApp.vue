<script setup>
import { ref, watch } from 'vue';

const heartRate = ref(100);

watch(heartRate, (newValue) => {
  if (newValue <= 0) {
    console.log("Heart rate is zero or negative, indicating no heart activity.");
  } else {
    console.log(`Current heart rate: ${newValue} bpm`);
  }
});

// Function to increase heart rate
const increaseHeartRate = () => {
  if (heartRate.value >= 200) {
    heartRate.value = 200; // Limiting the max heart rate for safety
  } else {
    heartRate.value += 10;
  }
};

// Function to decrease heart rate
const decreaseHeartRate = () => {
  if (heartRate.value <= 0) {
    heartRate.value = 0; // Prevent heart rate from going below 0
  } else {
    heartRate.value -= 10;
  }
};
</script>

<template>
  <div class="myapp">
    <h2>Heart Rate Tracking System</h2>

    <!-- Display the current heart rate or a message when it's zero/negative -->
    <p v-if="heartRate > 0">Heart Rate: {{ heartRate }} bpm</p>
    <p v-else>No heart rate data available | Died</p>

    <!-- Action buttons to increase or decrease heart rate -->
    <div class="controls">
      <button @click="increaseHeartRate">Increase Heart Rate</button>
      <button @click="decreaseHeartRate">Decrease Heart Rate</button>
    </div>

    <!-- Visual representation of heart rate -->
    <div v-if="heartRate > 0" class="heart-rate-bar" :style="{ width: heartRate + '%' }"></div>
  </div>
</template>

<style scoped>
.myapp {
  text-align: center;
  margin-top: 20px;
}

h2 {
  color: #16000e;
  font-size: 24px;
  font-weight: bold;
}

p {
  font-size: 20px;
  color: #333;
}

.controls button {
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.controls button:hover {
  background-color: #45a049;
}

.heart-rate-bar {
  margin-top: 20px;
  height: 20px;
  background-color: #4CAF50;
  transition: width 0.5s ease;
}

p:empty {
  font-style: italic;
  color: red;
}
</style>
