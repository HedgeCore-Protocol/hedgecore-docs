import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "StoneYield Documentation",
  description: "All things StoneYield: multi-strategy hedging, sUSDC, and STUSD wrapper guides.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-[#02060f] text-white antialiased`}>
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,255,164,0.08),_transparent_60%)]" />
            <div className="absolute inset-y-0 left-1/2 w-[120%] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(0,94,255,0.08),_transparent_65%)] blur-3xl" />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
