"use client"

import { useEffect, useState } from "react"

interface Heading {
  text: string
  level: number
  id: string
}

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <aside className="hidden w-72 xl:block">
      <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
          On this page
        </h4>
        <nav>
          <ul className="space-y-2 text-sm text-slate-300">
            {headings.map((heading) => (
              <li key={heading.id} className={heading.level === 3 ? "pl-4" : ""}>
                <a
                  href={`#${heading.id}`}
                  className={`block rounded-xl px-2 py-1 transition ${
                    activeId === heading.id
                      ? "bg-emerald-400/20 text-white"
                      : "hover:text-white"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
