---
title: "Smart Contracts"
description: "StoneYield protocol smart contract repository"
next: "github/frontend"
---

# Smart Contracts

The StoneYield smart contracts are open-source and available for review, audit, and contribution.

## Repository

🔗 **GitHub**: [github.com/StoneYield-Labs/stoneyield](https://github.com/StoneYield-Labs/stoneyield)

## Contract Architecture

### Core Contracts

- **SUDC**: STUSD token implementation with soul-bound logic
- **StrategyRouter**: Yield strategy routing and management
- **STUSDWrapper**: sUSDC → STUSD wrapper with lock orchestration
- **SUSDC**: ERC20 soul-bound staking token with lock-aware transfers

## Technology Stack

- **Solidity**: ^0.8.28
- **Framework**: Hardhat
- **Testing**: Hardhat + Chai
- **Network**: Binance Smart Chain (BSC)
- **Standards**: ERC20, ERC-4626, EIP-2612

## Repository Structure

```
contracts/
├── STUSD.sol                 # Transferable wrapper token
├── SUSDC.sol                 # Soul-bound staking token
├── STUSDWrapper.sol          # Wrapper contract
├── StrategyRouter.sol        # Yield routing
└── interfaces/
    └── ISTUSDWrapper.sol     # Wrapper interface

test/
├── SUDC.test.js
├── StrategyRouter.test.js
└── Wrapper.test.js

scripts/
├── deploy.js
└── verify.js
```

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- MetaMask or similar wallet

### Installation

```bash
git clone https://github.com/StoneYield-Labs/stoneyield-contracts-public.git
cd stoneyield-contracts-public
npm install
```

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy to BSC Testnet

```bash
npx hardhat run scripts/deploy.js --network bscTestnet
```

## Contract Addresses

### BSC Mainnet

- **SUDC (STUSD Token)**: `TBA`
- **StrategyRouter**: `TBA`
- **sUSDCWrapper**: `TBA`
- **sUSDC (sUSDC Token)**: `TBA`

### BSC Testnet

- **SUDC (STUSD Token)**: `TBA`
- **StrategyRouter**: `TBA`
- **sUSDCWrapper**: `TBA`
- **sUSDC (sUSDC Token)**: `TBA`

## Security

### Audits

- **Status**: Pending
- **Firms**: TBA

### Bug Bounty

We encourage responsible disclosure of security vulnerabilities:
- **Contact**: security@stoneyield.io
- **Rewards**: Based on severity

### Best Practices

- All contracts use OpenZeppelin libraries
- Comprehensive test coverage
- Reentrancy guards on external calls
- Time-locked upgrades
- Multisig ownership

## Contributing

We welcome contributions from the community:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

Please read our contribution guidelines before submitting.

## License

MIT License - see LICENSE file for details
