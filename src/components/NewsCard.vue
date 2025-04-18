<template>
  <router-link :to="`/news/${article.id}`" class="block bg-white rounded-lg shadow hover:shadow-md">
    <div class="p-4">
      <div class="flex justify-between items-center px-1">
        <h2 class="text-[#464646] mt-1 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
          {{ article.title }}
        </h2>
        <img
          src="../assets/images/Frame 18.svg"
          alt="#articleImage"
          class="w-full sm:w-16 md:w-20"
        />
      </div>
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
      <div class="text-sm text-gray-500 flex items-center justify-between gap-2 px-1">
        <span class="font-medium text-gray-700">By {{ article.author }}</span>
        <span class="text-gray-500">at {{ formatDate(article.date) }}</span>
      </div>
    </div>
  </router-link>
</template>

<!-- <template>
  <router-link
    :to="`/news/${article.id}`"
    class="block bg-white rounded-lg shadow hover:shadow-md transition-all duration-300"
  >
    <div class="p-4 flex items-start gap-4">

      <div class="flex-1 space-y-2">
        <h2 class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800">
          {{ article.title }}
        </h2>

        <div class="flex justify-between items-center flex-wrap gap-y-2">
          <div class="inline-block px-3 py-1 text-xs sm:text-sm text-[#ADADAD] w-max">
            {{ article.category }}
          </div>

          <div class="flex gap-[0.8rem]">
            <span
              v-for="icon in icons"
              :key="icon.name"
              :class="icon.name"
              class="text-base sm:text-lg text-[#ADADAD] cursor-pointer"
            />
          </div>
        </div>

        <div
          class="text-xs sm:text-sm md:text-base text-gray-500 flex justify-between gap-2 flex-wrap"
        >
          <span class="font-medium text-gray-700">By {{ article.author }}</span>
          <span class="text-gray-500">at {{ formatDate(article.date) }}</span>
        </div>
      </div>

      <img
        src="../assets/images/Frame 18.svg"
        alt="#articleImage"
        class="w-12 sm:w-14 md:w-16 lg:w-20 object-contain"
      />
    </div>
  </router-link>
</template> -->

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
