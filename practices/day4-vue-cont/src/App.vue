<script setup>
// import SlotsDemo from "./components/SlotsDemo.vue";
import ProductCard from "./components/ProductCard.vue";
import { ref } from "vue";
// const itemList = ['Vue', 'React', 'Svelte', 'Angular'];

const products = ref([
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    oldPrice: 129.99,
    image: "https://example.com/headphones.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    price: 199.99,
    image: "https://example.com/smartwatch.jpg",
    isNew: false,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 59.99,
    image: "https://example.com/speaker.jpg",
    isNew: true,
  },
]);

const selectedProductId = ref(null);

const handleAddToCart = (product) => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
  console.log("Added to cart:", product);
};

const handleViewDetails = (productId) => {
  selectedProductId.value = productId;
  console.log("View details for:", productId);
};
</script>

<!-- 
<template>
  <SlotsDemo :items="itemList">
    <!-- Default Slot -->
<!-- <template #default>
      <p>This is custom default slot content from ParentComponent.</p>
    </template> -->

<!-- Named Slot -->
<!-- <template #header>
      <h3>Custom Header from ParentComponent</h3>
    </template> -->

<!-- Scoped Slot -->
<!-- <template #item="{ item, index }">
      <div>
        {{ index + 1 }}. <strong>{{ item }}</strong>
      </div>
    </template>
  </SlotsDemo>
</template> -->

<template>
  <div class="app-container">
    <h1>Our Products</h1>
    <div class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :is-selected="selectedProductId === product.id"
        @add-to-cart="handleAddToCart"
        @view-details="handleViewDetails"
      />
    </div>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 20px;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #3f51b5;
  margin-bottom: 30px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
</style>
