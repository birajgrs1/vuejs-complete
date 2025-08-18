<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/stores/cart.store'
import { Star } from 'lucide-vue-next'
import type { Product } from '@/types'

const route = useRoute()
const cartStore = useCartStore()
const product = ref<Product | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)

const fetchProduct = async () => {
  isLoading.value = true
  error.value = null
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`)
    product.value = response.data
  } catch (err) {
    error.value = 'Failed to fetch product details'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchProduct()
})

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
  }
}
</script>

<template>
  <main class="container py-8">
    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
    
    <div v-else-if="error" class="text-center py-12">
      <p class="text-destructive text-lg">{{ error }}</p>
      <Button variant="outline" class="mt-4" @click="fetchProduct">Retry</Button>
    </div>
    
    <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="flex justify-center bg-muted rounded-lg p-8">
        <img :src="product.image" :alt="product.title" class="max-h-96 object-contain" />
      </div>
      
      <div>
        <h1 class="text-3xl font-bold mb-2">{{ product.title }}</h1>
        
        <div class="flex items-center mb-4">
          <Star class="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
          <span class="text-lg">{{ product.rating.rate }} ({{ product.rating.count }} reviews)</span>
        </div>
        
        <p class="text-2xl font-bold mb-6">${{ product.price }}</p>
        
        <p class="text-muted-foreground mb-6">{{ product.description }}</p>
        
        <div class="mb-6">
          <p class="font-medium mb-2">Category:</p>
          <p class="capitalize">{{ product.category }}</p>
        </div>
        
        <Button class="w-full" size="lg" @click="addToCart">
          Add to Cart
        </Button>
      </div>
    </div>
  </main>
</template>