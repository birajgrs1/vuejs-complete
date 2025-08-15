<script setup>
import { computed } from 'vue'
import IconButton from './IconButton.vue'

const props = defineProps({
  expenses: {
    type: Array,
    required: true
  },
  currency: {
    type: String,
    default: '$'
  }
})

const emit = defineEmits(['edit', 'delete'])

const categories = {
  food: { icon: 'restaurant', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  transport: { icon: 'directions_car', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  housing: { icon: 'home', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
  entertainment: { icon: 'sports_esports', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  health: { icon: 'local_hospital', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
  other: { icon: 'category', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' }
}

const sortedExpenses = computed(() => {
  return [...props.expenses].sort((a, b) => new Date(b.date) - new Date(a.date))
})

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString(undefined, { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}
</script>

<template>
  <div>
    <div v-if="expenses.length === 0" class="text-center py-8 text-gray-500">
      <span class="material-icons-outlined text-4xl mb-2">receipt</span>
      <p>No expenses recorded yet</p>
    </div>

    <ul v-else class="divide-y divide-gray-200 dark:divide-gray-700">
      <li v-for="expense in sortedExpenses" :key="expense.id" class="py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div 
              :class="categories[expense.category].color" 
              class="rounded-full p-3 flex items-center justify-center"
            >
              <span class="material-icons-outlined">{{ categories[expense.category].icon }}</span>
            </div>
            <div>
              <h4 class="font-medium text-gray-900 dark:text-white">{{ expense.title }}</h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ formatDate(expense.date) }} • {{ expense.category }}
              </p>
            </div>
          </div>
          
          <div class="flex items-center gap-2">
            <span class="font-medium text-gray-900 dark:text-white">
              {{ currency }}{{ expense.amount.toFixed(2) }}
            </span>
            
            <div class="flex gap-1">
              <IconButton 
                icon="edit" 
                tooltip="Edit" 
                @click="emit('edit', expense.id)" 
                class="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
              />
              <IconButton 
                icon="delete" 
                tooltip="Delete" 
                @click="emit('delete', expense.id)" 
                class="text-gray-500 hover:text-red-600 dark:hover:text-red-400"
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>