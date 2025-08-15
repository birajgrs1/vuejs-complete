<script setup>
import { ref } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  tooltip: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const showTooltip = ref(false)

function handleClick() {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<template>
  <div class="relative inline-block">
    <button
      @click="handleClick"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
      :disabled="disabled"
      class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      :class="{ 'cursor-pointer': !disabled }"
    >
      <span class="material-icons-outlined">{{ icon }}</span>
    </button>

    <div 
      v-if="tooltip && showTooltip"
      class="absolute z-10 w-max px-2 py-1 text-sm text-white bg-gray-800 rounded shadow-lg bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1"
    >
      {{ tooltip }}
      <div class="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800"></div>
    </div>
  </div>
</template>