<script setup>
import { useToast } from '../composables/useToast.js'
const { toast } = useToast()
</script>

<template>
  <div v-if="toast.visible" :class="['toast', toast.type]">
    {{ toast.message }}
  </div>
</template>


<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 16px;
  color: white;
  border-radius: 4px;
  z-index: 9999;
}
.success { background: #4caf50; }
.error { background: #f44336; }
.info { background: #2196f3; }
</style>
