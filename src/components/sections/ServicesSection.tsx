import ServiceCard from '@/components/ServiceCard'
import { AnimatedSection } from '@/components/ui'
import { services } from '@/lib/constants/services'
import { servicesSection } from '@/lib/constants/content'

export default function ServicesSection() {
  return (
    <section id="services" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="eyebrow">{servicesSection.eyebrow}</span>
          <h2 className="mt-4 mb-6">
            {servicesSection.title} <span className="text-gradient">Onchain</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {servicesSection.subtitle}
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.href}
              delay={index * 0.1}
              animation={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 }
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                technologies={service.technologies}
                href={service.href}
                icon={<service.icon className="w-6 h-6" />}
                className={service.className}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}