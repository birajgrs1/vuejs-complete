<template>
  <AuthGuard>
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Add New Post</h1>
      
      <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow">
        <div class="mb-4">
          <label for="title" class="block text-gray-700 mb-2">Title</label>
          <input 
            v-model="form.title" 
            type="text" 
            id="title" 
            required
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
        </div>
        
        <div class="mb-4">
          <label for="excerpt" class="block text-gray-700 mb-2">Short Description</label>
          <input 
            v-model="form.excerpt" 
            type="text" 
            id="excerpt" 
            required
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
        </div>
        
        <div class="mb-4">
          <label for="content" class="block text-gray-700 mb-2">Content</label>
          <textarea 
            v-model="form.content" 
            id="content" 
            rows="8" 
            required
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        
        <div class="flex justify-end space-x-4">
          <router-link 
            to="/" 
            class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </router-link>
          <Button type="submit">Publish Post</Button>
        </div>
      </form>
    </div>
  </AuthGuard>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBlog } from '../composables/useBlog'
import AuthGuard from '../components/AuthGuard.vue'
import Button from '../components/Button.vue'

const router = useRouter()
const { addPost } = useBlog()

const form = ref({
  title: '',
  excerpt: '',
  content: ''
})

const handleSubmit = () => {
  addPost(form.value)
  router.push({ name: 'Home' })
}
</script>