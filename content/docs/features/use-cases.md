---
title: "Use Cases"
description: "Real-world applications and scenarios for StoneYield protocol"
prev: "features/key-features"
---

# Use Cases

## 1. Conservative Yield Generation

### Scenario
Risk-averse participants seeking stable returns without exposure to volatile DeFi strategies.

### StoneYield Solution
- Deposit USDC to receive soul-bound STUSD
- Earn sustainable yields through Venus Protocol lending
- 93% of generated APY distributed to holders
- No impermanent loss or complex strategy risk
- Soul-bound design prevents flash loan exploits

### Benefits
- Predictable, transparent returns
- Battle-tested yield source
- Enhanced security through non-transferability
- Emergency withdrawal mechanisms

## 2. Liquidity Via STUSD

### Scenario
Desks with sUSDC exposure need portable liquidity for trading, liquidity provision, or settlements.

### StoneYield Solution
- Wrap sUSDC into STUSD at a 1:1 ratio using the StoneYield wrapper
- Deploy STUSD across DEX pairs, lending markets, or automation rails
- Unwrap STUSD back to sUSDC when the liquidity assignment is complete
- Monitor wrapper dashboards for proof-of-collateral and available capacity

### Benefits
- Seamless bridge between protected yield and liquid capital
- STUSD retains full ERC20 compatibility
- Capital efficiency without compromising the hedge
- Transparent telemetry for every minted STUSD

## 3. Institutional Token Vesting

### Scenario
Teams and investors require programmable token vesting schedules with built-in security.

### StoneYield Solution
- Use `wrapWithLock()` function for time-locked STUSD
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

### StoneYield Solution
- Deposit USDC to earn Venus yields via sUSDC (base layer)
- Wrap a portion into STUSD for LP incentives or lending rewards
- Stack yield streams: Venus APY + trading fees + partner emissions
- Unwrap to sUSDC without unwinding the hedge core

### Benefits
- Multiple yield streams available
- Flexible liquidity routing
- Additional DEX or lending incentives
- STUSD offers ERC20 compatibility while sUSDC stays protected

## 5. Collateralized Lending

### Scenario
Participants want to use stablecoin holdings as collateral without selling.

### StoneYield Solution
- Hold STUSD and deposit it as collateral in lending protocols that support ERC20 stablecoins
- Borrow additional capital without closing the core sUSDC position
- Maintain hedged exposure while unlocking working capital
- Use StoneYield monitoring tools to track wrapper health

### Benefits
- Leverage stablecoin position
- Access capital without liquidating
- ERC20 compatibility via STUSD
- Active secondary markets provide exit liquidity

## 6. Protocol Treasury Management

### Scenario
DAOs and protocols need secure, yield-generating reserves management.

### StoneYield Solution
- Allocate treasury USDC to StoneYield
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
Sophisticated traders provide liquidity and trade sUSDC tokens.

### StoneYield Solution
- Trade STUSD pairs on DEXs (PancakeSwap, etc.)
- Provide STUSD/USDC liquidity for trading fee income
- Capture arbitrage opportunities across venues
- Support on-chain liquidity that backs institutional flows

### Benefits
- Active trading markets for STUSD
- Earn yield from liquidity provision
- Standard ERC20 interface simplifies tooling
- Liquidity depth supports institutional onboarding

## 8. Cross-Protocol Yield Strategies

### Scenario
Yield aggregators want to integrate StoneYield into complex strategies.

### StoneYield Solution
- Integrate STUSD into automated yield strategies
- Rebalance between protocols as rates change
- Tap secondary markets for instant liquidity
- Standard ERC20 interface simplifies integration

### Benefits
- Plug into existing DeFi infrastructure
- Add stable component to strategies
- Reduce overall portfolio volatility
- Diversify yield sources

## Summary

StoneYield's dual-token architecture empowers everything from conservative treasury management to complex DeFi strategies. Treasuries decide when capital sits in the soul-bound sUSDC layer or when it should roam the ecosystem as STUSD — all while staying verifiably hedged.
