<template>
  <router-link :to="`/news/${article.id}`" class="block bg-white rounded-lg shadow hover:shadow-md">
    <div class="p-4 relative">
      <!-- Image positioned at top-right -->
      <div class="absolute top-4 right-4">
        <img
          src="../assets/images/Frame 18.svg"
          alt="Article Image"
          class="sm:w-18 md:w-18 lg:w-24 h-auto object-contain"
        />
      </div>

      <!-- Title -->
      <div class="pr-28"> <!-- padding-right to avoid overlap with image -->
        <h2 class="text-[#464646] mt-1 text-base sm:text-xs md:text-sm lg:text-xl font-semibold">
          {{ article.title }}
        </h2>
      </div>

      <!-- Category and Icons -->
      <div class="flex justify-between py-2">
        <div class="inline-block px-1 py-1 text-sm text-[#ADADAD]">
          {{ article.category }}
        </div>

        <div class="flex gap-[0.6rem] mt-1 px-1">
          <span
            v-for="icon in icons"
            :key="icon.name"
            :class="icon.name"
            class="text-xl text-[#ADADAD] hover:text-gray-900 cursor-pointer"
          />
        </div>
      </div>

      <!-- Author and Date -->
      <div class="text-sm text-gray-500 flex items-center justify-between gap-2 px-1">
        <span class="font-medium text-gray-700">By {{ article.author }}</span>
        <span class="text-gray-500">at {{ formatDate(article.date) }}</span>
      </div>
    </div>
  </router-link>
</template>



<script setup>
// Props
defineProps({ article: Object })

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
