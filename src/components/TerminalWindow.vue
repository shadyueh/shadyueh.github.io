<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div
    class="overflow-hidden rounded-md bg-terminal shadow-lg ring-1 ring-elevated"
  >
    <div class="flex items-center bg-terminal-header px-4 py-2">
      <span class="h-3 w-3 rounded-full bg-nord-red"></span>
      <span class="ml-2 h-3 w-3 rounded-full bg-nord-yellow"></span>
      <span class="ml-2 h-3 w-3 rounded-full bg-nord-green"></span>
      <h3 class="ml-2 truncate font-mono text-sm text-terminal-title">{{ title }}</h3>
    </div>
    <div class="p-5">
      <slot />
    </div>
  </div>
</template>
