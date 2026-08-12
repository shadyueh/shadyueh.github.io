import type { Locale } from '../data/cv'
import { en } from './locales/en'
import { ptBR } from './locales/pt-BR'

export interface Messages {
  nav: {
    about: string
    experience: string
    education: string
    skills: string
    contact: string
    toggleThemeLight: string
    toggleThemeDark: string
    toggleMenu: string
    lightMode: string
    darkMode: string
    otherLang: string
    switchLang: string
  }
  hero: {
    contact: string
    aboutMe: string
  }
  about: { title: string }
  experience: { title: string; now: string }
  education: { title: string }
  skills: { title: string }
  contact: { title: string; subtitle: string }
  footer: { rights: string; backToTop: string }
}

export const messages: Record<Locale, Messages> = {
  en,
  'pt-BR': ptBR,
}