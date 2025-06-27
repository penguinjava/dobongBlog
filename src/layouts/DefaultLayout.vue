
<script setup lang="ts">
import Header from '@/components/Header.vue';
import TabBar from "@/components/TabBar.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col text-gray-800">
    <!-- header 태그 제거하여 sticky가 제대로 작동하도록 -->
    <Header/>

    <main class="flex-1">
      <slot />
    </main>

    <!-- 모바일 하단 네비게이션 -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t">
      <TabBar />
    </nav>
  </div>
</template>