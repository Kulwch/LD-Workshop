import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes =[
    {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bio',
    name: 'Bio',
    component: () => import('../views/Bio.vue')
  },
  /*
  {
    path: '/galerie',
    name: 'Galerie',
    component: Galerie
  },
  {
    path: '/arts',
    name: 'Arts',
    component: Arts
  },*/
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
    path: '/MemberSpace',
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