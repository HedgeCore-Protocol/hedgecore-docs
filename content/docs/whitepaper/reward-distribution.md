---
title: "Reward Distribution"
description: "StoneYield yield allocation methodology and reward mechanism"
prev: "whitepaper/locking-and-hedging"
next: "whitepaper/supply-control"
---

# Reward Distribution

StoneYield implements a bifurcated yield allocation system for participant rewards. The protocol generates consistent returns through Venus Protocol integration while preserving governance capacity for supplementary reward initiatives.

## Bifurcated Revenue Streams

### 1. Venus Protocol Returns (Foundation)
Protocol automatically produces yields via USDC deployment into Venus Protocol:

- **Gross Returns**: Venus Protocol's prevailing lending APY (variable, ~7-8%)
- **Performance Fee**: 7% of generated returns captured as protocol revenue
- **Net Participant Returns**: 93% of Venus yields allocated to stakers

**Illustration**: With Venus yielding 7.23% APY, participants realize 6.72% APY post-fee application.

### 2. Governance-Authorized Rewards (Enhancement)
Supplementary rewards deployable via `rewardMint()` function, restricted to protocol owner (multisignature). This facilitates:

- Incentive campaigns
- Early participant bonuses
- Community reward programs
- Strategic collaboration distributions

## Returns Calculation Model

```
Participant APY = (Venus APY × 0.93) + Governance Enhancement APY
```

Components:
- Venus APY fluctuates per Venus Protocol lending dynamics
- Governance Enhancement APY varies with protocol determinations

## Lock State Inheritance

All distributed rewards (Venus-derived and governance-minted) inherit recipient lock status:

- Locked addresses: rewards subject to identical `unlockAt` parameters
- Unlocked/new addresses: 1-second placeholder lock applied, mandating manual release

This preserves STUSD's soul-bound characteristics across all reward distributions.

## Verifiable Yield Monitoring

### Chain-Level Verification
Participants verify returns through:
- Venus Protocol's public `supplyRatePerBlock()` interface
- Protocol fee percentage (7%) displayed in interface
- Event emissions for all reward allocations

### Interface Presentation
The UI presents:
- Active Venus APY (gross)
- Protocol fee percentage
- Net participant APY (post-fee)
- Active governance rewards (when applicable)

## Push-Based Distribution

No participant-initiated claiming mechanism exists. All rewards deploy directly to participant wallets via:
- Scheduled yield distributions from Venus earnings
- Direct governance reward generation

This approach minimizes transaction costs and eliminates claim manipulation vulnerabilities.

## Transparency and Observability

All reward deployments generate events:
- `RewardsDistributed(address,uint256)` for distribution tracking
- Chain analytics aggregate cumulative yields
- Monitoring interfaces display real-time and historical reward data

## Fee Structure Disclosure

The 7% protocol fee on Venus returns is:
- Hardcoded in interface for transparency
- Allocated to protocol advancement and operations
- Explicitly communicated to all participants
- Verifiable via Venus rate comparison with distributed yields

## Distribution Summary

StoneYield's reward architecture synthesizes automated Venus Protocol yields with governance adaptability. The transparent 7% performance fee ensures sustainable advancement while participants capture 93% of generated returns. This combined framework delivers foreseeable baseline yields with enhancement potential, maintaining protocol's soul-bound token framework throughout.