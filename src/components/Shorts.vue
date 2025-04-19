<template>
  <div class="relative w-full h-screen md:h-[500px] rounded-lg overflow-hidden">
    <!-- Background Image -->
    <img
      src="../assets/Rectangle4.png"
      class="absolute inset-0 w-full h-full object-cover"
      alt="Shorts Background"
    />

    <!-- Top labels -->
    <div class="absolute top-0 left-0 right-0 hidden sm:flex justify-between items-start p-4">
      <div
        class="font-bold bg-[linear-gradient(90deg,_#E6000E_0%,_#F92323_100%)] px-3 py-1 rounded-md text-white"
      >
        वीडियो
      </div>
      <div class="text-white font-bold bg-[#343333] px-3 py-1 rounded-md">और देखे</div>
    </div>

    <!-- (Mobile only) -->
    <div
      v-if="article"
      class="absolute bottom-14 left-0 right-0 px-2 sm:px:4 text-white bg-black/40 backdrop-blur-sm py-1 sm:py-2 md:hidden"
    >
      <p class="text-base sm:text-lg font-bold">
        {{ article.headLineOfNew }}
      </p>
      <p class="text-sm sm:text-base font-medium text-gray-100">
        {{ article.title }}
      </p>
    </div>

    <!-- Bottom Center Button (Mobile only) -->
    <div class="fixed bottom-12 left-0 right-0 z-50 bg-white block lg:hidden">
      <Button />
    </div>
  </div>

  <!-- Footer (Desktop only) -->
  <div class="p-4 text-xs text-[#ADADAD] text-center hidden md:block">
    © 2023 thehit.in | All Rights Reserved <br />
    This website follows the DNP Code of Ethics.
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import newsList from '@/data/news.json'
import Button from './Button.vue'

const article = ref(null)

// Load sample news
onMounted(() => {
  article.value = newsList.find((item) => item.id === 1)
})
</script>
