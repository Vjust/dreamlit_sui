"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { WavesBorder, NeonButton } from '@/components/ui'
import { heroContent } from '@/lib/constants/content'
import { dimensions, animations } from '@/lib/config'
import { getDuration, getDelay, getIconSize, createSlideUpAnimation } from '@/lib/utils/config'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={dimensions.height.hero} />
  }

  return (
    <section className={`relative ${dimensions.height.hero} flex items-center`}>
      {/* Animated Ocean Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/10 to-purple-500/10 animate-pulse"></div>
          <div 
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-cyan-500/5 to-transparent rounded-full blur-3xl animate-spin" 
            style={{animationDuration: animations.timing.css.oceanSpin}}
          ></div>
        </div>
      </div>
      

      <div className={`container-max relative ${dimensions.zIndex.sticky}`} style={{marginLeft: '3%'}}>
        <div className={dimensions.container['4xl']}>
          {/* Eyebrow text */}
          <motion.div
            {...createSlideUpAnimation(0)}
            className="mb-6"
          >
            <span className="eyebrow neon-text">{heroContent.eyebrow}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...createSlideUpAnimation(getDelay('short'))}
            className="mb-6"
          >
            Ride the Wave of
            <br />
            <span className="dreamlit-glow">Dreamlit</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...createSlideUpAnimation(getDelay('medium'))}
            className="text-xl md:text-2xl text-slate-800 mb-10 max-w-2xl"
          >
Your specialized Sui/Move development partner. We build enterprise-grade Web3 solutions, from onchain task management to parallel spreadsheets and secure data pipelines. Transforming business productivity through blockchain innovation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...createSlideUpAnimation(getDelay('long'))}
            className={`flex flex-col sm:flex-row ${dimensions.gap.sm} mb-12`}
          >
            <NeonButton
              href={heroContent.ctaHref}
              variant="neon"
              size="lg"
              glow
              icon={<ArrowRight className={getIconSize('md')} />}
              iconPosition="right"
            >
              {heroContent.ctaText}
            </NeonButton>
          </motion.div>

        </div>
      </div>

      {/* Animated Wave Border */}
      <WavesBorder 
        variant="triple" 
        color="rgb(79, 195, 247)" 
        opacity={0.2}
        height="h-24"
      />

      {/* Scroll indicator */}
      <motion.div
        {...animations.motion.fadeIn}
        transition={{ delay: getDuration('slowest') }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className={`flex flex-col items-center ${dimensions.gap.sm} text-gray-400 hover:text-gray-600 transition-colors`}
        >
          <span className="text-xs uppercase tracking-wider">Explore</span>
          <ChevronRight className={`${getIconSize('md')} rotate-90`} />
        </button>
      </motion.div>
    </section>
  )
}