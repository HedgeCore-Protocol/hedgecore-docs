"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarNavItems = [
  {
    title: "Whitepaper",
    items: [
      { title: "Abstract", href: "/docs/whitepaper/abstract" },
      { title: "Protocol Architecture", href: "/docs/whitepaper/protocol-architecture" },
      { title: "Tokenomics", href: "/docs/whitepaper/tokenomics" },
      { title: "hUSDC Ecosystem", href: "/docs/whitepaper/husdc-ecosystem" },
      { title: "Token Lifecycle", href: "/docs/whitepaper/token-lifecycle" },
      { title: "Locking & Hedging Logic", href: "/docs/whitepaper/locking-and-hedging" },
      { title: "Reward Distribution", href: "/docs/whitepaper/reward-distribution" },
      { title: "Security Model", href: "/docs/whitepaper/security-model" },
      { title: "Governance & Multisig", href: "/docs/whitepaper/governance-multisig" },
      { title: "Supply Control", href: "/docs/whitepaper/supply-control" },
      { title: "Roadmap", href: "/docs/whitepaper/roadmap" },
    ],
  },
  {
    title: "About",
    items: [
      { title: "What is HedgeCore?", href: "/docs/about/what-is-hedgecore" },
      { title: "How It Works", href: "/docs/about/how-it-works" },
    ],
  },
  {
    title: "Features",
    items: [
      { title: "Key Features", href: "/docs/features/key-features" },
      { title: "Use Cases", href: "/docs/features/use-cases" },
    ],
  },
  {
    title: "GitHub",
    items: [
      { title: "Smart Contracts", href: "/docs/github/smart-contracts" },
      { title: "Frontend", href: "/docs/github/frontend" },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Join the Community", href: "/docs/community/join" },
      { title: "Contribute", href: "/docs/community/contribute" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:block w-64 border-r border-gray-100 p-8 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto bg-white">
      <nav className="space-y-8">
        {sidebarNavItems.map((category) => (
          <div key={category.title}>
            <div className="mb-3 text-xs font-medium tracking-wide text-gray-400 uppercase">
              {category.title}
            </div>
            <ul className="space-y-0.5">
              {category.items.map((item) => {
                const isActive = pathname === item.href

                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200
                        ${
                          isActive
                            ? "text-blue-600 bg-blue-50 font-medium"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}