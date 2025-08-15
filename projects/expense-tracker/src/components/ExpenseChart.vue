<script setup>
import { ref, inject, watch, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { 
  Chart as ChartJS, 
  Title, 
  Tooltip, 
  Legend, 
  BarElement, 
  CategoryScale, 
  LinearScale 
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const expenses = inject('expenses')
const currency = inject('currency')

const chartData = ref({
  labels: [],
  datasets: [{
    label: 'Expenses',
    backgroundColor: '#6366F1',
    data: []
  }]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        label: function(context) {
          return `${currency}${context.raw.toFixed(2)}`
        }
      }
    }
  }
})

function updateChart() {
  const monthlyData = Array(12).fill(0)
  
  expenses.value.forEach(expense => {
    const month = new Date(expense.date).getMonth()
    monthlyData[month] += expense.amount
  })
  
  chartData.value = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Expenses',
      backgroundColor: '#6366F1',
      data: monthlyData
    }]
  }
}

// Watch for expenses changes
watch(expenses, () => {
  updateChart()
}, { deep: true })

// Initialize chart
onMounted(() => {
  updateChart()
})
</script>

<template>
  <Bar 
    :data="chartData" 
    :options="chartOptions" 
    class="h-64"
  />
</template>