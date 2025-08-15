import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgendarView from '../views/AgendarView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import TeamView from '@/views/TeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/agendar',
      name: 'agendar',
      component: AgendarView,
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: ServicesView,
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContactView,
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: TeamView,
    },
  ],
})

export default router
