<template>
  <div class="relative h-screen">
    <!-- Fixed DetailTopbar (visible only on mobile) -->
    <div class="fixed top-0 left-0 right-0 z-50 block lg:hidden bg-white shadow-md">
      <DetailTopbar />
    </div>

    <!-- Content section, with top padding to avoid hiding under fixed topbar -->
    <div
      class="space-y-2 mx-auto max-w-screen-xl w-full overflow-x-hidden px-2 md:px-4 lg:px-8 xl:px-12 pt-4 mt-[30px]  "
    >
      <!-- Breadcrumb Nav -->
      <nav class="flex flex-wrap gap-2 p-2">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-[#ADADAD] text-xs font-medium flex items-center gap-1 hover:text-gray-900 cursor-pointer transition-all duration-300 ease-in-out sm:hidden"
        >
          <i v-if="link.icons" :class="`pi ${link.icons}`"></i>
          {{ link.label }}
        </a>
      </nav>

      <!-- Headline and Title -->
      <div class="p-2">
        <div class="flex flex-wrap items-baseline gap-1">
          <p class="text-lg font-bold text-[#2EA965] whitespace-nowrap">
            {{ article?.headLineOfNew }}
          </p>
          <span class="text-lg font-medium text-[#4D4D4D]">{{ article?.title }}</span>
        </div>
      </div>

      <!-- Category & Share Icons -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
        <p class="text-xl font-semibold text-[#ADADAD]">{{ article?.category }}</p>
        <div class="flex gap-4 flex-wrap text-white">
          <div
            v-for="(icon, index) in icons"
            :key="index"
            class="flex items-center text-[#ADADAD] hover:text-gray-900 cursor-pointer"
          >
            <i :class="icon.name" class="text-lg"></i>
          </div>
        </div>
      </div>

      <!-- Dotted Divider -->
      <div class="border-b border-dotted border-[#ADADAD]"></div>

      <!-- Date and Author -->
      <div class="flex items-center justify-between text-sm text-[#ADADAD] font-semibold">
        <p>{{ formatDate(article?.date) }}</p>
        <p>By {{ article?.author }}</p>
      </div>

      <!-- Article Content -->
      <div class="space-y-6">
        <img
          src="../assets/images/Rectangle 2.svg"
          alt="Main News Image"
          class="w-full h-auto object-contain"
        />

        <p class="text-lg text-[#A3A3A3] leading-relaxed">{{ article?.mainArticle }}</p>

        <div class="flex flex-col md:flex-row gap-6 items-start min-w-0 w-full">
          <img
            src="../assets/images/Rectangle 3.svg"
            alt="Secondary Image"
            class="w-full md:w-1/3 h-auto object-contain"
          />
          <p class="text-lg text-[#A3A3A3] leading-relaxed w-full">{{ article?.sideArticle }}</p>
        </div>

        <div>
          <p class="text-lg text-[#A3A3A3] leading-relaxed">{{ article?.finalArticle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import newsList from '@/data/news.json'
import DetailTopbar from '@/components/DetailTopbar.vue'

const route = useRoute()
const article = ref(null)

onMounted(() => {
  const id = parseInt(route.params.id)
  article.value = newsList.find((item) => item.id === id)
})

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'News', icons: 'pi-angle-right', href: '#news' },
  { label: 'Details in News', icons: 'pi-angle-right', href: '#Newsindetail' },
]

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

const icons = [{ name: 'pi pi-whatsapp' }, { name: 'pi pi-facebook' }, { name: 'pi pi-link' }]
</script>
