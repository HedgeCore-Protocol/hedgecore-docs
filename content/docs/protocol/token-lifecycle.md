---
title: "Token Lifecycle"
description: "Complete lifecycle management for sUSDC soul-bound hedging tokens"
next: "protocol/locking-mechanism"
---

# Token Lifecycle

The HedgeCore protocol administers a comprehensive lifecycle for sUSDC, the soul-bound hedging token. Each stage maintains careful engineering to enforce security, ensure transparency, and deliver sustainable yield without speculative transferability.

## 1. Deposit and Generation

Participants initiate by authorizing protocol USDC transfers from their wallets. Following approval, the protocol generates equivalent sUSDC (1:1) to the participant's address. This operation executes by the protocol owner (typically multisig) through the `depositAndMint()` function.

Key characteristics:
- sUSDC generates with specified lock duration (minimum 1 hour, maximum 365 days)
- Lock enforces per-wallet via timestamp (`unlockAt`)
- Tokens maintain non-transferability while locked

## 2. Lock Duration

Upon generation, the participant's wallet receives time-lock, preventing token movement or approval until lock expiration. Lock durations remain participant-defined but bounded within permitted range. Following lock expiration, the participant must manually invoke `unlock()` to transition their address into fully transferable state.

## 3. Reward Allocation

The protocol periodically distributes yield through the `rewardMint()` function. This function generates additional sUSDC tokens to selected participants. Newly generated rewards inherit lock status:
- If the participant maintains existing lock, new rewards follow current lock
- If the participant receives first reward, a 1-second placeholder lock applies to enforce manual `unlock()` step

## 4. Unlocking

Following lock period expiration, participants must explicitly invoke `unlock()` to designate their address as transferable. This introduces supplementary security layer and prevents accidental token transfers. Administrators may also execute emergency unlock utilizing `adminUnlock()` in exceptional cases.

## 5. Redemption

If premature exit becomes necessary, administrators may invoke `earlyRedeem()` to burn sUSDC from a participant and return equivalent USDC amount. This process maintains strict owner-control and requires protocol to maintain sufficient USDC reserves.

## 6. Lifecycle Finalization

Following unlocking, participants can:
- Transfer sUSDC (if protocol permits via `isDex`)
- Engage with whitelisted DEX or liquidity pools
- Burn sUSDC via `burn()` for treasury or system operations

The lifecycle maintains on-chain tracking utilizing mappings like `unlockAt`, `totalStaked`, and `hasStaked`, enabling complete visibility into hedging history and lock status.
