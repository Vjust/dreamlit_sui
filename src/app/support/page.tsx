"use client";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-white/90 dark:bg-black/90 backdrop-blur-sm z-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <a href="/" className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DreamLit Apps
              </span>
            </a>
            <nav className="flex gap-6">
              <a href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Home
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                About
              </a>
              <a href="/support" className="text-gray-900 dark:text-white font-medium">
                Support
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-black py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Support & FAQ
            </h1>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    How can I contact DreamLit Apps?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We'd love to hear from you! You can reach us directly at{" "}
                    <a href="mailto:hello@dreamlit.io" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                      hello@dreamlit.io
                    </a>
                    . Whether you have questions about our services, want to discuss a project, or just want to say hello, we're here to help.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    What's the best way to get in touch?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Email is our primary communication channel. Send your inquiries to{" "}
                    <a href="mailto:hello@dreamlit.io" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                      hello@dreamlit.io
                    </a>
                    , and we'll get back to you as soon as possible, typically within 24-48 hours during business days.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    What information should I include in my email?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To help us assist you better, please include:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Your name and company (if applicable)</li>
                    <li>A clear description of your project or inquiry</li>
                    <li>Your timeline and budget considerations</li>
                    <li>Any specific technologies or platforms you're interested in</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    What types of projects do you work on?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We specialize in Web3 applications, particularly in the Sui ecosystem, but our expertise extends to AI, crypto, and finance solutions. We work on both fintech and productivity applications, and we're always excited to explore innovative projects in these domains.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Do you offer consultations?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes! We're happy to discuss your project ideas and provide guidance. Reach out to{" "}
                    <a href="mailto:hello@dreamlit.io" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                      hello@dreamlit.io
                    </a>
                    {" "}to schedule a consultation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Drop us a line and let's discuss how we can bring your vision to life.
              </p>
              <a
                href="mailto:hello@dreamlit.io"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Us
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