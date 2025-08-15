<script setup>
import { inject } from 'vue'

const currency = inject('currency')
const darkMode = inject('darkMode')

const currencies = [
  { symbol: '$', name: 'US Dollar' },
  { symbol: '€', name: 'Euro' },
  { symbol: '£', name: 'British Pound' },
  { symbol: '¥', name: 'Japanese Yen' },
  { symbol: '₹', name: 'Indian Rupee' }
]
</script>

<template>
  <div class="space-y-8">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
    
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 class="text-lg font-medium mb-6 text-gray-900 dark:text-white">Preferences</h3>
      
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Currency</label>
          <select
            v-model="currency"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option v-for="curr in currencies" :key="curr.symbol" :value="curr.symbol">
              {{ curr.name }} ({{ curr.symbol }})
            </option>
          </select>
        </div>
        
        <div class="flex items-center justify-between">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Dark Mode</label>
            <p class="text-sm text-gray-500 dark:text-gray-400">Toggle between light and dark theme</p>
          </div>
          <button
            @click="darkMode = !darkMode"
            class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-600 transition-colors"
          >
            <span 
              class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
              :class="{ 'translate-x-6': darkMode, 'translate-x-1': !darkMode }"
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>