import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue') // Lazy loading for consistency
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue') // Lazy loading
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue') // Lazy loading
    },
    {
      path: '/contact', // Added contact route
      name: 'contact',
      component: () => import('../views/ContactView.vue') // Create this view if it doesn't exist
    },
    {
      path: '/admin', // Added services route
      name: 'admin',
      component: () => import('../views/AdminView.vue') // Create this view if it doesn't exist
    },
    {
      path: '/resume', // Added services route
      name: 'resume',
      component: () => import('../views/ResumeView.vue') // Create this view if it doesn't exist
    }
  ]
})

export default router
