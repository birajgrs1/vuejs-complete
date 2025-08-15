<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  temp: Number,
  humidity: Number,
  pressure: Number,
  weatherMood: String,
  name: String,
  speed: Number,
  country: String,
  sunset: Number,
  unit: String
});

const weatherIconClass = ref('wi wi-day-sunny');
const timeStr = ref('');

watch(
  () => props.weatherMood,
  (newVal) => {
    switch (newVal) {
      case 'Clear':
        weatherIconClass.value = 'wi wi-day-sunny';
        break;
      case 'Clouds':
        weatherIconClass.value = 'wi wi-cloudy';
        break;
      case 'Rain':
        weatherIconClass.value = 'wi wi-rain';
        break;
      default:
        weatherIconClass.value = 'wi wi-day-sunny';
    }
  },
  { immediate: true }
);

watch(
  () => props.sunset,
  (newVal) => {
    const date = new Date(newVal * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    timeStr.value = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  },
  { immediate: true }
);
</script>

<template>
  <article class="w-[40%] mt-10 bg-[#ccf] shadow-lg rounded-lg overflow-hidden">
    <div class="bg-blue-500 text-white flex justify-center items-center py-12">
      <!-- ✅ Weather icon -->
      <i :class="weatherIconClass" class="text-[100px]"></i>
    </div>

    <div class="px-12 py-8 text-center bg-gray-800 text-white">
      <div class="text-7xl mb-4">
        {{ Math.round(temp) }}°{{ unit === 'metric' ? 'C' : 'F' }}
      </div>
      <div class="text-3xl mb-4 uppercase">{{ weatherMood }}</div>
      <div class="text-2xl mb-4">
        {{ name }}, {{ country }}
      </div>

      <div class="mt-8 text-xl">
        <div class="grid grid-cols-2 gap-6">
          <div class="text-center">
            <i class="wi wi-sunset text-3xl text-teal-500"></i>
            <p>{{ timeStr }}</p>
            <p class="text-teal-500">Sunset</p>
          </div>
          <div class="text-center">
            <i class="wi wi-humidity text-3xl text-teal-500"></i>
            <p>{{ humidity }}%</p>
            <p class="text-teal-500">Humidity</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6 mt-6">
          <div class="text-center">
            <i class="wi wi-rain text-3xl text-teal-500"></i>
            <p>{{ pressure }} hPa</p>
            <p class="text-teal-500">Pressure</p>
          </div>
          <div class="text-center">
            <i class="wi wi-strong-wind text-3xl text-teal-500"></i>
            <p>{{ speed }} m/s</p>
            <p class="text-teal-500">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
