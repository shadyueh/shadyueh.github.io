<script setup lang="ts">
import { education } from '../data/cv'
import TerminalWindow from './TerminalWindow.vue'
</script>

<template>
  <section id="education" class="scroll-mt-24 py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="mb-8 text-3xl font-bold text-primary dark:text-accent">
        Education
      </h2>

      <div class="max-w-2xl">
        <TerminalWindow title="education.ts">
          <pre class="overflow-x-auto font-mono text-sm leading-6 text-gray-200"><code>education.push({
  degree: "{{ education.degree }}",
  institution: "{{ education.institution }}",
  location: "{{ education.location.city }}/{{ education.location.uf }}",
  due: {{ education.due }}
})</code></pre>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>
