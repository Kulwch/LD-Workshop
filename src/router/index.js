import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes =[
    {
    path: '/LD-Workshop',
    name: 'Home',
    component: Home
  },
  {
    path: '/bio',
    name: 'Bio',
    component: () => import('../views/Bio.vue')
  },  
  {
    path: '/galerie',
    name: 'Galerie',
    component: () => import('../views/Galerie.vue')
  },
  {
    path: '/arts',
    name: 'Arts',
    component: () => import('../views/Arts.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/registered',
    name: 'Registered',
    component: () => import('../views/Registered.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/livreOr',
    name: 'LivreOr',
    component: () => import('../views/LivreOr.vue')
  },
  {
    path: '/memberSpace',
    name: 'MemberSpace',
    component: () => import('../views/MemberSpace.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router