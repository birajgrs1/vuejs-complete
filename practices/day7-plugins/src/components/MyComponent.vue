<template>
  <div class="my-component">
    <button v-smart-tooltip="{ content: 'Edit profile' }">
       Edit
    </button>

    <button
      v-smart-tooltip="{
        content: 'Delete database (admin only)',
        permission: 'admin.delete'
      }"
    >
       Delete
    </button>
  </div>
</template>

<script setup>
</script>

<style scoped>
.my-component button {
  margin-right: 12px;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
}
</style>
