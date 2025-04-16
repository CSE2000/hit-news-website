<script setup>
import { RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import Shorts from "@/components/Shorts.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <main class="flex flex-col xl:flex-row items-center">
    <Sidebar />
    <div class="xl:hidden w-full sticky top-0 bg-white">
        <Navbar />
    </div>

    <div class="w-full">
      <RouterView />
    </div>

    <Shorts />
  </main>
</template>
