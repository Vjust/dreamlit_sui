import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  technologies: string[]
  href: string
  icon: React.ReactNode
  className?: string
}

export default function ServiceCard({
  title,
  description,
  technologies,
  href,
  icon,
  className = ""
}: ServiceCardProps) {
  return (
    <Link href={href} className={`glass-card tilt-card hover-glow group block p-6 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 glass neon-border rounded-lg group-hover:neon-glow transition-all">
          <div className="w-6 h-6 text-cyan-400 group-hover:neon-text transition-colors">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 neon-text group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="text-slate-800 mb-4 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="glass px-2 py-1 text-xs rounded border border-purple-400/30 text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="neon-text text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
            Explore
            <ArrowRight className="h-4 w-4 group-hover:text-cyan-300 transition-colors" />
          </span>
        </div>
      </div>
    </Link>
  )
}