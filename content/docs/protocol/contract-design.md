---
title: "Contract Design"
description: "Modular smart contract architecture for secure yield generation"
prev: "protocol/transfer-restrictions"
next: "protocol/security-limits"
---

# Contract Design

The StoneYield protocol comprises a modular smart contract architecture engineered to generate yields while maintaining security and operational adaptability. The architecture isolates concerns between token administration, yield routing, and strategy execution.

## Architecture Overview

### Core Contracts

#### 1. StakeableAssetImpl (STUSD Token)
Inherits from OpenZeppelin upgradeable components:
- `ERC20Upgradeable`: standard token interface with upgradeability
- `ERC20PermitUpgradeable`: enables gasless approvals (EIP-2612)
- `Ownable2StepUpgradeable`: two-phase ownership transfer for security
- `PausableUpgradeable`: allows emergency pause of critical functions
- `ReentrancyGuardUpgradeable`: prevents nested reentrant calls

#### 2. StrategyRouter
Administers yield generation strategies:
- Routes USDC deposits to Venus Protocol
- Manages strategy weights and allocations
- Controls withdrawals from yield sources
- Owner-managed strategy configuration

#### 3. VenuSTUSDVault
ERC-4626 compliant vault for Venus integration:
- Deposits USDC into Venus Protocol
- Manages vUSDC tokens
- Tracks yield accrual
- Provides standardized interface for router

## Key Features

### Token Administration (StakeableAssetImpl)
- **Soul-bound logic**: Enforced via custom `_update()` hook that locks transfers by default.
- **Duration-based locks**: Implemented using `unlockAt` mapping per wallet.
- **Manual unlocking**: Participants must invoke `unlock()` to enable transferability.
- **Whitelist control**: DEX and pool addresses can receive whitelist via `setDex()`.
- **Reward generation**: Admin can issue locked or placeholder-locked STUSD using `rewardMint()`.
- **Emergency functions**: Includes `pause()`, `adminUnlock()`, `sweepUSDC()`.

### Yield Production (StrategyRouter + VenuSTUSDVault)
- **Automated routing**: USDC deposits automatically route to Venus Protocol
- **Yield optimization**: Deposits earn lending interest on Venus
- **Strategy management**: Owner can adjust weights and introduce new strategies
- **Transparent yields**: Venus APY publicly verifiable on-chain
- **Protocol fee**: 7% of Venus yields retained as protocol revenue

## Events

All critical actions emit events for external tracking and transparency:

- `Deposited`, `Unlocked`, `RewardsDistributed`, `EarlyRedeemed`
- `DexWhitelisted`, `TreasurySweep`, `SpecialAddressSet`
- `StakedTokensBurned`, `EmergencyWithdraw`

These events facilitate frontend updates, subgraph indexing, and audit logging.

## Versioning and Deployment

- Solidity version: `^0.8.28`
- Deployed on: Binance Smart Chain (BSC)
- USDC target: BSC USDC uses 18 decimals
- Upgradeability: StakeableAssetImpl uses transparent proxy pattern for upgradeability
- Venus Integration: Connects to Venus Protocol's vUSDC market on BSC
- Multisig recommended: Contract ownership should transfer to Gnosis Safe multisig for operational security

## Gas and Efficiency

The contract optimizes for gas usage:
- Batch operations available for minting and deposit (`batchDepositAndMint`)
- Single ERC20 balance storage per participant
- Lock information stored in lightweight `uint40` timestamps

## Yield Flow Architecture

```
User Deposits USDC
       ↓
StakeableAssetImpl (mints STUSD)
       ↓
StrategyRouter (routes to strategies)
       ↓
VenuSTUSDVault (deposits to Venus)
       ↓
Venus Protocol (generates yield)
       ↓
Protocol retains 7% fee
       ↓
93% of yield distributed to users
```

## Summary

The StoneYield protocol combines soul-bound token mechanics with automated yield generation through Venus Protocol. This modular design provides participants with transparent, sustainable yields while maintaining the security and non-transferability features essential to the protocol's mission. The 7% protocol fee ensures long-term sustainability while participants benefit from 93% of generated yields.
