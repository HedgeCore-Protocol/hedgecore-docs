import Link from "next/link"
import { Github, Instagram, Mail, MessageCircle, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/stoneyield-logo.svg"
            alt="StoneYield"
            className="h-10 w-10 drop-shadow-[0_0_15px_rgba(16,255,164,0.45)]"
          />
          <div>
            <p className="text-base font-semibold text-white">StoneYield Docs</p>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
              Multi-strategy yield network
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
          <Link href="https://stoneyield.io" className="hover:text-white">
            Main Site
          </Link>
          <span className="text-slate-600">/</span>
          <Link href="mailto:info@stoneyield.io" className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" />
            info@stoneyield.io
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/StoneYield-Labs"
            target="_blank"
            className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-emerald-300 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-emerald-300 hover:text-white"
            aria-label="Telegram"
          >
            <Send className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-emerald-300 hover:text-white"
            aria-label="Discord"
          >
            <MessageCircle className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="rounded-full border border-white/15 p-2 text-slate-200 transition hover:border-emerald-300 hover:text-white"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <p className="pb-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} StoneYield. Built for multi-strategy hedging on BSC.
      </p>
    </footer>
  )
}
