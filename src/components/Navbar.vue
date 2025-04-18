<script setup>
// Import icons and images correctly using dynamic URL (Vite-compatible)
const categories = [
  { icon: new URL('@/assets/images/fire.svg', import.meta.url).href, label: 'टॉप न्यूज़' },
  { icon: new URL('@/assets/images/rajya-sahar 1.svg', import.meta.url).href, label: 'राज्य - शहर' },
  { icon: new URL('@/assets/images/entertainment 1.svg', import.meta.url).href, label: 'एंटरटेनमेंट' },
  { icon: new URL('@/assets/images/bollywood 1.svg', import.meta.url).href, label: 'बॉलीवुड' },
  { icon: new URL('@/assets/images/sports 1.svg', import.meta.url).href, label: 'स्पोर्ट्स' },
  { icon: new URL('@/assets/images/international 1.svg', import.meta.url).href, label: 'इंटरनेशनल' },
  { icon: new URL('@/assets/images/receipe 1.svg', import.meta.url).href, label: 'रेसिपी' },
]

const logo = new URL('@/assets/logo.png', import.meta.url).href
const whatsappIcon = new URL('@/assets/images/logos_whatsapp-icon.svg', import.meta.url).href
</script>

<template>
  <nav class="block lg:hidden sticky top-0 z-20 bg-white shadow-sm">
    <!-- Top Logo + WhatsApp Banner -->
    <div class="flex items-center justify-between px-4 py-2 w-full">
      <div class="w-28 h-20 sm:w-34 sm:h-26 md:w-36 md:h-28 lg:w-40 lg:h-32">
        <img :src="logo" class="w-full h-full object-contain" />
      </div>

      <div
        class="flex items-center gap-2 px-3 py-2 bg-[#F6F6F6] border rounded-full w-fit sm:w-[180px] md:w-[190px] lg:w-[180px]"
      >
        <img
          :src="whatsappIcon"
          alt="WhatsApp"
          class="w-6 h-6 sm:w-4 sm:h-4"
        />
        <span class="text-xs sm:text-sm md:text-base font-medium text-[#4D4D4D] whitespace-nowrap">
          Join Our Group
        </span>
      </div>
    </div>

    <!-- Category Buttons Scroll -->
    <div class="flex whitespace-nowrap w-full px-4 space-x-8 overflow-x-auto pb-2">
      <button
        v-for="(cat, index) in categories"
        :key="index"
        class="flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-600"
      >
        <img :src="cat.icon" class="w-5 h-5" />
        <span>{{ cat.label }}</span>
      </button>
    </div>
  </nav>
</template>