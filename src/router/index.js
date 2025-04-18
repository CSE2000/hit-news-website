import { createRouter, createWebHistory } from 'vue-router'
import Normallayout from '@/layout/Normallayout.vue'
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
          name: 'newsfeed',
          component: () => import('@/components/NewsFeed.vue'),
        },
        {
          path: 'news/:id',
          name: 'HitSpecial',
          component: HitSpecial,
        },
      ],
    },
  ],
})

export default router

// import { createRouter, createWebHistory } from 'vue-router'
// import Normallayout from '@/layout/Normallayout.vue'
// import HomeView from '@/views/HomeView.vue'
// import HitSpecial from '@/views/HitSpecial.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       component: Normallayout,
//       children: [
//         {
//           path: '',
//           name: 'home',
//           component: HomeView,
//         },
//         {
//           path: 'news/:id',
//           name: 'HitSpecial',
//           component: HitSpecial,
//         },
//       ],
// {
//   path: '/',
//   component: Normallayout,
//   children: [
//     {
//       path: '',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/news/:id',
//       name: 'HitSpecial',
//       component: HitSpecial,
//     },
//   ],
//     },
//   ],
// })

// export default router
