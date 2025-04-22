import { defineStore } from 'pinia'

export const useFeaturedNewsStore = defineStore('featuredNews', () => {
  const icons = [{ name: 'pi pi-whatsapp' }, { name: 'pi pi-facebook' }, { name: 'pi pi-link' }]

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleTimeString('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }

  const topImage = new URL('../assets/images/Rectangle 2.svg', import.meta.url).href

  return {
    icons,
    formatDate,
    topImage,
  }
})
