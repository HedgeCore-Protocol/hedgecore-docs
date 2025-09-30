"use client"

import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
            HedgeCore Docs
          </span>
        </Link>

        {/* Right Side Links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://hedgecore.io"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Main Site
          </Link>
          <Link
            href="https://github.com/hedgecore"
            target="_blank"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://twitter.com/hedgecore"
            target="_blank"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  )
}