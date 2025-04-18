<template>
  <router-link
    :to="`/news/${article.id}`"
    class="block bg-white rounded-xl overflow-hidden shadow-lg"
  >
    <!-- Content Section -->
    <div class="p-2">
      <div class="flex flex-wrap items-baseline gap-1">
        <p class="text-lg font-bold text-[#2EA965] whitespace-nowrap">
          {{ article?.headLineOfNew }}
        </p>
        <span class="text-lg font-medium text-[#4D4D4D]">{{ article?.title }}</span>
      </div>
    </div>

    <!-- Author & Date -->
    <div class="text-sm text-gray-500 flex items-center justify-between gap-2 p-2">
      <span class="font-medium text-[#4D4D4D]">By {{ article.author }}</span>
      <span class="text-[#4D4D4D]">{{ formatDate(article.date) }}</span>
    </div>

    <!-- Article images -->
    <img src="../assets/images/Rectangle 2.svg" alt="Main News Image" class="w-full h-auto" />

    <!-- Category -->
    <div class="flex justify-between p-2">
      <div class="inline-block px-3 py-1 text-sm text-[#ADADAD] w-max">
        {{ article.category }}
      </div>

      <!-- Share Icons -->
      <div class="flex gap-4 mt-2 mr-2">
        <span
          v-for="icon in icons"
          :key="icon.name"
          :class="icon.name"
          class="text-xl text-[#ADADAD] hover:text-gray-900 cursor-pointer"
        />
      </div>
    </div>
  </router-link>
</template>

<script setup>
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
