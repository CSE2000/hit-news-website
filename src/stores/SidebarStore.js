import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const selectedCategory = ref('टॉप न्यूज़')
  const whatsappText = 'Join Our Group'
  const categories = [
    { label: 'टॉप न्यूज़', icon: 'fire.svg' },
    { label: 'राज्य - शहर', icon: 'rajya-sahar 1.svg' },
    { label: 'एंटरटेनमेंट', icon: 'entertainment 1.svg' },
    { label: 'बॉलीवुड', icon: 'bollywood 1.svg' },
    { label: 'स्पोर्ट्स', icon: 'sports 1.svg' },
    { label: 'इंटरनेशनल', icon: 'international 1.svg' },
    { label: 'रेसिपी', icon: 'receipe 1.svg' },
  ]

  const setCategory = (label) => {
    selectedCategory.value = label
  }

  const getImageUrl = (filename) => new URL(`../assets/images/${filename}`, import.meta.url).href
  const logoUrl = new URL('../assets/logo.png', import.meta.url).href

  //For Navbar
  const whatsappIcon = new URL('../assets/images/logos_whatsapp-icon.svg', import.meta.url).href

  return {
    categories,
    selectedCategory,
    setCategory,
    getImageUrl,
    logoUrl,
    whatsappIcon,
    whatsappText,
  }
})
