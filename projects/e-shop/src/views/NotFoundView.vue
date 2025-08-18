<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <main class="container flex flex-col items-center justify-center py-20">
    <div class="text-center max-w-md">
      <h1 class="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 class="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p class="text-muted-foreground mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button @click="goHome" class="px-6">
          Return Home
        </Button>
        <Button 
          variant="outline" 
          @click="router.back()"
          class="px-6"
        >
          Go Back
        </Button>
      </div>
    </div>
  </main>
</template>