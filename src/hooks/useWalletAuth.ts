"use client"

import { useState, useEffect, useCallback } from 'react'
import { useCurrentAccount, useSignPersonalMessage, useWallets } from '@mysten/dapp-kit'
import { toast } from 'sonner'

interface WalletAuthState {
  isAuthenticated: boolean
  signature: string | null
  isSigningMessage: boolean
  hasWallets: boolean
}

export function useWalletAuth() {
  const currentAccount = useCurrentAccount()
  const wallets = useWallets()
  const { mutate: signPersonalMessage, isPending: isSigningMessage } = useSignPersonalMessage()
  
  const [authState, setAuthState] = useState<WalletAuthState>({
    isAuthenticated: false,
    signature: null,
    isSigningMessage: false,
    hasWallets: wallets.length > 0
  })

  // Update wallet detection when wallets change
  useEffect(() => {
    setAuthState(prev => ({
      ...prev,
      hasWallets: wallets.length > 0
    }))
  }, [wallets.length])

  // Clear auth state when wallet disconnects
  useEffect(() => {
    if (!currentAccount) {
      setAuthState(prev => ({
        ...prev,
        isAuthenticated: false,
        signature: null
      }))
    }
  }, [currentAccount])

  // Auto-sign message when wallet connects
  useEffect(() => {
    if (currentAccount && !authState.isAuthenticated && !authState.signature) {
      signWelcomeMessage()
    }
  }, [currentAccount, authState.isAuthenticated, authState.signature])

  const signWelcomeMessage = useCallback(() => {
    if (!currentAccount) {
      toast.error('Please connect your wallet first')
      return
    }

    const message = "Welcome, let's start your journey with Dreamlit today."
    
    setAuthState(prev => ({ ...prev, isSigningMessage: true }))
    
    signPersonalMessage(
      {
        message: new TextEncoder().encode(message),
      },
      {
        onSuccess: (result) => {
          setAuthState(prev => ({
            ...prev,
            isAuthenticated: true,
            signature: result.signature,
            isSigningMessage: false
          }))
          toast.success('Successfully authenticated!')
        },
        onError: (error) => {
          console.error('Message signing failed:', error)
          setAuthState(prev => ({ ...prev, isSigningMessage: false }))
          toast.error('Message signing failed. Please try again.')
        }
      }
    )
  }, [currentAccount, signPersonalMessage])

  const disconnect = useCallback(() => {
    setAuthState({
      isAuthenticated: false,
      signature: null,
      isSigningMessage: false,
      hasWallets: wallets.length > 0
    })
    toast.success('Wallet disconnected')
  }, [wallets.length])

  const getDisplayAddress = useCallback(() => {
    if (!currentAccount?.address) return ''
    const address = currentAccount.address
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }, [currentAccount?.address])

  return {
    // State
    currentAccount,
    isConnected: !!currentAccount,
    isAuthenticated: authState.isAuthenticated,
    signature: authState.signature,
    isSigningMessage: authState.isSigningMessage || isSigningMessage,
    hasWallets: authState.hasWallets,
    displayAddress: getDisplayAddress(),
    
    // Actions
    signWelcomeMessage,
    disconnect
  }
}