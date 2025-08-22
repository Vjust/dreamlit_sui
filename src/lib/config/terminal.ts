// Terminal content and command sequences
export const terminal = {
  // Waltodo terminal demo
  waltodo: {
    commands: [
      { text: "$ waltodo init", delay: 0 },
      { text: "Initializing Sui wallet connection...", delay: 500, isOutput: true },
      { text: "✓ Connected to Sui mainnet", delay: 1000, isOutput: true, isSuccess: true },
      { text: "$ waltodo add 'Build decentralized app'", delay: 2000 },
      { text: "✓ Task encrypted and stored on Walrus", delay: 2500, isOutput: true, isSuccess: true },
      { text: "$ waltodo list", delay: 3500 },
      { text: "[ ] Build decentralized app", delay: 4000, isOutput: true },
      { text: "[ ] Deploy to Sui blockchain", delay: 4200, isOutput: true },
      { text: "[✓] Setup Walrus storage", delay: 4400, isOutput: true, isComplete: true }
    ],
    resetDelay: 8000,
    typeSpeed: 50
  },

  // WalSheetz terminal demo
  walsheetz: {
    commands: [
      { text: "$ walsheetz create budget-2024", delay: 0 },
      { text: "Creating onchain spreadsheet...", delay: 500, isOutput: true },
      { text: "✓ Sheet created on Sui blockchain", delay: 1200, isOutput: true, isSuccess: true },
      { text: "$ walsheetz share --collaborators alice,bob", delay: 2500 },
      { text: "✓ Collaboration permissions set", delay: 3000, isOutput: true, isSuccess: true },
      { text: "$ walsheetz sync", delay: 4000 },
      { text: "Syncing with Walrus storage...", delay: 4300, isOutput: true },
      { text: "✓ Real-time sync enabled", delay: 5000, isOutput: true, isSuccess: true }
    ],
    resetDelay: 8500,
    typeSpeed: 45
  },

  // Tundra terminal demo
  tundra: {
    commands: [
      { text: "$ tundra pipeline create data-flow", delay: 0 },
      { text: "Initializing ETL pipeline...", delay: 600, isOutput: true },
      { text: "✓ Pipeline deployed to Sui", delay: 1400, isOutput: true, isSuccess: true },
      { text: "$ tundra transform --input csv --output json", delay: 2800 },
      { text: "Processing 10,000 records...", delay: 3200, isOutput: true },
      { text: "◐ 25% complete", delay: 3800, isOutput: true },
      { text: "◑ 50% complete", delay: 4200, isOutput: true },
      { text: "◒ 75% complete", delay: 4600, isOutput: true },
      { text: "✓ Transformation complete", delay: 5200, isOutput: true, isSuccess: true }
    ],
    resetDelay: 9000,
    typeSpeed: 40
  },

  // Common terminal elements
  prompts: {
    user: "$ ",
    system: "# ",
    loading: "...",
    success: "✓ ",
    error: "✗ ",
    warning: "⚠ "
  },

  // Status indicators
  status: {
    pending: "[ ]",
    complete: "[✓]",
    failed: "[✗]",
    inProgress: "◐",
    warning: "[!]"
  },

  // Color coding
  colors: {
    command: "text-cyan-400",
    output: "text-gray-300",
    success: "text-green-400",
    error: "text-red-400",
    warning: "text-yellow-400",
    prompt: "text-purple-400"
  },

  // Animation settings
  animation: {
    typeSpeed: {
      slow: 80,
      normal: 50,
      fast: 30,
      instant: 10
    },
    cursorBlink: "animate-pulse",
    resetDelay: {
      short: 6000,
      normal: 8000,
      long: 10000
    }
  }
}

// Terminal command interface
export interface TerminalCommand {
  text: string
  delay: number
  isOutput?: boolean
  isSuccess?: boolean
  isError?: boolean
  isComplete?: boolean
  isWarning?: boolean
}

export interface TerminalSequence {
  commands: TerminalCommand[]
  resetDelay: number
  typeSpeed: number
}

// Utility functions for terminal content
export const getTerminalSequence = (product: 'waltodo' | 'walsheetz' | 'tundra'): TerminalSequence => {
  return terminal[product]
}

export const createTerminalCommand = (
  text: string,
  delay: number,
  options: Partial<Omit<TerminalCommand, 'text' | 'delay'>> = {}
): TerminalCommand => {
  return {
    text,
    delay,
    ...options
  }
}

export const getTerminalColor = (type: keyof typeof terminal.colors) => {
  return terminal.colors[type]
}

export const getStatusIcon = (status: keyof typeof terminal.status) => {
  return terminal.status[status]
}

export const getPromptIcon = (type: keyof typeof terminal.prompts) => {
  return terminal.prompts[type]
}

export const getTypeSpeed = (speed: keyof typeof terminal.animation.typeSpeed) => {
  return terminal.animation.typeSpeed[speed]
}

// Type exports
export type TerminalProduct = 'waltodo' | 'walsheetz' | 'tundra'
export type TerminalColor = keyof typeof terminal.colors
export type TerminalStatus = keyof typeof terminal.status
export type TerminalPrompt = keyof typeof terminal.prompts