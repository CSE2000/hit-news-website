<template>
  <router-link :to="`/news/${article.id}`" class="block bg-white rounded-lg shadow hover:shadow-md">
    <div class="p-4">
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold text-gray-800 mt-1">{{ article.title }}</h2>
        <img src="../assets/images/Frame 18.svg" alt="#articleImage" />
      </div>
      <!-- Category -->
      <div class="flex justify-between py-2">
        <div class="inline-block px-3 py-1 text-sm text-[#ADADAD] rounded-full w-max">
          {{ article.category }}
        </div>

        <!-- Share Icons -->
        <div class="flex gap-[0.8rem] mt-1 mr-2">
          <span
            v-for="icon in icons"
            :key="icon.name"
            :class="icon.name"
            class="text-xl text-gray-600 hover:text-gray-900 cursor-pointer"
          />
        </div>
      </div>
      <!-- Author & Date -->
      <div class="text-sm text-gray-500 flex items-center justify-between gap-2">
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

// PrimeVue icon names
const icons = [{ name: 'pi pi-whatsapp' }, { name: 'pi pi-facebook' }, { name: 'pi pi-link' }]
</script>
