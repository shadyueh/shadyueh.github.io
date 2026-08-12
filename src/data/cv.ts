import { en } from './en'
import { ptBR } from './pt-BR'

export type Locale = 'en' | 'pt-BR'

export interface Profile {
  name: string
  headline: string
  email: string
  location: { city: string; uf: string; country: string }
}

export interface Job {
  company: string
  role: string
  location: { city: string; uf: string; country: string }
  period: { start: number; end: number | null }
  responsibilities: string[]
}

export interface Education {
  degree: string
  institution: string
  location: { city: string; uf: string; country: string }
  due: number
}

export interface Cv {
  profile: Profile
  summary: string[]
  experience: Job[]
  education: Education
  skills: string[]
}

export const cv: Record<Locale, Cv> = {
  en,
  'pt-BR': ptBR,
}

export const socials: { github: string; linkedin: string; twitter: string } = {
  github: 'https://github.com/shadyueh',
  linkedin: '',
  twitter: '',
}