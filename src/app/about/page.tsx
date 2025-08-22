"use client";

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
// import CommandPalette from "@/components/CommandPalette"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* <CommandPalette /> */}

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-black py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              About Dreamlit
            </h1>
            
            <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
                We are a team of Traditional Enterprise experienced Data Engineers with new upcoming web3 engineers, bringing battle-tested engineering practices to the world of blockchain and decentralized applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                    Enterprise Data Engineering Heritage
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our team brings decades of combined experience building production-grade data systems for Fortune 500 companies. We've architected and implemented large-scale ETL pipelines, real-time streaming platforms, and complex data warehouses that process billions of records daily.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Large-scale data pipeline design and implementation</li>
                  <li>Real-time stream processing and event-driven architectures</li>
                  <li>Data modeling for complex business domains</li>
                  <li>Production system monitoring and reliability engineering</li>
                  <li>Performance optimization for high-throughput systems</li>
                </ul>
                <div className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400">
                  <span className="text-sm font-medium">Foundation: Battle-Tested Experience</span>
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
                    Web3 Engineering Excellence
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our upcoming web3 engineers bring fresh perspectives and cutting-edge blockchain expertise to complement our enterprise foundation. Together, we're pioneering the next generation of decentralized applications that combine reliability with innovation.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Sui/Move smart contract development and optimization</li>
                  <li>Decentralized application architecture and design</li>
                  <li>Cross-chain integration and interoperability solutions</li>
                  <li>Web3 user experience and wallet integration</li>
                  <li>Blockchain scalability and performance engineering</li>
                </ul>
                <div className="mt-4 inline-flex items-center text-purple-600 dark:text-purple-400">
                  <span className="text-sm font-medium">Evolution: Enterprise meets Web3</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why We're Building on Sui
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our enterprise data engineering background uniquely positions us to leverage Sui's innovative object-centric model and parallel transaction processing. We apply the same rigorous engineering practices that built reliable enterprise systems to create blockchain applications that are not just decentralized, but also performant, scalable, and production-ready. This combination of traditional engineering excellence and web3 innovation enables us to deliver superior solutions.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}