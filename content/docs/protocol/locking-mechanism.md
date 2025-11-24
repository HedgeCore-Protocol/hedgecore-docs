---
title: "Locking Mechanism"
description: "Time-based lock enforcement ensuring stability and long-term commitment"
prev: "protocol/token-lifecycle"
next: "protocol/flash-loan-resistance"
---

# Locking Mechanism

StoneYield enforces a duration-based locking mechanism to ensure stability and discourage rapid inflow/outflow behaviors commonly observed in yield protocols. This mechanism applies to all STUSD tokens generated through deposits or reward allocations.

## Lock Duration Enforcement

Every time STUSD generates—whether through participant deposit or protocol reward—it receives assigned lock duration. The period defines in seconds and stores per participant utilizing the `unlockAt` mapping. Throughout this period, the participant's tokens maintain soul-bound status and non-transferability.

- **Minimum lock**: 1 hour
- **Maximum lock**: 365 days
- **Custom lock**: Specified at generation time

The lock enforces at address level, indicating it applies to complete wallet, not individual token units.

## Unlocking Procedure

Once lock duration expires, tokens do not automatically achieve transferability. Participants must explicitly invoke the `unlock()` function to modify their wallet's status. This deliberate action introduces supplementary security layer, ensuring participants maintain awareness of unlocking before engaging with DEXs or alternative protocols.

Administrators can also invoke `adminUnlock()` in exceptional situations—such as emergency migration, fund recovery, or multisig-voted intervention.

## Edge Cases

- **1-second placeholder locks** deploy for first-time reward recipients to enforce identical unlock procedure.
- Addresses with `balance == 0` receive automatic unlock via `_autoUnlock()` if previously locked.
- Certain addresses (e.g., treasury wallets or protocol-controlled pools) can receive `isSpecialAddress` designation, which disables locking completely for operational adaptability.

## Verifying Lock Status

Developers or participants can access current lock status via:
- `getRemainingLockTime(address)` → returns seconds remaining
- `getUserInfo(address)` → comprehensive participant status including lock and hedge data
- `getAvailableActions(address)` → displays whether the address can approve, transfer, or unlock

These helper functions simplify building secure and responsive interfaces around STUSD token operations.
