---
title: "Abstract"
description: "Overview of HedgeCore protocol architecture and strategic yield optimization approach"
next: "whitepaper/protocol-architecture"
---

# Abstract

HedgeCore operates as a decentralized yield optimization protocol built on Binance Smart Chain (BSC), introducing soul-bound hedged tokens for secure capital deployment. At its core lies sUSDC, an immutable token generated through a 1:1 USDC deposit mechanism that delivers consistent returns via Venus Protocol integration.

The protocol's distinctive approach enforces wallet-specific time-locks with mandatory manual release procedures, eliminating token mobility throughout the staking duration. This design philosophy neutralizes common DeFi vulnerability vectors such as flash loan exploits and circular farming strategies, simultaneously strengthening the bond between participants and their capital positions.

Revenue generation occurs transparently via Venus Protocol's lending infrastructure, where the protocol captures a 7% performance fee. Participants retain 93% of generated yields, establishing sustainable economics without dependence on token emissions. Supplementary incentives may flow through governance-approved minting operations.

Addressing liquidity requirements without compromising security, HedgeCore introduces hUSDC (Hedged USDC), a freely tradeable ERC20 wrapper encapsulating sUSDC positions. This dual-token architecture enables market access through hUSDC exchange on decentralized platforms while the underlying sUSDC continues accruing yields. Emergency recovery mechanisms through KYC-verified operations provide additional user protection layers.

HedgeCore represents a security-focused staking infrastructure merging soul-bound token principles with proven yield strategies, achieving equilibrium between capital preservation, sustainable returns, and liquidity access via the hUSDC wrapper ecosystem.