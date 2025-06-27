<template>
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
</template>

<script setup lang="ts">
</script>