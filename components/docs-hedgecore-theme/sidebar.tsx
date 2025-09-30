"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

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
    title: "Protocol",
    items: [
      { title: "Token Lifecycle", href: "/docs/protocol/token-lifecycle" },
      { title: "Locking Mechanism", href: "/docs/protocol/locking-mechanism" },
      { title: "Flash-Loan Resistance", href: "/docs/protocol/flash-loan-resistance" },
      { title: "Transfer Restrictions", href: "/docs/protocol/transfer-restrictions" },
      { title: "Contract Design", href: "/docs/protocol/contract-design" },
      { title: "Security & Limits", href: "/docs/protocol/security-limits" },
      { title: "Analytics & Monitoring", href: "/docs/protocol/analytics-monitoring" },
      { title: "Yield Generation", href: "/docs/protocol/yield-generation" },
      { title: "hUSDC Wrapper", href: "/docs/protocol/husdc-wrapper" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const SidebarContent = () => (
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
                    onClick={() => setMobileMenuOpen(false)}
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
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 border-r border-gray-100 p-8 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto bg-white">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <aside className="md:hidden fixed left-0 top-14 bottom-0 w-80 max-w-[85vw] bg-white z-40 overflow-y-auto p-6 shadow-xl">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  )
}
