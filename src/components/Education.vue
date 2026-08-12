<script setup lang="ts">
import { education } from '../data/cv'
import TerminalWindow from './TerminalWindow.vue'
</script>

<template>
  <section id="education" class="scroll-mt-24 py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="mb-8 text-3xl font-bold text-heading">
        Education
      </h2>

      <div class="max-w-2xl">
        <TerminalWindow title="education.ts">
          <pre class="overflow-x-auto font-mono text-sm leading-6 text-terminal-text"><code><span class="text-nord4">education</span>.<span class="text-nord8">push</span>({
  <span class="text-nord4">degree</span>: <span class="text-nord14">"{{ education.degree }}"</span>,
  <span class="text-nord4">institution</span>: <span class="text-nord14">"{{ education.institution }}"</span>,
  <span class="text-nord4">location</span>: <span class="text-nord14">"{{ education.location.city }}/{{ education.location.uf }}"</span>,
  <span class="text-nord4">due</span>: <span class="text-nord15">{{ education.due }}</span>
})</code></pre>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>
