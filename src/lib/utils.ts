import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function truncateAddress(address: string, chars = 4): string {
  if (!address) return ''
  const start = address.slice(0, chars + 2) // Include '0x'
  const end = address.slice(-chars)
  return `${start}...${end}`
}

export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(2)}%`
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}