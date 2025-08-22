export interface ProductData {
  id: string
  name: string
  title: string
  description: string
  shortDescription: string
  href: string
  category: string
  status: 'live' | 'beta' | 'coming-soon'
  features: string[]
  tech: string[]
  icon?: string
}

export const products: ProductData[] = [
  {
    id: 'waltodo',
    name: 'Waltodo',
    title: 'Web3 Task Management',
    description: 'Decentralized task management powered by Sui blockchain with onchain collaboration and permanent storage on Walrus.',
    shortDescription: 'Web3 task management',
    href: '/products/waltodo',
    category: 'Productivity',
    status: 'beta',
    features: [
      'Onchain task tracking',
      'Collaborative workspaces',
      'Permanent storage',
      'Token incentives'
    ],
    tech: ['Sui', 'Move', 'Walrus', 'React']
  },
  {
    id: 'walsheetz',
    name: 'WalSheetz',
    title: 'Collaborative Spreadsheets',
    description: 'Onchain collaborative spreadsheets with real-time sync, permanent data storage, and Web3 sharing capabilities.',
    shortDescription: 'Collaborative spreadsheets',
    href: '/products/walsheetz',
    category: 'Data',
    status: 'beta',
    features: [
      'Real-time collaboration',
      'Onchain formulas',
      'Data permanence',
      'Web3 sharing'
    ],
    tech: ['Sui', 'Move', 'Walrus', 'WebRTC']
  },
  {
    id: 'tundra',
    name: 'Tundra',
    title: 'ETL Service',
    description: 'Onchain data pipeline service for transforming, streaming, and storing data flows with Sui parallel processing.',
    shortDescription: 'Onchain data pipelines',
    href: '/products/tundra',
    category: 'Infrastructure',
    status: 'live',
    features: [
      'Stream processing',
      'Data transformation',
      'Parallel execution',
      'Real-time analytics'
    ],
    tech: ['Sui', 'Move', 'Apache Kafka', 'PostgreSQL']
  }
]

export const getProductById = (id: string): ProductData | undefined => 
  products.find(product => product.id === id)

export const getProductsByCategory = (category: string): ProductData[] => 
  products.filter(product => product.category === category)

export const getProductsByStatus = (status: ProductData['status']): ProductData[] => 
  products.filter(product => product.status === status)