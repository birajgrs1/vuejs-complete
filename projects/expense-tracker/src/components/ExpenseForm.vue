<script setup>
import { ref, watch, computed } from 'vue'
import IconButton from './IconButton.vue'

const props = defineProps({
  expense: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['submit', 'cancel'])

const form = ref({
  title: '',
  amount: '',
  category: '',
  date: new Date().toISOString().split('T')[0]
})

const categories = [
  { value: 'food', label: 'Food', icon: 'restaurant' },
  { value: 'transport', label: 'Transport', icon: 'directions_car' },
  { value: 'housing', label: 'Housing', icon: 'home' },
  { value: 'entertainment', label: 'Entertainment', icon: 'sports_esports' },
  { value: 'health', label: 'Health', icon: 'local_hospital' },
  { value: 'other', label: 'Other', icon: 'category' }
]

// If editing, populate form with expense data
watch(() => props.expense, (newExpense) => {
  if (newExpense) {
    form.value = {
      title: newExpense.title,
      amount: newExpense.amount.toString(),
      category: newExpense.category,
      date: newExpense.date
    }
  }
}, { immediate: true })

const titleError = computed(() => {
  return form.value.title.trim() === '' ? 'Title is required' : ''
})

const amountError = computed(() => {
  if (form.value.amount.trim() === '') return 'Amount is required'
  if (isNaN(parseFloat(form.value.amount))) return 'Must be a valid number'
  if (parseFloat(form.value.amount) <= 0) return 'Must be greater than 0'
  return ''
})

const categoryError = computed(() => {
  return form.value.category === '' ? 'Category is required' : ''
})

const formValid = computed(() => {
  return titleError.value === '' && amountError.value === '' && categoryError.value === ''
})

function handleSubmit() {
  if (!formValid.value) return

  emit('submit', {
    ...form.value,
    amount: parseFloat(form.value.amount)
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Title <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="title"
        v-model="form.title"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="e.g. Groceries"
      />
      <p v-if="titleError" class="mt-1 text-sm text-red-600">{{ titleError }}</p>
    </div>

    <div>
      <label for="amount" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Amount <span class="text-red-500">*</span>
      </label>
      <input
        type="number"
        id="amount"
        v-model="form.amount"
        min="0"
        step="0.01"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="e.g. 25.99"
      />
      <p v-if="amountError" class="mt-1 text-sm text-red-600">{{ amountError }}</p>
    </div>

    <div>
      <label for="category" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Category <span class="text-red-500">*</span>
      </label>
      <select
        id="category"
        v-model="form.category"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="" disabled>Select a category</option>
        <option v-for="cat in categories" :key="cat.value" :value="cat.value">
          {{ cat.label }}
        </option>
      </select>
      <p v-if="categoryError" class="mt-1 text-sm text-red-600">{{ categoryError }}</p>
    </div>

    <div>
      <label for="date" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Date
      </label>
      <input
        type="date"
        id="date"
        v-model="form.date"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>

    <div class="flex justify-end gap-2 pt-4">
      <button
        type="button"
        @click="emit('cancel')"
        class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        Cancel
      </button>
      <button
        type="submit"
        :disabled="!formValid"
        class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors"
      >
        {{ expense ? 'Update' : 'Add' }} Expense
      </button>
    </div>
  </form>
</template>