import { Code, Database, Smartphone } from 'lucide-react'

export interface ServiceData {
  title: string
  description: string
  technologies: string[]
  href: string
  icon: React.ComponentType<{ className?: string }>
  className?: string
}

export const services: ServiceData[] = [
  {
    title: "Sui Development",
    description: "Architect applications that leverage object-centric design patterns and concurrent execution models",
    technologies: ["Event-Driven", "State Modeling", "Flow Architecture"],
    href: "/#services",
    icon: Code,
    className: "rotate-subtle-1"
  },
  {
    title: "Data Pipelines",
    description: "Transform chaotic data streams into structured knowledge systems with intelligent processing layers",
    technologies: ["Stream Processing", "Data Modeling", "Pipeline Design"],
    href: "/#services",
    icon: Database,
    className: "rotate-subtle-2"
  },
  {
    title: "Mobile App Development",
    description: "Craft cohesive digital experiences that bridge complex backend systems with intuitive user interactions",
    technologies: ["Interface Design", "System Integration", "User Flows"],
    href: "/#services",
    icon: Smartphone,
    className: "rotate-subtle-3"
  }
]