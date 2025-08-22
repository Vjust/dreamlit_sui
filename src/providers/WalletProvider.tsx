"use client"

import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit'
import { getFullnodeUrl } from '@mysten/sui/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
})

const queryClient = new QueryClient()

// Environment configuration
const network = (process.env.NEXT_PUBLIC_SUI_NETWORK as 'localnet' | 'testnet' | 'mainnet') || 'testnet'
const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true'
const enableUnsafeBurner = process.env.NEXT_PUBLIC_ENABLE_UNSAFE_BURNER === 'true'

interface DreamLitWalletProviderProps {
  children: ReactNode
}

export default function DreamLitWalletProvider({ children }: DreamLitWalletProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork={network}>
        <WalletProvider 
          autoConnect={true}
          enableUnsafeBurner={enableUnsafeBurner}
        >
          {children}
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
}