import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/views/Home/Index.vue")
    },
    {
      path: '/history',
      name: 'History',
      component: () => import("@/views/History.vue")
    },
    {
      path: '/plan',
      name: 'Plan',
      component: () => import("@/views/Plan.vue")
    }
  ],
  linkActiveClass: 'group-active',
})

export default router
