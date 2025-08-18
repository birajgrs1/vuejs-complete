import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'vue-router'

export function useAuth() {
  const authStore = useAuthStore()
  const router = useRouter()

  const requireAuth = (to: any, from: any, next: any) => {
    if (!authStore.isAuthenticated) {
      next({ name: 'login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  }

  const requireGuest = (to: any, from: any, next: any) => {
    if (authStore.isAuthenticated) {
      next({ name: 'home' })
    } else {
      next()
    }
  }

  return { requireAuth, requireGuest }
}