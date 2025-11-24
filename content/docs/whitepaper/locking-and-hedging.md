---
title: "Locking & Hedging Logic"
description: "Token immobility enforcement and soul-bound mechanics in StoneYield"
prev: "whitepaper/token-lifecycle"
next: "whitepaper/reward-distribution"
---

# Locking & Hedging Logic

StoneYield enforces token immobility via wallet-specific temporal locks and protocol-governed transfer permissions. These combined mechanics establish STUSD's soul-bound characteristics and protocol security foundation.

## Temporal Lock Architecture

Each STUSD generation event—participant deposits or reward allocation—establishes recipient address locks for specified durations. Lock parameters persist on-chain through the `unlockAt` mapping.

- Minimum duration: 1 hour
- Maximum duration: 365 days
- Release requires manual `unlock()` invocation

Locks govern entire wallets rather than individual tokens or batches. Locked addresses prohibit transfers, approvals, or other STUSD interactions beyond protocol-authorized operations.

## Soul-Bound Implementation

The contract overrides internal `_update()` functions to inspect all token movements. Transfer rejection occurs unless:

- Operation constitutes minting or burning
- Both sender and receiver maintain unlocked status
- Transaction involves whitelisted DEX or designated addresses

This architecture ensures STUSD remains bound to originating wallets until explicit release.

## Deliberate Release Process

Post-lock expiration, tokens maintain immobilization until holders explicitly invoke `unlock()`. This supplementary step ensures conscious participant engagement and guards against passive, automated progressions (e.g., flash bot-triggered unlock-and-transfer exploits).

## Permanent Unlock Status

Once wallets unlock, they maintain permanent unlocked status. The protocol employs `unlockAt[address] = 1` designating this state. Participants neither require nor can opt for voluntary re-locking.

## Automatic Release via Burn

When wallet balances reach zero while maintaining locked status (`unlockAt > 1`), the contract automatically resets lock status via `_autoUnlock()`. This maintains wallet state hygiene when participants fully redeem or burn positions.

## Hedging Through sUSDC

For liquidity access during lock periods without compromising soul-bound properties:
- sUSDC wrapper enables trading while STUSD remains locked
- Underlying STUSD continues yield generation
- Unwrapping restores standard STUSD lock status

## Implementation Summary

Locking and soul-bound enforcement operate as interconnected components of unified constraint architecture. Protocol token logic ensures STUSD movement only under verified, intentional, compliant conditions. This design fortifies staking infrastructure against composability exploits and enforces authentic position ownership.