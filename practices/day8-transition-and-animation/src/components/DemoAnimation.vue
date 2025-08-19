<script setup>
import { ref } from "vue";
const show = ref(true);
</script>

<template>
    <div class="flex flex-col gap-y-4">
        <!-- Custom transition class -->
        <button @click="show = !show">Show|Hide</button>
        <transition name="custom-class" enter-active-class="animate__animated animate__flipInX" 
            leave-active-class="animate__animated animate__flipOutX">
            <h1 v-if="show">Hello, Everyone!</h1>
        </transition>
    </div>
</template>

<style scoped>
/* Custom transition class */
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.custom-class-enter-active,
.custom-class-leave-active {
  transition: opacity 0.5s ease;
}
.custom-class-enter-from,
.custom-class-leave-to {
  opacity: 0;
}

</style>