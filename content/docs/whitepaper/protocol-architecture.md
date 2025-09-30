---
title: "Protocol Architecture"
description: "Technical design of HedgeCore smart contract system and modular infrastructure"
prev: "whitepaper/abstract"
next: "whitepaper/tokenomics"
---

# Protocol Architecture

HedgeCore implements a modular smart contract infrastructure engineered to optimize yield generation while preserving security and operational clarity. The protocol issues and administers soul-bound, yield-accruing tokens (sUSDC) that generate returns via Venus Protocol integration.

## Foundation Principles

- **Modular Design**: Distinct contracts governing staking mechanics, yield distribution, and strategy execution.
- **Chain-Enforced Rules**: All essential constraints—including transfer limitations and temporal locks—execute on-chain.
- **Access Control**: Critical operations mandate owner or operator privileges (preferably multisignature).
- **Observable State**: Complete protocol and participant states accessible through public view functions.
- **Yield Maximization**: Automated deposit routing to revenue-generating strategies.

## Smart Contract System

The infrastructure comprises three primary contracts:

### 1. StakeableAssetImpl (sUSDC Token)
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

### 3. VenusUSDCVault
- ERC-4626 standard vault for Venus Protocol connectivity
- Channels USDC into Venus for yield accumulation
- Administers vUSDC positions and interest accrual
- Delivers standardized router interface

## Operational Components

### Primary Token Operations
- **Deposit & Generation**: Transforms USDC → sUSDC at 1:1 ratio with participant-specified lock duration.
- **Yield Distribution**: Generates supplementary sUSDC from accumulated returns.
- **Position Release**: Manual unlock procedure post-expiration.
- **Accelerated Redemption**: Operator-authorized sUSDC burn for USDC recovery.
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
Participant USDC → StakeableAsset → StrategyRouter → VenusUSDCVault → Venus Protocol
                                                                            ↓
Participant sUSDC ← Yield Allocation ← Protocol (93%) ← Returns Generation
```

## Design Constraints

HedgeCore maintains security through exclusions:

- Auto-compounding mechanisms within token contracts.
- Default mobility for locked positions.
- Inflationary yield generation.
- Direct oracle dependencies.

## hUSDC Wrapper Layer

For liquidity requirements, HedgeCore provides hUSDC—a tradeable wrapper encapsulating sUSDC:

- Enables DEX participation while preserving yield generation
- Maintains soul-bound properties for underlying sUSDC
- Provides market access without compromising security model

## Architectural Summary

The protocol architecture deliberately embraces constraints: minimizing complexity reduces vulnerability surface and enhances auditability. Through a consolidated contract structure and rigorous lock/transfer enforcement, HedgeCore targets sustained reliability in adversarial environments.