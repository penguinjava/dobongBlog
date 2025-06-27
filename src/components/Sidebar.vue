<script setup lang="ts">
const items = ["title1", "title2", "title3"] as string[];
</script>

<template>
  <div v-for="(item, index) in items" :key="index">
    <div class="bg-red-100 hover:bg-yellow-50">
      {{ item }}
    </div>
  </div>
</template>