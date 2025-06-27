<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 pb-24">
    <!-- 오늘의 명언 -->
    <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 mb-6 text-white text-center">
      <h2 class="text-xl font-semibold mb-3">💡 오늘의 명언</h2>
      <p class="text-lg italic mb-2">"성공은 준비된 자에게 온다"</p>
      <p class="text-sm opacity-80">- 벤자민 프랭클린</p>
    </div>

    <!-- 오늘의 갓생 현황 -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4 text-center">📊 오늘의 달성표</h2>
      <div class="grid grid-cols-2 gap-6 text-center">
        <div class="p-4 bg-blue-50 rounded-xl">
          <div class="text-3xl font-bold text-blue-600">75</div>
          <div class="text-sm text-gray-600">갓생 점수</div>
        </div>
        <div class="p-4 bg-orange-50 rounded-xl">
          <div class="text-3xl font-bold text-orange-600">7일</div>
          <div class="text-sm text-gray-600">연속 달성</div>
        </div>
      </div>
    </div>

    <!-- 오늘의 할일 체크 -->
    <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h3 class="text-lg font-semibold mb-4">✅ 오늘의 할일</h3>
      <div class="space-y-3">
        <div class="flex items-center p-3 bg-gray-50 rounded-xl">
          <input type="checkbox" class="w-5 h-5 text-blue-600 rounded mr-3">
          <span class="text-gray-700">영어 단어 30개 외우기</span>
        </div>
        <div class="flex items-center p-3 bg-gray-50 rounded-xl">
          <input type="checkbox" class="w-5 h-5 text-blue-600 rounded mr-3" checked>
          <span class="text-gray-700 line-through">수학 문제 10개 풀기</span>
        </div>
        <div class="flex items-center p-3 bg-gray-50 rounded-xl">
          <input type="checkbox" class="w-5 h-5 text-blue-600 rounded mr-3">
          <span class="text-gray-700">독서 30분</span>
        </div>
        <div class="flex items-center p-3 bg-gray-50 rounded-xl">
          <input type="checkbox" class="w-5 h-5 text-blue-600 rounded mr-3">
          <span class="text-gray-700">운동 1시간</span>
        </div>
      </div>
    </div>

    <!-- 목표 설정 버튼 -->
    <div class="mb-6">
      <button class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
        <span class="block text-3xl mb-2">🎯</span>
        <span class="block font-semibold text-lg">목표 설정하기</span>
        <span class="block text-sm opacity-90">새로운 목표를 추가하고 갓생을 시작해보세요!</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>