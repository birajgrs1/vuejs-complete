<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/stores/cart.store'
import { ShoppingCart, X } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const proceedToCheckout = () => {
  // In a real app, this would navigate to a checkout page
  alert('Proceeding to checkout!')
}
</script>

<template>
  <main class="container py-8">
    <h1 class="text-3xl font-bold mb-8">Your Shopping Cart</h1>
    
    <div v-if="cartStore.items.length === 0" class="text-center py-12">
      <ShoppingCart class="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <p class="text-xl mb-4">Your cart is empty</p>
      <Button @click="router.push({ name: 'products' })">Continue Shopping</Button>
    </div>
    
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div class="border rounded-lg divide-y">
          <div v-for="item in cartStore.items" :key="item.product.id" class="p-4 flex gap-4">
            <img 
              :src="item.product.image" 
              :alt="item.product.title" 
              class="h-24 w-24 object-contain"
            />
            
            <div class="flex-grow">
              <h3 class="font-medium">{{ item.product.title }}</h3>
              <p class="text-muted-foreground text-sm mb-2">${{ item.product.price }}</p>
              
              <div class="flex items-center gap-4">
                <input 
                  type="number" 
                  min="1" 
                  :value="item.quantity" 
                  @change="(e) => cartStore.updateQuantity(item.product.id, parseInt((e.target as HTMLInputElement).value))"
                  class="w-20 border rounded px-3 py-1"
                />
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="cartStore.removeFromCart(item.product.id)"
                >
                  <X class="h-4 w-4 mr-1" />
                  Remove
                </Button>
              </div>
            </div>
            
            <div class="font-bold">
              ${{ (item.product.price * item.quantity).toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div class="border rounded-lg p-6">
          <h2 class="text-xl font-bold mb-4">Order Summary</h2>
          
          <div class="space-y-4 mb-6">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
            
            <div class="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div class="flex justify-between font-bold text-lg pt-4 border-t">
              <span>Total</span>
              <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
            </div>
          </div>
          
          <Button class="w-full" size="lg" @click="proceedToCheckout">
            Checkout
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          class="w-full mt-4" 
          @click="router.push({ name: 'products' })"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  </main>
</template>