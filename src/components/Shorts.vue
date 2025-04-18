
<template>
  <div class="relative w-full rounded-lg overflow-hidden">
    <img
      src="../assets/Rectangle4.png"
      class="w-full h-auto rounded-lg object-cover md:max-w-[90%] md:mx-auto"
      alt="Shorts Background"
    />

    <div class="absolute top-0 left-0 right-0 hidden sm:flex justify-between items-start p-4">
      <div
        class="font-bold bg-[linear-gradient(90deg,_#E6000E_0%,_#F92323_100%)] px-3 py-1 rounded-md text-white"
      >
        वीडियो
      </div>
      <div class="text-white font-bold bg-[#343333] px-3 py-1 rounded-md">और देखे</div>
    </div>

    <!-- Your headline text over the image -->
    <div
      v-if="article"
      class="absolute bottom-2 left-0 right-0 px-2 sm:px:4 text-white bg-black/40 backdrop-blur-sm py-1 sm:py-2 md:hidden"
    >
      <p class="text-base sm:text-lg font-bold">
        {{ article.headLineOfNew }}
      </p>
      <p class="text-sm sm:text-base font-medium text-gray-100">
        {{ article.title }}
      </p>
    </div>
  </div>
  <div class="p-4 text-xs text-[#ADADAD] text-center hidden md:block">
    © 2023 thehit.in | All Rights Reserved <br />
    This website follows the DNP Code of Ethics.
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import newsList from '@/data/news.json'

const article = ref(null)
const currentView = ref('home')

onMounted(() => {
  article.value = newsList.find((item) => item.id === 1)
})
</script>
