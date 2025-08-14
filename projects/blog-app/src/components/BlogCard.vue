<template>
  <article class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
    <slot name="image">
      <div class="h-48 bg-gray-100 flex items-center justify-center">
        <span class="text-gray-400">Featured Image</span>
      </div>
    </slot>
    
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-2">
        <slot name="title">{{ title }}</slot>
      </h2>
      
      <p class="text-gray-600 mb-4">
        <slot name="excerpt">{{ excerpt }}</slot>
      </p>
      
      <div class="flex justify-between items-center">
        <slot name="footer">
          <span class="text-sm text-indigo-600">Read more →</span>
        </slot>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Blog Post Title'
  },
  excerpt: {
    type: String,
    default: 'This is a short excerpt from the blog post...'
  }
})
</script>