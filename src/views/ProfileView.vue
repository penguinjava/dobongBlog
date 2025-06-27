<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 pb-24">
    <!-- 프로필 헤더 -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-6 text-center">
      <div class="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span class="text-3xl text-white">👤</span>
      </div>
      <h1 class="text-xl font-bold text-gray-800 mb-1">갓생러</h1>
      <p class="text-gray-600">매일 성장하는 중 🌱</p>

      <!-- 프로필 등록 버튼 -->
      <button
          @click="editProfile"
          class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
      >
        프로필 수정
      </button>
    </div>

    <!-- 갓생 레벨 -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4 flex items-center">
        <span class="mr-2">🏅</span>
        갓생 레벨
      </h2>
      <div class="text-center">
        <!-- 레벨 표시 -->
        <div class="text-4xl font-bold text-purple-600 mb-2">Lv.{{ currentLevel }}</div>
        <div class="text-lg font-medium text-gray-700 mb-2">{{ levelTitle }}</div>

        <!-- 총 갓생점수 표시 -->
        <div class="text-lg font-semibold text-blue-600 mb-4">
          총 갓생점수: {{ totalExp }}점
        </div>

        <!-- 갓생점수 진행 바 -->
        <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div
              class="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
              :style="{ width: `${expPercentage}%` }"
          ></div>
        </div>
        <div class="text-sm text-gray-600">
          {{ currentExp }} / {{ nextLevelExp }} 갓생점수
          <span class="text-purple-600 font-medium">({{ nextLevelExp - currentExp }}점까지 레벨업!)</span>
        </div>
      </div>
    </div>

    <!-- 달성한 목표 -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4 flex items-center">
        <span class="mr-2">🏆</span>
        달성한 목표
      </h2>
      <div class="space-y-3">
        <div
            v-for="(achievement, index) in displayedAchievements"
            :key="index"
            class="flex items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl"
        >
          <span class="text-2xl mr-3">{{ achievement.icon }}</span>
          <div class="flex-1">
            <div class="font-medium text-gray-800">{{ achievement.title }}</div>
            <div class="text-sm text-gray-600">{{ achievement.date }}</div>
          </div>
        </div>

        <!-- 더보기 버튼 -->
        <button
            v-if="!showAllAchievements && achievements.length > 3"
            @click="showAllAchievements = true"
            class="w-full py-3 text-blue-500 hover:text-blue-700 font-medium transition-colors"
        >
          더보기 ({{ achievements.length - 3 }}개 더)
        </button>

        <!-- 접기 버튼 -->
        <button
            v-if="showAllAchievements"
            @click="showAllAchievements = false"
            class="w-full py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors"
        >
          접기
        </button>
      </div>
    </div>

    <!-- 갓생점수 획득 기준 -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4 flex items-center">
        <span class="mr-2">💎</span>
        갓생점수 획득 기준
      </h2>
      <div class="space-y-3">
        <div class="flex items-center p-3 bg-green-50 rounded-xl">
          <span class="text-xl mr-3">✅</span>
          <div class="flex-1">
            <div class="font-medium text-gray-800">일일 목표 달성</div>
            <div class="text-sm text-gray-600">하루 목표를 완료하면 10점</div>
          </div>
          <div class="text-green-600 font-bold">+10점</div>
        </div>

        <div class="flex items-center p-3 bg-blue-50 rounded-xl">
          <span class="text-xl mr-3">🔥</span>
          <div class="flex-1">
            <div class="font-medium text-gray-800">연속 달성</div>
            <div class="text-sm text-gray-600">3일 연속 +5점, 7일 연속 +15점</div>
          </div>
          <div class="text-blue-600 font-bold">+5~15점</div>
        </div>

        <div class="flex items-center p-3 bg-purple-50 rounded-xl">
          <span class="text-xl mr-3">🏆</span>
          <div class="flex-1">
            <div class="font-medium text-gray-800">특별 달성</div>
            <div class="text-sm text-gray-600">챌린지 완료, 마일스톤 달성</div>
          </div>
          <div class="text-purple-600 font-bold">+20~50점</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 반응형 데이터
const showAllAchievements = ref(false)
const totalExp = ref(142)

// 달성 목표 데이터
const achievements = ref([
  {
    title: '7일 연속 달성',
    date: '2024.06.20',
    icon: '🥇'
  },
  {
    title: '영어 단어 100개 완주',
    date: '2024.06.18',
    icon: '✅'
  },
  {
    title: '운동 30일 챌린지',
    date: '2024.06.15',
    icon: '💪'
  },
  {
    title: '독서 10권 달성',
    date: '2024.06.10',
    icon: '📚'
  },
  {
    title: '일찍 일어나기 21일',
    date: '2024.06.05',
    icon: '🌅'
  }
])

// 레벨 시스템
const levelThresholds = [0, 50, 120, 200, 300, 420, 560, 720, 900, 1100, 1320]
const levelTitles = [
  '갓생 새싹', '갓생 초보', '갓생 입문', '갓생 도전자',
  '갓생 실천가', '갓생 달인', '갓생 고수', '갓생 마스터',
  '갓생 전설', '갓생 신화', '갓생 궁극체'
]

// 계산된 속성들
const currentLevel = computed(() => {
  let level = 0
  for (let i = 0; i < levelThresholds.length; i++) {
    if (totalExp.value >= levelThresholds[i]) {
      level = i
    } else {
      break
    }
  }
  return level
})

const levelTitle = computed(() => {
  return levelTitles[currentLevel.value] || '갓생 궁극체'
})

const currentExp = computed(() => {
  if (currentLevel.value === 0) return totalExp.value
  return totalExp.value - levelThresholds[currentLevel.value]
})

const nextLevelExp = computed(() => {
  if (currentLevel.value >= levelThresholds.length - 1) return 0
  return levelThresholds[currentLevel.value + 1] - levelThresholds[currentLevel.value]
})

const expPercentage = computed(() => {
  if (nextLevelExp.value === 0) return 100
  return Math.min((currentExp.value / nextLevelExp.value) * 100, 100)
})

const displayedAchievements = computed(() => {
  return showAllAchievements.value ? achievements.value : achievements.value.slice(0, 3)
})

// 메서드
const editProfile = () => {
  // 프로필 수정 기능 구현
  alert('프로필 수정 기능을 구현해보세요!')
}
</script>