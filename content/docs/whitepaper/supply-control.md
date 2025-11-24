---
title: "Supply Control"
description: "Token burn mechanisms and disciplined supply management in StoneYield protocol"
prev: "whitepaper/governance-multisig"
next: "whitepaper/roadmap"
---

# Supply Control

StoneYield incorporates administrative burn capabilities enabling controlled circulating STUSD reduction in exceptional or protocol-critical circumstances. Distinct from inflationary architectures generating continuous supply expansion, StoneYield emphasizes deliberate supply discipline, including token retirement capacity when warranted.

## Burn Functionality Rationale

The `burn(address,uint256)` function permits protocol owner to forcibly eliminate STUSD from any address. Though powerful, this function operates under `onlyOwner` restriction and serves exclusively system-level operations:

- **Treasury maintenance**: Eliminating residual or fractional STUSD following migration or consolidation.
- **Crisis response**: Removing tokens during edge-case exploit scenarios or unrecoverable errors.
- **Precision adjustments**: Correcting token distributions in controlled operational environments.

End user availability remains prohibited, preventing arbitrary token confiscation.

## Governance Requirements

Burning demands substantial trust in executing authority. To prevent misuse or misconfiguration:

- Contract control should reside with multi-signature wallet infrastructure (e.g., Gnosis Safe).
- Burn execution should undergo proposal-review-approval governance workflow.
- Optimal implementation ensures burn action auditability via event logs (`StakedTokensBurned`).

## Zero Algorithmic Supply Reduction

No automatic "deflation" or supply-contraction mechanisms exist. Burn operations maintain consistent manual, infrequent, and intentional character. StoneYield rejects artificial scarcity mechanics favoring transparent administrative instruments.

## Supporting Control Mechanisms

Beyond the `burn()` function, protocol includes:

- `earlyRedeem()`: Converts STUSD to USDC and burns the token
- `airdrop()`: Distributes STUSD from treasury to participants during allocation events
- `pause()`: Suspends critical mint or transfer operations when necessary

These mechanisms enable protocol to adjust supply parameters reactively without dependence on economic incentive games or speculative token mechanics.

## Summary

Burning within StoneYield constitutes governance tooling, not participant functionality. It represents broader commitment to responsible supply administration, controlled issuance, and defense against edge-case imbalances. By maintaining burn as deliberate and gated operation, the protocol ensures maximum operational flexibility with minimal abuse potential.
