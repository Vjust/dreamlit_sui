"use client"

import { useState } from 'react'
import { ConnectButton } from '@mysten/dapp-kit'
import { Wallet, LogOut, Loader2 } from 'lucide-react'
import { useWalletAuth } from '@/hooks/useWalletAuth'
import NoWalletModal from './NoWalletModal'
import { toast } from 'sonner'

interface WalletConnectProps {
  className?: string
}

export default function WalletConnect({ className = '' }: WalletConnectProps) {
  const {
    isConnected,
    isAuthenticated,
    isSigningMessage,
    hasWallets,
    displayAddress,
    disconnect
  } = useWalletAuth()
  
  const [showNoWalletModal, setShowNoWalletModal] = useState(false)

  const handleConnectClick = () => {
    if (!hasWallets) {
      setShowNoWalletModal(true)
      return
    }
  }

  const handleDisconnect = () => {
    disconnect()
  }

  // Show loading state during message signing
  if (isConnected && !isAuthenticated && isSigningMessage) {
    return (
      <div className={`flex items-center gap-2 px-4 py-2 text-sm ${className}`}>
        <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
        <span className="text-gray-600 dark:text-gray-400">Signing message...</span>
      </div>
    )
  }

  // Show authenticated state
  if (isAuthenticated && displayAddress) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="glass-card px-3 py-2 flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="neon-text font-mono">{displayAddress}</span>
        </div>
        <button
          onClick={handleDisconnect}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          title="Disconnect wallet"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    )
  }

  // Show connect button
  return (
    <>
      <div className={className}>
        {hasWallets ? (
          <div className="glass-card neon-glow hover-glow">
            <ConnectButton connectText="Connect" />
          </div>
        ) : (
          <button
            onClick={handleConnectClick}
            className="glass-card neon-glow hover-glow flex items-center gap-2 px-4 py-2 text-sm transition-all"
          >
            <Wallet className="w-4 h-4 text-cyan-400" />
            <span className="neon-text">Connect</span>
          </button>
        )}
      </div>
      
      <NoWalletModal
        isOpen={showNoWalletModal}
        onClose={() => setShowNoWalletModal(false)}
      />
    </>
  )
}