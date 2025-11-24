---
title: "Flash-Loan Resistance"
description: "Architectural defenses against flash loan exploitation vectors"
prev: "protocol/locking-mechanism"
next: "protocol/transfer-restrictions"
---

# Flash-Loan Resistance

Flash loans represent a significant threat vector in DeFi, enabling attackers to borrow substantial token quantities without collateral and exploit vulnerable systems within single transactions. StoneYield maintains explicit engineering to mitigate such vulnerabilities through combined architectural and protocol-level determinations.

## No Transferability = No Exploitation

Because STUSD maintains non-transferability while locked, it cannot move between accounts or protocols. This eliminates the fundamental requirement of flash loan strategies, which depend on rapid token movement to extract value. Regardless of borrowed tokens, they cannot deploy for arbitrage, recursive borrowing, or liquidity mining exploits.

## Lock Validation

All STUSD generated through deposits or reward allocations undergoes duration-based lock. Throughout the lock period:
- Transfers remain disabled unless the address receives explicit unlock
- Approvals face restriction unless engaging with whitelisted DEXs or the participant maintains unlocked status
- Tokens cannot move or liquidate in bulk within a flash loan timeframe

## Deliberate Unlock Requirement

The mandate to invoke `unlock()` following lock expiry introduces manual gate between holding and transferring. This ensures that regardless of time lock expiration, tokens maintain non-transferability until the participant takes action, effectively preventing automated scripts from exploiting unlock windows.

## Protocol-Level Throttling

StoneYield utilizes global daily constraints to prevent large-scale manipulation:
- `DAILY_DEPOSIT_LIMIT`: caps USDC inflows per day
- `DAILY_MINT_LIMIT`: caps STUSD issuance per day

This assists in reducing coordinated attack risk involving high-volume generation, such as recursive strategies or treasury drainage via flash loans.

## External Call Defense

Critical functions like `depositAndMint()` and `rewardMint()` receive protection with `ReentrancyGuard` and `nonReentrant` modifiers to prevent nested calls and reentrancy exploits. Additionally, the protocol's capacity to `pause()` operations provides multisig owners time to respond in extreme scenarios.

## Summary

The combination of non-transferability, delayed unlocking, daily generation constraints, and reentrancy protection provides StoneYield with robust native resistance against flash loan-based attacks. Rather than depending exclusively on external audits or economic incentives, the protocol enforces flash-loan safety at the most fundamental level: token movement itself.
