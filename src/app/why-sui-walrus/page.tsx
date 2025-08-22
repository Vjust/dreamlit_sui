"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
// import CommandPalette from "@/components/CommandPalette"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Shield, Database, Users, Code, Globe } from 'lucide-react'

export default function WhySuiWalrusPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* <CommandPalette /> */}
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Why We Build on <span className="gradient-text">Sui & Walrus</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                The perfect combination of speed, security, and decentralization for modern applications
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <img src="/sui-logo.svg" alt="Sui" className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sui Blockchain</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Parallel Transaction Processing</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Sui processes transactions in parallel, achieving speeds of up to 120,000 TPS. This enables 
                          real-time collaboration in our applications without the bottlenecks of traditional blockchains.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Code className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Object-Centric Model</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Sui's unique object-centric architecture allows us to model real-world assets and data structures 
                          naturally, making our applications more intuitive and efficient.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Move Language Security</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Built with Move, a language designed for safe resource management, Sui provides inherent 
                          protection against common smart contract vulnerabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                      <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">W</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Walrus Storage</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Database className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Decentralized Storage</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Walrus provides truly decentralized storage with erasure coding, ensuring your data remains 
                          available even if multiple nodes go offline.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy First</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          End-to-end encryption ensures that only authorized users can access their data. Your business 
                          information stays private and secure.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Global Availability</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          With nodes distributed globally, Walrus ensures low-latency access to your data from anywhere 
                          in the world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">The Perfect Stack for Business Applications</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">User Ownership</h3>
                  <p className="text-white/90 text-sm">
                    Users truly own their data and can take it with them anywhere
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Real-Time Performance</h3>
                  <p className="text-white/90 text-sm">
                    Sub-second finality enables truly interactive applications
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Enterprise Security</h3>
                  <p className="text-white/90 text-sm">
                    Built-in security at every layer of the stack
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Building with Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}