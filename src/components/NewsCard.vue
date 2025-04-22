<script setup>
import { defineProps } from 'vue'
import { useNewsCardStore } from '@/stores/NewsCardStore'
import { useSidebarStore } from '@/stores/SidebarStore'

const sidebarStore = useSidebarStore()

const props = defineProps({
  article: Object,
})

const newsCardStore = useNewsCardStore()
</script>

<template>
  <router-link :to="`/news/${article.id}`" class="block bg-white rounded-lg shadow hover:shadow-md">
    <div class="p-4 relative">
      <div class="absolute top-4 right-4">
        <img
          :src="newsCardStore.frameImage"
          alt="Article Image"
          class="sm:w-18 md:w-18 lg:w-24 h-auto object-contain"
        />
      </div>
      <div class="pr-28">
        <h2 class="text-[#464646] mt-1 text-base sm:text-xs md:text-sm lg:text-xl font-semibold">
          {{ article.title }}
        </h2>
      </div>

      <div class="flex justify-between py-2">
        <div class="inline-block px-1 py-1 text-sm text-[#ADADAD] mt-0 md:mt-[4%]">
          {{ sidebarStore.selectedCategory }}
        </div>

        <div class="flex gap-[0.6rem] mt-0 md:mt-[5%] px-1">
          <span
            v-for="icon in newsCardStore.icons"
            :key="icon.name"
            :class="icon.name"
            class="text-xl text-[#ADADAD] hover:text-gray-900 cursor-pointer"
          />
        </div>
      </div>

      <div class="text-sm text-gray-500 flex items-center justify-between gap-2 px-1">
        <span class="font-medium text-gray-700">By {{ article.author }}</span>
        <span class="text-gray-500"
          >at {{ article?.date ? newsCardStore.formatDate(article.date) : '' }}</span
        >
      </div>
    </div>
  </router-link>
</template>
