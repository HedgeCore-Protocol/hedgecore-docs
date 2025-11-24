"use client"

import Link from "next/link"
import { Github, Instagram, MessageCircle, Send } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#02060f]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <img
            src="/stoneyield-logo.svg"
            alt="StoneYield"
            className="h-9 w-9 drop-shadow-[0_0_20px_rgba(16,255,164,0.4)] transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <p className="text-lg font-semibold tracking-tight text-white group-hover:text-emerald-200 transition-colors">
              StoneYield
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/70">Documentation</p>
          </div>
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="https://stoneyield.io"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Main Site
          </Link>
          <Link
            href="mailto:info@stoneyield.io"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/StoneYield-Labs" target="_blank" className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-emerald-300 hover:text-white">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="#" target="_blank" className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-emerald-300 hover:text-white" aria-label="Telegram">
              <Send className="h-4 w-4" />
            </Link>
            <Link href="#" target="_blank" className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-emerald-300 hover:text-white" aria-label="Discord">
              <MessageCircle className="h-4 w-4" />
            </Link>
            <Link href="#" target="_blank" className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-emerald-300 hover:text-white" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link href="https://github.com/StoneYield-Labs" target="_blank" className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-emerald-300 hover:text-white">
            <Github className="h-4 w-4" />
          </Link>
          <Link href="#" target="_blank" className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-emerald-300 hover:text-white">
            <Send className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}
