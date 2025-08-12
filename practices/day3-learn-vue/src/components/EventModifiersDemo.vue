<script setup>
import { ref, computed } from "vue";

// Event modifiers
//.stop, .prevent, .self, .capture, .once, .passive, .{keyAlias}, .left, .right, .middle

//key modifiers
//.esc, .tab, .enter, .space, .up, .down, .left, .right

//system modifiers
//.ctrl, .shift, .alt, .meta

//Exact modifiers
//.exact

//mouse modifiers
//.left, .right, .middle

const message = ref("No event yet");
const inputValue = ref("");

function logEvent(text) {
  message.value = text;
}
</script>

<template>
  <div class="app">
    <h1>Vue Event Modifiers Examples</h1>
    <p class="msg">{{ message }}</p>

    <!-- Event modifiers -->
    <button @click.stop="logEvent('Clicked with .stop')">Stop Propagation (.stop)</button>
    <a href="https://vuejs.org" @click.prevent="logEvent('Default prevented (.prevent)')">Prevent Default (.prevent)</a>
    <div class="self-box" @click.self="logEvent('Clicked on self only (.self)')">
      Click inside here (.self)
      <button @click="logEvent('Button inside self-box clicked')">Inner Button</button>
    </div>
    <div @click.capture="logEvent('Capture phase triggered (.capture)')">
      <button @click="logEvent('Button clicked inside capture div')">Capture Example</button>
    </div>
    <button @click.once="logEvent('Clicked only once (.once)')">Click Once (.once)</button>
    <div @scroll.passive="logEvent('Passive scroll event (.passive)')" class="scroll-box">
      Scroll here (.passive)
    </div>

    <!-- key modifiers -->
    <input v-model="inputValue" @keyup.enter="logEvent('Enter key pressed (.enter)')" placeholder="Press Enter" />
    <input v-model="inputValue" @keyup.esc="logEvent('Esc key pressed (.esc)')" placeholder="Press Esc" />
    <input v-model="inputValue" @keyup.tab="logEvent('Tab key pressed (.tab)')" placeholder="Press Tab" />
    <input v-model="inputValue" @keyup.space="logEvent('Space key pressed (.space)')" placeholder="Press Space" />
    <input v-model="inputValue" @keyup.up="logEvent('Up arrow pressed (.up)')" placeholder="Press Up" />
    <input v-model="inputValue" @keyup.down="logEvent('Down arrow pressed (.down)')" placeholder="Press Down" />
    <input v-model="inputValue" @keyup.left="logEvent('Left arrow pressed (.left)')" placeholder="Press Left" />
    <input v-model="inputValue" @keyup.right="logEvent('Right arrow pressed (.right)')" placeholder="Press Right" />

    <!-- system modifiers -->
    <button @click.ctrl="logEvent('Ctrl + Click detected (.ctrl)')">Ctrl + Click</button>
    <button @click.shift="logEvent('Shift + Click detected (.shift)')">Shift + Click</button>
    <button @click.alt="logEvent('Alt + Click detected (.alt)')">Alt + Click</button>
    <button @click.meta="logEvent('Meta/Command + Click detected (.meta)')">Meta + Click</button>

    <!-- Exact modifiers -->
    <button @click.exact="logEvent('Exact click without other modifiers (.exact)')">Exact Click (.exact)</button>

    <!-- mouse modifiers -->
    <button @click.left="logEvent('Left mouse button clicked (.left)')">Left Click</button>
    <button @click.right.prevent="logEvent('Right mouse button clicked (.right)')">Right Click</button>
    <button @click.middle.prevent="logEvent('Middle mouse button clicked (.middle)')">Middle Click</button>
  </div>
</template>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  padding: 20px;
}
h1 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}
button, a, input {
  margin: 5px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #f5f5f5;
  cursor: pointer;
}
button:hover, a:hover {
  background: #e6e6e6;
}
.msg {
  padding: 10px;
  background: #eef;
  border-radius: 6px;
  margin-bottom: 15px;
}
.self-box {
  padding: 15px;
  border: 2px dashed #888;
  margin: 5px;
}
.scroll-box {
  height: 50px;
  overflow-y: scroll;
  border: 1px solid #aaa;
  padding: 5px;
  margin: 5px;
}
.scroll-box::after {
  content: "Scroll me!";
  display: block;
  height: 200px;
}
</style>
