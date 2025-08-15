<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  showMobile: Boolean
})

const emit = defineEmits(['close'])

const navItems = [
  { name: 'Dashboard', path: '/', icon: 'dashboard' },
  { name: 'Expenses', path: '/expenses', icon: 'receipt' },
  { name: 'Reports', path: '/reports', icon: 'analytics' },
  { name: 'Settings', path: '/settings', icon: 'settings' }
]
</script>

<template>
  <aside 
    class="bg-white dark:bg-gray-800 w-64 fixed h-full shadow-lg z-10 transition-transform duration-200"
    :class="{ 'transform -translate-x-full md:translate-x-0': !showMobile }"
  >
    <div class="p-4 flex items-center space-x-2 border-b border-gray-200 dark:border-gray-700">
      <span class="material-icons-outlined text-indigo-600 dark:text-indigo-400">payments</span>
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Expense Tracker</h2>
    </div>
    
    <nav class="p-4">
      <ul class="space-y-2">
        <li v-for="item in navItems" :key="item.name">
          <RouterLink
            :to="item.path"
            @click="emit('close')"
            class="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
            active-class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
          >
            <span class="material-icons-outlined mr-3">{{ item.icon }}</span>
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>