<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const isLoading = ref(false)

const authStore = useAuthStore()
const router = useRouter()

const register = async () => {
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = 'Please fill in all fields'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }

  isLoading.value = true
  error.value = ''

  try {
    await authStore.register({
      name: name.value,
      email: email.value,
      password: password.value
    })
    router.push({ name: 'home' })
  } catch (err) {
    error.value = 'Registration failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="container flex items-center justify-center py-12">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-2">Create an account</h1>
        <p class="text-muted-foreground">Enter your details to get started</p>
      </div>
      
      <div v-if="error" class="mb-4 p-4 bg-destructive/10 text-destructive rounded-lg">
        {{ error }}
      </div>
      
      <form @submit.prevent="register" class="space-y-4">
        <div>
          <Label for="name">Full Name</Label>
          <Input 
            id="name" 
            type="text" 
            v-model="name" 
            placeholder="John Doe" 
            required 
          />
        </div>
        
        <div>
          <Label for="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            v-model="email" 
            placeholder="your@email.com" 
            required 
          />
        </div>
        
        <div>
          <Label for="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            v-model="password" 
            placeholder="••••••••" 
            required 
          />
        </div>
        
        <div>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input 
            id="confirmPassword" 
            type="password" 
            v-model="confirmPassword" 
            placeholder="••••••••" 
            required 
          />
        </div>
        
        <Button type="submit" class="w-full" :disabled="isLoading">
          <span v-if="isLoading" class="animate-spin">↻</span>
          <span v-else>Create Account</span>
        </Button>
      </form>
      
      <div class="mt-4 text-center text-sm">
        Already have an account? 
        <router-link 
          :to="{ name: 'login' }" 
          class="underline text-primary"
        >
          Sign in
        </router-link>
      </div>
    </div>
  </main>
</template>