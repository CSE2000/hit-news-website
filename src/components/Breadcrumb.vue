<!-- src/components/Breadcrumb.vue -->
<template>
  <nav class="flex flex-wrap items-center gap-1 text-xs p-2 text-[#ADADAD]">
    <template v-for="(crumb, index) in breadcrumbs" :key="index">
      <router-link
        v-if="index !== breadcrumbs.length - 1"
        :to="crumb.href"
        class="hover:text-gray-900 font-medium flex items-center gap-1"
      >
        {{ crumb.label }}
        <i v-if="crumb.icon" :class="`pi ${crumb.icon}`"></i>
      </router-link>

      <span v-else class="text-gray-900 font-semibold flex items-center gap-1">
        {{ crumb.label }}
      </span>
    </template>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const breadcrumbs = computed(() => {
  return [
    { label: 'Home', href: '/', icon: 'pi-angle-right' },
    { label: 'News', href: '/news', icon: 'pi-angle-right' },
    {
      label: 'Details of News',
      href: route.fullPath,
    },
  ]
})
</script>
