<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div
    class="overflow-hidden rounded-md bg-gray-900 shadow-lg ring-1 ring-gray-800"
  >
    <div class="flex items-center bg-gray-800 px-4 py-2">
      <span class="h-3 w-3 rounded-full bg-red-500"></span>
      <span class="ml-2 h-3 w-3 rounded-full bg-yellow-500"></span>
      <span class="ml-2 h-3 w-3 rounded-full bg-green-500"></span>
      <h3 class="ml-2 truncate font-mono text-sm text-gray-300">{{ title }}</h3>
    </div>
    <div class="p-5">
      <slot />
    </div>
  </div>
</template>
