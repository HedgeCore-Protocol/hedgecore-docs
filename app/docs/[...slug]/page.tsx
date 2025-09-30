import { Navbar } from "@/components/docs-hedgecore-theme/navbar"
import { Sidebar } from "@/components/docs-hedgecore-theme/sidebar"
import { Footer } from "@/components/docs-hedgecore-theme/footer"
import { TableOfContents } from "@/components/docs-hedgecore-theme/table-of-contents"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkParse from "remark-parse"
import remarkSlug from "remark-slug"
import html from "remark-html"
import { notFound } from "next/navigation"

async function getDocContent(slug: string[]) {
  let filePath = path.join(process.cwd(), "content", "docs", ...slug) + ".md"

  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), "content", "docs", ...slug, "index.md")
  }

  if (!fs.existsSync(filePath)) {
    return null
  }

  try {
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data: frontmatter, content: md } = matter(fileContents)

    const processor = remark().use(remarkParse).use(remarkSlug as any)
    const tree = processor.parse(md)
    // @ts-ignore
    processor.runSync(tree)

    const { visit } = await import("unist-util-visit")
    const headings: { text: string; level: number; id: string }[] = []

    // @ts-ignore
    visit(tree, "heading", (node: any) => {
      if (node.depth === 2 || node.depth === 3) {
        const id = "user-content-" + (node.data?.id as string)
        if (!id) return
        const rawText = node.children
          .filter((c: any) => c.type === "text" || c.type === "inlineCode")
          .map((c: any) => c.value)
          .join(" ")
        headings.push({ text: rawText, level: node.depth, id })
      }
    })

    const htmlContent = (
      await remark()
        .use(remarkParse)
        .use(remarkSlug as any)
        .use(html)
        .process(md)
    ).toString()

    return {
      metadata: frontmatter ?? {},
      content: htmlContent,
      headings,
      slug: slug.join("/"),
    }
  } catch (err) {
    console.error("markdown-parse error:", err)
    return null
  }
}

function generateBreadcrumbs(slug: string[]) {
  const crumbs: { label: string; href: string | null }[] = [
    { label: "Docs", href: "/docs" },
  ]

  const sectionFirstPages: Record<string, string> = {
    whitepaper: "/docs/whitepaper/abstract",
    about: "/docs/about/what-is-hedgecore",
    features: "/docs/features/key-features",
    github: "/docs/github/smart-contracts",
    community: "/docs/community/join",
  }

  let currentPath = "/docs"
  slug.forEach((seg, i) => {
    currentPath += `/${seg}`
    const label = seg
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ")

    let href: string | null = null
    if (i < slug.length - 1) {
      href = sectionFirstPages[seg] || currentPath
    }

    crumbs.push({ label, href })
  })

  return crumbs
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug = ["whitepaper", "abstract"] } = await params

  const doc = await getDocContent(slug)
  if (!doc) notFound()

  const breadcrumbs = generateBreadcrumbs(slug)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumbs */}
            <div className="mb-8">
              <div className="mb-2 flex items-center text-sm text-gray-600">
                {breadcrumbs.map((crumb, i) => (
                  <div key={i} className="flex items-center">
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-gray-900 font-medium">{crumb.label}</span>
                    )}
                    {i < breadcrumbs.length - 1 && (
                      <ChevronRight className="mx-1 h-4 w-4" />
                    )}
                  </div>
                ))}
              </div>

              {doc.metadata.description && (
                <p className="mb-6 text-lg text-gray-600">
                  {doc.metadata.description}
                </p>
              )}
            </div>

            {/* Rendered markdown */}
            <div
              className="prose prose-lg max-w-none text-gray-700
                         prose-headings:text-gray-900 prose-a:text-blue-500
                         hover:prose-a:text-blue-600 prose-strong:text-gray-900
                         prose-code:rounded prose-code:bg-gray-100 prose-code:px-1
                         prose-code:py-0.5 prose-code:text-gray-900
                         prose-pre:bg-gray-900 prose-pre:shadow-lg"
              dangerouslySetInnerHTML={{ __html: doc.content }}
            />

            {/* Pager */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <div className="flex justify-between">
                {doc.metadata.prev && (
                  <Link
                    href={`/docs/${doc.metadata.prev}`}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ChevronRight className="mr-1 h-4 w-4 rotate-180" />
                    Previous
                  </Link>
                )}

                {doc.metadata.next && (
                  <Link
                    href={`/docs/${doc.metadata.next}`}
                    className="ml-auto flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Next
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>

        {doc.headings.length > 0 && (
          <TableOfContents headings={doc.headings} />
        )}
      </div>

      <Footer />
    </div>
  )
}