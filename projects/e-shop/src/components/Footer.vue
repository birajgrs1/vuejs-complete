<script setup lang="ts">
import { Facebook, Twitter, Instagram } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t bg-muted/50 py-8">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">E-Shop</h3>
          <p class="text-sm text-muted-foreground">
            Your one-stop shop for all your needs. Quality products at affordable prices.
          </p>
        </div>
        
        <div>
          <h4 class="font-medium mb-4">Shop</h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li><router-link to="/products" class="hover:text-primary">All Products</router-link></li>
            <li><router-link to="/categories/electronics" class="hover:text-primary">Electronics</router-link></li>
            <li><router-link to="/categories/jewelery" class="hover:text-primary">Jewelery</router-link></li>
            <li><router-link to="/categories/men's clothing" class="hover:text-primary">Men's Clothing</router-link></li>
            <li><router-link to="/categories/women's clothing" class="hover:text-primary">Women's Clothing</router-link></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-medium mb-4">Customer Service</h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" class="hover:text-primary">Contact Us</a></li>
            <li><a href="#" class="hover:text-primary">FAQs</a></li>
            <li><a href="#" class="hover:text-primary">Shipping & Returns</a></li>
            <li><a href="#" class="hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-primary">Terms & Conditions</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-medium mb-4">Connect With Us</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-muted-foreground hover:text-primary">
              <Facebook class="h-5 w-5" />
            </a>
            <a href="#" class="text-muted-foreground hover:text-primary">
              <Twitter class="h-5 w-5" />
            </a>
            <a href="#" class="text-muted-foreground hover:text-primary">
              <Instagram class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
        &copy; {{ new Date().getFullYear() }} E-shop. All rights reserved.
      </div>
    </div>
  </footer>
</template>