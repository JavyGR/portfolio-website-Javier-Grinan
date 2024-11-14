import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: function () {
      return import('../views/AboutMeView.vue')
    }
  },
  {
    path: '/service',
    name: 'service',
    component: function () {
      return import('../views/ServiceView.vue')
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/blog',
    name: 'blog',
    component: function () {
      return import('../views/BlogView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/ContactView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
