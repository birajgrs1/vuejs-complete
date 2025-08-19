import { createApp } from 'vue'
import Toast from '../components/Toast.vue'

export default {
  install(app) {
    const mountPoint = document.createElement('div')
    document.body.appendChild(mountPoint)
    const toastApp = createApp(Toast)
    toastApp.mount(mountPoint)
  },
}
