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
      { title: "sUSDC Ecosystem", href: "/docs/whitepaper/susdc-ecosystem" },
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
      { title: "What is StoneYield?", href: "/docs/about/what-is-stoneyield" },
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
      { title: "STUSD Wrapper", href: "/docs/protocol/stusd-wrapper" },
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
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-emerald-200/70">
            {category.title}
          </div>
          <ul className="space-y-1">
            {category.items.map((item) => {
              const isActive = pathname === item.href

              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`block rounded-2xl border px-3 py-2 text-sm font-medium transition-all duration-200
                      ${
                        isActive
                          ? "border-emerald-400/60 bg-emerald-400/20 text-white shadow-[0_10px_30px_rgba(16,255,164,0.15)]"
                          : "border-white/5 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
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
        className="md:hidden fixed bottom-6 right-6 z-50 rounded-full border border-white/20 bg-black/60 p-4 text-white shadow-xl shadow-emerald-500/20 transition hover:border-emerald-300"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden w-72 shrink-0 rounded-[32px] border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-[0_25px_60px_rgba(0,0,0,0.35)] md:block">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
          <SidebarContent />
        </div>
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
          <aside className="md:hidden fixed left-0 top-16 bottom-0 z-40 w-80 max-w-[85vw] overflow-y-auto border-r border-white/10 bg-[#030910] p-6 shadow-xl shadow-black/50">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  )
}
