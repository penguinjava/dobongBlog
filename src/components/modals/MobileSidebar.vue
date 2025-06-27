<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <!-- 오버레이 -->
  <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-40"
      @click="isOpen = false"
  ></div>

  <!-- 모달 메뉴 (왼쪽으로 위치 변경) -->
  <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg p-6"
  >
    <button @click="isOpen = false" class="mb-4 text-gray-700">닫기 ✕</button>
    <ul class="space-y-4">
      <li>홈</li>
      <li>공지사항</li>
      <li>내 정보</li>
    </ul>
  </div>

  <!-- 햄버거 버튼 -->
  <button
      @click="isOpen = true"
      class="block sm:hidden p-2 text-gray-800 absolute left-4">
    ☰
  </button>
</template>