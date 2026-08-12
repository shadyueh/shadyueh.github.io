<script setup lang="ts">
import TerminalWindow from './TerminalWindow.vue'
import { useI18n } from '../i18n/useI18n'

const { content, t } = useI18n()
</script>

<template>
  <section
    id="about"
    class="reveal scroll-mt-24 bg-surface py-20"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visible="{ opacity: 1, y: 0 }"
    :transition="{ duration: 1000, ease: 'easeOut' }"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="mb-8 text-3xl font-bold text-heading">
        {{ t('about.title') }}
      </h2>

      <div class="grid items-start gap-8 lg:grid-cols-2">
        <div class="space-y-4 text-justify">
          <p
            v-for="(paragraph, index) in content.summary"
            :key="index"
            class="text-muted"
          >
            {{ paragraph }}
          </p>
        </div>

        <TerminalWindow title="profile.ts">
          <pre class="overflow-x-auto font-mono text-sm leading-6 text-terminal-text"><code><span class="text-nord9">const</span> <span class="text-nord4">profile</span> = {
  <span class="text-nord4">name</span>: <span class="text-nord14">"{{ content.profile.name }}"</span>,
  <span class="text-nord4">email</span>: <span class="text-nord14">"{{ content.profile.email }}"</span>,
  <span class="text-nord4">location</span>: {
    <span class="text-nord4">city</span>: <span class="text-nord14">"{{ content.profile.location.city }}"</span>,
    <span class="text-nord4">uf</span>: <span class="text-nord14">"{{ content.profile.location.uf }}"</span>,
    <span class="text-nord4">country</span>: <span class="text-nord14">"{{ content.profile.location.country }}"</span>
  }
}</code></pre>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>
