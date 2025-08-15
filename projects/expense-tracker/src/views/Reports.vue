<script setup>
import { inject, computed, ref } from 'vue'
import { Bar, Pie } from 'vue-chartjs'
import { 
  Chart as ChartJS, 
  Title, 
  Tooltip, 
  Legend, 
  BarElement, 
  CategoryScale, 
  LinearScale,
  ArcElement
} from 'chart.js'

ChartJS.register(
  Title, 
  Tooltip, 
  Legend, 
  BarElement, 
  CategoryScale, 
  LinearScale,
  ArcElement
)

const expenses = inject('expenses')
const currency = inject('currency')

// Report time period selection
const timePeriod = ref('monthly')
const timePeriods = [
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'yearly', label: 'Yearly' }
]

// Chart data computations
const monthlyData = computed(() => {
  const monthlyTotals = Array(12).fill(0)
  const monthlyCounts = Array(12).fill(0)
  
  expenses.value.forEach(expense => {
    const month = new Date(expense.date).getMonth()
    monthlyTotals[month] += expense.amount
    monthlyCounts[month]++
  })
  
  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    totals: monthlyTotals,
    averages: monthlyTotals.map((total, i) => monthlyCounts[i] > 0 ? total / monthlyCounts[i] : 0)
  }
})

const categoryData = computed(() => {
  const categoryMap = {}
  
  expenses.value.forEach(expense => {
    if (!categoryMap[expense.category]) {
      categoryMap[expense.category] = 0
    }
    categoryMap[expense.category] += expense.amount
  })
  
  const sortedCategories = Object.entries(categoryMap)
    .sort((a, b) => b[1] - a[1])
  
  return {
    labels: sortedCategories.map(([category]) => category),
    data: sortedCategories.map(([_, amount]) => amount),
    colors: sortedCategories.map(([category]) => {
      const colors = {
        food: '#10B981',
        transport: '#3B82F6',
        housing: '#8B5CF6',
        entertainment: '#F59E0B',
        health: '#EF4444',
        other: '#6B7280'
      }
      return colors[category] || '#6B7280'
    })
  }
})

const barChartData = computed(() => ({
  labels: monthlyData.value.labels,
  datasets: [{
    label: 'Total Expenses',
    backgroundColor: '#6366F1',
    data: monthlyData.value.totals,
    borderRadius: 4
  }]
}))

const barChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => `${currency}${context.raw.toFixed(2)}`
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => `${currency}${value}`
      }
    }
  }
}))

const pieChartData = computed(() => ({
  labels: categoryData.value.labels,
  datasets: [{
    data: categoryData.value.data,
    backgroundColor: categoryData.value.colors,
    borderWidth: 0
  }]
}))

const pieChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          const total = categoryData.value.data.reduce((a, b) => a + b, 0)
          const percentage = Math.round((context.raw / total) * 100)
          return `${context.label}: ${currency}${context.raw.toFixed(2)} (${percentage}%)`
        }
      }
    },
    legend: {
      position: 'right',
      labels: {
        boxWidth: 12,
        padding: 16
      }
    }
  }
}))

// Top expenses list
const topExpenses = computed(() => {
  return [...expenses.value]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5)
})

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Reports & Analytics</h2>
      
      <div class="flex items-center gap-2">
        <label for="time-period" class="text-sm font-medium text-gray-700 dark:text-gray-300">
          Time Period:
        </label>
        <select
          id="time-period"
          v-model="timePeriod"
          class="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"
        >
          <option v-for="period in timePeriods" :key="period.value" :value="period.value">
            {{ period.label }}
          </option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Monthly Spending Chart -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">
          {{ timePeriod === 'monthly' ? 'Monthly' : timePeriod === 'yearly' ? 'Yearly' : 'Weekly' }} Spending
        </h3>
        <div class="h-80">
          <Bar :data="barChartData" :options="barChartOptions" />
        </div>
      </div>

      <!-- Categories Breakdown -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">Spending by Category</h3>
        <div class="h-80">
          <Pie :data="pieChartData" :options="pieChartOptions" />
        </div>
      </div>
    </div>

    <!-- Top Expenses Table -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div class="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-medium text-gray-900 dark:text-white">Top Expenses</h3>
      </div>
      <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div v-if="topExpenses.length === 0" class="p-6 text-center text-gray-500">
          No expenses recorded yet
        </div>
        <div v-else>
          <div 
            v-for="(expense, index) in topExpenses" 
            :key="expense.id"
            class="px-6 py-4 flex items-center justify-between"
          >
            <div class="flex items-center gap-4">
              <div class="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full">
                {{ index + 1 }}
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">{{ expense.title }}</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ formatDate(expense.date) }} • {{ expense.category }}
                </p>
              </div>
            </div>
            <div class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ currency }}{{ expense.amount.toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Summary -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Highest Expense</p>
            <p class="text-2xl font-semibold text-gray-900 dark:text-white">
              {{ currency }}{{ topExpenses[0]?.amount.toFixed(2) || '0.00' }}
            </p>
          </div>
          <div class="p-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300">
            <span class="material-icons-outlined">arrow_upward</span>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Average Expense</p>
            <p class="text-2xl font-semibold text-gray-900 dark:text-white">
              {{
                expenses.length > 0 
                  ? `${currency}${(expenses.reduce((sum, e) => sum + e.amount, 0) / expenses.length).toFixed(2)}`
                  : `${currency}0.00`
              }}
            </p>
          </div>
          <div class="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
            <span class="material-icons-outlined">trending_up</span>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Categories</p>
            <p class="text-2xl font-semibold text-gray-900 dark:text-white">
              {{ categoryData.labels.length }}
            </p>
          </div>
          <div class="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300">
            <span class="material-icons-outlined">category</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>