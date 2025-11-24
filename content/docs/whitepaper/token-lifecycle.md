---
title: "Token Lifecycle"
description: "STUSD token progression through deposit, locking, unlocking, and reward phases"
prev: "whitepaper/tokenomics"
next: "whitepaper/locking-and-hedging"
---

# Token Lifecycle

The StoneYield token lifecycle implements regulated phases engineered to enforce staking commitment, yield qualification, and transfer security. Distinguished from conventional staking tokens, STUSD operates as soul-bound with precisely defined state progressions.

## Phase 1: Deposit and Generation

Lifecycle initiation occurs when participants authorize protocol USDC transfers and the owner (typically multisignature) executes `depositAndMint()`. The contract generates STUSD at 1:1 parity and establishes wallet time-locks for participant-specified durations (minimum 1 hour, maximum 365 days). Lock timestamps record in the `unlockAt` mapping.

## Phase 2: Locked Staking Duration

Throughout lock periods, wallets:
- Prohibit STUSD transfers or approvals freely
- Prevent token deployment in external protocols
- Qualify for reward allocation via `rewardMint()`

Locked tokens strengthen staking architecture by eliminating short-duration speculation or flash-loan exploitation patterns.

## Phase 3: Manual Release

Upon lock expiration, tokens maintain non-transferability until participants invoke `unlock()`. This deliberate step prevents automated bot-driven unlocking and ensures conscious participant re-engagement. Subsequently, wallets receive permanent unlocked status.

## Phase 4: Post-Unlock Status

Unlocked wallets gain capacity to:
- Transfer STUSD (when recipients also maintain unlocked or whitelisted status)
- Authorize contracts for STUSD utilization (subject to protocol parameters)
- Engage with whitelisted DEXs or liquidity integrations

When participant balances reach zero, addresses receive automatic unlocked designation via internal mechanisms (`_autoUnlock()`).

## Reward Progression

Rewards deploy through `rewardMint()`, which:
- Generates STUSD to participants
- Inherits existing lock parameters when established
- Applies 1-second placeholder lock when none exists

This prevents instantaneous reward liquidation and maintains yield connection to protocol engagement.

## Accelerated Exit

The owner may invoke `earlyRedeem()` enabling participants to exit prematurely, burning their STUSD and recovering USDC 1:1. This function targets exceptional circumstances and excludes participant-callable access.

## Lifecycle Protection

All lifecycle transitions enforce through contract logic:
- Transfers block via `_update()` unless both parties qualify
- Locks timestamp and specify per-wallet
- No passive unlocking occurs
- Reward generation respects lock parameters

The outcome delivers yield-bearing tokens with protocol enforcement, eliminating conventional transferable asset vulnerabilities.

## sUSDC Wrapper Integration

For liquidity needs during locked periods, participants can utilize sUSDC wrapper:
- Wraps locked STUSD into tradeable sUSDC
- Maintains underlying STUSD yield generation
- Enables market participation without compromising soul-bound properties
- Unwrapping returns to standard STUSD lifecycle

This dual-token approach preserves lifecycle integrity while providing liquidity access.