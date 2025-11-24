---
title: "Security & Limits"
description: "Multi-layered safety mechanisms and operational controls"
prev: "protocol/contract-design"
next: "protocol/analytics-monitoring"
---

# Security & Limits

StoneYield's architecture incorporates multiple layers of built-in safety mechanisms to minimize risk, ensure system integrity, and prevent misuse. These controls span from smart contract-level protections to operational governance practices.

## Daily Constraints

To mitigate potential exploit impact and preserve protocol health, StoneYield enforces daily caps on deposit and mint volumes:

- **DAILY_DEPOSIT_LIMIT**: Maximum USDC quantity that can deposit across all participants per 24-hour period.
- **DAILY_MINT_LIMIT**: Maximum STUSD quantity that can generate across all participants per 24-hour period.

These limits reset every new day (UTC-based) and track using on-chain counters. Exceeding them results in transaction reverts.

## Reentrancy Defense

All state-changing functions involving external calls wrap with OpenZeppelin's `nonReentrant` modifier. This prevents common reentrancy attacks where malicious contracts attempt to recursively engage with the protocol during execution.

## Emergency Controls

StoneYield includes emergency tools deployable by protocol owner (typically multisig):

- `pause()` and `unpause()` to halt or resume sensitive operations
- `emergencyWithdrawUSDC()` to recover protocol-held USDC in systemic risk scenarios
- `recoverToken()` to rescue mistakenly sent tokens (excluding STUSD or core stablecoins)

These functions gate behind `onlyOwner` access and design for use with timelocks or multisig governance.

## Whitelisted Operations

To prevent unauthorized integrations, only approved DEXs, routers, and hedging pools may engage with locked STUSD. Whitelisting controls via `setDex()` and stores in the `isDex` mapping.

## Role Separation and Ownership

- The contract uses `Ownable2Step`, enabling secure ownership transfer in two phases.
- All sensitive functions (minting, sweeping, unlocks) restrict to `onlyOwner`.
- Strong recommendation that ownership assign to Gnosis Safe multisig with appropriate delay modules for critical functions.

## Transparency by Design

Every sensitive action emits events trackable off-chain:
- `Paused`, `Unpaused`, `EmergencyWithdraw`, `TreasurySweep`, etc.
- Limit counters and protocol statistics available via `getDailyLimitStatus()` and `getProtocolStats()`.

## Summary

Security in StoneYield enforces through real on-chain constraints, not just assumed economic incentives. The layered approach—combining rate limiting, reentrancy guards, ownership control, and event logging—makes the system resilient to both technical and economic attacks.
