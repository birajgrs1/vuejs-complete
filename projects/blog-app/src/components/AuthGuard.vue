<template>
  <slot v-if="isAuthenticated" />
  <div v-else class="text-center py-12">
    <h2 class="text-xl font-semibold mb-4">Authentication Required</h2>
    <p class="mb-4">You need to login to access this page.</p>
    <Button @click="router.push({ name: 'Login' })">Login</Button>
  </div>
</template>

<script setup>
import { useAuth } from '../composables/useAuth'
import { useRouter } from 'vue-router'
import Button from './Button.vue'

const { isAuthenticated } = useAuth()
const router = useRouter()
</script>