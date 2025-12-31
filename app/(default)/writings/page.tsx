import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { constructMetadata } from "@/lib/utils";
import { zenblog, BlogPost, BlogCategory } from "@/lib/zenblog";
import { Metadata } from "next/types";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = constructMetadata({
  title: "Writings | SAIL GTX",
  description:
    "Expert insights on Trade Compliance, classification strategies, and regulatory updates.",
  canonical: "/writings",
});

// Post card component - SAIL style (matching homepage cards)
function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/writings/${post.slug}`} className="group block">
      <Card className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-sail-blue/40 hover:shadow-2xl hover:shadow-sail-blue/10">
        {/* Category badge */}
        {post.category && (
          <Badge className="mb-4 border-sail-blue/40 bg-sail-blue/10 font-mono text-xs font-semibold uppercase tracking-wider text-sail-blue">
            {post.category.name}
          </Badge>
        )}

        {/* Title */}
        <h3 className="mb-3 font-serif text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sail-blue">
          {post.title}
        </h3>

        {/* Excerpt - Editorial style with subtle sophistication */}
        {post.excerpt && (
          <div className="relative mb-5 pl-4">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-sail-blue/40 to-transparent" />
            <p className="line-clamp-3 font-serif italic leading-[1.7] text-slate-700/90">
              {post.excerpt}
            </p>
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 border-t border-slate-200 pt-4 text-xs text-slate-500">
          {post.authors && post.authors.length > 0 && (
            <>
              <div className="flex -space-x-1">
                {post.authors.slice(0, 2).map((author, idx) => (
                  <div
                    key={author.slug}
                    className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-slate-100"
                    style={{ zIndex: 10 - idx }}
                  >
                    {author.image_url && (
                      <Image
                        src={author.image_url}
                        alt={author.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
              <span className="font-medium text-slate-600">
                {post.authors[0].name}
              </span>
            </>
          )}
          {post.published_at && (
            <>
              <span className="text-slate-300">•</span>
              <span>
                {new Date(post.published_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </>
          )}
        </div>

        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sail-blue/5 via-transparent to-sail-green/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </Card>
    </Link>
  );
}

export default async function WritingsPage({
  searchParams,
}: {
  searchParams: { category?: string; tag?: string };
}) {
  // Fetch posts and categories server-side with error handling
  let posts: BlogPost[] = [];
  let categories: BlogCategory[] = [];

  try {
    const [postsResponse, categoriesResponse] = await Promise.all([
      zenblog.posts.list({
        category: searchParams.category,
        tags: searchParams.tag ? [searchParams.tag] : undefined,
        limit: 50,
        cache: "no-store",
      }),
      zenblog.categories.list(),
    ]);

    posts = postsResponse.data || [];
    categories = categoriesResponse.data || [];
  } catch {
    // Continue with empty arrays - will show "No articles yet" message
  }

  const selectedCategory = searchParams.category;

  return (
    <main className="min-h-screen bg-[#F6F3EB]">
      {/* Hero Section - SAIL Navy with better spacing from nav */}
      <section className="bg-[#0b0f2b] py-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Badge className="mb-6 animate-scale-in border border-sail-green/60 bg-sail-green font-mono text-xs font-bold uppercase tracking-widest text-black shadow-lg shadow-sail-green/30">
            WRITINGS
          </Badge>

          <h1 className="mb-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Expert insights on Trade Compliance
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/80">
            Deep technical dives, regulatory updates, and classification
            strategies to help you ship globally with confidence.
          </p>
        </div>
      </section>

      {/* Category Filters - Functional */}
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/writings"
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                !selectedCategory
                  ? "bg-sail-blue text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-sail-blue/40 hover:bg-slate-50"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/writings?category=${category.slug}`}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.slug
                    ? "bg-sail-blue text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-sail-blue/40 hover:bg-slate-50"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-[#F6F3EB] py-16">
        <div className="mx-auto max-w-7xl px-6">
          {posts.length === 0 ? (
            <div className="flex min-h-[400px] items-center justify-center">
              <div className="text-center">
                <div className="mb-4 text-5xl">📝</div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  No articles yet
                </h3>
                <p className="text-slate-600">
                  Check back soon for expert insights and guides.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
