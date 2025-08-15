<script setup>
import { ref } from 'vue';

const clickOutsideDirective = {
  beforeMount(el, binding) {
    const handleClickOutside = (event) => {
      if (!el.contains(event.target)) {
        binding.value(event);  
      }
    };

    el.__clickOutsideHandler__ = handleClickOutside;
    document.addEventListener('click', handleClickOutside);
  },
  onBeforeUnmount(el) {
    document.removeEventListener('click', el.__clickOutsideHandler__);
    delete el.__clickOutsideHandler__;
  }
};

const showModal = ref(false);
const closeModal = () => {
  showModal.value = false;  
};

defineExpose({ directives: { clickOutside: clickOutsideDirective } });
</script>

<template>
  <div id="custom-dirs">
    <div v-if="showModal" v-click-outside="closeModal" class="modal">
      <p>This is a modal. Click outside to close it!</p>
    </div>
    <button v-if="!showModal" @click="showModal = true">Open Modal</button>
  </div>
</template>

<style>
#custom-dirs {
  text-align: center;
  margin-top: 50px;
}

.modal {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
