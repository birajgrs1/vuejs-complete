import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import SmartTooltipPlugin from './plugins/smart-tooltip'
import { usePermissionStore } from './store/permissions'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.use(SmartTooltipPlugin, {
  permissionResolver: (permissionKey) => {
    const store = usePermissionStore()
    return Promise.resolve(store.hasPermission(permissionKey))
  }
})

app.mount('#app')
