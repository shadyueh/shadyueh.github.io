<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { useTheme } from './composables/useTheme'
import { useI18n } from './i18n/useI18n'

const { init: initTheme } = useTheme()
const { init: initI18n } = useI18n()

onMounted(() => {
  initTheme()
  initI18n()
})
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
