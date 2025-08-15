import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Expenses from '../views/Expenses.vue'
import Reports from '../views/Reports.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard' }
  },
  {
    path: '/expenses',
    name: 'Expenses',
    component: Expenses,
    meta: { title: 'Expenses' }
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
    meta: { title: 'Reports' }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { title: 'Settings' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Expense Tracker`
  next()
})

export default router