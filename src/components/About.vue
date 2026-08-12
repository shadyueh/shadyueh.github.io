<script setup lang="ts">
import { profile, summary } from '../data/cv'
import TerminalWindow from './TerminalWindow.vue'
</script>

<template>
  <section id="about" class="scroll-mt-24 py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="mb-8 text-3xl font-bold text-heading">
        About
      </h2>

      <div class="grid items-start gap-8 lg:grid-cols-2">
        <div class="space-y-4 text-justify">
          <p
            v-for="(paragraph, index) in summary"
            :key="index"
            class="text-muted"
          >
            {{ paragraph }}
          </p>
        </div>

        <TerminalWindow title="profile.ts">
          <pre class="overflow-x-auto font-mono text-sm leading-6 text-terminal-text"><code>const profile = {
  name: "{{ profile.name }}",
  email: "{{ profile.email }}",
  location: {
    city: "{{ profile.location.city }}",
    uf: "{{ profile.location.uf }}",
    country: "{{ profile.location.country }}"
  }
}</code></pre>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>
