import { createRouter, createWebHistory } from 'vue-router';
import {UrlBase} from "../utils/Utils";

const router = createRouter({
  history: createWebHistory(UrlBase), // import.meta.env.BASE_URL ||
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
