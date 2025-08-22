"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import WaltodoCard from '@/components/product-cards/WaltodoCard'
import WalSheetzCard from '@/components/product-cards/WalSheetzCard'
import TundraCard from '@/components/product-cards/TundraCard'
import { useIntersectionObserver } from '@/lib/hooks'

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sectionRef, isInView] = useIntersectionObserver<HTMLDivElement>({ 
    threshold: 0.1,
    triggerOnce: true 
  })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section 
      id="products" 
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div 
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Revolutionary Products (Coming Soon)</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building the future of decentralized productivity on Sui blockchain
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <WaltodoCard />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WalSheetzCard />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TundraCard />
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg text-gray-500 dark:text-gray-400">
            All products leverage Sui's parallel processing and Walrus's decentralized storage
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}