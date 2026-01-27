
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Landing  from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home' 
    },
    {
      path: '/home',
      name: 'home',
      component: Landing,
      meta: {title: 'Loomi | Next Gen classroom manager'}
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
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { title: 'Loomi | The next-gen classroom manager' }
      //IF NOT LOGGED IN, GO BACK TO /login logic
    }
  ]
})

export default router