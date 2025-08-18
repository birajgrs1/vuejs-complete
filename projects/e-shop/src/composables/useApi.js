import axios from 'axios'
import { ref } from 'vue'

const API_URL = 'https://fakestoreapi.com/products'

export function useApi() {
  const data = ref<any>(null)
  const error = ref<string | null>(null)
  const isLoading = ref(false)

  const fetchData = async (endpoint = '') => {
    isLoading.value = true
    error.value = null
    try {
      const response = await axios.get(`${API_URL}${endpoint}`)
      data.value = response.data
    } catch (err) {
      error.value = 'Failed to fetch data'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return { data, error, isLoading, fetchData }
}