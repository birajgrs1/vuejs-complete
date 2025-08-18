<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CartSidebar from '@/components/CartSidebar.vue'
import { Toaster } from '@/components/ui/toast'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
    <CartSidebar />
    <Toaster />
  </div>
</template>