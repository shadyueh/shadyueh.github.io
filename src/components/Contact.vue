<script setup lang="ts">
import { profile, socials } from '../data/cv'
</script>

<template>
  <section id="contact" class="scroll-mt-24 py-20">
    <div class="mx-auto max-w-6xl px-4 text-center sm:px-6">
      <h2 class="mb-4 text-3xl font-bold text-primary dark:text-accent">
        Contact
      </h2>
      <p class="mb-8 text-gray-700 dark:text-gray-300">
        Interested in working together? Let's talk.
      </p>

      <a
        :href="`mailto:${profile.email}`"
        class="inline-block rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:opacity-90"
      >
        {{ profile.email }}
      </a>

      <div class="mt-8 flex justify-center gap-6">
        <a
          v-if="socials.github"
          :href="socials.github"
          target="_blank"
          rel="noopener"
          class="font-medium text-gray-600 transition-colors hover:text-secondary dark:text-gray-300 dark:hover:text-accent"
        >
          GitHub
        </a>
        <a
          v-if="socials.linkedin"
          :href="socials.linkedin"
          target="_blank"
          rel="noopener"
          class="font-medium text-gray-600 transition-colors hover:text-secondary dark:text-gray-300 dark:hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          v-if="socials.twitter"
          :href="socials.twitter"
          target="_blank"
          rel="noopener"
          class="font-medium text-gray-600 transition-colors hover:text-secondary dark:text-gray-300 dark:hover:text-accent"
        >
          Twitter
        </a>
      </div>
    </div>
  </section>
</template>
