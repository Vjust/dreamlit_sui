"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-white/90 dark:bg-black/90 backdrop-blur-sm z-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DreamLit Apps
              </span>
            </div>
            <nav className="flex gap-6">
              <a href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                About
              </a>
              <a href="/support" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Support
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-black py-20 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Bringing <em>your</em> <span className="text-indigo-600 dark:text-indigo-400">Vision</span> to life
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Work with us to turn your ideas into reality. We build elegant, powerful software for businesses of all sizes.
            </p>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Innovating at the Forefront of <span className="text-indigo-600 dark:text-indigo-400">Web3</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            We're a dynamic crypto development team specializing in building cutting-edge Web3 applications. Our expertise spans both fintech and productivity solutions, with a strong focus on the Sui ecosystem. While Sui is our primary playground, our software engineering capabilities extend across AI, crypto, and finance. Get ready for our upcoming mobile app, designed to bring our innovative solutions right to your fingertips. We're passionate about creating the next generation of decentralized experiences.
            </p>
            
            <div className="mt-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:hello@dreamlit.io" className="hover:text-indigo-500 dark:hover:text-indigo-400">
                hello@dreamlit.io
              </a>
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
