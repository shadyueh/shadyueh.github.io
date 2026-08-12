import { computed, ref } from 'vue'
import { cv, type Locale } from '../data/cv'
import { messages, type Messages } from './messages'

export type MessageKey = NestedKeyOf<Messages>

type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends string ? K : `${K}.${NestedKeyOf<T[K]>}`
}[keyof T & string]

function getPath(obj: Record<string, unknown>, path: string): string {
  const value = path
    .split('.')
    .reduce<unknown>(
      (acc, key) => (acc as Record<string, unknown> | undefined)?.[key],
      obj,
    )
  return typeof value === 'string' ? value : ''
}

const locale = ref<Locale>('en')

export function useI18n() {
  const otherLocale = computed<Locale>(() => (locale.value === 'en' ? 'pt-BR' : 'en'))

  const content = computed(() => cv[locale.value])

  function t(key: MessageKey): string {
    return getPath(messages[locale.value] as unknown as Record<string, unknown>, key)
  }

  function setLocale(next: Locale) {
    locale.value = next
    localStorage.setItem('lang', next)
    document.documentElement.lang = next
  }

  function init() {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'pt-BR') {
      locale.value = saved
    }
    document.documentElement.lang = locale.value
  }

  return { locale, otherLocale, content, t, setLocale, init }
}