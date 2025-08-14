<template>
  <nav class="bg-white shadow">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <router-link 
        to="/" 
        class="text-xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
      >
         Blogs
      </router-link>
      
      <div class="flex items-center space-x-4">
        <router-link 
          v-for="link in links" 
          :key="link.name"
          :to="link.path"
          class="text-gray-600 hover:text-indigo-600 transition-colors"
          active-class="text-indigo-600 font-medium"
        >
          {{ link.name }}
        </router-link>
        
        <button
          v-if="isAuthenticated"
          @click="handleLogout"
          class="text-gray-600 hover:text-indigo-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useAuth } from '../composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { isAuthenticated, logout } = useAuth()

const links = computed(() => [
  { name: 'Home', path: '/' },
  ...(isAuthenticated.value ? [{ name: 'Add Post', path: '/add-post' }] : []),
  ...(!isAuthenticated.value ? [{ name: 'Login', path: '/login' }] : [])
])

const handleLogout = () => {
  logout()
  router.push('/')
}
</script>