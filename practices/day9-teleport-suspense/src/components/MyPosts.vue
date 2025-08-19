<script setup>
import { ref } from "vue";
const data = ref(null);
const error = ref(null);


try {
  const res = await fetch("https://dummyjson.com/posts");
  data.value = await res.json();
  console.log(data.value);
} catch (e) {
  error.value = e.message;
}
</script>

<template>
  <div>
    <h1>My Posts</h1>
    <ul>
      <li v-for="post in data.posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1{
    color: #234567;
    font: bold;

}
ul{
    list-style-type: none;
}
li{
    border: 1px solid #234567;
    margin: 10px;
    padding: 10px;
}
h2{
    color: #234567;
    font: bold;

}
p{
    color: #234567;
    margin: 10px;
}

</style>
