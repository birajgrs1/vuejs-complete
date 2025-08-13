<script setup>
import BaseCard from './BaseCard.vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['add-to-cart', 'view-details']);

const handleAddToCart = () => {
  emit('add-to-cart', props.product);
};

const handleViewDetails = () => {
  emit('view-details', props.product.id);
};
</script>

<template>
  <BaseCard
    :title="product.name"
    :subtitle="product.category"
    :image="product.image"
    :is-selected="isSelected"
    is-clickable
    elevation="2"
    @card-click="handleViewDetails"
  >
    <template #header>
      <div class="product-header">
        <h3 class="product-title">{{ product.name }}</h3>
        <span class="product-badge" v-if="product.isNew">New!</span>
      </div>
      <p class="product-category">{{ product.category }}</p>
    </template>

    <div class="product-price">
     $ {{ product.price }} 
      <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }} USD</span>
    </div>

    <template #footer>
      <button class="add-to-cart-btn" @click.stop="handleAddToCart">
        Add to Cart
      </button>
    </template>
  </BaseCard>
</template>

<style scoped>
.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-badge {
  background: #ff5722;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
}

.product-category {
  margin: 4px 0 0;
  font-size: 0.875rem;
  color: #757575;
}

.product-price {
  font-size: 1.125rem;
  font-weight: bold;
  color: #3f51b5;
  margin-bottom: 8px;
}

.old-price {
  text-decoration: line-through;
  font-size: 0.875rem;
  color: #757575;
  margin-left: 8px;
}

.add-to-cart-btn {
  width: 100%;
  padding: 8px;
  background: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.add-to-cart-btn:hover {
  background: #303f9f;
}
</style>