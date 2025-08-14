import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from './composables/useAuth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: () => import('./pages/PostDetail.vue'),
    props: true
  },
  {
    path: '/add-post',
    name: 'AddPost',
    component: () => import('./pages/AddPost.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./pages/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const { isAuthenticated } = useAuth()
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return { name: 'Login' }
  }
})

export default router