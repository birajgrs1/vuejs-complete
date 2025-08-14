<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Latest Posts</h1>
    
    <div v-if="posts.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogCard 
        v-for="post in posts" 
        :key="post.id"
        :title="post.title"
        :excerpt="post.excerpt"
      >
        <template #footer>
          <div class="flex justify-between items-center">
            <router-link 
              :to="`/post/${post.id}`" 
              class="text-sm text-indigo-600 hover:text-indigo-800"
            >
              Read more →
            </router-link>
            <span class="text-xs text-gray-500">
              {{ formatDate(post.date) }}
            </span>
          </div>
        </template>
      </BlogCard>
    </div>
    
    <div v-else class="text-center py-12">
      <p class="text-gray-600">No blog posts yet. Be the first to create one!</p>
      <router-link 
        v-if="isAuthenticated"
        to="/add-post" 
        class="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
      >
        Create Post
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useBlog } from '../composables/useBlog'
import { useAuth } from '../composables/useAuth'
import BlogCard from '../components/BlogCard.vue'

const { posts } = useBlog()
const { isAuthenticated } = useAuth()

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>