<!-- <template>
  <div class="space-y-2 max-w-6xl mx-auto">
    <RouterLink >
      <FeaturedNews :article="newsList[0]" />
    </RouterLink>

    <div class="flex flex-col gap-4 w-full">
      <NewsCard v-for="article in newsList.slice(1)" :key="article.id" :article="article" />
    </div>
  </div>
</template> -->

<template>
  <div class="space-y-2 max-w-6xl mx-auto">
    <router-link :to="`/news/${newsList[0].id}`">
      <FeaturedNews :article="newsList[0]" />
    </router-link>

    <div class="flex flex-col gap-4 w-full">
      <router-link
        v-for="article in newsList.slice(1)"
        :key="article.id"
        :to="`/news/${article.id}`"
        class="block"
      >
        <NewsCard :article="article" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import FeaturedNews from '@/components/FeaturedNews.vue'
import NewsCard from '@/components/NewsCard.vue'
import newsList from '@/data/news.json'
</script>
