import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import AuthCallback from '../components/AuthCallback.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/auth/callback',
    name: 'AuthCallback',
    component: AuthCallback,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
