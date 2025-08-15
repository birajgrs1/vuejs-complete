<script setup>
import { onMounted, onUnmounted } from 'vue'
import IconButton from './IconButton.vue'

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

function handleKeyDown(e) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

// Close modal when clicking outside content
function handleBackdropClick(e) {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <transition name="modal">
    <div 
      v-if="show"
      @click="handleBackdropClick"
      class="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <slot name="header">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">Modal Title</h3>
          </slot>
          
          <IconButton 
            icon="close" 
            tooltip="Close" 
            @click="emit('close')" 
            class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          />
        </div>
        
        <div class="p-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(-20px);
  opacity: 0;
}
</style>