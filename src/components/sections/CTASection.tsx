import Link from 'next/link'
import { AnimatedSection, WavesBorder } from '@/components/ui'
import { ctaSection, brandInfo } from '@/lib/constants/content'

export default function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
      </div>
      
      <div className="container-max relative z-10 text-center">
        <AnimatedSection>
          <h2 className="mb-6">
            <span className="text-4xl font-bold text-cyan-400">
              {ctaSection.title}
            </span>
          </h2>
          <p className="text-black mb-8 max-w-xl mx-auto">
            {ctaSection.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`mailto:${brandInfo.email}`} 
              className="glass-card neon-glow hover-glow px-8 py-4 inline-flex items-center gap-2 transition-all"
            >
              <span className="neon-text">{brandInfo.email}</span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Wave Border */}
      <WavesBorder 
        variant="single" 
        color="rgb(79, 195, 247)" 
        opacity={0.2}
        height="h-16"
      />
    </section>
  )
}