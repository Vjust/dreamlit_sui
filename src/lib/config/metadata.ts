// Centralized metadata and SEO constants
export const metadata = {
  // Site information
  site: {
    name: 'Dreamlit',
    title: 'Dreamlit | Get Productive Onchain - Sui/Move Development Specialists',
    description: 'Software consulting specializing in Sui/Move development. Building decentralized productivity tools (Waltodo, WalSheetz, Tundra) powered by Walrus storage for SMBs.',
    tagline: 'Get Productive Onchain',
    slogan: 'Building the Future on Sui'
  },

  // SEO keywords
  keywords: [
    'Sui blockchain',
    'Move development', 
    'Walrus storage',
    'decentralized productivity',
    'onchain spreadsheets',
    'Web3 consulting',
    'blockchain task management',
    'ETL services',
    'Waltodo',
    'WalSheetz', 
    'Tundra',
    'Dreamlit'
  ],

  // Author information
  author: {
    name: 'Dreamlit',
    email: 'hello@dreamlit.io',
    url: 'https://dreamlit.io'
  },

  // Open Graph configuration
  openGraph: {
    title: 'Dreamlit | Get Productive Onchain',
    description: 'Sui/Move development specialists building decentralized productivity tools for SMBs',
    url: 'https://dreamlit.io',
    siteName: 'Dreamlit',
    locale: 'en_US',
    type: 'website',
    images: {
      default: {
        url: 'https://dreamlit.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dreamlit - Get Productive Onchain'
      },
      square: {
        url: 'https://dreamlit.io/og-square.png',
        width: 800,
        height: 800,
        alt: 'Dreamlit Logo'
      }
    }
  },

  // Twitter Card configuration
  twitter: {
    card: 'summary_large_image',
    site: '@dreamlit_io',
    creator: '@dreamlit_io',
    title: 'Dreamlit | Get Productive Onchain',
    description: 'Sui/Move development specialists building decentralized productivity tools for SMBs',
    images: ['https://dreamlit.io/og-image.png']
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  // Page-specific metadata
  pages: {
    home: {
      title: 'Dreamlit | Get Productive Onchain',
      description: 'Sui/Move development specialists building decentralized productivity tools powered by Walrus storage.',
      keywords: ['Sui development', 'Web3 productivity', 'blockchain consulting']
    },
    
    about: {
      title: 'About Dreamlit | Sui Blockchain Experts',
      description: 'Learn about Dreamlit, your trusted partner for Sui blockchain development and decentralized productivity solutions.',
      keywords: ['Dreamlit team', 'Sui experts', 'blockchain consulting']
    },

    contact: {
      title: 'Contact Dreamlit | Start Your Sui Project',
      description: 'Ready to build on Sui? Contact Dreamlit for expert blockchain development and Web3 productivity solutions.',
      keywords: ['contact Dreamlit', 'Sui development services', 'Web3 consulting']
    },

    products: {
      waltodo: {
        title: 'Waltodo | Web3 Task Management on Sui',
        description: 'Decentralized task management powered by Sui blockchain with onchain collaboration and permanent Walrus storage.',
        keywords: ['Waltodo', 'Web3 tasks', 'Sui productivity', 'blockchain todo']
      },
      
      walsheetz: {
        title: 'WalSheetz | Collaborative Spreadsheets on Sui',
        description: 'Onchain collaborative spreadsheets with real-time sync, permanent data storage, and Web3 sharing capabilities.',
        keywords: ['WalSheetz', 'onchain spreadsheets', 'collaborative documents', 'Sui applications']
      },
      
      tundra: {
        title: 'Tundra | ETL Data Pipelines on Sui',
        description: 'Onchain data pipeline service for transforming, streaming, and storing data flows with Sui parallel processing.',
        keywords: ['Tundra', 'data pipelines', 'ETL service', 'Sui data processing']
      }
    },

    services: {
      sui: {
        title: 'Sui Development Services | Expert Move Programming',
        description: 'Professional Sui blockchain development services. Expert Move programming for DeFi, NFTs, and Web3 applications.',
        keywords: ['Sui development', 'Move programming', 'blockchain development']
      },
      
      data: {
        title: 'Data Engineering Services | Blockchain Data Pipelines',
        description: 'Transform your data with onchain processing pipelines, real-time analytics, and decentralized storage solutions.',
        keywords: ['data engineering', 'blockchain data', 'data pipelines']
      }
    }
  },

  // Schema.org structured data
  structuredData: {
    organization: {
      '@type': 'Organization',
      name: 'Dreamlit',
      url: 'https://dreamlit.io',
      logo: 'https://dreamlit.io/logo.png',
      description: 'Software consulting specializing in Sui/Move blockchain development and decentralized productivity tools.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-DREAMLIT',
        contactType: 'customer service',
        email: 'hello@dreamlit.io'
      },
      sameAs: [
        'https://twitter.com/dreamlit_io',
        'https://github.com/dreamlit',
        'https://linkedin.com/company/dreamlit'
      ]
    },

    website: {
      '@type': 'WebSite',
      name: 'Dreamlit',
      url: 'https://dreamlit.io',
      description: 'Sui/Move development specialists building decentralized productivity tools',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://dreamlit.io/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  },

  // Verification codes
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
  }
}

// Helper functions
export const getPageMetadata = (page: string, subpage?: string) => {
  const pageData = metadata.pages[page as keyof typeof metadata.pages]
  
  if (subpage && pageData && typeof pageData === 'object' && subpage in pageData) {
    return (pageData as Record<string, any>)[subpage]
  }
  
  return pageData || metadata.pages.home
}

export const buildPageTitle = (pageTitle?: string) => {
  if (!pageTitle) return metadata.site.title
  return `${pageTitle} | ${metadata.site.name}`
}

export const buildOgImage = (type: 'default' | 'square' = 'default') => {
  return metadata.openGraph.images[type]
}

// Type exports
export type MetadataPage = keyof typeof metadata.pages
export type ProductPage = keyof typeof metadata.pages.products
export type ServicePage = keyof typeof metadata.pages.services