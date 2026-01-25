// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login' //go login by default
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