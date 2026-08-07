<script setup lang="ts">
import { skills } from '../data/cv'
</script>

<template>
  <section id="skills" class="scroll-mt-24 bg-gray-50 py-20 dark:bg-gray-900">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="mb-8 text-3xl font-bold text-primary dark:text-accent">
        Skills
      </h2>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="skill in skills"
          :key="skill"
          class="rounded-full bg-accent/40 px-4 py-2 font-mono text-sm font-medium text-secondary dark:text-accent"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>
