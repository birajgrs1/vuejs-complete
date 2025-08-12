<script setup>
import { products, buyProduct } from "../data.js";
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="p-5 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
    >
      <div class="relative w-full h-48 overflow-hidden rounded-xl">
        <img
          :src="product.image"
          :alt="product.name" 
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />             
      </div>

      <div class="mt-4">
        <h2 class="text-lg font-semibold text-gray-800 truncate">
          {{ product.name }}
        </h2>
        <p class="text-gray-500 mt-1">
          Rs. {{ product.price.toLocaleString() }}
        </p>
        <p
          :class="product.inStock ? 'text-green-600' : 'text-red-600'"
          class="font-medium mt-1"
        >
          {{ product.inStock ? "In Stock" : "Out of Stock" }}
        </p>

        <button
          @click="buyProduct(index)"
          :disabled="!product.inStock"
          class="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>
