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

const { init } = useTheme()

onMounted(init)
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
