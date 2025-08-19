<script setup>
import { ref } from 'vue'
import { useToast } from '../composables/useToast'

const note = ref('')
const emit = defineEmits(['add-note'])

const { showSuccess, showError } = useToast()

function submitNote() {
  if (!note.value.trim()) {
    showError('Note cannot be empty')
    return
  }

  emit('add-note', note.value)
  note.value = ''
  showSuccess('Note added!')
}
</script>

<template>
  <div>
    <input v-model="note" placeholder="Write a note..." />
    <button @click="submitNote">Add Note</button>
  </div>
</template>


<style scoped>
input {
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
