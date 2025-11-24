---
title: "What is StoneYield?"
description: "Introduction to StoneYield – a soul-bound hedging network built around sUSDC and the STUSD wrapper"
next: "about/how-it-works"
---

# What is StoneYield?

StoneYield is a decentralized hedging network on Binance Smart Chain (BSC) that pairs institutional risk controls with composable DeFi rails. Instead of chasing unsustainable emissions, the protocol mints **sUSDC**, a soul-bound representation of hedged capital, and exposes it to curated multi-strategy vaults. Whenever liquidity is needed, that same position can be wrapped into **STUSD**, a transferable mirror that stays 100% collateralized.

## sUSDC: The Soul-Bound Core

Every USDC deposit routes through StoneYield automation and mints sUSDC directly to the originating wallet:

- **Non-transferable security** – sUSDC cannot move between wallets, eliminating flash-loan and sandwich vectors.
- **Deterministic unlocks** – programmable lock menus (7 / 30 / 90 days) protect strategy safety.
- **Native yield** – harvested APY flows straight back to each wallet based on its sUSDC balance.

## STUSD: Portable Liquidity

Treasury desks can convert sUSDC into STUSD at a 1:1 ratio via the StoneYield wrapper contract:

- **DEX + DeFi ready** – STUSD moves freely across PancakeSwap, lending markets, and automation flows.
- **Always collateralized** – each STUSD remains backed by its originating sUSDC position.
- **No strategy disruption** – unwrapping instantly returns to the protected, soul-bound state.

## Operating Flow

1. Deposit USDC into StoneYield.
2. Receive sUSDC (soul-bound) while capital is deployed into hedged strategies.
3. Optionally wrap to STUSD for on-chain liquidity needs.
4. Harvest 93%+ of strategy APY (StoneYield retains a protocol fee for operations).
5. Request unlocks according to the configured lock schedule.

## Architecture Pillars

- **Security-first**: multisig treasury controls, daily mint throttles, and audited smart contracts.
- **Transparency**: live telemetry, unlock calendars, and wallet-level KPIs across the dashboard + docs.
- **Composability**: STUSD remains chain-agnostic while sUSDC keeps risk quarantined to authenticated wallets.

## Why BSC?

StoneYield ships on Binance Smart Chain for low gas costs, rapid confirmations, and immediate access to the venues that power our hedging and lending strategies.
