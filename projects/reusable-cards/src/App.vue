<script setup>
import Card from "./components/Card.vue";
import { boughtCount } from "./data.js";
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10">
    <div class="max-w-5xl mx-auto p-6">
      <h1
        class="text-4xl font-extrabold mb-2 text-center text-gray-800 tracking-tight"
      >
        Product Cards
      </h1>
      <hr class="border-t border-gray-300 mb-8" />

      <p class="text-lg text-center text-gray-600 mb-8">
        Total Bought:
        <span class="font-semibold text-blue-600">{{ boughtCount }}</span>
      </p>
      <hr class="border-t border-gray-300 mb-8" />
      <p class="text-lg text-center text-gray-600 mb-16">
        Explore our collection of products and make your purchase today!
      </p>

      <Card />
    </div>
  </div>
</template>
