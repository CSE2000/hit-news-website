<template>
  <div
    class="flex whitespace-nowrap p-2 space-x-4 overflow-x-auto bg-[#e4dddd] rounded-full md:hidden justify-center"
  >
    <button class="flex items-center space-x-2" @click="$emit('select', 'home')">
      <img src="../assets/images/home 1.svg" class="w-8 h-8" />
      <span>होम</span>
    </button>
    <div class="bg-black bg-opacity-10 p-[0.5px] h-8"></div>
    <button class="flex items-center space-x-2" @click="$emit('select', 'shorts')">
      <img src="../assets/images/reels 1.svg" class="w-8 h-8" />
      <span>शॉर्ट्स</span>
    </button>
  </div>
</template>
