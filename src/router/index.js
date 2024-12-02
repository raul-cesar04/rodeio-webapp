import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompetidoresView from '@/views/CompetidoresView.vue'
import AnimaisView from '@/views/AnimaisView.vue'
import ResultadosView from '@/views/ResultadosView.vue'
import CompetidorView from '@/views/CompetidorView.vue'
import AnimalView from '@/views/AnimalView.vue'
import ProprietarioView from '@/views/ProprietarioView.vue'
import EventoView from '@/views/EventoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/competidores',
    name: 'competidores',
    component: CompetidoresView,
    meta: {
      title: "PRB | Competidores"
    }
  },
  {
    path: '/competidores/:id',
    name: 'competidor',
    component: CompetidorView
  },
  {
    path: '/animais',
    name: 'animais',
    component: AnimaisView,
    meta: {
      title: "PRB | Animais"
    }
  },
  {
    path: '/animais/:id',
    name: 'animal',
    component: AnimalView
  },
  {
    path: '/resultados',
    name: 'resultados',
    component: ResultadosView,
    meta: {
      title: "PRB | Resultados"
    }
  },
  {
    path: '/proprietarios/:id',
    name: 'proprietario',
    component: ProprietarioView
  },
  {
    path: '/eventos/:id',
    name: 'evento',
    component: EventoView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(to=>{
  const { title } = to.meta;
  const defaultTitle = "PRB | Profissionais do Rodeio Brasileiro";
  document.title = title || defaultTitle;
});

export default router;
