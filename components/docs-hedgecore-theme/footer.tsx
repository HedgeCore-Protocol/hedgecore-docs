import Link from "next/link"
import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-semibold text-gray-900">HedgeCore</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="mailto:info@hedgecore.io"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/hedgecore"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/hedgecore"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">
          © 2025 HedgeCore. All rights reserved. | Contact: info@hedgecore.io | Risk Warning: Digital assets carry significant risk.
        </div>
      </div>
    </footer>
  )
}