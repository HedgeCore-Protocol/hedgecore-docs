---
title: "sUSDC Ecosystem"
description: "One-way wrapper enabling conversion from sUSDC to STUSD with lock support"
prev: "whitepaper/tokenomics"
next: "whitepaper/security-model"
---

# sUSDC Ecosystem

## Overview

The sUSDC ecosystem implements a one-way conversion mechanism from sUSDC (tradeable ERC20) to STUSD (soul-bound token). This architecture enables participants to convert their liquid sUSDC holdings into yield-bearing STUSD positions.

## Token Architecture

### STUSD (Soul-bound Layer)
- **Non-transferable** (with lock support)
- **Yield-bearing**: Accrues returns from Venus Protocol
- **Lock enforcement**: Supports time-locked positions
- **Protected design**: Resistant to flash loan attacks

### sUSDC (Liquidity Layer)
- **ERC20 Standard**: Fully transferable and tradeable
- **One-way conversion**: Converts to STUSD via wrapper (no reverse path)
- **DEX Compatible**: Tradable on PancakeSwap and alternative exchanges
- **DeFi Integration-Ready**: Deployable as collateral or in yield strategies

## Technical Architecture

### sUSDCWrapper Contract

The wrapper contract manages one-way conversion from sUSDC to STUSD:

```solidity
contract STUSDWrapper {
    // Core conversion function (one-way only)
    function wrapTokens(uint256 amount) external

    // Lock administration for investor vesting
    function wrapWithLock(address to, uint256 amount, uint256 unlockTime) external

    // Lock info query
    function getLockInfo(address account) external view returns (uint256 amount, uint256 unlockTime)

    // Treasury utilities
    function transferReserves(address to, uint256 amount) external
    function transferAllReserves(address to) external returns (uint256)

    // Operator permissions
    function setOperationsRole(address operator, bool granted) external
}
```

### SUDC (STUSD) Token Implementation

STUSD implements lock-conscious transfer logic:

```solidity
contract STUSD is ERC20, AccessControl {
    // Validates locks before transfers
    function _update(address from, address to, uint256 amount) internal override {
        // Confirm sender possesses adequate unlocked balance
        (uint256 locked, uint256 unlockTime) = ISTUSDWrapper(wrapper).getLockInfo(from);
        require(balanceOf(from) - amount >= locked, "STUSD: Tokens locked");
        super._update(from, to, amount);
    }

    // Minting and burning (wrapper only)
    function issueFromWrapper(address to, uint256 amount) external
}
```

## Key Features

### One-Way Conversion
- **sUSDC → STUSD**: Convert tradeable sUSDC to yield-bearing STUSD
- **No reverse path**: Conversion is permanent (no unwrap function)
- **Yield generation**: STUSD immediately starts earning Venus yields
- **Lock support**: Optional time-locks for vesting schedules

### Value Flow
1. User holds sUSDC (tradeable ERC20)
2. User calls `wrapTokens()` to convert to STUSD
3. STUSD accrues yield from Venus Protocol
4. No way to convert back to sUSDC

## Application Scenarios

### 1. Yield Position Entry
Participants convert liquid sUSDC holdings into yield-generating STUSD positions to access Venus Protocol returns.

### 2. Vesting Schedules
Use `wrapWithLock()` for team/investor allocations with programmable unlock timetables that prevent premature transfers.

### 3. Treasury Management
Protocols convert idle sUSDC reserves to STUSD for sustainable yield generation without speculative risk.

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
// User converts sUSDC to STUSD
sUSDC.approve(address(wrapper), amount);
wrapper.wrapTokens(amount);
// User now has STUSD earning yield
```

### Locked Conversion (Vesting)

```solidity
// Operator creates locked position
sUSDC.approve(address(wrapper), amount);
wrapper.wrapWithLock(recipient, amount, unlockTime);
// Recipient has STUSD but transfers are locked until unlockTime
```

## Summary

The sUSDC ecosystem provides a straightforward mechanism for converting liquid sUSDC tokens into yield-bearing STUSD positions. The one-way architecture eliminates complexity and potential exploit vectors while enabling yield generation through Venus Protocol integration.
