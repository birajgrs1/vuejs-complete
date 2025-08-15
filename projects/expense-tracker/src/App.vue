<script setup>
import { provide, ref, onMounted, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'

// Global state
const expenses = ref([])
const showMobileMenu = ref(false)
const currency = ref('$')
const darkMode = ref(false)

// Provide these to all components
provide('expenses', expenses)
provide('currency', currency)
provide('darkMode', darkMode)

// Load data from localStorage
onMounted(() => {
  const savedExpenses = localStorage.getItem('expenses')
  if (savedExpenses) expenses.value = JSON.parse(savedExpenses)

  const savedSettings = localStorage.getItem('settings')
  if (savedSettings) {
    const settings = JSON.parse(savedSettings)
    currency.value = settings.currency || '$'
    darkMode.value = settings.darkMode || false
  }
})

// Watch for dark mode changes
watch(darkMode, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  saveSettings()
}, { immediate: true })

function saveSettings() {
  localStorage.setItem('settings', JSON.stringify({
    currency: currency.value,
    darkMode: darkMode.value
  }))
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <AppHeader @toggle-menu="showMobileMenu = !showMobileMenu" />
    
    <div class="flex">
      <AppSidebar :show-mobile="showMobileMenu" @close="showMobileMenu = false" />
      
      <main class="flex-1 p-4 md:p-8 overflow-x-hidden">
        <router-view />
      </main>
    </div>
  </div>
</template>