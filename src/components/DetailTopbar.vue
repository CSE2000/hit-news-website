<script setup>
const icons = [{ name: 'pi pi-whatsapp' }, { name: 'pi pi-facebook' }, { name: 'pi pi-link' }]
const backIcon = { name: 'pi pi-arrow-left' }
</script>

<template>
  <div class="flex items-center justify-between mt-2 mr-2">
    <span
      :class="backIcon.name"
      class="text-xl text-[#ADADAD] hover:text-gray-900 cursor-pointer"
    />
    <div class="flex gap-4">
      <span
        v-for="icon in icons"
        :key="icon.name"
        :class="icon.name"
        class="text-xl text-[#ADADAD] hover:text-gray-900 cursor-pointer"
      />
    </div>
  </div>
</template>
