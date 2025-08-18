<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet'
import { ShoppingCart, X } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cart.store'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const proceedToCheckout = () => {
  cartStore.isCartOpen = false
  router.push({ name: 'cart' })
}
</script>

<template>
  <Sheet :open="cartStore.isCartOpen" @update:open="cartStore.isCartOpen = $event">
    <SheetContent class="sm:max-w-lg w-full">
      <SheetHeader>
        <SheetTitle class="flex items-center">
          <ShoppingCart class="mr-2 h-6 w-6" />
          Your Cart ({{ cartStore.totalItems }})
        </SheetTitle>
      </SheetHeader>

      <div v-if="cartStore.items.length === 0" class="flex flex-col items-center justify-center h-64">
        <p class="text-muted-foreground mb-4">Your cart is empty</p>
        <Button @click="cartStore.isCartOpen = false">Continue Shopping</Button>
      </div>

      <ScrollArea v-else class="h-[70vh] pr-4">
        <div class="space-y-4 py-4">
          <div v-for="item in cartStore.items" :key="item.product.id" class="flex items-center gap-4 border-b pb-4">
            <img 
              :src="item.product.image" 
              :alt="item.product.title" 
              class="h-16 w-16 object-contain"
            />
            <div class="flex-grow">
              <h4 class="font-medium line-clamp-1">{{ item.product.title }}</h4>
              <p class="text-sm text-muted-foreground">${{ item.product.price }} x {{ item.quantity }}</p>
            </div>
            <div class="flex items-center gap-2">
              <input 
                type="number" 
                min="1" 
                :value="item.quantity" 
                @change="(e) => cartStore.updateQuantity(item.product.id, parseInt((e.target as HTMLInputElement).value))"
                class="w-16 border rounded px-2 py-1 text-sm"
              />
              <Button variant="ghost" size="icon" @click="cartStore.removeFromCart(item.product.id)">
                <X class="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>

      <SheetFooter v-if="cartStore.items.length > 0" class="mt-auto">
        <div class="w-full">
          <div class="flex justify-between py-4 border-t">
            <span>Total:</span>
            <span class="font-bold">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
          <div class="grid gap-2">
            <Button class="w-full" @click="proceedToCheckout">
              Proceed to Checkout
            </Button>
            <Button variant="outline" class="w-full" @click="cartStore.isCartOpen = false">
              Continue Shopping
            </Button>
          </div>
        </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>