<script setup lang="ts">
import TerminalWindow from './TerminalWindow.vue'
import { useI18n } from '../i18n/useI18n'
import { useReveal } from '../composables/useReveal'
import { ref } from 'vue'

const { content, t } = useI18n()
const revealTarget = ref<HTMLElement | null>(null)
useReveal(revealTarget)
</script>

<template>
  <section
    ref="revealTarget"
    id="education"
    class="reveal scroll-mt-24 bg-surface py-20"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="mb-8 text-3xl font-bold text-heading">
        {{ t('education.title') }}
      </h2>

      <div class="max-w-2xl">
        <TerminalWindow title="education.ts">
          <pre class="overflow-x-auto font-mono text-sm leading-6 text-terminal-text"><code><span class="text-nord4">education</span>.<span class="text-nord8">push</span>({
  <span class="text-nord4">degree</span>: <span class="text-nord14">"{{ content.education.degree }}"</span>,
  <span class="text-nord4">institution</span>: <span class="text-nord14">"{{ content.education.institution }}"</span>,
  <span class="text-nord4">location</span>: <span class="text-nord14">"{{ content.education.location.city }}/{{ content.education.location.uf }}"</span>,
  <span class="text-nord4">due</span>: <span class="text-nord15">{{ content.education.due }}</span>
})</code></pre>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>
