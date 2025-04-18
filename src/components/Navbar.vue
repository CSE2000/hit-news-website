<script setup>
const categories = [
  { icon: '../assets/images/fire.svg', label: 'टॉप न्यूज़' },
  { icon: '../assets/images/rajya-sahar 1.svg', label: 'राज्य - शहर' },
  { icon: '../assets/images/entertainment 1.svg', label: 'एंटरटेनमेंट' },
  { icon: '../assets/images/bollywood 1.svg', label: 'बॉलीवुड' },
  { icon: '../assets/images/sports 1.svg', label: 'स्पोर्ट्स' },
  { icon: '../assets/images/international 1.svg', label: 'इंटरनेशनल' },
  { icon: '../assets/images/receipe 1.svg', label: 'रेसिपी' },
]
</script>

<template>
  <nav class="block lg:hidden sticky top-0 z-0">
    <div class="flex items-center justify-between px-4 py-2 w-full">
      <div class="w-28 h-20 sm:w-34 sm:h-26 md:w-36 md:h-28 lg:w-40 lg:h-32">
        <img src="../assets/logo.png" class="w-full h-full object-contain" />
      </div>

      <div
        class="flex items-center gap-2 px-3 py-2 bg-[#F6F6F6] border rounded-full w-fit sm:w-[180px] md:w-[190px] lg:w-[180px]"
      >
        <img
          src="../assets/images/logos_whatsapp-icon.svg"
          alt="WhatsApp"
          class="w-6 h-6 sm:w-4 sm:h-4"
        />
        <span class="text-xs sm:text-sm md:text-base font-medium text-[#4D4D4D] whitespace-nowrap">
          Join Our Group
        </span>
      </div>
    </div>

    <div class="flex whitespace-nowrap w-full px-4 space-x-8 overflow-x-auto">
      <button
        v-for="(cat, index) in categories"
        :key="index"
        class="flex items-center space-x-2"
      >
        <img :src="cat.icon" class="w-5 h-5" />
        <span>{{ cat.label }}</span>
      </button>
    </div>
  </nav>
</template>
