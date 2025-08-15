<script setup>
import { inject, ref, computed } from 'vue'
import ExpenseForm from '../components/ExpenseForm.vue'
import ExpenseList from '../components/ExpenseList.vue'
import ModalDialog from '../components/ModalDialog.vue'

const expenses = inject('expenses')
const currency = inject('currency')
const showModal = ref(false)
const editingExpense = ref(null)

// Filter state
const filter = ref({
  category: '',
  month: '',
  search: ''
})

// Filtered expenses
const filteredExpenses = computed(() => {
  return expenses.value.filter(expense => {
    const matchesCategory = !filter.value.category || expense.category === filter.value.category
    const matchesMonth = !filter.value.month || 
      new Date(expense.date).getMonth() === parseInt(filter.value.month)
    const matchesSearch = !filter.value.search || 
      expense.title.toLowerCase().includes(filter.value.search.toLowerCase())
    return matchesCategory && matchesMonth && matchesSearch
  })
})

// Available months for filtering
const months = computed(() => {
  const uniqueMonths = new Set()
  expenses.value.forEach(expense => {
    uniqueMonths.add(new Date(expense.date).getMonth())
  })
  return Array.from(uniqueMonths).sort()
})

function handleFormSubmit(expense) {
  if (editingExpense.value) {
    updateExpense(expense)
  } else {
    addExpense({
      ...expense,
      id: Date.now().toString()
    })
  }
  showModal.value = false
  editingExpense.value = null
}

function addExpense(expense) {
  expenses.value.push(expense)
  saveToLocalStorage()
}

function updateExpense(updatedExpense) {
  const index = expenses.value.findIndex(e => e.id === updatedExpense.id)
  if (index !== -1) {
    expenses.value[index] = updatedExpense
    saveToLocalStorage()
  }
}

function deleteExpense(id) {
  expenses.value = expenses.value.filter(expense => expense.id !== id)
  saveToLocalStorage()
}

function editExpense(id) {
  editingExpense.value = expenses.value.find(expense => expense.id === id)
  showModal.value = true
}

function saveToLocalStorage() {
  localStorage.setItem('expenses', JSON.stringify(expenses.value))
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Expenses</h2>
      <button
        @click="showModal = true"
        class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        <span class="material-icons-outlined">add</span>
        Add Expense
      </button>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
          <select
            v-model="filter.category"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Categories</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="housing">Housing</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Month</label>
          <select
            v-model="filter.month"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Months</option>
            <option v-for="month in months" :key="month" :value="month">
              {{ new Date(2023, month, 1).toLocaleDateString(undefined, { month: 'long' }) }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Search</label>
          <input
            type="text"
            v-model="filter.search"
            placeholder="Search expenses..."
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>

      <ExpenseList 
        :expenses="filteredExpenses" 
        :currency="currency"
        @edit="editExpense" 
        @delete="deleteExpense" 
      />
    </div>

    <ModalDialog :show="showModal" @close="showModal = false">
      <template #header>
        <h2 class="text-xl font-semibold dark:text-white">
          {{ editingExpense ? 'Edit Expense' : 'Add New Expense' }}
        </h2>
      </template>

      <ExpenseForm 
        :expense="editingExpense" 
        @submit="handleFormSubmit" 
        @cancel="showModal = false" 
      />
    </ModalDialog>
  </div>
</template>