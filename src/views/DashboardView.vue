<template>
  <div class="h-screen flex flex-col bg-gray-50">
    <!-- 헤더 -->
    <header class="bg-white shadow-sm border-b h-16 flex items-center">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 class="text-xl font-semibold text-gray-900">갓생 프로젝트</h1>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <img
                :src="user?.profileImage || '/ms-icon-310x310.png'"
                :alt="user?.nickname"
                class="w-8 h-8 rounded-full"
            />
            <span class="text-sm font-medium text-gray-700">{{ user?.nickname }}</span>
          </div>
          <button
              @click="handleLogout"
              class="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </div>
    </header>

    <!-- 메인 콘텐츠 -->
    <main class="flex-1 overflow-auto px-4 py-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">환영합니다! 🎉</h2>
        <div class="space-y-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-medium text-blue-900">사용자 정보</h3>
            <div class="mt-2 text-sm text-blue-700">
              <p>카카오 ID: {{ user?.kakaoId }}</p>
              <p>닉네임: {{ user?.nickname }}</p>
              <p>가입일: {{ formatDate(user?.createdAt) }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const user = computed(() => authStore.user)

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

const formatDate = (dateString?: string) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('ko-KR')
}
</script>
