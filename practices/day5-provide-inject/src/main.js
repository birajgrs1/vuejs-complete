import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
// app.provide('message', 'Hello from App!');   //App provides a message
app.mount('#app');

// createApp(App).mount('#app')
