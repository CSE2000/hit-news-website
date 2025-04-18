<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Shorts from '@/components/Shorts.vue'
import Navbar from '@/components/Navbar.vue'
import HomeView from '@/views/HomeView.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="flex flex-col md:flex-row min-h-screen">
    <!-- Sidebar: Shrinks on tablet -->
    <Sidebar class="hidden md:block md:w-[20%] lg:w-[18%] xl:w-[15%]" />

    <!-- Center: HomeView + NewsFeed -->
    <div class="flex-1 flex flex-col w-full overflow-hidden md:w-[60%] lg:w-[64%] xl:w-[66%]">
      <!-- Navbar for mobile -->
      <div class="md:hidden sticky top-0 z-10 w-full bg-white">
        <Navbar />
      </div>

      <!-- HomeView (visible on md+) -->
      <div class="p-2 md:p-4 hidden md:block">
        <HomeView />
      </div>

      <!-- NewsFeed area -->
      <div class="p-2 md:p-4">
        <RouterView />
      </div>
    </div>

    <!-- Shorts: Shrinks at each breakpoint -->
    <Shorts class="hidden md:block md:w-[24%] lg:w-[20%] xl:w-[18%] 2xl:w-[16%]" />
  </main>
</template>

<!-- <template>
  <main class="flex flex-row min-h-screen">
    <Sidebar class="hidden md:block" />

    <div class="flex-1 flex flex-col w-full overflow-hidden">
      <div class="md:hidden sticky top-0 z-10 w-full bg-white">
        <Navbar />
      </div>

      <div class="p-2 md:p-4 hidden md:block">
        <HomeView />
      </div>

      <div class="p-2 md:p-4">
        <RouterView />
      </div>
    </div>
    <Shorts class="hidden md:block" />
  </main>
</template> -->
