<template>
  <div class="relative h-screen">
    <div class="fixed top-0 left-0 right-0 z-50 block lg:hidden bg-white shadow-md">
      <DetailTopbar />
    </div>

    <div
      class="space-y-2 mx-auto max-w-screen-xl w-full overflow-x-hidden px-2 md:px-4 lg:px-8 xl:px-12 pt-8 lg:pt-0"
    >
      <div class="p-2">
        <div class="hidden lg:block">
          <Breadcrumb />
        </div>
        <div class="flex flex-wrap items-baseline gap-1">
          <p class="text-lg font-bold text-[#2EA965]">
            {{ hitSpecialStore.article?.headLineOfNew
            }}<span class="text-lg/6 font-medium text-[#4D4D4D]">{{
              hitSpecialStore.article?.title
            }}</span>
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
        <p class="text-xl font-semibold text-[#ADADAD]">{{ sidebarStore.selectedCategory }}</p>
        <div class="flex gap-4 flex-wrap text-white">
          <div
            v-for="(icon, index) in hitSpecialStore.icons"
            :key="index"
            class="flex items-center text-[#ADADAD] hover:text-gray-900 cursor-pointer"
          >
            <i :class="['text-lg', icon.name]"></i>
          </div>
        </div>
      </div>

      <div class="border-b border-dotted border-[#ADADAD]"></div>

      <div class="flex items-center justify-between text-sm text-[#ADADAD] font-semibold">
        <p>
          {{
            hitSpecialStore.article?.date
              ? hitSpecialStore.formatDate(hitSpecialStore.article.date)
              : ''
          }}
        </p>

        <p>By {{ hitSpecialStore.article?.author }}</p>
      </div>

      <div class="space-y-8">
        <img
          :src="hitSpecialStore.headLineImage"
          alt="Main News Image"
          class="w-full h-auto object-contain"
        />

        <p class="text-lg text-[#A3A3A3] leading-relaxed">
          {{ hitSpecialStore.article?.mainArticle }}
        </p>

        <div class="flex flex-col md:flex-row gap-6 items-start min-w-0 w-full">
          <img
            :src="hitSpecialStore.headLineSubImage"
            alt="Secondary Image"
            class="w-full md:w-1/3 h-auto object-contain"
          />
          <p class="text-lg text-[#A3A3A3] leading-relaxed w-full">
            {{ hitSpecialStore.article?.sideArticle }}
          </p>
        </div>

        <div>
          <p class="text-lg text-[#A3A3A3] leading-relaxed">
            {{ hitSpecialStore.article?.finalArticle }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useHitSpecialStore } from '@/stores/HitSpecialStore'
import DetailTopbar from '@/components/DetailTopbar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { useSidebarStore } from '@/stores/SidebarStore'

const sidebarStore = useSidebarStore()
const route = useRoute()
const hitSpecialStore = useHitSpecialStore()

onMounted(() => {
  hitSpecialStore.fetchArticleById(route.params.id)
})
</script>
