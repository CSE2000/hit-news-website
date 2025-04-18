<script setup>
const emit = defineEmits(['select-category'])

const categories = [
  { label: 'टॉप न्यूज़', icon: 'fire.svg' },
  { label: 'राज्य - शहर', icon: 'rajya-sahar 1.svg' },
  { label: 'एंटरटेनमेंट', icon: 'entertainment 1.svg' },
  { label: 'बॉलीवुड', icon: 'bollywood 1.svg' },
  { label: 'स्पोर्ट्स', icon: 'sports 1.svg' },
  { label: 'इंटरनेशनल', icon: 'international 1.svg' },
  { label: 'रेसिपी', icon: 'receipe 1.svg' },
]

// Emits selected category
const handleClick = (label) => {
  emit('select-category', label)
}

// Dynamically resolve the image path
const getImageUrl = (filename) => new URL(`../assets/images/${filename}`, import.meta.url).href
</script>

<template>
  <nav
    class="hidden md:block h-screen border-r border-black border-opacity-20 p-3 space-y-8 min-w-[180px] md:min-w-[210px] lg:min-w-[220px] md:pl-4"
  >
    <div class="h-[50px] w-full m-6 text-center">
      <img src="../assets/logo.png" alt="logo" class="h-8" />
    </div>
    <div class="flex flex-col items-start space-y-6">
      <button
        v-for="category in categories"
        :key="category.label"
        @click="handleClick(category.label)"
        class="flex items-center space-x-2 text-sm sm:text-base hover:bg-gray-200 rounded-md p-2 w-full"
      >
        <img :src="getImageUrl(category.icon)" alt="category icon" class="w-5 h-5" />
        <span>{{ category.label }}</span>
      </button>
    </div>
  </nav>
</template>