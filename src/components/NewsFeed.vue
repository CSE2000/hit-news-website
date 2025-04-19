<script setup>
import FeaturedNews from '@/components/FeaturedNews.vue'
import NewsCard from '@/components/NewsCard.vue'
import Navbar from './Navbar.vue'
import newsList from '@/data/news.json'
import Button from './Button.vue'
</script>

<template>
  <div class="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
    <Navbar />
  </div>
  <div class="relative space-y-2 mt-20 md:mt-0 mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
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
    <div class="fixed bottom-0 left-0 right-0 z-50 bg-white block lg:hidden">
      <Button />
    </div>
  </div>
</template>
