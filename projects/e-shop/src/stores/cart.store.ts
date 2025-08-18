import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartItem, Product } from '@/types'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const isCartOpen = ref(false)

  const totalItems = computed(() => 
    items.value.reduce((total, item) => total + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((total, item) => 
      total + (item.product.price * item.quantity), 0)
  )

  const addToCart = (product: Product) => {
    const existingItem = items.value.find(item => item.product.id === product.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ product, quantity: 1 })
    }
  }

  const removeFromCart = (productId: number) => {
    items.value = items.value.filter(item => item.product.id !== productId)
  }

  const updateQuantity = (productId: number, quantity: number) => {
    const item = items.value.find(item => item.product.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  const clearCart = () => {
    items.value = []
  }

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }

  return { 
    items, 
    isCartOpen,
    totalItems, 
    totalPrice, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    toggleCart
  }
})