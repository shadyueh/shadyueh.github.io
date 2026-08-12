<script setup lang="ts">
import TerminalWindow from './TerminalWindow.vue'
import { useI18n } from '../i18n/useI18n'

const { content, t } = useI18n()

function periodLabel(start: number, end: number | null): string {
  return `${start}–${end ?? t('experience.now')}`
}
</script>

<template>
  <section id="experience" class="scroll-mt-24 py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="mb-8 text-3xl font-bold text-heading">
        {{ t('experience.title') }}
      </h2>

      <div class="grid gap-6 lg:grid-cols-2">
        <TerminalWindow
          v-for="job in content.experience"
          :key="job.company"
          :title="`${job.company} · ${periodLabel(job.period.start, job.period.end)}`"
        >
          <h4 class="font-bold text-terminal-title">{{ job.role }}</h4>
          <p class="font-mono text-sm text-terminal-title">
            {{ job.location.city }} / {{ job.location.uf }}
          </p>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-terminal-text">
            <li v-for="(responsibility, index) in job.responsibilities" :key="index">
              {{ responsibility }}
            </li>
          </ul>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>
