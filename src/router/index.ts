import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/Home.vue'
import StoryPage from '@/pages/Story.vue'
import NextPage from '@/pages/Next.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/story',
      name: 'story',
      component: StoryPage
    },
    {
      path: '/next',
      name: 'next',
      component: NextPage
    }
  ]
})

export default router
