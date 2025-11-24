---
title: "Analytics & Monitoring"
description: "Read-only functions for dashboards and analytics platforms"
prev: "protocol/security-limits"
next: "protocol/yield-generation"
---

# Analytics & Monitoring

StoneYield provides several read-only functions to support dashboards, analytics platforms, and automated monitoring tools. These functions expose key protocol data points to enhance transparency and help participants, developers, and integrators make informed decisions.

## Protocol Statistics

The `getProtocolStats()` function returns high-level information about current protocol state:

- `totalSupply`: Total STUSD in circulation
- `totalUSDCDeposited`: Aggregate USDC ever deposited
- `totalRewardsDistributed`: Total rewards minted
- `totalActiveStakers`: Count of unique hedging participants
- `contractUSDCBalance`: USDC balance held by protocol
- `isPaused`: Emergency state of contract

These values can poll to build charts, track growth over time, or detect anomalies.

## Daily Limits Overview

The `getDailyLimitStatus()` function provides real-time usage data for current 24-hour cycle:

- `depositUsed` and `depositLimit`
- `mintUsed` and `mintLimit`
- `resetTime`: Timestamp when daily counters reset

This proves useful for monitoring congestion, gauging protocol usage, or setting up alerting systems for threshold events.

## Participant-Level Insight

The following functions expose per-participant analytics:

- `getUserInfo(address)`:
  - `isLocked`: Whether the participant currently locked
  - `remainingTime`: Seconds left until unlock
  - `totalBalance`: Current STUSD balance
  - `stakedAmount`: All-time USDC deposited by participant

- `getAvailableActions(address)`:
  - Boolean flags showing if participant can transfer, unlock, approve, or interact with DEX

These help power participant dashboards, eligibility checks, or UI state toggles.

## Events for Indexing

All key operations in protocol emit events such as:

- `Deposited`, `Unlocked`, `RewardsDistributed`, `EarlyRedeemed`
- `DexWhitelisted`, `Paused`, `Unpaused`, `EmergencyWithdraw`

These can index using The Graph, SubQuery, or any event-driven backend to provide live updates and analytics feeds.

## Summary

StoneYield exposes comprehensive, low-cost read access to essential protocol and participant data. These analytics endpoints support transparency, enable better tooling, and reduce reliance on off-chain assumptions when integrating or building on top of the protocol.
