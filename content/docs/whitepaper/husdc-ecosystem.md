---
title: "hUSDC Ecosystem"
description: "One-way wrapper enabling conversion from hUSDC to sUSDC with lock support"
prev: "whitepaper/tokenomics"
next: "whitepaper/security-model"
---

# hUSDC Ecosystem

## Overview

The hUSDC ecosystem implements a one-way conversion mechanism from hUSDC (tradeable ERC20) to sUSDC (soul-bound token). This architecture enables participants to convert their liquid hUSDC holdings into yield-bearing sUSDC positions.

## Token Architecture

### sUSDC (Soul-bound Layer)
- **Non-transferable** (with lock support)
- **Yield-bearing**: Accrues returns from Venus Protocol
- **Lock enforcement**: Supports time-locked positions
- **Protected design**: Resistant to flash loan attacks

### hUSDC (Liquidity Layer)
- **ERC20 Standard**: Fully transferable and tradeable
- **One-way conversion**: Converts to sUSDC via wrapper (no reverse path)
- **DEX Compatible**: Tradable on PancakeSwap and alternative exchanges
- **DeFi Integration-Ready**: Deployable as collateral or in yield strategies

## Technical Architecture

### HUSDCWrapper Contract

The wrapper contract manages one-way conversion from hUSDC to sUSDC:

```solidity
contract HUSDCWrapper {
    // Core conversion function (one-way only)
    function hedgeWrap(uint256 amount) external

    // Lock administration for investor vesting
    function hedgeWrapLocked(address to, uint256 amount, uint256 unlockTime) external
    function hedgeBurnLocked(address from, uint256 amount) external

    // Lock info query
    function getHedgeLockInfo(address account) external view returns (uint256, uint256)

    // Admin functions
    function hedgeSweep(address to, uint256 amount) external
    function hedgeSweepAll(address to) external
}
```

### SUDC (sUSDC) Token Implementation

sUSDC implements lock-conscious transfer logic:

```solidity
contract SUDC is ERC20, AccessControl {
    // Validates locks before transfers
    function _update(address from, address to, uint256 amount) internal override {
        // Confirm sender possesses adequate unlocked balance
        (uint256 locked, uint256 unlockTime) = IHUSDCWrapper(wrapper).getHedgeLockInfo(from);
        require(balanceOf(from) - amount >= locked, "SUDC: Tokens locked");
        super._update(from, to, amount);
    }

    // Minting and burning (wrapper only)
    function hedgeMint(address to, uint256 amount) external
    function hedgeBurnFrom(address from, uint256 amount) external
}
```

## Key Features

### One-Way Conversion
- **hUSDC → sUSDC**: Convert tradeable hUSDC to yield-bearing sUSDC
- **No reverse path**: Conversion is permanent (no unwrap function)
- **Yield generation**: sUSDC immediately starts earning Venus yields
- **Lock support**: Optional time-locks for vesting schedules

### Value Flow
1. User holds hUSDC (tradeable ERC20)
2. User calls `hedgeWrap()` to convert to sUSDC
3. sUSDC accrues yield from Venus Protocol
4. No way to convert back to hUSDC

## Application Scenarios

### 1. Yield Position Entry
Participants convert liquid hUSDC holdings into yield-generating sUSDC positions to access Venus Protocol returns.

### 2. Vesting Schedules
Use `hedgeWrapLocked()` for team/investor allocations with programmable unlock timetables that prevent premature transfers.

### 3. Treasury Management
Protocols convert idle hUSDC reserves to sUSDC for sustainable yield generation without speculative risk.

## Security Framework

### Wrapper Protection
- Immutable contract architecture
- One-way design prevents exploit vectors
- Lock enforcement at contract level
- Reentrancy guards on all operations

### Economic Protection
- No price peg to maintain (one-way conversion)
- No algorithmic mechanisms to fail
- Direct conversion without complex logic
- No reliance on oracles

## Conversion Process

### Standard Conversion

```solidity
// User converts hUSDC to sUSDC
hUSDC.approve(address(wrapper), amount);
wrapper.hedgeWrap(amount);
// User now has sUSDC earning yield
```

### Locked Conversion (Vesting)

```solidity
// Operator creates locked position
hUSDC.approve(address(wrapper), amount);
wrapper.hedgeWrapLocked(recipient, amount, unlockTime);
// Recipient has sUSDC but transfers are locked until unlockTime
```

## Summary

The hUSDC ecosystem provides a straightforward mechanism for converting liquid hUSDC tokens into yield-bearing sUSDC positions. The one-way architecture eliminates complexity and potential exploit vectors while enabling yield generation through Venus Protocol integration.
