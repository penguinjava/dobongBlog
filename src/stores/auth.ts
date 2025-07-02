import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '@/api/axios'

export interface User {
    id: string
    kakaoId: string
    nickname: string
    profileImage: string
    createdAt: string
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const token = ref<string | null>(null)
    const isLoading = ref(false)

    const isAuthenticated = computed(() => !!token.value)

    // 카카오 로그인
    const kakaoLogin = async () => {
        try {
            if (!window.Kakao?.Auth) throw new Error('카카오 SDK가 초기화되지 않았습니다.')

            // 로그인 리다이렉트
            window.Kakao.Auth.authorize({
                redirectUri: 'http://localhost:5173/godlife/oauth',
            })
        } catch (error) {
            console.error('카카오 로그인 실패:', error)
            throw new Error('카카오 로그인 실패')
        }
    }

    // 로그아웃
    const logout = () => {
        user.value = null
        token.value = null
        localStorage.removeItem('token')

        if (window.Kakao?.Auth) {
            window.Kakao.Auth.logout(() => {
                console.log('카카오 로그아웃 완료')
            })
        }
    }

    // 사용자 정보 새로고침
    const fetchUserInfo = async () => {
        if (!token.value) return

        try {
            const { data } = await axios.get('/users/me', {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            })

            user.value = data

        } catch (error) {
            console.error('사용자 정보 가져오기 실패:', error)
            logout()
        }
    }

    // 토큰 복구
    const restoreToken = async () => {
        const savedToken = localStorage.getItem('token')
        if (savedToken) {
            token.value = savedToken
            await fetchUserInfo()
        }
    }

    return {
        user,
        token,
        isLoading,
        isAuthenticated,
        kakaoLogin,
        logout,
        fetchUserInfo,
        restoreToken
    }
})
