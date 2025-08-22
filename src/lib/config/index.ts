// Import all configurations
import { dimensions } from './dimensions'
import { animations } from './animations'
import { urls } from './urls'
import { metadata } from './metadata'
import { terminal } from './terminal'

// Re-export for individual imports
export { dimensions, animations, urls, metadata, terminal }

// Re-export terminal utility functions
export { 
  getTerminalSequence, 
  getTerminalColor, 
  getStatusIcon, 
  getPromptIcon, 
  getTypeSpeed,
  createTerminalCommand 
} from './terminal'

// Environment configuration
export const env = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  
  // Site configuration
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@dreamlit.io',
  
  // Feature flags
  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    devConsole: process.env.NODE_ENV === 'development',
    errorReporting: process.env.NEXT_PUBLIC_ENABLE_ERROR_REPORTING === 'true'
  },

  // API configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '5000'),
    retries: parseInt(process.env.NEXT_PUBLIC_API_RETRIES || '3')
  }
}

// Global configuration object
export const config = {
  site: {
    name: 'Dreamlit',
    title: 'Dreamlit | Get Productive Onchain',
    description: 'Sui/Move development specialists building decentralized productivity tools',
    url: env.siteUrl,
    email: env.contactEmail
  },
  
  ui: {
    dimensions,
    animations
  },
  
  urls,
  metadata,
  terminal,
  env
}

// Type exports for configuration
export type Config = typeof config
export type EnvConfig = typeof env

// Utility types for dimensions and animations
export type IconSize = keyof typeof dimensions.icon
export type SpacingSize = keyof typeof dimensions.spacing
export type AnimationDuration = keyof typeof animations.duration
export type AnimationDelay = Exclude<keyof typeof animations.delay, 'stagger'>