<script setup>
import { usePosts } from '../composables/usePosts';
const { posts, loading, error, loadPosts } = usePosts();

console.log(posts); 
</script>

<template>
  <div class="my-app">
    <h1>all posts</h1>
    <button @click="loadPosts" :disabled="loading">Load Posts</button>

    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <ul v-if="!loading && posts.length > 0">
      <li v-for="post in posts" :key="post.id" class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.my-app{
  font-family: 'Arial', sans-serif;
  padding: 2rem;
  text-align: center;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

button:disabled {
  background-color: #ccc;
}

.loading {
  color: #888;
}

.error {
  color: red;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

.post {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}

h2 {
  font-size: 1.2rem;
  color: #333;
}

p {
  font-size: 1rem;
  color: #555;
}
</style>
