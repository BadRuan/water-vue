import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/Home.vue'
import TodoPage from '@/pages/Todo.vue'
import StoryPage from '@/pages/Story.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: HomePage
    },
    {
      path: '/todo',
      name: 'todo',
      meta: {
        title: '代办清单'
      },
      component: TodoPage
    },
    {
      path: '/story',
      name: 'story',
      meta: {
        title: '开发历程'
      },
      component: StoryPage
    }
  ]
})

export default router
