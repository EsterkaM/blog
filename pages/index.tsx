import { Heading1, Heading2, Heading3, LeadingParagraph } from "@/components/topology";
import Link from "next/link";
import { blogPosts } from "@/data/blog-post";
import { tags } from "@/data/tag";
import { BlogCard } from "@/components/layout";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      {/* Úvod */}
      <section className="text-center">
        <Heading1>Two blushing pilgrims</Heading1>
        <LeadingParagraph>We decided to create a blog of our experiences while travelling.</LeadingParagraph>
      </section>

      {/* Sekce s tagy */}
      <section>
        <Heading2>Tags</Heading2>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <Link key={tag.slug} href={`${tag.slug}`} type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              #{tag.name}
              <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {tag.count}
              </span>
            </Link>

          ))}
        </div>
      </section>

      {/* Nejnovější články */}
      <section>
        <Heading3>Latest posts</Heading3>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}