<script setup>
import { ref, onMounted } from 'vue'
import Button from './Button.vue'
import newsList from '@/data/news.json'
const article = ref(null)

// Get the article with id: 1
onMounted(() => {
  article.value = newsList.find((item) => item.id === 1)
})
</script>

<template>
  <!-- <main class="relative border-l p-4 h-screen min-w-[350px] hidden xl:block"> -->
  <main
    class="relative border-l p-4 h-screen hidden md:block w-full md:w-[32%] lg:w-[26%] xl:w-[24%] 2xl:w-[22%] min-w-[280px] md:min-w-[300px] lg:min-w-[350px]"
  >
    <div class="relative w-full rounded-lg overflow-hidden">
      <!-- Background image -->
      <img
        src="../assets/Rectangle4.png"
        class="w-full h-auto rounded-lg object-cover"
        alt="Shorts Background"
      />

      <!-- Button Row -->
      <div class="absolute top-0 left-0 right-0 hidden sm:flex justify-between items-start p-4">
        <button
          class="font-bold bg-[linear-gradient(90deg,_#E6000E_0%,_#F92323_100%)] px-3 py-1 rounded-md text-white"
        >
          वीडियो
        </button>
        <button class="text-white font-bold bg-[#343333] px-3 py-1 rounded-md">और देखे</button>
      </div>

      <!-- 🟡 Your headline text over the image -->
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

    <div class="absolute bottom-12 left-0 right-0 flex justify-center">
      <Button />
    </div>

    <div class="p-4 text-xs text-[#ADADAD] text-center">
      © 2023 thehit.in | All Rights Reserved <br />
      This website follows the DNP Code of Ethics.
    </div>
  </main>
</template>
