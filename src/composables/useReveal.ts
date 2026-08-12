import { useMotion } from '@vueuse/motion'
import type { Ref } from 'vue'
import { onBeforeUnmount, watch } from 'vue'

export interface UseRevealOptions {
  /** Fraction of the element that must be visible before triggering (0–1). */
  threshold?: number
  /** Adjusts the observer's viewport box before evaluating visibility. */
  rootMargin?: string
  /** Animate only the first time the section becomes visible. */
  once?: boolean
}

export function useReveal(
  target: Ref<HTMLElement | null>,
  options: UseRevealOptions = {},
): void {
  const { threshold = 0, rootMargin = '0px 0px -10% 0px', once = true } = options

  const { apply, set } = useMotion(
    target,
    {
      initial: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1000, ease: 'easeInOut' },
      },
    },
    { visibilityHooks: false },
  )

  let observer: IntersectionObserver | null = null

  watch(
    target,
    (el) => {
      observer?.disconnect()
      observer = null
      if (!el) return

      set('initial')

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              apply('visible')
              if (once) observer?.disconnect()
            } else if (!once) {
              apply('initial')
            }
          }
        },
        { rootMargin, threshold },
      )

      observer.observe(el)
    },
    { immediate: true },
  )

  onBeforeUnmount(() => observer?.disconnect())
}