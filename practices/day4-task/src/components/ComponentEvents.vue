<script setup>
import { ref, watch } from "vue";
import { defineEmits, defineProps } from "vue";

// const emits = defineEmits(["increaseCount"]);

const props = defineProps({
  modelValue: String,
  rules: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue", "validation"]);

const inputValue = ref(props.modelValue || "");
const error = ref(null);

watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal;
  }
);

function validate(value) {
  for (const rule of props.rules) {
    const result = rule(value);
    if (result !== true) {
      error.value = result;
      emit("validation", false);
      return false;
    }
  }
  error.value = null;
  emit("validation", true);
  return true;
}

function onInput(event) {
  const value = event.target.value;
  inputValue.value = value;
  const isValid = validate(value);
  if (isValid) {
    emit("update:modelValue", value);
  }
}
</script>

<template>
  <!-- <div class="count">
    <button @click="emits('increaseCount')">Click to increaseCount</button>
  </div> -->
  <div class="input-wrapper">
    <input
      type="text"
      :value="inputValue"
      @input="onInput"
      class="custom-input"
      :class="{ invalid: error }"
    />
    <p v-if="error" class="error-msg">{{ error }}</p>
  </div>
</template>

<style scoped>
/* .count {
  display: flex;
  justify-content: center;
  align-items: center;
}
.count button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.count button:hover {
  background-color: #205245;
} */

.input-wrapper {
  margin-bottom: 1rem;
}
.custom-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}
.custom-input.invalid {
  border-color: #e74c3c;
}
.error-msg {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}
</style>
