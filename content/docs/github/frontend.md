---
title: "Frontend"
description: "StoneYield protocol user interface repository"
prev: "github/smart-contracts"
next: "community/join"
---

# Frontend

The StoneYield frontend provides an intuitive interface for interacting with the protocol's smart contracts.

## Repository

🔗 **GitHub**: [github.com/StoneYield-Labs/stoneyield/frontend](https://github.com/StoneYield-Labs/stoneyield/tree/main/frontend)

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: ethers.js / wagmi
- **State Management**: React Context
- **UI Components**: Headless UI

## Features

### Core Functionality

- **Wallet Connection**: MetaMask, WalletConnect support
- **Deposit USDC**: Mint soul-bound STUSD tokens
- **View Positions**: Real-time balance and lock status
- **Unlock Tokens**: Transition from locked to transferable state
- **Wrap/Unwrap**: Convert between STUSD and sUSDC
- **Analytics Dashboard**: Protocol statistics and APY tracking

### User Experience

- Responsive mobile design
- Real-time transaction status
- Gas estimation
- Error handling and user feedback
- Lock timer countdown
- Yield calculations

## Repository Structure

```
frontend/
├── app/
│   ├── dashboard/           # Main dashboard
│   ├── wrap/               # Wrapper interface
│   └── analytics/          # Protocol stats
├── components/
│   ├── wallet/             # Wallet connection
│   ├── forms/              # Input components
│   └── ui/                 # Shared UI
├── hooks/
│   ├── useContract.ts      # Contract interactions
│   ├── useWallet.ts        # Wallet management
│   └── useBalance.ts       # Balance queries
├── lib/
│   ├── contracts/          # Contract ABIs
│   └── utils/              # Helper functions
└── public/                 # Static assets
```

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- MetaMask wallet

### Installation

```bash
git clone https://github.com/StoneYield-Labs/stoneyield.git
cd stoneyield/frontend
npm install
```

### Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_CHAIN_ID=56
NEXT_PUBLIC_RPC_URL=https://bsc-dataseed.binance.org
NEXT_PUBLIC_SUSDC_ADDRESS=0x...
NEXT_PUBLIC_STUSD_ADDRESS=0x...
NEXT_PUBLIC_WRAPPER_ADDRESS=0x...
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Key Components

### WalletConnect Component

```typescript
// components/wallet/WalletConnect.tsx
export function WalletConnect() {
  const { connect, disconnect, address } = useWallet()

  return (
    <button onClick={address ? disconnect : connect}>
      {address ? `${address.slice(0, 6)}...` : 'Connect Wallet'}
    </button>
  )
}
```

### Deposit Form

```typescript
// components/forms/DepositForm.tsx
export function DepositForm() {
  const { deposit, isLoading } = useContract()

  const handleDeposit = async (amount: string) => {
    await deposit(parseUnits(amount, 18))
  }

  return <form onSubmit={handleDeposit}>...</form>
}
```

### Balance Display

```typescript
// components/dashboard/Balance.tsx
export function Balance() {
  const { STUSDBalance, sUSDCBalance } = useBalance()

  return (
    <div>
      <p>STUSD: {formatUnits(STUSDBalance, 18)}</p>
      <p>sUSDC: {formatUnits(sUSDCBalance, 18)}</p>
    </div>
  )
}
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Alternative Hosting

Compatible with:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted

## Contributing

We welcome frontend contributions:

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Test thoroughly
5. Submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Maintain responsive design
- Add proper error handling
- Write clear component documentation
- Test on multiple devices/browsers

## License

MIT License - see LICENSE file for details
