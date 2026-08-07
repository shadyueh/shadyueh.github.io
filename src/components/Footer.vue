<script setup lang="ts">
import { profile } from '../data/cv'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-primary py-6 text-gray-200">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6"
    >
      <p class="text-sm">
        &copy; {{ year }} {{ profile.name }}. All rights reserved.
      </p>
      <a href="#top" class="text-sm transition-colors hover:text-accent">
        Back to top
      </a>
    </div>
  </footer>
</template>
