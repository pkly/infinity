import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('infinity/'), // import.meta.env.BASE_URL ||
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/AccessControl/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    }
  ]
})

export default router
