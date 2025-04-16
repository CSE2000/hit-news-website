import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Normallayout from '@/layout/Normallayout.vue'
import HomeView from '@/views/HomeView.vue'
import HitSpecial from '@/views/HitSpecial.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Normallayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
      ],
    },

    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/news/:id',
      name: 'HitSpecial',
      component: () => import('@/views/HitSpecial.vue'),
    },
  ],
})

export default router
