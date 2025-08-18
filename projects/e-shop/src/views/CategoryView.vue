<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products.store'
import ProductCard from '@/components/ProductCard.vue'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const route = useRoute()
const productsStore = useProductsStore()

const categoryName = computed(() => {
  return decodeURIComponent(route.params.category as string)
})

const isLoading = ref(false)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    isLoading.value = true
    await productsStore.fetchProductsByCategory(categoryName.value)
  } catch (err) {
    error.value = `Failed to load ${categoryName.value} products`
    console.error(err)
  } finally {
    isLoading.value = false
  }
})

const paginatedProducts = computed(() => productsStore.paginatedProducts)
const currentPage = computed(() => productsStore.currentPage)
const totalPages = computed(() => productsStore.totalPages)

const setPage = (page: number) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  productsStore.setPage(page)
}
</script>

<template>
  <main class="container py-8">
    <div class="flex items-center mb-6 gap-4">
      <router-link 
        to="/products" 
        class="flex items-center text-sm text-muted-foreground hover:text-primary"
      >
        <ChevronLeft class="h-4 w-4 mr-1" />
        Back to All Products
      </router-link>
      <h1 class="text-3xl font-bold capitalize">{{ categoryName }}</h1>
    </div>

    <div v-if="error" class="p-4 bg-destructive/10 text-destructive rounded-lg mb-6">
      {{ error }}
    </div>

    <div v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="n in 8" :key="n" class="h-64 bg-muted rounded-lg animate-pulse"></div>
    </div>

    <template v-else>
      <div v-if="paginatedProducts.length === 0" class="text-center py-12">
        <p class="text-muted-foreground">No products found in this category.</p>
      </div>

      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard 
            v-for="product in paginatedProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>

        <div v-if="totalPages > 1" class="flex justify-center mt-8 gap-2">
          <Button 
            variant="outline" 
            size="icon"
            :disabled="currentPage === 1"
            @click="setPage(currentPage - 1)"
          >
            <ChevronLeft class="h-4 w-4" />
          </Button>

          <Button 
            v-for="page in totalPages" 
            :key="page"
            :variant="currentPage === page ? 'default' : 'outline'"
            @click="setPage(page)"
          >
            {{ page }}
          </Button>

          <Button 
            variant="outline" 
            size="icon"
            :disabled="currentPage === totalPages"
            @click="setPage(currentPage + 1)"
          >
            <ChevronRight class="h-4 w-4" />
          </Button>
        </div>
      </div>
    </template>
  </main>
</template>