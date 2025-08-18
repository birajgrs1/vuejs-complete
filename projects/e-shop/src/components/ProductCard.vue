<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ShoppingCart, Star } from 'lucide-vue-next'
import type { Product } from '@/types'
import { useCartStore } from '@/stores/cart.store'
import { useRouter } from 'vue-router'

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()
const router = useRouter()

const addToCart = () => {
  cartStore.addToCart(props.product)
}
</script>

<template>
  <Card class="h-full flex flex-col">
    <CardHeader class="p-4 pb-0">
      <img 
        :src="product.image" 
        :alt="product.title" 
        class="w-full h-48 object-contain cursor-pointer"
        @click="router.push({ name: 'product-detail', params: { id: product.id } })"
      />
    </CardHeader>
    <CardContent class="p-4 flex-grow">
      <h3 class="font-semibold text-lg mb-2 line-clamp-1 cursor-pointer" 
          @click="router.push({ name: 'product-detail', params: { id: product.id } })">
        {{ product.title }}
      </h3>
      <div class="flex items-center mb-2">
        <Star class="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
        <span class="text-sm">{{ product.rating.rate }} ({{ product.rating.count }})</span>
      </div>
      <p class="text-sm text-muted-foreground line-clamp-2 mb-3">{{ product.description }}</p>
      <p class="font-bold text-lg">${{ product.price }}</p>
    </CardContent>
    <CardFooter class="p-4 pt-0">
      <Button class="w-full" @click="addToCart">
        <ShoppingCart class="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    </CardFooter>
  </Card>
</template>