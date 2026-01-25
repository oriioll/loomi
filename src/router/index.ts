// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login' // Por defecto mandamos al login
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: 'Loomi | Sign In' }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { title: 'Loomi | Sign Up' }
    }
  ]
})

export default router