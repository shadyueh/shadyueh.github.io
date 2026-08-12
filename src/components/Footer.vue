<script setup lang="ts">
import { useI18n } from '../i18n/useI18n'

const { content, t } = useI18n()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-night py-6 text-on-night">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6"
    >
      <p class="text-sm">
        &copy; {{ year }} {{ content.profile.name }}. {{ t('footer.rights') }}
      </p>
      <a href="#top" class="text-sm transition-colors hover:text-accent">
        {{ t('footer.backToTop') }}
      </a>
    </div>
  </footer>
</template>
