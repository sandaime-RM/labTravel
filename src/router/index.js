import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PensionView from '@/views/PensionView.vue'
import ScheduleView from '@/views/ScheduleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pension',
      name: 'pension',
      component: PensionView,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView,
    },
  ],
})

export default router
