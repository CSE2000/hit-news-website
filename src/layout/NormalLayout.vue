<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Shorts from '@/components/Shorts.vue'
import Navbar from '@/components/Navbar.vue'
import HomeView from '@/views/HomeView.vue'
import { RouterView } from 'vue-router'
import Button from '@/components/Button.vue'
import { ref } from 'vue'

const currentView = ref('home')

const handleTabChange = (view) => {
  if (currentView.value !== view) {
    console.log('Switching to:', view)
    currentView.value = view
  }
}
</script>

<template>
  <main class="flex flex-col md:flex-row min-h-screen">
    <!-- Sidebar (desktop only) -->
    <div class="hidden md:block sticky top-0 h-screen md:w-[20%] lg:w-[18%] xl:w-[15%]">
      <Sidebar />
    </div>

    <!-- Main content center area -->
    <div class="flex-1 flex flex-col w-full md:w-[60%] lg:w-[64%] xl:w-[66%]">
      <!-- Mobile Navbar -->
      <div class="md:hidden sticky top-0 z-10 w-full bg-white">
        <Navbar />
      </div>

      <!-- HomeView (desktop only) -->
      <div class="p-2 md:p-4 hidden md:block overflow-x-auto">
        <HomeView />
      </div>

      <!-- NewsFeed for all views -->
      <div class="p-2 md:p-4 hidden md:block">
        <RouterView />
      </div>
    </div>

    <!-- ✅ Mobile view content -->
    <div class="p-2 md:p-4 md:hidden mb-16">
      <Shorts v-if="currentView === 'shorts'" />
      <RouterView v-else />
    </div>

    <!-- ✅ Bottom Nav (mobile only) -->
    <div class="fixed bottom-0 left-0 right-0 z-50 bg-white block md:hidden">
      <Button @select="handleTabChange" />
    </div>
    <div
      class="hidden sm:block md:w-[28%] lg:w-[26%] xl:w-[24%] 2xl:w-[22%] min-w-[280px] md:min-w-[300px] lg:min-w-[350px]"
    >
      <!-- Sidebar/desktop Shorts content here (if needed) -->
      <Shorts />
    </div>
  </main>
</template>