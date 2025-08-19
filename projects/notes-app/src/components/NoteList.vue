<script setup>
const props = defineProps({
  notes: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["delete-note"]);
</script>

<template>
  <div v-if="notes.length">
    <ul>
      <li v-for="(note, index) in notes" :key="index" class="note-item">
        {{ note }}
          <svg
           @click="emit('delete-note', index)"

            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EA3323"
          >
            <path
              d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
            />
          </svg>
      </li>
    </ul>
  </div>
  <p v-else>No notes yet.</p>
</template>

<style scoped>
.note-item {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
}
svg{
  cursor: pointer;
}
svg:hover{
  background-color: #ddd9d8;
  border-radius: 50%;
  height: 30px;
  width: 30px
}
</style>
