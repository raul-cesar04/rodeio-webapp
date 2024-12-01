import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompetidoresView from '@/views/CompetidoresView.vue'
import AnimaisView from '@/views/AnimaisView.vue'
import ResultadosView from '@/views/ResultadosView.vue'
import CompetidorView from '@/views/CompetidorView.vue'
import AnimalView from '@/views/AnimalView.vue'
import ProprietarioView from '@/views/ProprietarioView.vue'

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
    path: '/animais/:id',
    name: 'animal',
    component: AnimalView
  },
  {
    path: '/resultados',
    name: 'resultados',
    component: ResultadosView
  },
  {
    path: '/proprietarios/:id',
    name: 'proprietario',
    component: ProprietarioView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
