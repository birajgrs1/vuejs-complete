<template>
  <div class="max-w-md mx-auto mt-12">
    <div class="bg-white p-8 rounded-lg shadow">
      <h1 class="text-2xl font-bold mb-6">Login</h1>
      
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="username" class="block text-gray-700 mb-2">Username</label>
          <input 
            v-model="username" 
            type="text" 
            id="username" 
            required
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
        </div>
        
        <div>
          <label for="password" class="block text-gray-700 mb-2">Password</label>
          <input 
            v-model="password" 
            type="password" 
            id="password" 
            required
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
        </div>
        
        <Button type="submit" class="w-full">Login</Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'
import { useRouter } from 'vue-router'
import Button from '../components/Button.vue'

const router = useRouter()
const { login } = useAuth()
const username = ref('')
const password = ref('')

const handleLogin = () => {
  if (username.value && password.value) {
    login()
    router.push({ name: 'Home' })
  } else {
    alert('Please enter both username and password')
  }
}
</script>