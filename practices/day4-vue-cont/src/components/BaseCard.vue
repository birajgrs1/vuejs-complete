<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  altText: {
    type: String,
    default: 'Card image'
  },
  isClickable: {
    type: Boolean,
    default: false
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  elevation: {
    type: Number,
    default: 1,
    validator: (value) => [0, 1, 2, 3, 4, 5].includes(value)
  }
});

const emit = defineEmits(['card-click']);

const cardClasses = computed(() => ({
  'card': true,
  'clickable': props.isClickable,
  'selected': props.isSelected,
  [`elevation-${props.elevation}`]: true
}));

const handleClick = () => {
  if (props.isClickable) {
    emit('card-click');
  }
};
</script>

<template>
  <article 
    :class="cardClasses"
    @click="handleClick"
    role="article"
    :aria-selected="isSelected"
  >
    <header v-if="title || subtitle || $slots.header" class="card-header">
      <slot name="header">
        <h3 v-if="title" class="card-title">{{ title }}</h3>
        <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
      </slot>
    </header>

    <div v-if="image" class="card-image-container" height>
      <img :src="image" :alt="altText" class="card-image" />
    </div>

    <div class="card-content">
      <slot></slot>
    </div>

    <footer v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<style scoped>
.card {
  border-radius: 8px;
  background: white;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.card.elevation-0 {
  box-shadow: none;
}

.card.elevation-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.card.elevation-2 {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.card.elevation-3 {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
}

.card.elevation-4 {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
}

.card.elevation-5 {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30);
}

.clickable {
  cursor: pointer;
}

.clickable:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25);
}

.selected {
  border: 2px solid #3f51b5;
  background-color: #f5f5f5;
}

.card-header {
  padding: 16px 16px 8px;
}

.card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: #212121;
}

.card-subtitle {
  margin: 4px 0 0;
  font-size: 0.875rem;
  color: #757575;
}

.card-image-container {
  width: 100%;
  overflow: hidden;
}
.card-image {
  height: 100px;
  width: auto;
  display: block;
  object-fit: contain;
  margin: 0 auto;
}

/* 
.card-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
} */

.clickable:hover .card-image {
  transform: scale(1.03);
}

.card-content {
  padding: 16px;
}

.card-footer {
  padding: 8px 16px 16px;
  border-top: 1px solid #e0e0e0;
}
</style>