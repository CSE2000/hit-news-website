<script setup>
import { useSidebarStore } from '@/stores/SidebarStore'
const sidebarStore = useSidebarStore()

const handleClick = (label) => {
  sidebarStore.setCategory(label)
}
</script>

<template>
  <nav
    class="hidden md:block h-screen border-r border-black border-opacity-20 p-3 space-y-8 min-w-[180px] md:min-w-[210px] lg:min-w-[220px] md:pl-4"
  >
    <div class="h-[50px] w-full m-6 text-center">
      <img :src="sidebarStore.logoUrl" alt="logo" class="h-8 object-contain" />
    </div>
    <div class="flex flex-col items-start space-y-6">
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
