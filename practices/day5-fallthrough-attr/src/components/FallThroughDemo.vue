<script setup>
// import { ref } from 'vue';
// import CustomButton from './CustomButton.vue';
// const myStyle = ref({
//     color: 'purple',
// });
</script>

<script>
export default {
  inheritAttrs: false, // Disable automatic inheritance of attributes
};
</script>
<template>
  <!-- Inherit to root element -->
  <!-- <div>
            <button>Click Me</button>
            <button>Click Me1</button>
          </div> -->

  <!-- Merge -->
  <!-- <button class="myBtn" :style="myStyle">Click Me</button> -->
  <!-- <CustomButton /> -->

  <!-- $attrs object -->
  <!-- <h2>Fallthrough: {{ $attrs }}</h2> -->
   <div class="btns">
    <button v-bind="$attrs">Click Me</button>
    <button v-bind="$attrs">Click Me1</button>
   </div>
</template>
