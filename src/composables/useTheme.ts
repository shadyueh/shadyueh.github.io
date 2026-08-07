import { ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
  function apply() {
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  function init() {
    const saved = localStorage.getItem('theme')
    isDark.value = saved === 'dark'
    apply()
  }

  function toggle() {
    isDark.value = !isDark.value
    apply()
  }

  return { isDark, init, toggle }
}
