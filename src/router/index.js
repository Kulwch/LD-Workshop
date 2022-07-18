import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes =[
    {
    path: '/LD-Workshop/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/LD-Workshop/bio',
    name: 'Bio',
    component: () => import('../views/Bio.vue')
  },  
  {
    path: '/LD-Workshop/galerie',
    name: 'Galerie',
    component: () => import('../views/Galerie.vue')
  },
  {
    path: '/LD-Workshop/arts',
    name: 'Arts',
    component: () => import('../views/Arts.vue')
  },
  {
    path:'/LD-Workshop/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/LD-Workshop/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/LD-Workshop/post',
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/LD-Workshop/registered',
    name: 'Registered',
    component: () => import('../views/Registered.vue')
  },
  {
    path:'/LD-Workshop/experiences',
    name: 'Experiences',
    component: () => import('../views/Experiences.vue')
  },
  {
    path: '/LD-Workshop/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/LD-Workshop/livreOr',
    name: 'LivreOr',
    component: () => import('../views/LivreOr.vue')
  },
  {
    path: '/LD-Workshop/memberSpace',
    name: 'MemberSpace',
    component: () => import('../views/MemberSpace.vue')
  },
  {
    path: '/LD-Workshop/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router