---
title: "Use Cases"
description: "Real-world applications and scenarios for HedgeCore protocol"
prev: "features/key-features"
---

# Use Cases

## 1. Conservative Yield Generation

### Scenario
Risk-averse participants seeking stable returns without exposure to volatile DeFi strategies.

### HedgeCore Solution
- Deposit USDC to receive soul-bound sUSDC
- Earn sustainable yields through Venus Protocol lending
- 93% of generated APY distributed to holders
- No impermanent loss or complex strategy risk
- Soul-bound design prevents flash loan exploits

### Benefits
- Predictable, transparent returns
- Battle-tested yield source
- Enhanced security through non-transferability
- Emergency withdrawal mechanisms

## 2. Yield Position Entry via hUSDC

### Scenario
Participants hold tradeable hUSDC tokens and want to access yield generation.

### HedgeCore Solution
- Convert hUSDC to sUSDC through wrapper contract
- Start earning Venus Protocol yields immediately
- Conversion is one-way (no reverse path)
- Optional time-locks for vesting schedules

### Benefits
- Access yield generation from liquid holdings
- Simple, secure one-way conversion
- No conversion fees
- Immediate yield accrual

## 3. Institutional Token Vesting

### Scenario
Teams and investors require programmable token vesting schedules with built-in security.

### HedgeCore Solution
- Use `hedgeWrapLocked()` function for time-locked sUSDC
- Set custom unlock schedules per recipient
- Lock enforcement at contract level
- Yield continues accruing during vesting

### Benefits
- Automated vesting without custom contracts
- Yields accrue during lock period
- On-chain verification and transparency
- Prevents premature token liquidation

## 4. DeFi Yield Stacking

### Scenario
Advanced users want to maximize returns by combining multiple yield sources.

### HedgeCore Solution
- Deposit USDC to earn Venus yields (base layer)
- Trade hUSDC on DEXs for liquidity
- Provide hUSDC/USDC liquidity to earn trading fees
- Base Venus yield continues for converted positions

### Benefits
- Multiple yield streams available
- Flexible liquidity options
- Additional DEX trading fee income
- Standard ERC20 compatibility for hUSDC

## 5. Collateralized Lending

### Scenario
Participants want to use stablecoin holdings as collateral without selling.

### HedgeCore Solution
- Trade hUSDC on secondary markets
- Deposit hUSDC as collateral in lending protocols
- Borrow other assets against hUSDC
- Maintain exposure to ecosystem

### Benefits
- Leverage stablecoin position
- Access capital without liquidating
- Standard ERC20 compatibility
- Active secondary market

## 6. Protocol Treasury Management

### Scenario
DAOs and protocols need secure, yield-generating reserves management.

### HedgeCore Solution
- Allocate treasury USDC to HedgeCore
- Earn sustainable yields through Venus integration
- Multisig control over deposits and withdrawals
- Special address designation for operational flexibility

### Benefits
- Secure yield generation for idle capital
- Transparent on-chain tracking
- Integration with existing multisig infrastructure
- Emergency controls for risk management

## 7. Market Making and Trading

### Scenario
Sophisticated traders provide liquidity and trade hUSDC tokens.

### HedgeCore Solution
- Trade hUSDC on DEXs (PancakeSwap, etc.)
- Provide liquidity for trading fee income
- Arbitrage opportunities in secondary markets
- Support ecosystem liquidity

### Benefits
- Active trading markets for hUSDC
- Earn yields from liquidity provision
- Standard ERC20 interface
- Support protocol ecosystem health

## 8. Cross-Protocol Yield Strategies

### Scenario
Yield aggregators want to integrate HedgeCore into complex strategies.

### HedgeCore Solution
- Integrate hUSDC into automated yield strategies
- Rebalance between protocols as rates change
- Trade on secondary markets for liquidity
- Standard ERC20 interface simplifies integration

### Benefits
- Plug into existing DeFi infrastructure
- Add stable component to strategies
- Reduce overall portfolio volatility
- Diversify yield sources

## Summary

HedgeCore's dual-token architecture enables diverse use cases from conservative yield generation to sophisticated DeFi strategies. The one-way wrapper (hUSDC → sUSDC) provides a straightforward path to yield generation, while hUSDC's tradeable nature enables secondary market activity and DeFi composability without compromising sUSDC's security model.
