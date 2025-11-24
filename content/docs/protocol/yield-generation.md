---
title: "Yield Generation"
description: "Sustainable yield through Venus Protocol integration"
prev: "protocol/analytics-monitoring"
next: "protocol/stusd-wrapper"
---

# Yield Generation

StoneYield generates sustainable yields for hedgers through integration with Venus Protocol, the leading lending platform on BNB Chain. This approach provides transparent, market-based returns without relying on token inflation or unsustainable incentives.

## How Yield Generation Works

### 1. Deposit Flow
When you deposit USDC into StoneYield:
```
Your USDC → StakeableAsset → StrategyRouter → VenuSTUSDVault → Venus Protocol
```

### 2. Venus Protocol Integration
- Your USDC supplies to Venus Protocol's lending pool
- Borrowers pay interest to access these funds
- Interest accrues in real-time as vUSDC appreciates
- No impermanent loss risk (single-asset lending)

### 3. Yield Collection
- Venus yields accrue automatically in vUSDC token
- Protocol collects yields periodically
- 7% protocol fee retained for operations
- 93% distributed to STUSD holders

## Current Yield Metrics

### Venus Protocol APY
- **Current Rate**: ~7-8% APY (variable)
- **Update Frequency**: Per block (~3 seconds)
- **Verification**: Check [Venus Protocol](https://app.venus.io/markets) directly

### Your Net APY
```
Your APY = Venus APY × 0.93
```

Example with 7.23% Venus APY:
- Venus gross yield: 7.23%
- Protocol fee (7%): 0.51%
- Your net yield: 6.72%

## Why Venus Protocol?

### Security
- Battle-tested since 2020
- Multiple audits by leading firms
- Over $1B in TVL
- Proven track record on BNB Chain

### Sustainability
- Real yield from borrower interest
- No token emissions required
- Market-driven rates
- Transparent on-chain data

### Efficiency
- Automated yield accrual
- No manual claiming needed
- Gas-efficient operations
- Compound interest built-in

## Yield Transparency

### On-Chain Verification
You can verify yields directly:
1. Check Venus Protocol's `supplyRatePerBlock()`
2. Calculate annual rate: `rate × blocks_per_year`
3. Apply 93% to get your net rate

### Frontend Display
The UI shows:
- Current Venus APY (gross)
- Protocol fee percentage (7%)
- Your net APY (after fee)
- Historical yield data

## Risk Considerations

### Venus Protocol Risks
- Smart contract risk (mitigated by audits)
- Variable interest rates
- Borrower default risk (mitigated by overcollateralization)

### Mitigation Measures
- Only using established protocols
- Single-asset exposure (no IL risk)
- Conservative fee structure
- Emergency withdrawal mechanisms

## Future Yield Strategies

While currently focused on Venus Protocol, the StrategyRouter architecture allows for:
- Additional lending protocols
- Yield aggregation strategies
- Risk-adjusted allocations
- Community-proposed strategies

All subject to careful review and governance approval.

## Yield Distribution Schedule

Yields distribute to STUSD holders through:
- Periodic `rewardMint()` calls by operator
- Proportional distribution based on holdings
- Same lock mechanics as deposits
- Transparent on-chain events

## Summary

StoneYield's yield generation through Venus Protocol provides:
- **Sustainable returns**: Real yield from lending, not inflation
- **Transparency**: All rates verifiable on-chain
- **Security**: Battle-tested protocol integration
- **Fairness**: 93% of yields go to participants
- **Simplicity**: Automatic accrual, no complex strategies

This approach ensures that your deposited USDC generates real, sustainable yields while maintaining the security and simplicity that StoneYield prioritizes.
