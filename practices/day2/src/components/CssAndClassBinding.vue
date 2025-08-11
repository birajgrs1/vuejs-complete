<template>
  <div>
    <h1>CSS and Class Binding Demo</h1>

    <div :style="{ color: 'white', backgroundColor: 'teal' }" class="box">
      Static Inline Style
    </div>

    <div :style="dynamicStyle" class="box">
      Dynamic Inline Style (from reactive object)
    </div>

    <div :style="conditionalStyle" class="box">
      Conditional Inline Style (based on isActive)
    </div>

    <button @click="toggleActive">Toggle Active</button>

    <div class="box static-class">
      Static Class Binding
    </div>

    <div :class="dynamicClass" class="box">
      Dynamic Class Binding (based on `isRed`)
    </div>

    <button @click="isRed = !isRed">Toggle Red</button>

    <div :class="{ red: isRed, bold: isActive }" class="box">
      Object Syntax Class Binding
    </div>

    <div :class="['box', isRed ? 'red' : 'green', isActive && 'bold']">
      Array Syntax Class Binding
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const dynamicStyle = reactive({
  backgroundColor: 'lightblue',
  color: 'darkblue',
  fontSize: '16px'
})

const isActive = ref(false)
const isRed = ref(true)

function toggleActive() {
  isActive.value = !isActive.value
}

const conditionalStyle = computed(() => ({
  backgroundColor: isActive.value ? 'orange' : 'lightgray',
  color: isActive.value ? 'black' : 'gray',
  fontWeight: isActive.value ? 'bold' : 'normal'
}))

const dynamicClass = computed(() => (isRed.value ? 'red' : 'green'))
</script>

<style scoped>
.box {
  padding: 16px;
  margin: 12px 0;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.static-class {
  background-color: #222;
  color: #fff;
}

.red {
  background-color: red;
  color: white;
}

.green {
  background-color: green;
  color: white;
}

.bold {
  font-weight: bold;
}
</style>
