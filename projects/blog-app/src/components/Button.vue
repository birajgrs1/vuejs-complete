<template>
  <button
    :type="type"
    :class="[
      'px-4 py-2 rounded-lg font-medium transition-colors',
      'bg-indigo-600 text-white hover:bg-indigo-700',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      additionalClasses
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  additionalClasses: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])
</script>