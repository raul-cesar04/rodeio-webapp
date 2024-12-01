import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompetidoresView from '@/views/CompetidoresView.vue'
import AnimaisView from '@/views/AnimaisView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/competidores',
    name: 'competidores',
    component: CompetidoresView
  },
  {
    path: '/animais',
    name: 'animais',
    component: AnimaisView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
