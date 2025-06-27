<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col text-gray-800">
    <header class="border-b">
    <Header/>
    </header>

    <div class="flex flex-1">
      <aside class="hidden lg:block w-64 border-r bg-gray-50">
        <Sidebar />
      </aside>

      <main class="flex-1 bg-white p-6">
        <slot />
      </main>
    </div>

    <Footer class="border-t text-sm text-center py-4 bg-gray-100 text-gray-500" />
  </div>
</template>