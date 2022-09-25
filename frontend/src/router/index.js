import { createRouter, createWebHistory } from 'vue-router'
import TrendingView from '../views/TrendingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'trending',
      component: TrendingView
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreView.vue')
    },
    {
      path: '/governance',
      name: 'governance',
      component: () => import('../views/Governanceview.vue')
    },
    {
      path: '/repuloan',
      name: 'repuloan',
      component: () => import('../views/RepuLoan.vue')
    },
    {
      path: '/repumarket',
      name: 'repumarket',
      component: () => import('../views/RepuMarket.vue')
    }
  ]
})

export default router
