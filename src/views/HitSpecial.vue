<template>
  <div class="space-y-2 max-w-6xl mx-auto">
    <nav class="flex flex-wrap gap-2 p-2">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="text-[#ADADAD] text-xs font-medium flex items-center gap-1"
      >
        <i v-if="link.icons" :class="`pi ${link.icons}`"></i>
        {{ link.label }}
      </a>
    </nav>

    <div class="p-2">
      <div class="flex flex-wrap items-baseline gap-1">
        <p class="text-lg font-bold text-[#2EA965] whitespace-nowrap">
          {{ article?.headLineOfNew }}
        </p>
        <span class="text-lg font-medium text-[#4D4D4D]">{{ article?.title }}</span>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
      <p class="text-xl font-semibold text-[#ADADAD]">{{ article?.category }}</p>
      <div class="flex gap-4 flex-wrap text-white">
        <div v-for="(icon, index) in icons" :key="index" class="flex items-center text-[#ADADAD]">
          <i :class="icon.name" class="text-lg"></i>
        </div>
      </div>
    </div>

    <div class="border-b border-dotted border-[#ADADAD]"></div>

    <div class="flex items-center justify-between text-sm text-[#ADADAD] font-semibold">
      <p>{{ formatDate(article?.date) }}</p>
      <p>By {{ article?.author }}</p>
    </div>

    <div class="space-y-6">
      <!-- Article images -->
      <img src="../assets/images/Rectangle 2.svg" alt="Main News Image" class="w-full h-auto" />

      <p class="text-lg text-[#A3A3A3] leading-relaxed">{{ article?.mainArticle }}</p>

      <div class="flex flex-col md:flex-row gap-6 items-start">
        <img
          src="../assets/images/Rectangle 3.svg"
          alt="Secondary Image"
          class="w-full md:w-1/3 h-auto"
        />
        <p class="text-lg text-[#A3A3A3] leading-relaxed">{{ article?.sideArticle }}</p>
      </div>

      <div>
        <p class="text-lg text-[#A3A3A3] leading-relaxed">{{ article?.finalArticle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import newsList from '@/data/news.json'

const route = useRoute()
const article = ref(null)

onMounted(() => {
  const id = parseInt(route.params.id)
  article.value = newsList.find((item) => item.id === id)
})

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'News', icons: 'pi-angle-right', href: '#news' },
  { label: 'Details in News', icons: 'pi-angle-right', href: '#Newsindetail' },
]

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

<!-- <template>
  <div class="space-y-2 max-w-6xl mx-auto">
    <nav class="flex flex-wrap gap-2 p-2">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="text-[#ADADAD] text-xs font-medium"
      >
        {{ link.label }}
      </a>
    </nav>

    <div class="p-2">
      <div class="flex flex-wrap items-baseline gap-1">
        <p class="text-lg font-bold text-[#2EA965] whitespace-nowrap">
          {{ headingTitle }}
        </p>
        <span class="text-lg font-medium text-[#4D4D4D]">
          {{ highlightNews }}
        </span>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
      <p class="text-xl font-semibold text-[#ADADAD]">{{ sectionTitle }}</p>
      <div class="flex gap-4 flex-wrap text-white">
        <div v-for="(icon, index) in icons" :key="index" class="flex items-center text-[#ADADAD]">
          <i :class="icon.name" class="text-lg"></i>
          <span>{{ icon.label }}</span>
        </div>
      </div>
    </div>

    <div class="border-b border-dotted border-[#ADADAD]"></div>

    <div class="flex items-center justify-between space-x-2 text-sm text-[#ADADAD] font-semibold">
      <p>{{ date }}</p>
      <p>By {{ author }}</p>
    </div>

    <div class="space-y-6">
      <img src="../assets/images/Rectangle 2.svg" alt="Main News Image" class="w-full h-auto" />

      <p class="text-lg text-[#A3A3A3] leading-relaxed">
        {{ mainArticle }}
      </p>

      <div class="flex flex-col md:flex-row gap-6 items-start">
        <img
          src="../assets/images/Rectangle 3.svg"
          alt="Secondary Image"
          class="w-full md:w-1/3 h-auto"
        />
        <p class="text-lg text-[#A3A3A3] leading-relaxed">
          {{ sideArticle }}
        </p>
      </div>

      <div>
        <p class="text-lg text-[#A3A3A3] leading-relaxed">
          {{ finalArticle }}
        </p>
      </div>
    </div>
  </div>
</template> -->
<!-- 
<script setup>
import { useRoute } from 'vue-router'
import newsList from '@/data/news.json'

const route = useRoute()
const article = newsList.find((item) => item.id === parseInt(route.params.id))
const navLinks = [
  { label: 'Home >', href: '#home' },
  { label: 'News >', href: '#news' },
  { label: 'Details of News', href: '#detailinNews' },
]

const icons = [{ name: 'pi pi-whatsapp' }, { name: 'pi pi-facebook' }, { name: 'pi pi-link' }]

const headingTitle = 'The Hit Special:'
const sectionTitle = 'बॉलीवुड'

const highlightNews =
  'कश्मीर कब्जाने चले पाकिस्तान से छिन जाता लाहौर: आज ही लॉन्च हुआ था ऑपरेशन जिब्राल्टर, जिसने छेड़ी 1965 की जंग'

const date = 'Apr 18, 2023, 08:29 IST'
const author = 'XYZ'

const mainArticle =
  'लेखन एक कला है और ये कला किसी भी भाषा में क्यों न हो विचार और लफ्ज़ो का सटीक इस्तमाल महत्व रखता है। अगर आप इस कला को समझते हैं, तो आप भी कंटेंट राइटर बन सकते हैं। डिजिटल युग के साथ-साथ कंटेंट्स राइटर्स की मांग भी बढ़ रही है, क्योंकि आज के समय में इंटरनेट मार्केटिंग के माध्यम से ही लोग अपने व्यापार और अपनी कला का ऑनलाइन प्रमोशन करते हैं। यह सब करने के लिए आपका लिखा हुआ कंटेंट बहुत महत्वपूर्ण भूमिका निभाता है। जिसको निभाता है एक कंटेंट राइटर। जैसा कि हमने बात की के लेखन की कला किसी भी भाषा में हो लेकिन शब्दों का इस्तमाल सही जगह पर होना आवश्यक है जिसमें और भी कई फैक्टर्स आ जाते हैं। तो इस ब्लॉग में मूलतः हम हिंदी भाषी लेखन की बात करेंगे। तो अगर आप एक हिंदी कंटेंट राइटर बनना चाहतें है तो ये ब्लॉग आपके लिए है। हमारा यह ब्लॉग आपके सपनों को पूरा करने में अवश्य मददगार साबित होग ा'

const sideArticle =
  'लेखन एक कला है और ये कला किसी भी भाषा में क्यों न हो विचार और लफ्ज़ो का सटीक इस्तमाल महत्व रखता है। अगर आप इस कला को समझते हैं, तो आप भी कंटेंट राइटर बन सकते हैं। डिजिटल युग के साथ-साथ कंटेंट्स राइटर्स की मांग भी बढ़ रही है, क्योंकि आज के समय में इंटरनेट मार्केटिंग के माध्यम से ही लोग अपने व्यापार और अपनी कला का ऑनलाइन प्रमोशन करते हैं। यह सब करने के लिए आपका लिखा हुआ कंटेंट बहुत महत्वपूर्ण भूमिका निभाता है।'

const finalArticle =
  'लेखन एक कला है और ये कला किसी भी भाषा में क्यों न हो विचार और लफ्ज़ो का सटीक इस्तमाल महत्व रखता है। अगर आप इस कला को समझते हैं, तो आप भी कंटेंट राइटर बन सकते हैं। डिजिटल युग के साथ-साथ कंटेंट्स राइटर्स की मांग भी बढ़ रही है, क्योंकि आज के समय में इंटरनेट मार्केटिंग के माध्यम से ही लोग अपने व्यापार और अपनी कला का ऑनलाइन प्रमोशन करते हैं। यह सब करने के लिए आपका लिखा हुआ कंटेंट बहुत महत्वपूर्ण भूमिका निभाता है। जिसको निभाता है एक कंटेंट राइटर। जैसा कि हमने बात की के लेखन की कला किसी भी भाषा में हो लेकिन शब्दों का इस्तमाल सही जगह पर होना आवश्यक है जिसमें और भी कई फैक्टर्स आ जाते हैं। तो इस ब्लॉग में मूलतः हम हिंदी भाषी लेखन की बात करेंगे। तो अगर आप एक हिंदी कंटेंट राइटर बनना चाहतें है तो ये ब्लॉग आपके लिए'
</script> -->
