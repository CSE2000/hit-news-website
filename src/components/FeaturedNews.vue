<script setup>
import { defineProps } from 'vue'
import { useFeaturedNewsStore } from '@/stores/FeaturedNewsStore'
import { useSidebarStore } from '@/stores/SidebarStore'

const sidebarStore = useSidebarStore()

const props = defineProps({
  article: Object,
})

const FeaturedNewsStore = useFeaturedNewsStore()
</script>

<template>
  <router-link
    :to="`/news/${article.id}`"
    class="block bg-white rounded-xl overflow-hidden shadow-lg"
  >
    <div class="p-2">
      <div class="flex flex-wrap items-baseline gap-1">
        <p class="text-lg font-bold text-[#2EA965] py-0 md:py-6 lg:py-2">
          {{ article?.headLineOfNew }}
          <span class="text-lg font-medium text-[#4D4D4D]">{{ article?.title }}</span>
        </p>
      </div>
    </div>

    <div class="text-sm text-gray-500 flex items-center justify-between gap-2 p-2">
      <span class="font-medium text-[#4D4D4D]">By {{ article.author }}</span>
      <span class="text-[#4D4D4D]">{{
        article?.date ? FeaturedNewsStore.formatDate(article.date) : ''
      }}</span>
    </div>

    <!-- Article images -->
    <img :src="FeaturedNewsStore.topImage" alt="Main News Image" class="w-full h-auto" />

    <!-- Category -->
    <div class="flex justify-between p-2">
      <div class="inline-block px-3 py-1 text-sm text-[#ADADAD] w-max">
        {{ sidebarStore.selectedCategory }}
      </div>

      <!-- Share Icons -->
      <div class="flex gap-4 mt-2 mr-2">
        <span
          v-for="icon in FeaturedNewsStore.icons"
          :key="icon.name"
          :class="icon.name"
          class="text-xl text-[#ADADAD] hover:text-gray-900 cursor-pointer"
        />
      </div>
    </div>
  </router-link>
</template>
