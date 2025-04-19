<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Shorts from '@/components/Shorts.vue'
// import Navbar from '@/components/Navbar.vue'
import HomeView from '@/views/HomeView.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="flex flex-col lg:flex-row min-h-screen w-full">
    <!-- Sidebar (desktop only) -->
    <div class="hidden lg:block sticky top-0 h-screen md:w-[20%] lg:w-[18%] xl:w-[15%]">
      <Sidebar />
    </div>

    <!-- Center Area (Sticky Navbar + Scrollable Content) -->
    <div class="flex flex-col w-full lg:w-[64%] xl:w-[66%] h-screen overflow-hidden">
      <!-- Sticky Mobile Navbar -->
      <!-- <div class="md:hidden sticky top-0 z-10 w-full bg-white">
        <Navbar />
      </div> -->

      <!-- Scrollable center content (both mobile and desktop) -->
      <div class="flex-1 overflow-y-auto">
        <!-- ✅ Mobile view content -->
        <div class="p-2 md:p-4 block lg:hidden">
          <Shorts v-if="currentView === 'shorts'" />
          <RouterView v-else />
        </div>

        <!-- ✅ Desktop view content -->
        <div class="hidden lg:block">
          <div class="p-2 md:p-4 overflow-x-auto">
            <HomeView />
          </div>
          <div class="p-1">
            <RouterView />
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky Shorts (desktop only) -->
    <div
      class="hidden lg:block sticky top-0 self-start h-screen overflow-y-auto md:w-[28%] lg:w-[26%] xl:w-[24%] 2xl:w-[22%] min-w-[280px] md:min-w-[300px] lg:min-w-[350px]"
    >
      <Shorts />
    </div>
  </main>
</template>
