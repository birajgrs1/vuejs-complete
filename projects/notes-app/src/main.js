import { createApp } from 'vue'
import App from './App.vue'
import ToastPlugin from './plugins/toastPlugin'

const app = createApp(App)
app.use(ToastPlugin)
app.mount('#app')
