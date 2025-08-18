import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/style.css"
import router from './route/routes'
import App from './App.vue'

// Create the app
const app = createApp(App)

const pinia = createPinia()

app.use(pinia) 
app.use(router)

app.mount('#app')