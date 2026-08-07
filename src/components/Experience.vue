<script setup lang="ts">
import { experience } from '../data/cv'
import TerminalWindow from './TerminalWindow.vue'

function periodLabel(start: number, end: number | null): string {
  return `${start}–${end ?? 'now'}`
}
</script>

<template>
  <section id="experience" class="scroll-mt-24 bg-gray-50 py-20 dark:bg-gray-900">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="mb-8 text-3xl font-bold text-primary dark:text-accent">
        Experience
      </h2>

      <div class="grid gap-6 lg:grid-cols-2">
        <TerminalWindow
          v-for="job in experience"
          :key="job.company"
          :title="`${job.company} · ${periodLabel(job.period.start, job.period.end)}`"
        >
          <h4 class="font-bold text-white">{{ job.role }}</h4>
          <p class="font-mono text-sm text-gray-400">
            {{ job.location.city }} / {{ job.location.uf }}
          </p>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-gray-300">
            <li v-for="(responsibility, index) in job.responsibilities" :key="index">
              {{ responsibility }}
            </li>
          </ul>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>
