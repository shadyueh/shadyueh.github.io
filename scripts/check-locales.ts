import { cv } from '../src/data/cv'
import type { Locale } from '../src/data/cv'
import { messages } from '../src/i18n/messages'

type LeafValue = string | number | null

function flatten(value: unknown, prefix = ''): Map<string, LeafValue> {
  const out = new Map<string, LeafValue>()
  visit(value, prefix, out)
  return out
}

function visit(value: unknown, prefix: string, out: Map<string, LeafValue>): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => visit(item, `${prefix}[${index}]`, out))
  } else if (value !== null && typeof value === 'object') {
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      visit(child, prefix ? `${prefix}.${key}` : key, out)
    }
  } else {
    out.set(prefix, value as LeafValue)
  }
}

const BASE: Locale = 'en'
const OTHER: Locale = 'pt-BR'

function compare(name: string, base: LeafMap, other: LeafMap): string[] {
  const issues: string[] = []
  const prefix = `[${name}]`

  for (const key of base.keys()) {
    if (!other.has(key)) issues.push(`${prefix} falta em ${OTHER}: ${key}`)
  }
  for (const key of other.keys()) {
    if (!base.has(key)) issues.push(`${prefix} extra em ${OTHER}: ${key}`)
  }
  for (const key of base.keys()) {
    const value = base.get(key)
    if (typeof value === 'string' && value.trim() === '') {
      issues.push(`${prefix} string vazia em ${BASE}: ${key}`)
    }
  }
  for (const key of other.keys()) {
    const value = other.get(key)
    if (typeof value === 'string' && value.trim() === '') {
      issues.push(`${prefix} string vazia em ${OTHER}: ${key}`)
    }
  }
  return issues
}

type LeafMap = ReturnType<typeof flatten>

const issues = [
  ...compare('messages', flatten(messages[BASE]), flatten(messages[OTHER])),
  ...compare('cv', flatten(cv[BASE]), flatten(cv[OTHER])),
]

if (issues.length > 0) {
  console.error(`Diferenças encontradas entre ${BASE} e ${OTHER}:`)
  console.error(issues.join('\n'))
  process.exit(1)
}

console.log(`OK: ${BASE} e ${OTHER} com chaves equivalentes e sem strings vazias.`)