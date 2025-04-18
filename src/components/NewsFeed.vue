<template>
  <!-- <div class="relative space-y-2 mx-auto"> -->
  <div class="relative space-y-2 mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
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
    <div class="absolute top-30 right-1 left-0 bottom-1 flex justify-center items-center p-4">
      <Button />
    </div>
  </div>
</template>

<script setup>
import FeaturedNews from '@/components/FeaturedNews.vue'
import NewsCard from '@/components/NewsCard.vue'
import newsList from '@/data/news.json'
import Button from './Button.vue'
</script>
