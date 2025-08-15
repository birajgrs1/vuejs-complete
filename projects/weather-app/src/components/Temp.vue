
<script setup>
import { ref, onMounted } from "vue";
import Card from "./Card.vue";

const searchValue = ref("Kathmandu");
const tempInfo = ref(null);
const loading = ref(false);
const error = ref(null);
const unit = ref("metric");

async function getWeatherInfo() {
  loading.value = true;
  error.value = null;
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue.value}&units=${unit.value}&appid=d5f0febe2774e54047366d0bd65429a5`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    const { temp, humidity, pressure } = data.main;
    const { main: weatherMood } = data.weather[0];
    const { name } = data;
    const { speed } = data.wind;
    const { country, sunset } = data.sys;

    tempInfo.value = {
      temp,
      humidity,
      pressure,
      weatherMood,
      name,
      speed,
      country,
      sunset,
    };
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

function handleUnitToggle() {
  unit.value = unit.value === "metric" ? "imperial" : "metric";
}

onMounted(() => {
  getWeatherInfo();
});
</script>



<template>
  <div class="flex flex-col items-center">
    <!-- Search -->
    <div class="flex justify-center mt-10">
      <input
        type="search"
        placeholder="Search..."
        autofocus
        class="px-6 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-300"
        v-model="searchValue"
      />
      <button
        class="bg-teal-500 ml-[4px] text-white px-7 py-3 rounded-r-lg transition-all hover:bg-teal-600"
        @click="getWeatherInfo"
      >
        Search
      </button>
    </div>

    <!-- Loader -->
    <span v-if="loading" class="loader m-[80px] animate-pulse">Loading...</span>

    <!-- Error -->
    <div v-if="error" class="text-red-500">{{ error }}</div>

    <!-- Weather Card -->
    <transition name="fade" mode="out-in">
      <Card
        v-if="tempInfo && !loading && !error"
        v-bind="tempInfo"
        :unit="unit"
        :key="unit + searchValue"
      />
    </transition>

    <!-- Unit Toggle -->
    <button
      class="mt-4 bg-teal-500 text-white px-6 py-2 rounded-lg transition-all hover:bg-teal-600"
      @click="handleUnitToggle"
    >
      Toggle to {{ unit === "metric" ? "°F" : "°C" }}
    </button>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>