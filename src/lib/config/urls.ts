// Centralized URL and endpoint constants
export const urls = {
  // Site URLs
  site: {
    production: 'https://dreamlit.io',
    development: 'http://localhost:3000',
    base: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  },

  // Contact information
  contact: {
    email: 'hello@dreamlit.io',
    mailto: 'mailto:hello@dreamlit.io',
    subject: {
      inquiry: 'New Project Inquiry',
      support: 'Support Request',
      partnership: 'Partnership Opportunity'
    }
  },

  // Social media links
  social: {
    twitter: 'https://twitter.com/dreamlit_io',
    github: 'https://github.com/dreamlit',
    linkedin: 'https://linkedin.com/company/dreamlit',
    discord: 'https://discord.gg/dreamlit'
  },

  // Documentation and resources
  docs: {
    base: '/docs',
    api: '/docs/api',
    guides: '/docs/guides',
    examples: '/docs/examples'
  },

  // Product pages
  products: {
    waltodo: '/products/waltodo',
    walsheetz: '/products/walsheetz', 
    tundra: '/products/tundra'
  },

  // Service pages
  services: {
    sui: '/services/sui-development',
    data: '/services/data-engineering',
    mobile: '/services/mobile-development',
    contracts: '/services/smart-contracts',
    dapp: '/services/dapp-development'
  },

  // External resources
  external: {
    sui: {
      website: 'https://sui.io',
      docs: 'https://docs.sui.io',
      explorer: 'https://suiexplorer.com',
      github: 'https://github.com/MystenLabs/sui'
    },
    walrus: {
      website: 'https://walrus.site',
      docs: 'https://docs.walrus.site',
      explorer: 'https://walrus.site/explorer'
    }
  },

  // API endpoints
  api: {
    contact: '/api/contact',
    newsletter: '/api/newsletter',
    metrics: '/api/metrics'
  },

  // Asset paths
  assets: {
    images: '/images',
    icons: '/icons',
    logos: '/logos',
    og: {
      default: '/og-image.png',
      product: '/og-product.png',
      service: '/og-service.png'
    }
  },

  // Navigation anchors
  anchors: {
    services: '#services',
    products: '#products',
    about: '#about',
    contact: '#contact',
    top: '#top'
  },

  // Legal pages
  legal: {
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookies'
  }
}

// Helper functions for URL construction
export const buildUrl = (path: string, base = urls.site.base) => {
  return `${base}${path}`
}

export const buildMailto = (
  email: string = urls.contact.email,
  subject?: string,
  body?: string
) => {
  const params = new URLSearchParams()
  if (subject) params.append('subject', subject)
  if (body) params.append('body', body)
  
  const queryString = params.toString()
  return `mailto:${email}${queryString ? `?${queryString}` : ''}`
}

export const buildSocialShareUrl = (
  platform: 'twitter' | 'linkedin' | 'facebook',
  url: string,
  text?: string
) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedText = text ? encodeURIComponent(text) : ''
  
  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    default:
      return url
  }
}

// URL validation
export const isExternalUrl = (url: string) => {
  return url.startsWith('http://') || url.startsWith('https://')
}

export const isMailtoUrl = (url: string) => {
  return url.startsWith('mailto:')
}

// Type exports
export type ProductUrl = keyof typeof urls.products
export type ServiceUrl = keyof typeof urls.services
export type SocialPlatform = keyof typeof urls.social