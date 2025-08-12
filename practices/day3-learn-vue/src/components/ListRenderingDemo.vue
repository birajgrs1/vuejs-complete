<script setup>
import { ref } from "vue";

// Array of strings
const fruits = ref(["Apple", "Banana", "Cherry", "Orange", "Grapes"]);

// Array of objects
const productList = ref([
  { id: 1, name: "Mobile", price: 35000 },
  { id: 2, name: "Laptop", price: 80000 },
  { id: 3, name: "Tablet", price: 30000 },
  { id: 4, name: "Smart Watch", price: 6500 },
  { id: 5, name: "Headphones", price: 2500 },
]);

// Array of arrays 
const langusges = ref([
    ["Java", "Spring", "Hibernate"],
    ["JavaScript", "Vue.js", "React"],
    ["Python", "Django", "Flask"],
    ["C#", ".NET", "ASP.NET"],
    ["PHP", "Laravel", "Symfony"]
]); 
</script>
<template>
  <div>
    <h1>List Rendering Demo</h1>

    <!-- Array of strings -->

    <h3>Fruits List</h3>
    <!-- <h3>{{ fruits[0] }}</h3> -->
    <!-- <ul>
      <li v-for="fruit in fruits">
        {{ fruit }}
      </li>
    </ul> -->

    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">{{ fruit }}</li>
    </ul>

    <hr />

    <!-- Array of objects -->

    <h2>Product List</h2>
    <ul>
      <li v-for="product in productList" :key="product.id">
        {{ product.name }} - Rs.{{ product.price }}
      </li>
    </ul>
    <hr />

    <!-- Array of arrays -->
    <h2>Languages List</h2>
    <ul>
      <li v-for="(language, index) in langusges" :key="index">
        <strong>Group {{ index + 1 }}:</strong>
        <ul>
          <li v-for="(lang, langIndex) in language" :key="langIndex">{{ lang }}</li>
        </ul>
      </li>
    </ul>
  </div>


</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 8px;
}
h1 {
  color: #4a0258;
  border-bottom: 2px solid #4a0258;
  padding-bottom: 10px;
}
h2 {
  color: #42b983;
}
h3 {
  color: #42b983;
}

p {
  color: #999;
}
</style>
