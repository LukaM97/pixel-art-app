import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import DrawPage from '@/pages/DrawPage.vue'
import GalleryPage from '@/pages/GalleryPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import ImagePage from '@/pages/ImagePage.vue'

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
    {
      path: '/gallery',         
      name: 'Gallery',
      component: GalleryPage 
    },
    {
      path: '/login',         
      name: 'Login',
      component: LoginPage 
    },
    {
      path: '/register',         
      name: 'Register',
      component: RegisterPage 
    },
    {
      path: '/image',         
      name: 'Image',
      component: ImagePage 
    },
  ],
})

export default router
