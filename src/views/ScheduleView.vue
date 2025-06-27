<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 pb-24">
    <!-- 헤더 섹션 -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div class="text-center">
        <h1 class="text-2xl font-bold text-gray-800 mb-2">📅 일정 관리</h1>
        <p class="text-gray-600">나의 갓생 일정을 관리해보세요</p>
      </div>
    </div>

    <!-- 오늘 일정 -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4 flex items-center">
        <span class="mr-2">📋</span>
        오늘의 일정
      </h2>
      <div class="space-y-3">
        <div class="flex items-center p-3 bg-blue-50 rounded-xl border-l-4 border-blue-500">
          <div class="flex-1">
            <div class="font-medium text-gray-800">영어 공부</div>
            <div class="text-sm text-gray-600">09:00 - 10:00</div>
          </div>
        </div>
        <div class="flex items-center p-3 bg-green-50 rounded-xl border-l-4 border-green-500">
          <div class="flex-1">
            <div class="font-medium text-gray-800">운동</div>
            <div class="text-sm text-gray-600">18:00 - 19:00</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 이번 주 목표 -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4 flex items-center">
        <span class="mr-2">🎯</span>
        이번 주 목표
      </h2>
      <div class="space-y-3">
        <div class="p-3 bg-purple-50 rounded-xl">
          <div class="font-medium text-gray-800">매일 영어 단어 30개 외우기</div>
          <div class="mt-2 bg-purple-200 rounded-full h-2">
            <div class="bg-purple-500 h-2 rounded-full" style="width: 70%"></div>
          </div>
          <div class="text-sm text-gray-600 mt-1">70% 달성</div>
        </div>
        <div class="p-3 bg-orange-50 rounded-xl">
          <div class="font-medium text-gray-800">주 3회 운동하기</div>
          <div class="mt-2 bg-orange-200 rounded-full h-2">
            <div class="bg-orange-500 h-2 rounded-full" style="width: 33%"></div>
          </div>
          <div class="text-sm text-gray-600 mt-1">1/3 완료</div>
        </div>
      </div>
    </div>

    <!-- 일정 추가 버튼 -->
    <div class="mb-6">
      <button class="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
        <span class="block text-3xl mb-2">➕</span>
        <span class="block font-semibold text-lg">새 일정 추가</span>
        <span class="block text-sm opacity-90">새로운 일정을 추가해보세요!</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>