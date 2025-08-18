<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/products.store'
import ProductCard from '@/components/ProductCard.vue'
import { Button } from '@/components/ui/button'

const productsStore = useProductsStore()

onMounted(() => {
  productsStore.fetchProducts()
  productsStore.fetchCategories()
})
</script>

<template>
  <main class="container py-8">
    <section class="mb-12">
      <h1 class="text-3xl font-bold mb-6">Featured Products</h1>
      <div v-if="productsStore.isLoading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="n in 8" :key="n" class="h-64 bg-muted rounded-lg animate-pulse"></div>
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in productsStore.paginatedProducts" 
          :key="product.id" 
          :product="product" 
        />
      </div>
      <div v-if="!productsStore.isLoading && productsStore.products.length > 0" class="flex justify-center mt-8 gap-2">
        <Button 
          variant="outline" 
          :disabled="productsStore.currentPage === 1"
          @click="productsStore.setPage(productsStore.currentPage - 1)"
        >
          Previous
        </Button>
        <Button 
          v-for="page in productsStore.totalPages" 
          :key="page"
          :variant="productsStore.currentPage === page ? 'default' : 'outline'"
          @click="productsStore.setPage(page)"
        >
          {{ page }}
        </Button>
        <Button 
          variant="outline" 
          :disabled="productsStore.currentPage === productsStore.totalPages"
          @click="productsStore.setPage(productsStore.currentPage + 1)"
        >
          Next
        </Button>
      </div>
    </section>
  </main>
</template>