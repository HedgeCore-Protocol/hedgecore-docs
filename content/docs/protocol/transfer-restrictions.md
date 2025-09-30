---
title: "Transfer Restrictions"
description: "Soul-bound token architecture and movement control mechanisms"
prev: "protocol/flash-loan-resistance"
next: "protocol/contract-design"
---

# Transfer Restrictions

HedgeCore constructs around the soul-bound token concept—assets maintaining non-transferability by default. This design introduces strong guarantees surrounding protocol behavior and reward eligibility, and helps ensure that tokenized positions cannot liquidate, trade, or deploy in exploitative financial loops.

## Non-Transferable by Default

sUSDC tokens maintain non-transferability unless the holding address receives explicit unlock. This restriction enforces at the contract level through a custom `_update()` override, which acts on every transfer attempt.

Permitted cases:
- Generation (`from == address(0)`)
- Burning (`to == address(0)`)
- Transfers from/to whitelisted DEX or system pools
- Transfers between fully unlocked wallets

All alternative transfers revert with `Locked: transfer disabled`.

## Unlock Mandate

Regardless of lock period expiration, participants must manually invoke `unlock()` to transition their address to transferable state. This prevents unintended transfers and provides supplementary protection against automatic execution via bots or malicious contracts.

## Whitelisted DEX Compatibility

Certain DEX addresses or liquidity pools can receive whitelist designation utilizing the `setDex()` function. This permits approved external systems to engage with sUSDC in tightly controlled manner, enabling future integrations without compromising protocol security.

## Special Addresses

The protocol supports a roster of special addresses (`isSpecialAddress`) maintaining permanent exemption from transfer restrictions. These typically deploy for:
- Treasury wallets
- Liquidity provisioning contracts
- Internal operational accounts

## Approvals and Restrictions

The `approve()` function also maintains gates:
- Unlocked participants can approve freely
- Locked participants can only approve if the spender maintains whitelisted DEX status
- Owner can always approve

This prevents locked tokens from misuse in protocols or contracts the protocol does not recognize or control.

## Summary

Transfer restrictions are not defect—they constitute the core feature. HedgeCore ensures that token movement only occurs under intentional and authorized circumstances. This preserves hedging integrity, mitigates attack vectors, and reinforces participant accountability throughout the hedging lifecycle.
