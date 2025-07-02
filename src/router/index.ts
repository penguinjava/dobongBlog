
import { createRouter, createWebHashHistory } from 'vue-router'
import { useAuthStore } from "@/stores/auth.ts";
import HomeView from '@/views/HomeView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import ProfileView from '@/views/ProfileView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from "@/views/DashboardView.vue";

const router = createRouter({
    history: createWebHashHistory('/godlife/'),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: { requiresGuest: true }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView,
            meta: { requiresAuth: true }
        },
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { requiresAuth: true }
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: ScheduleView,
            meta: { requiresAuth: true }
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView,
            meta: { requiresAuth: true }
        }
    ]
})


router.beforeEach(async (to) => {
    const authStore = useAuthStore()

    // 토큰 복구
    if (!authStore.user && localStorage.getItem('token')) {
        await authStore.restoreToken()
    }

    // 인증이 필요한 페이지 접근인데 로그인 안 돼있음
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        return { name: 'login' }
    }

    // 게스트만 접근 가능한 페이지에 로그인된 유저가 접근할 경우
    if (to.meta.requiresGuest && authStore.isAuthenticated) {
        return { name: 'home' }
    }
})

export default router