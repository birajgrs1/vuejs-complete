<script setup>
const props = defineProps(["items"]);
</script>

<template>
  <!-- <slot> //Slot outlet </slot>
   <slot>
    <div class="default">
      <h2>Default content</h2>
    </div>
   </slot> -->

  <!-- Default Slot -->
  <div class="default-slot">
    <h2>Default Slot Content:</h2>
    <slot>
      <p>This is fallback default content from ChildComponent.</p>
    </slot>
  </div>

  <!-- Named Slot -->
  <div class="named-slot">
    <h2>Header (Named Slot):</h2>
    <slot name="header">
      <p>This is fallback header content from ChildComponent.</p>
    </slot>
  </div>

  <!-- Scoped Slot -->
  <div class="scoped-slot">
    <h2>Scoped Slot (List of Items):</h2>
    <slot
      name="item"
      v-for="(item, index) in items"
      :item="item"
      :index="index"
      :key="index"
    >
      <p>{{ item }}</p>
    </slot>
  </div>
</template>

<style scoped></style>
