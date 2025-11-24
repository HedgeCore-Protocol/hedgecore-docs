---
title: "Protocol Architecture"
description: "Technical design of StoneYield smart contract system and modular infrastructure"
prev: "whitepaper/abstract"
next: "whitepaper/tokenomics"
---

# Protocol Architecture

StoneYield implements a modular smart contract infrastructure engineered to optimize yield generation while preserving security and operational clarity. The protocol issues and administers soul-bound, yield-accruing tokens (STUSD) that generate returns via Venus Protocol integration.

## Foundation Principles

- **Modular Design**: Distinct contracts governing staking mechanics, yield distribution, and strategy execution.
- **Chain-Enforced Rules**: All essential constraints—including transfer limitations and temporal locks—execute on-chain.
- **Access Control**: Critical operations mandate owner or operator privileges (preferably multisignature).
- **Observable State**: Complete protocol and participant states accessible through public view functions.
- **Yield Maximization**: Automated deposit routing to revenue-generating strategies.

## Smart Contract System

The infrastructure comprises three primary contracts:

### 1. StakeableAssetImpl (STUSD Token)
Inherits OpenZeppelin components:
- `ERC20Upgradeable`: Conventional token interface supporting upgrades.
- `ERC20PermitUpgradeable`: EIP-2612 gasless authorization.
- `Ownable2StepUpgradeable`: Protected two-phase ownership migration.
- `ReentrancyGuardUpgradeable`: Reentrancy attack prevention.
- `PausableUpgradeable`: Circuit breaker for emergency scenarios.

### 2. StrategyRouter
- Directs USDC deposits toward yield strategies
- Governs strategy weighting and capital allocation
- Processes strategy withdrawals
- Owner-managed strategy configuration

### 3. VenuSTUSDVault
- ERC-4626 standard vault for Venus Protocol connectivity
- Channels USDC into Venus for yield accumulation
- Administers vUSDC positions and interest accrual
- Delivers standardized router interface

## Operational Components

### Primary Token Operations
- **Deposit & Generation**: Transforms USDC → STUSD at 1:1 ratio with participant-specified lock duration.
- **Yield Distribution**: Generates supplementary STUSD from accumulated returns.
- **Position Release**: Manual unlock procedure post-expiration.
- **Accelerated Redemption**: Operator-authorized STUSD burn for USDC recovery.
- **Mobility Constraints**: Locked positions prohibit transfers and approvals.

### Revenue Generation
- **Automatic Allocation**: Deposits flow directly to Venus Protocol.
- **Yield Harvesting**: Generated returns collected and allocated to participants.
- **Performance Fee**: 7% of Venus yields captured as protocol revenue.
- **Clear APY**: Participants receive 93% of Venus Protocol yields.

### Protection Mechanisms
- **Privilege Hierarchy**: Owner and operator roles for function segregation.
- **Emergency Halt**: Pausable operations for critical scenarios.
- **Rate Limiting**: Configurable thresholds on deposits and minting.
- **Secure Transitions**: Two-phase ownership migration process.

## Capital Flow Architecture

```
Participant USDC → StakeableAsset → StrategyRouter → VenuSTUSDVault → Venus Protocol
                                                                            ↓
Participant STUSD ← Yield Allocation ← Protocol (93%) ← Returns Generation
```

## Design Constraints

StoneYield maintains security through exclusions:

- Auto-compounding mechanisms within token contracts.
- Default mobility for locked positions.
- Inflationary yield generation.
- Direct oracle dependencies.

## sUSDC Wrapper Layer

For liquidity requirements, StoneYield provides sUSDC—a tradeable wrapper encapsulating STUSD:

- Enables DEX participation while preserving yield generation
- Maintains soul-bound properties for underlying STUSD
- Provides market access without compromising security model

## Architectural Summary

The protocol architecture deliberately embraces constraints: minimizing complexity reduces vulnerability surface and enhances auditability. Through a consolidated contract structure and rigorous lock/transfer enforcement, StoneYield targets sustained reliability in adversarial environments.