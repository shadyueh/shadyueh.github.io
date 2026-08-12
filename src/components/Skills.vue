<script setup lang="ts">
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
    id="skills"
    class="reveal scroll-mt-24 py-20"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="mb-8 text-3xl font-bold text-heading">
        {{ t('skills.title') }}
      </h2>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="skill in content.skills"
          :key="skill"
          class="rounded-full bg-accent/30 px-4 py-2 font-mono text-sm font-medium text-muted"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>
