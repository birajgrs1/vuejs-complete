<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ShoppingCart, User, Menu, Search } from 'lucide-vue-next'
import { useAuthStore } from '@/stores/auth.store'
import { useCartStore } from '@/stores/cart.store'
import { useProductsStore } from '@/stores/products.store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()
const productsStore = useProductsStore()

const searchQuery = ref('')

const navigateToCategory = (category: string) => {
  productsStore.fetchProductsByCategory(category)
  router.push({ name: 'category-products', params: { category } })
}

const logout = () => {
  authStore.logout()
  router.push({ name: 'home' })
}

const searchProducts = () => {
  console.log('Searching for:', searchQuery.value)
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-14 items-center">
      <div class="mr-4 hidden md:flex">
        <a class="mr-6 flex items-center space-x-2" href="/">
          <span class="hidden font-bold sm:inline-block">E-shop</span>
        </a>
        <nav class="flex items-center space-x-6 text-sm font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="text-sm">
                Categories
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem 
                v-for="category in productsStore.categories" 
                :key="category"
                @click="navigateToCategory(category)"
              >
                {{ category }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>

      <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <div class="w-full flex-1 md:w-auto md:flex-none">
          <div class="relative">
            <Input
              v-model="searchQuery"
              type="search"
              placeholder="Search products..."
              class="pl-8 w-full md:w-[200px] lg:w-[300px]"
              @keyup.enter="searchProducts"
            />
            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <nav class="flex items-center space-x-2">
          <Button variant="ghost" size="icon" @click="cartStore.toggleCart">
            <ShoppingCart class="h-4 w-4" />
            <span v-if="cartStore.totalItems > 0" class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {{ cartStore.totalItems }}
            </span>
          </Button>

          <DropdownMenu v-if="authStore.isAuthenticated">
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="icon">
                <User class="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem @click="router.push({ name: 'profile' })">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem @click="logout">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <template v-else>
            <Button variant="ghost" @click="router.push({ name: 'login' })">
              Login
            </Button>
            <Button @click="router.push({ name: 'register' })">
              Register
            </Button>
          </template>
        </nav>
      </div>
    </div>
  </header>
</template>