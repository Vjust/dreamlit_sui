"use client"

import { AlertCircle, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function NetworkBanner() {
  // Banner disabled - remove testnet warning
  return null

  const getBannerInfo = () => {
    switch (network) {
      case 'localnet':
        return {
          type: 'warning',
          icon: AlertCircle,
          title: 'Local Development Network',
          message: 'You are connected to a local Sui network. This is for development only.',
          bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
          borderColor: 'border-yellow-200 dark:border-yellow-800',
          textColor: 'text-yellow-800 dark:text-yellow-200'
        }
      case 'testnet':
      default:
        return {
          type: 'info',
          icon: Info,
          title: isProduction ? 'Testnet (Preview)' : 'Testnet Development',
          message: isProduction 
            ? 'Dreamlit is currently running on Sui Testnet. Tokens have no real value. Mainnet coming soon!'
            : 'You are connected to Sui Testnet. Tokens have no real value and are for testing only.',
          bgColor: 'bg-blue-50 dark:bg-blue-900/20',
          borderColor: 'border-blue-200 dark:border-blue-800',
          textColor: 'text-blue-800 dark:text-blue-200'
        }
    }
  }

  const bannerInfo = getBannerInfo()
  const IconComponent = bannerInfo.icon

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`${bannerInfo.bgColor} ${bannerInfo.borderColor} border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IconComponent className={`w-5 h-5 ${bannerInfo.textColor}`} />
              <div>
                <span className={`font-semibold ${bannerInfo.textColor}`}>
                  {bannerInfo.title}
                </span>
                <span className={`ml-2 ${bannerInfo.textColor} opacity-90`}>
                  {bannerInfo.message}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsDismissed(true)}
              className={`${bannerInfo.textColor} opacity-70 hover:opacity-100 transition-opacity text-sm font-medium`}
            >
              Dismiss
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}