import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import DrawPage from '@/pages/DrawPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',         
      name: 'Home',
      component: HomePage 
    },
    {
      path: '/gallery',         
      name: 'Gallery',
      component: HomePage 
    },
    {
      path: '/new',         
      name: 'New',
      component: DrawPage 
    },
  ],
})

export default router
