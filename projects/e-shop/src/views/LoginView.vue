<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
  if (!email.value || !password.value) {
    error.value = 'Please fill in all fields'
    return
  }

  isLoading.value = true
  error.value = ''

  try {
    await authStore.login(email.value, password.value)
    const redirect = router.currentRoute.value.query.redirect as string || '/'
    router.push(redirect)
  } catch (err) {
    error.value = 'Invalid email or password'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="container flex items-center justify-center py-12">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-2">Welcome back</h1>
        <p class="text-muted-foreground">Enter your email and password to sign in</p>
      </div>
      
      <div v-if="error" class="mb-4 p-4 bg-destructive/10 text-destructive rounded-lg">
        {{ error }}
      </div>
      
      <form @submit.prevent="login" class="space-y-4">
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
        
        <Button type="submit" class="w-full" :disabled="isLoading">
          <span v-if="isLoading" class="animate-spin">↻</span>
          <span v-else>Sign In</span>
        </Button>
      </form>
      
      <div class="mt-4 text-center text-sm">
        Don't have an account? 
        <router-link 
          :to="{ name: 'register' }" 
          class="underline text-primary"
        >
          Sign up
        </router-link>
      </div>
    </div>
  </main>
</template>