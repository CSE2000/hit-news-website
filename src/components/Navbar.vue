<script setup>
import { useSidebarStore } from '@/stores/SidebarStore'
const sidebarStore = useSidebarStore()

const handleClick = (label) => {
  sidebarStore.setCategory(label)
}
</script>

<template>
  <nav class="block lg:hidden sticky top-0 z-20 bg-white shadow-sm">
    <!-- Top Logo + WhatsApp Banner -->
    <div class="flex items-center justify-between px-4 w-full">
      <div class="w-28 h-20 sm:w-34 sm:h-26 md:w-36 md:h-28 lg:w-40 lg:h-32">
        <img :src="sidebarStore.logoUrl" alt="logo" class="w-full h-full object-contain" />
      </div>

      <div
        class="flex items-center gap-2 px-3 py-2 bg-[#F6F6F6] border rounded-full w-fit sm:w-[180px] md:w-[190px] lg:w-[180px]"
      >
        <img :src="sidebarStore.whatsappIcon" alt="WhatsApp" class="w-6 h-6 sm:w-4 sm:h-4" />
        <span class="text-xs sm:text-sm md:text-base font-medium text-[#4D4D4D] whitespace-nowrap">
          {{ sidebarStore.whatsappText }}
        </span>
      </div>
    </div>

    <!-- Category Buttons Scroll -->
    <div class="flex whitespace-nowrap w-full px-4 space-x-8 overflow-x-auto pb-2">
      <button
        v-for="category in sidebarStore.categories"
        :key="category.label"
        @click="handleClick(category.label)"
        class="flex items-center space-x-2 text-sm sm:text-base hover:bg-gray-200 rounded-md p-2 w-full"
      >
        <img :src="sidebarStore.getImageUrl(category.icon)" alt="category icon" class="w-5 h-5" />
        <span>{{ category.label }}</span>
      </button>
    </div>
  </nav>
</template>
