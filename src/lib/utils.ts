import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string | number): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${path}`
}

export function truncate(str: string, length: number) {
  return str.length > length ? str.substring(0, length) + "..." : str
}

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}