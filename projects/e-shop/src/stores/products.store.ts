import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import type { Product, ProductCategory } from '@/types'

const API_URL = 'https://fakestoreapi.com/products'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const categories = ref<ProductCategory[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const currentPage = ref(1)
  const itemsPerPage = ref(10)
  const selectedCategory = ref<string | null>(null)

  const fetchProducts = async () => {
    isLoading.value = true
    error.value = null
    try {
      const response = await axios.get(API_URL)
      products.value = response.data
    } catch (err) {
      error.value = 'Failed to fetch products'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`)
      categories.value = response.data
    } catch (err) {
      console.error('Failed to fetch categories', err)
    }
  }

  const fetchProductsByCategory = async (category: string) => {
    isLoading.value = true
    try {
      const response = await axios.get(`${API_URL}/category/${category}`)
      products.value = response.data
      selectedCategory.value = category
    } catch (err) {
      error.value = `Failed to fetch ${category} products`
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return products.value.slice(start, end)
  })

  const totalPages = computed(() => 
    Math.ceil(products.value.length / itemsPerPage.value)
  )

  const setPage = (page: number) => {
    if (page > 0 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  return {
    products,
    categories,
    isLoading,
    error,
    currentPage,
    itemsPerPage,
    selectedCategory,
    paginatedProducts,
    totalPages,
    fetchProducts,
    fetchCategories,
    fetchProductsByCategory,
    setPage
  }
})