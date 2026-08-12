<script setup lang="ts">
import { profile, socials } from '../data/cv'
</script>

<template>
  <section
    id="top"
    class="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-night"
  >
    <img
      src="/background.jpg"
      alt="MacBook Pro"
      class="absolute inset-0 h-full w-full object-cover opacity-50"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-night/80 to-night"
    ></div>

    <div class="relative z-10 px-6 text-center text-white">
      <h1 class="text-5xl font-bold sm:text-6xl">{{ profile.name }}</h1>
      <p class="mt-4 font-mono text-xl text-accent">Software Developer</p>
      <p class="mt-2 text-on-night/80">
        {{ profile.location.city }} / {{ profile.location.uf }} -
        {{ profile.location.country }}
      </p>

      <div class="mt-8 flex justify-center gap-4">
        <a
          href="#contact"
          class="rounded-md bg-accent px-6 py-3 font-semibold text-night transition-colors hover:bg-white"
        >
          Contact
        </a>
        <a
          href="#about"
          class="rounded-md border border-on-night/60 px-6 py-3 font-semibold text-on-night transition-colors hover:bg-on-night/10"
        >
          About me
        </a>
      </div>

      <div class="mt-10 flex justify-center gap-6">
        <a
          v-if="socials.github"
          :href="socials.github"
          target="_blank"
          rel="noopener"
          class="text-on-night/80 transition-colors hover:text-accent"
        >
          GitHub
        </a>
        <a
          v-if="socials.linkedin"
          :href="socials.linkedin"
          target="_blank"
          rel="noopener"
          class="text-on-night/80 transition-colors hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          v-if="socials.twitter"
          :href="socials.twitter"
          target="_blank"
          rel="noopener"
          class="text-on-night/80 transition-colors hover:text-accent"
        >
          Twitter
        </a>
      </div>
    </div>
  </section>
</template>
