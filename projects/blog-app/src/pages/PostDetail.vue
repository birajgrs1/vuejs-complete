<template>
  <div class="max-w-3xl mx-auto">
    <div v-if="post" class="bg-white rounded-lg shadow overflow-hidden">
      <div class="p-8">
        <h1 class="text-3xl font-bold mb-2">{{ post.title }}</h1>
        <div class="flex items-center text-gray-500 mb-6">
          <span class="text-sm">Posted on {{ formatDate(post.date) }}</span>
          <span class="mx-2">•</span>
          <span class="text-sm">By {{ post.author }}</span>
        </div>
        
        <div class="prose max-w-none">
          <p class="whitespace-pre-line">{{ post.content }}</p>
        </div>
        
        <div class="mt-8 pt-6 border-t">
          <router-link 
            to="/" 
            class="text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            Back to all posts
          </router-link>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center py-12">
      <p class="text-gray-600">Post not found</p>
      <router-link 
        to="/" 
        class="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
      >
        Go back home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBlog } from '../composables/useBlog'

const route = useRoute()
const { posts } = useBlog()

const post = computed(() => 
  posts.value.find(p => p.id === parseInt(route.params.id))
)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>