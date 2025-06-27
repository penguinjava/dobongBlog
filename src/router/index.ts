
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: () => import('@/views/ScheduleView.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/ProfileView.vue')
        },
    ]
});

export default router