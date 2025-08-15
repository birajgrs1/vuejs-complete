<script setup>
defineProps({
  darkMode: Boolean
})

const emit = defineEmits(['toggle-menu', 'toggle-dark-mode'])
</script>

<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div class="flex items-center">
        <button 
          @click="$emit('toggle-menu')"
          class="mr-4 text-gray-500 dark:text-gray-300 md:hidden"
        >
          <span class="material-icons-outlined">menu</span>
        </button>
        <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
          Expense Tracker
        </h1>
      </div>
      
      <div class="flex items-center space-x-4">
        <button 
          @click="$emit('toggle-dark-mode')"
          class="text-gray-500 dark:text-gray-300"
        >
          <span class="material-icons-outlined">
            {{ darkMode ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>