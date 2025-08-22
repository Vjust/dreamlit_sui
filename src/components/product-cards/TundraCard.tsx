"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Database, Cloud, ArrowDownUp, Zap } from 'lucide-react'

interface DataParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  data: string
}

export default function TundraCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    const particles: DataParticle[] = []
    const dataTypes = ['JSON', 'CSV', 'SQL', 'API', 'LOG', 'XML']
    const colors = ['#06B6D4', '#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444']

    for (let i = 0; i < 50; i++) {
      const dataIndex = Math.floor(Math.random() * dataTypes.length)
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[dataIndex],
        data: dataTypes[dataIndex]
      })
    }

    let animationId: number
    let time = 0
    
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      time += 0.01
      const windX = Math.sin(time) * 0.5
      const windY = Math.cos(time * 0.7) * 0.3
      
      particles.forEach((particle, index) => {
        particle.vx += windX
        particle.vy += windY
        particle.vx *= 0.98
        particle.vy *= 0.98
        
        particle.x += particle.vx
        particle.y += particle.vy
        
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        ctx.save()
        ctx.globalAlpha = particle.opacity
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        
        if (Math.random() > 0.98) {
          ctx.font = '10px monospace'
          ctx.fillStyle = particle.color
          ctx.fillText(particle.data, particle.x + 10, particle.y)
        }
        
        particles.forEach((other, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - other.x
            const dy = particle.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 80) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
              ctx.strokeStyle = particle.color
              ctx.globalAlpha = (1 - distance / 80) * 0.2
              ctx.stroke()
            }
          }
        })
        
        ctx.restore()
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
      
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-blue-950 to-cyan-950">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
        />
        
        <div className="relative z-10 p-6">
          <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="text-sm font-bold text-cyan-300">Data Migration Active</span>
              </div>
              <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400" />
                <div className="flex-1 bg-gray-800/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>
                <span className="text-xs text-gray-400">75%</span>
              </div>
              
              <div className="flex items-center gap-2">
                <ArrowDownUp className="w-4 h-4 text-green-400" />
                <div className="flex-1 bg-gray-800/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>
                <span className="text-xs text-gray-400">90%</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="text-center">
                <div className="text-cyan-400 font-bold">Real-time</div>
                <div className="text-gray-500">Processing</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-bold">256-bit</div>
                <div className="text-gray-500">Encrypted</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
          <h3 className="text-xl font-bold text-white mb-2">Tundra</h3>
          <p className="text-gray-300 text-sm mb-4">
            Enterprise ETL service with Walrus integration
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-xs rounded">Rust Polars</span>
            <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded">Airflow Design</span>
            <span className="px-2 py-1 bg-orange-900/50 text-orange-300 text-xs rounded">RFP Phase</span>
          </div>
          
          <Link 
            href="/products/tundra"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}