<script setup>
import { inject, computed } from 'vue'

const expenses = inject('expenses')
const currency = inject('currency')

const totalExpenses = computed(() => {
  return expenses.value.reduce((sum, expense) => sum + expense.amount, 0)
})

const monthlyAverage = computed(() => {
  if (expenses.value.length === 0) return 0
  
  const firstDate = new Date(Math.min(...expenses.value.map(e => new Date(e.date))))
  const monthsDiff = (new Date().getFullYear() - firstDate.getFullYear()) * 12 + 
                    (new Date().getMonth() - firstDate.getMonth()) + 1
  
  return totalExpenses.value / Math.max(1, monthsDiff)
})

const todayExpenses = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return expenses.value
    .filter(expense => expense.date === today)
    .reduce((sum, expense) => sum + expense.amount, 0)
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Expenses</p>
          <p class="text-2xl font-semibold text-gray-900 dark:text-white">
            {{ currency }}{{ totalExpenses.toFixed(2) }}
          </p>
        </div>
        <div class="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300">
          <span class="material-icons-outlined">account_balance_wallet</span>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Average</p>
          <p class="text-2xl font-semibold text-gray-900 dark:text-white">
            {{ currency }}{{ monthlyAverage.toFixed(2) }}
          </p>
        </div>
        <div class="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300">
          <span class="material-icons-outlined">trending_up</span>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Today's Expenses</p>
          <p class="text-2xl font-semibold text-gray-900 dark:text-white">
            {{ currency }}{{ todayExpenses.toFixed(2) }}
          </p>
        </div>
        <div class="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
          <span class="material-icons-outlined">today</span>
        </div>
      </div>
    </div>
  </div>
</template>