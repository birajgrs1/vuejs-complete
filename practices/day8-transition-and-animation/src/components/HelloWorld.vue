<script setup>
import { ref } from "vue";
const show = ref(true);
</script>

<template>
  <!-- Transition class -->
  <!-- <transition>
    <h1 v-if="show">Hello World!</h1>
  </transition>
   <button @click="show = !show">Show|Hide</button> -->

  <!-- Named Transition -->
  <!-- <transition name="fade">
    <h1 v-if="show">Hello World!</h1>
  </transition>
  <button @click="show = !show">Show|Hide</button> -->

  <!-- Slide fade -->
  <!-- <transition name="slide-fade">
    <h1 v-if="show">Hello World!</h1>
  </transition>
  <button @click="show = !show">Show|Hide</button> -->

  <!-- CSS Animation -->
  <button @click="show = !show">Show|Hide</button>
  <!-- <h1 v-if="show">Hello World!</h1> -->
  <transition name="bounce">
    <h1 v-if="show" style="text-align: center; color: red">Hello World!</h1>
  </transition>
</template>

<style scoped>
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */

 /* CSS Animation */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.35);
  }
  100% {
    transform: scale(1);
  }
}
</style>
