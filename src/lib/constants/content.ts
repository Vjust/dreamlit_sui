export interface HeroContent {
  eyebrow: string
  headline: string
  highlightedText: string
  subheadline: string
  ctaText: string
  ctaHref: string
}

export interface SectionContent {
  eyebrow?: string
  title: string
  highlightedText?: string
  subtitle: string
  description?: string
}

export interface MetricData {
  label: string
  value: string
  color: string
  animationDelay?: number
}

export interface FeatureData {
  icon: string
  title: string
  description: string
  color: string
}

export const heroContent: HeroContent = {
  eyebrow: "Building the Future on Sui",
  headline: "Ride the Wave of",
  highlightedText: "Decentralized Innovation",
  subheadline: "Where Sui meets storage, dreams flow through Walrus networks. Experience the next generation of blockchain development powered by parallel execution and permanent storage.",
  ctaText: "Begin",
  ctaHref: "/contact"
}

export const servicesSection: SectionContent = {
  eyebrow: "Our Services",
  title: "Transform Your Business",
  highlightedText: "Onchain",
  subtitle: "We deliver end-to-end blockchain solutions that scale with your ambitions"
}

export const productsSection: SectionContent = {
  title: "Revolutionary Products",
  subtitle: "Building the future of decentralized productivity on Sui blockchain",
  description: "All products leverage Sui's parallel processing and Walrus's decentralized storage"
}

export const whySuiSection: SectionContent = {
  eyebrow: "The Sui Advantage",
  title: "Where Innovation",
  highlightedText: "Flows",
  subtitle: "Parallel execution. Permanent storage. Infinite possibilities."
}

export const ctaSection: SectionContent = {
  title: "Dive Into Web3",
  subtitle: "Ready to build on the fastest blockchain? Let's create something extraordinary together."
}

export const businessValues: MetricData[] = [
  {
    label: "Revenue Growth",
    value: "Unlock new revenue streams through blockchain innovation.",
    color: "cyan"
  },
  {
    label: "Operational Excellence",
    value: "Streamline processes with decentralized automation.",
    color: "purple"
  },
  {
    label: "Future-Ready",
    value: "Position your business at the forefront of Web3.",
    color: "pink"
  }
]

export const businessOutcomes: MetricData[] = [
  {
    label: "Data Ownership",
    value: "Full control and ownership of your data on the blockchain",
    color: "cyan"
  },
  {
    label: "Enhanced Privacy",
    value: "Cryptographic privacy protection built into every transaction",
    color: "purple"
  },
  {
    label: "Lower Infrastructure Costs",
    value: "Reduce operational costs with decentralized infrastructure",
    color: "pink"
  }
]

export const brandInfo = {
  name: "Dreamlit",
  tagline: "Building the Future on Sui",
  email: "hello@dreamlit.io",
  description: "Software consulting company specializing in Sui/Move blockchain development and decentralized productivity tools"
}

export const chainInfo = {
  name: "Sui Mainnet",
  status: "online",
  color: "green"
}