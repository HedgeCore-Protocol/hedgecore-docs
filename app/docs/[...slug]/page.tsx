import { Navbar } from "@/components/docs-stoneyield-theme/navbar"
import { Sidebar } from "@/components/docs-stoneyield-theme/sidebar"
import { Footer } from "@/components/docs-stoneyield-theme/footer"
import { TableOfContents } from "@/components/docs-stoneyield-theme/table-of-contents"
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
    about: "/docs/about/what-is-stoneyield",
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
  params: { slug?: string[] }
}) {
  const slug = params.slug ?? ["whitepaper", "abstract"]

  const doc = await getDocContent(slug)
  if (!doc) notFound()

  const breadcrumbs = generateBreadcrumbs(slug)

  return (
    <div className="flex min-h-screen flex-col text-white">
      <Navbar />

      <div className="flex flex-1 flex-col px-4 py-6 md:px-8 lg:px-12">
        <div className="flex flex-1 flex-col gap-6 lg:flex-row">
          <Sidebar />

          <main className="flex-1">
            <div className="mx-auto flex max-w-4xl flex-col gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="mb-4 flex flex-wrap items-center text-xs md:text-sm text-emerald-200/80">
                  {breadcrumbs.map((crumb, i) => (
                    <div key={i} className="flex items-center">
                      {crumb.href ? (
                        <Link href={crumb.href} className="hover:text-white transition-colors">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="font-semibold text-white">{crumb.label}</span>
                      )}
                      {i < breadcrumbs.length - 1 && <ChevronRight className="mx-1 h-3 w-3" />}
                    </div>
                  ))}
                </div>

                {doc.metadata.description && (
                  <p className="text-sm text-slate-300 md:text-base">{doc.metadata.description}</p>
                )}
              </div>

              <div
                className="prose prose-invert prose-headings:text-white prose-strong:text-emerald-200 prose-code:bg-white/10 prose-code:text-emerald-200 prose-a:text-emerald-300 hover:prose-a:text-white max-w-none rounded-[32px] border border-white/10 bg-black/30 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                dangerouslySetInnerHTML={{ __html: doc.content }}
              />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  {doc.metadata.prev ? (
                    <Link
                      href={`/docs/${doc.metadata.prev}`}
                      className="flex items-center gap-2 text-emerald-200 hover:text-white transition"
                    >
                      <ChevronRight className="h-4 w-4 rotate-180" />
                      Previous topic
                    </Link>
                  ) : (
                    <span className="text-slate-500">Start of section</span>
                  )}

                  {doc.metadata.next ? (
                    <Link
                      href={`/docs/${doc.metadata.next}`}
                      className="ml-auto flex items-center gap-2 text-emerald-200 hover:text-white transition"
                    >
                      Next topic
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="text-slate-500">End of section</span>
                  )}
                </div>
              </div>
            </div>
          </main>

          {doc.headings.length > 0 && (
            <div className="hidden xl:block">
              <TableOfContents headings={doc.headings} />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
