"use client"

import { X, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface WalletOption {
  name: string
  url: string
  description: string
  icon: string
}

const WALLET_OPTIONS: WalletOption[] = [
  {
    name: 'Sui Wallet',
    url: 'https://chromewebstore.google.com/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil',
    description: 'Official Sui Wallet by Mysten Labs',
    icon: '🌊'
  },
  {
    name: 'Suiet Wallet',
    url: 'https://chromewebstore.google.com/detail/suiet-sui-wallet/khpkpbbcccdmmclmpigdgddabeilkdpd',
    description: 'Popular community Sui wallet',
    icon: '🎨'
  },
  {
    name: 'Ethos Wallet',
    url: 'https://chromewebstore.google.com/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli',
    description: 'User-friendly Sui wallet',
    icon: '⚡'
  }
]

interface NoWalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NoWalletModal({ isOpen, onClose }: NoWalletModalProps) {
  const handleWalletInstall = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 max-w-md w-full mx-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">👛</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No Sui Wallet Detected
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                To connect to Dreamlit, you'll need to install a Sui wallet extension
              </p>
            </div>

            {/* Wallet Options */}
            <div className="space-y-3 mb-6">
              {WALLET_OPTIONS.map((wallet) => (
                <button
                  key={wallet.name}
                  onClick={() => handleWalletInstall(wallet.url)}
                  className="w-full flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{wallet.icon}</span>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {wallet.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {wallet.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                    <span className="text-sm font-medium">Install</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>

            {/* Footer Note */}
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                💡 After installing a wallet, please refresh this page to continue
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}