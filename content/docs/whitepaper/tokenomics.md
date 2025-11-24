---
title: "Tokenomics"
description: "STUSD and sUSDC economic model, supply dynamics, fee structure, and reward mechanisms"
prev: "whitepaper/protocol-architecture"
next: "whitepaper/yield-generation"
---

# Tokenomics

StoneYield introduces a supply model without predefined maximums. Token generation responds dynamically to protocol activities—participant deposits and controlled reward emissions drive STUSD creation.

## Genesis and Liquidity Bootstrap

At launch, STUSD supply begins at zero. To establish decentralized exchange liquidity (for example, on PancakeSwap), protocol administrators may pre-generate a designated quantity—potentially 5,000 STUSD—matched with equivalent USDC from treasury reserves.

This bootstrapping executes through `rewardMint()` or `_mint()` functions, with `adminUnlock()` enabling liquidity pool compatibility.

Implementation steps:
- Generate 5,000 STUSD to treasury wallet
- Allocate 5,000 USDC from protocol reserves
- Establish `STUSD/USDC` pair on DEX
- Authorize DEX router via `setDex()`

This liquidity provision improves protocol accessibility and establishes pricing benchmarks rather than encouraging speculative activity.

## Token Generation Pathways

STUSD enters circulation through:

- `depositAndMint()` – Direct 1:1 user deposits with enforced time-locks
- `rewardMint()` – Governance-authorized reward distribution
- `airdrop()` – Treasury-to-user direct allocations (unlocked state only)
- `manualMint` (constructor or internal `_mint()`) – Protocol operations including LP initialization

## Zero Inflation Architecture

No algorithmic expansion, reward scaling, or rebase mechanisms exist. Every minting operation requires explicit on-chain execution under protocol governance oversight. This establishes conservative and foreseeable supply progression.

## Token Reduction Methods

STUSD exits circulation via:

- `earlyRedeem()` – Owner-initiated burn with USDC return
- `burn(address, amount)` – Governance-triggered manual reduction
- Automated burns through DEX transactions with burn-enabled contracts

Burning occurs infrequently, reserved for correction scenarios, liquidity rebalancing, or system-level interventions.

## Dual-Token Structure

StoneYield implements two complementary tokens:

- **STUSD** (Soul-bound USDC): Immobile, locked yield-bearing positions
- **sUSDC** (StoneYield USDC): Tradeable wrapper providing liquidity access

Participants deposit USDC, receive STUSD positions. For liquidity needs, sUSDC wrapping enables market participation while maintaining yield generation.

## Economic Summary

StoneYield's token economics prioritize utility over speculation. All circulating supply maintains USDC backing at generation, ties to wallet-specific staking commitments, and operates exclusively through transparent protocol functions.
