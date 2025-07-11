"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-white/90 dark:bg-black/90 backdrop-blur-sm z-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DreamLit Apps
              </span>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 dark:text-white font-medium">
                About
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Support
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-black py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              About DreamLit Apps
            </h1>
            
            <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
                We're building the future of decentralized productivity and financial management tools on the Sui blockchain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                    Productivity App on Sui
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We're developing a groundbreaking productivity application built natively on the Sui blockchain. This isn't just another task manager – it's a decentralized workspace that leverages Sui's unique capabilities for lightning-fast transactions and true digital ownership.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Decentralized task and project management</li>
                  <li>On-chain collaboration and team coordination</li>
                  <li>NFT-based achievement and reward system</li>
                  <li>Integration with Sui's Move smart contracts</li>
                  <li>End-to-end encryption with user-owned data</li>
                </ul>
                <div className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400">
                  <span className="text-sm font-medium">Status: Active Development</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                    Portfolio Manager MVP
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our portfolio management solution is designed to revolutionize how users track and manage their digital assets across the Sui ecosystem and beyond. We're building an MVP that combines powerful analytics with intuitive design.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Real-time portfolio tracking and analytics</li>
                  <li>Multi-chain asset support with Sui focus</li>
                  <li>Advanced DeFi position monitoring</li>
                  <li>Automated reporting and tax preparation</li>
                  <li>Risk assessment and optimization tools</li>
                </ul>
                <div className="mt-4 inline-flex items-center text-purple-600 dark:text-purple-400">
                  <span className="text-sm font-medium">Status: MVP in Progress</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why We're Building on Sui
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Sui's innovative object-centric model and parallel transaction processing make it the perfect platform for our vision. We're leveraging Sui's unique capabilities to create applications that are not just decentralized, but also incredibly fast, scalable, and user-friendly. Our goal is to bridge the gap between Web3 technology and everyday productivity tools.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white dark:bg-black py-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} DreamLit Apps. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}