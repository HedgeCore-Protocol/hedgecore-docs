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
    <aside className="hidden xl:block w-64 p-6 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">On This Page</h4>
        <nav>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.level === 3 ? "pl-4" : ""}
              >
                <a
                  href={`#${heading.id}`}
                  className={`text-sm transition-colors block py-1 ${
                    activeId === heading.id
                      ? "text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900"
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