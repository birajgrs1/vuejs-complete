<script setup>
import { ref } from "vue";

const show = ref(true);
const count = ref(0);
const inputText = ref("");
const htmlContent = ref("<strong>This is bold HTML text</strong>");
const items = ref(["Apple", "Banana", "Orange"]);
const user = ref({ name: "Ram", age: 25 });

const message = ref("Hello, world!");

function toggle() {
  show.value = !show.value;
}

function increment() {
  count.value++;
}
</script>

<template>
  <div v-if="count === 0">Count is zero</div>
  <div v-else-if="count > 0 && count < 5">Count is small: {{ count }}</div>
  <div v-else>Count is large: {{ count }}</div>

  <p v-show="show">This paragraph is conditionally shown with v-show.</p>

  <ul>
    <li v-for="(item, index) in items" :key="index" :data-index="index">
      {{ index + 1 }}. {{ item }}
    </li>
  </ul>

  <input v-model="inputText" placeholder="Type something..." />
  <p>You typed: {{ inputText }}</p>

  <p v-text="user.name"></p>

  <h4 v-text="message"></h4>

  <p v-html="htmlContent"></p>

  <button @click="increment">Increment Count</button>
  <button v-on:click="toggle">Toggle v-show</button>

  <BaseCard>
    <template #header>
      <h3>Custom Header from Parent</h3>
    </template>
    <template #default>
      <p>This is the main slot content.</p>
    </template>
    <template #footer>
      <small>Custom Footer</small>
    </template>
  </BaseCard>

  <pre v-pre>{{ This will not be compiled }}</pre>

  <p v-once>
    This text will never update even if reactivity changes: {{ count }}
  </p>
  <p v-cloak>{{ count }}</p>
</template>

<style scoped>
[v-cloak] {
  display: none;
}
</style>

<!-- https://medium.com/@ossamakharbaq4/a-comprehensive-guide-to-vue-js-directives-0b93c85c4e82 -->
 <!-- https://www.geeksforgeeks.org/javascript/vue-js-directive/ -->
  