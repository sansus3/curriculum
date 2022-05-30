import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contacto',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/curriculum',
    name: 'Curriculum',
    component: () => import('../views/profile/CurriculumView.vue')
  },
  // {
  //   path: '/experiencia-laboral',
  //   name: 'WorkExperience',
  //   component: () => import('../views/profile/WorkExperienceView.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
