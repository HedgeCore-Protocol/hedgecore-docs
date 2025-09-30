---
title: "What is HedgeCore?"
description: "Introduction to HedgeCore - a soul-bound hedged stablecoin protocol"
next: "about/how-it-works"
---

# What is HedgeCore?

HedgeCore operates as a decentralized hedging protocol architected to establish a novel class of stable assets on Binance Smart Chain (BSC), designated as **soul-bound stablecoins (sUSDC)**. Distinct from conventional stablecoins, sUSDC tokens maintain non-transferability and permanent binding to their originating wallet. This soul-bound architecture eliminates deployment in flash loan exploitation vectors or alternative high-frequency attack patterns, strengthening protocol-level security foundations.

## The hUSDC Innovation

To accommodate liquidity requirements while preserving security guarantees, HedgeCore introduces **hUSDC (Hedged USD)** - a tradeable ERC20 wrapper for sUSDC. Participants can convert their soul-bound sUSDC to hUSDC through the StUSDCWrapper contract, enabling:

- **DEX Trading**: hUSDC maintains full trading capability on PancakeSwap and alternative exchanges
- **DeFi Composability**: Deploy hUSDC as collateral, provide liquidity, or engage in yield optimization
- **Yield Preservation**: Underlying sUSDC continues Venus Protocol yield generation
- **1:1 Conversion**: Constant conversion between sUSDC and hUSDC at precise 1:1 ratio

HedgeCore prioritizes simplicity, security, and sustainability. Participants authorize protocol USDC transfers, and the protocol mints equivalent sUSDC to their wallet. Deposited USDC automatically routes to Venus Protocol for lending yield generation. While sUSDC remains immobile between wallets during lock durations, it continuously accumulates yield from Venus Protocol's lending infrastructure.

The protocol produces sustainable yields through Venus Protocol integration, with participants receiving 93% of generated APY (protocol retains 7% fee). This transparent yield architecture delivers real, verifiable returns without dependence on token inflation or unsustainable incentive structures. Supplemental rewards may distribute through governance determinations.

## Foundation Concept

When depositing USDC into HedgeCore:
1. Receive sUSDC tokens (soul-bound to your wallet)
2. Your USDC deploys into Venus Protocol for yield generation
3. Receive 93% of Venus APY (protocol retains 7% fee)
4. Supplemental rewards may distribute via governance
5. Zero flash loan attack risk due to soul-bound architecture

### Dual Token Architecture

**sUSDC (Soul-bound)**:
- Non-transferable throughout lock duration
- Accrues yield from Venus Protocol
- Protected against flash loan attack vectors
- Represents your hedging position

**hUSDC (Tradeable)**:
- Standard ERC20 token implementation
- Freely tradeable across DEXs
- 1:1 collateralized by sUSDC
- Enables liquidity access without unstaking

## Mission

Our mission centers on creating a secure, transparent, and sustainable yield generation mechanism for the DeFi ecosystem, eliminating prevalent vulnerabilities discovered in conventional protocols.

## Built on BSC

HedgeCore deploys on Binance Smart Chain, providing:
- Minimal transaction costs
- Rapid confirmation times
- Extensive ecosystem compatibility
- Seamless integration with established DeFi protocols
