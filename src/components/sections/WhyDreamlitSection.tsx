import { TrendingUp, Zap, Target } from 'lucide-react'
import { AnimatedSection } from '@/components/ui'
import { whySuiSection, businessValues, businessOutcomes } from '@/lib/constants/content'

export default function WhyDreamlitSection() {
  return (
    <section className="section">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="eyebrow neon-text">{whySuiSection.eyebrow}</span>
            <h2 className="mt-4 mb-6">
              {whySuiSection.title} <span className="text-cyan-400">{whySuiSection.highlightedText}</span>
            </h2>
            <p className="text-xl text-slate-800 mb-8">
              {whySuiSection.subtitle}
            </p>
            
            <div className="space-y-6">
              {businessValues.map((value, index) => {
                const icons = [TrendingUp, Zap, Target]
                const Icon = icons[index]
                const glowClasses = {
                  cyan: 'business-glow-cyan',
                  purple: 'business-glow-purple', 
                  pink: 'business-glow-pink'
                }
                const colors = {
                  cyan: 'text-cyan-400 border-cyan-400/30',
                  purple: 'text-purple-400 border-purple-400/30',
                  pink: 'text-pink-400 border-pink-400/30'
                }
                
                return (
                  <AnimatedSection
                    key={value.label}
                    delay={index * 0.1}
                    className="flex items-start gap-4"
                  >
                    <div className={`p-3 glass neon-border rounded-lg ${colors[value.color as keyof typeof colors]}`}>
                      <Icon className={`w-5 h-5 ${colors[value.color as keyof typeof colors].split(' ')[0]}`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${glowClasses[value.color as keyof typeof glowClasses]}`}>
                        {value.label}
                      </h3>
                      <p className="text-slate-700">
                        {value.value}
                      </p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </AnimatedSection>
          
          {/* Business Outcomes Showcase */}
          <AnimatedSection 
            delay={0.3}
            className="glass-card hover-glow p-6"
          >
            <h3 className="text-2xl font-bold mb-4 dreamlit-glow">Business Impact</h3>
            <p className="text-slate-700 mb-6">
              Key benefits of Web3 technology.
            </p>
            <div className="space-y-5">
              {businessOutcomes.map((outcome, index) => {
                const glowClasses = {
                  cyan: 'business-glow-cyan',
                  purple: 'business-glow-purple',
                  pink: 'business-glow-pink'
                }
                const colors = ['cyan', 'purple', 'pink']
                const color = colors[index]
                
                return (
                  <AnimatedSection
                    key={outcome.label}
                    delay={0.4 + index * 0.1}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-2 h-2 bg-${color}-400 rounded-full animate-pulse shadow-lg shadow-${color}-400/50`}></div>
                      <h4 className={`font-semibold text-sm ${glowClasses[outcome.color as keyof typeof glowClasses]}`}>
                        {outcome.label}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-700 pl-5">
                      {outcome.value}
                    </p>
                  </AnimatedSection>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}