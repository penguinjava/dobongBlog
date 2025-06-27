<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 pb-24">
    <DailyQuote />
    <DailyStats />
    <TodoList />
    <GoalButton />
  </div>
</template>

<script setup lang="ts">
import DailyQuote from '@/components/DailyQuote.vue';
import DailyStats from '@/components/DailyStats.vue';
import TodoList from '@/components/TodoList.vue';
import GoalButton from '@/components/GoalButton.vue';
</script>