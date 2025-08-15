<script setup>
import { inject, computed } from 'vue'
import ExpenseStats from '../components/ExpenseStats.vue'
import ExpenseChart from '../components/ExpenseChart.vue'

const expenses = inject('expenses')
const currency = inject('currency')

// Recent expenses (last 5)
const recentExpenses = computed(() => {
  return [...expenses.value]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)
})

// Top categories
const topCategories = computed(() => {
  const categoryMap = {}
  
  expenses.value.forEach(expense => {
    if (!categoryMap[expense.category]) {
      categoryMap[expense.category] = 0
    }
    categoryMap[expense.category] += expense.amount
  })
  
  return Object.entries(categoryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
})
</script>

<template>
  <div class="space-y-8">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h2>
    
    <ExpenseStats />
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">Monthly Spending</h3>
        <ExpenseChart />
      </div>
      
      <div class="space-y-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">Recent Expenses</h3>
          <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <li v-for="expense in recentExpenses" :key="expense.id" class="py-3">
              <div class="flex justify-between">
                <span class="text-gray-900 dark:text-white">{{ expense.title }}</span>
                <span class="font-medium">{{ currency }}{{ expense.amount.toFixed(2) }}</span>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ new Date(expense.date).toLocaleDateString() }} • {{ expense.category }}
              </div>
            </li>
          </ul>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">Top Categories</h3>
          <ul class="space-y-3">
            <li v-for="[category, amount] in topCategories" :key="category" class="flex items-center">
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  class="bg-indigo-600 h-2.5 rounded-full" 
                  :style="{ width: `${(amount / Math.max(...topCategories.map(c => c[1])) * 100)}%` }"
                ></div>
              </div>
              <span class="ml-4 text-sm font-medium text-gray-900 dark:text-white">
                {{ category }} ({{ currency }}{{ amount.toFixed(2) }})
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>