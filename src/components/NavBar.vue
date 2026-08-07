<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDark, toggle } = useTheme()

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const open = ref(false)

function close() {
  open.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80"
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
    >
      <a href="#top" class="text-lg font-bold text-primary dark:text-accent">
        Held Grijo
      </a>

      <div class="hidden items-center gap-6 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-gray-700 transition-colors hover:text-secondary dark:text-gray-300 dark:hover:text-accent"
        >
          {{ link.label }}
        </a>
        <button
          type="button"
          class="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggle"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>

      <button
        type="button"
        class="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg
          v-if="!open"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <div v-if="open" class="border-t border-gray-200 bg-white md:hidden dark:border-gray-800 dark:bg-gray-950">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="block px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:text-secondary dark:text-gray-300 dark:hover:text-accent"
        @click="close"
      >
        {{ link.label }}
      </a>
      <button
        type="button"
        class="flex w-full items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300"
        @click="toggle"
      >
        {{ isDark ? 'Light mode' : 'Dark mode' }}
      </button>
    </div>
  </header>
</template>
