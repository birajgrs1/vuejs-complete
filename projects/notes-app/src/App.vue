<script setup>
import { ref, onMounted, watch } from 'vue'
import NoteForm from './components/NoteForm.vue'
import NoteList from './components/NoteList.vue'

const notes = ref([])

onMounted(() => {
  const saved = localStorage.getItem('notes')
  if (saved) {
    notes.value = JSON.parse(saved)
  }
})

watch(notes, (newNotes) => {
  localStorage.setItem('notes', JSON.stringify(newNotes))
}, { deep: true })

function addNote(note) {
  notes.value.push(note)
}

function deleteNote(index) {
  notes.value.splice(index, 1)
}
</script>

<template>
  <main>
    <h1> Vue Notes App</h1>
    <NoteForm @add-note="addNote" />
    <NoteList :notes="notes" @delete-note="deleteNote" />
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: 40px auto;
  padding: 16px;
  font-family: sans-serif;
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
