import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/trending',
      name: 'trending',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TrendingView.vue')
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreView.vue')
    },
    {
      path: '/lend',
      name: 'lend',
      component: () => import('../views/LendView.vue')
    },
    {
      path: '/mint',
      name: 'mint',
      component: () => import('../views/MintView.vue')
    },
    {
      path: '/governance',
      name: 'governance',
      component: () => import('../views/Governanceview.vue')
    }
  ]
})

export default router
