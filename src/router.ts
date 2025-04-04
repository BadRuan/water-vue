import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Table from '@/pages/Table.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/table',
        name: 'table',
        component: Table
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})