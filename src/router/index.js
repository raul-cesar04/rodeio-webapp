import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompetidoresView from '@/views/CompetidoresView.vue'
import AnimaisView from '@/views/AnimaisView.vue'
import ResultadosView from '@/views/ResultadosView.vue'
import CompetidorView from '@/views/CompetidorView.vue'

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
    path: '/competidores/:id',
    name: 'competidor',
    component: CompetidorView
  },
  {
    path: '/animais',
    name: 'animais',
    component: AnimaisView
  },
  {
    path: '/resultados',
    name: 'resultados',
    component: ResultadosView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
