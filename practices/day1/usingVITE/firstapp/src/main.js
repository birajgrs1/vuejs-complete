import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import ByeWorld from './components/ByeWorld.vue'

const app = createApp(App)
// app.component('ByeWorld', ByeWorld) // globally-register
app.mount('#app')


