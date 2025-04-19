<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Methods to navigate between home and shorts
const goToHome = () => {
  router.push({ name: 'newsfeed' })
}

const goToShorts = () => {
  router.push({ name: 'shorts' })
}
</script>

<template>
  <div
    class="flex whitespace-nowrap p-2 space-x-4 overflow-x-auto bg-[#FFFFFF] rounded-full lg:hidden justify-center fixed bottom-0 left-10 right-14 z-50"
  >
    <button class="flex items-center space-x-2" @click="goToHome">
      <img src="../assets/images/home 1.svg" class="w-8 h-8" />
      <span>होम</span>
    </button>
    <div class="bg-black bg-opacity-10 p-[0.5px] h-8"></div>
    <button class="flex items-center space-x-2" @click="goToShorts">
      <img src="../assets/images/reels 1.svg" class="w-8 h-8" />
      <span>शॉर्ट्स</span>
    </button>
  </div>
</template>
