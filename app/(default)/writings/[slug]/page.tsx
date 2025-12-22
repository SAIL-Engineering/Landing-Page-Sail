import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/utils";
import { zenblog, BlogPost } from "@/lib/zenblog";
import { Metadata } from "next/types";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleSidebar } from "@/components/article-sidebar";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { data: post } = await zenblog.posts.get({ slug: params.slug });

    return constructMetadata({
      title: `${post.title} | SAIL GTX`,
      description: post.excerpt || post.title,
      canonical: `/writings/${params.slug}`,
    });
  } catch {
    return constructMetadata({
      title: "Post Not Found | SAIL GTX",
      description: "This post could not be found.",
    });
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post: BlogPost;

  try {
    const response = await zenblog.posts.get({ slug: params.slug });
    post = response.data;
  } catch {
    notFound();
  }

  // Fetch related posts from same category or latest posts
  const relatedPostsResponse = await zenblog.posts.list({
    category: post.category?.slug,
    limit: 3,
  });
  const relatedPosts =
    relatedPostsResponse.data
      ?.filter((p) => p.slug !== post.slug)
      .slice(0, 3) || [];

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-white pt-24">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="font-medium text-slate-600 transition-colors hover:text-sail-blue"
            >
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link
              href="/writings"
              className="font-medium text-slate-600 transition-colors hover:text-sail-blue"
            >
              Writings
            </Link>
            <span className="text-slate-400">/</span>
            {post.category && (
              <>
                <Link
                  href={`/writings?category=${post.category.slug}`}
                  className="font-medium text-slate-600 transition-colors hover:text-sail-blue"
                >
                  {post.category.name}
                </Link>
                <span className="text-slate-400">/</span>
              </>
            )}
            <span className="truncate font-semibold text-slate-900">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Container */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <article className="min-w-0">
            {/* Category badge */}
            {post.category && (
              <div className="mb-4 text-sm font-medium text-slate-600">
                {post.category.name}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
            )}

            {/* Meta info (mobile) */}
            <div className="mb-10 flex flex-wrap items-center gap-4 border-b border-slate-200 pb-6 lg:hidden">
              {post.authors && post.authors.length > 0 && (
                <>
                  <div className="flex -space-x-2">
                    {post.authors.map((author, idx) => (
                      <div
                        key={author.slug}
                        className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-100"
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
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">
                      {post.authors.map((a) => a.name).join(", ")}
                    </p>
                    <p className="text-slate-500">
                      {new Date(post.published_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Article Content - Clean Professional Typography */}
            {post.html_content && (
              <div
                className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-2xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-xl prose-p:leading-[1.75] prose-p:text-slate-700 prose-a:text-sail-blue prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-2 prose-blockquote:border-slate-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-600 prose-strong:font-semibold prose-strong:text-slate-900 prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-slate-800 prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-slate-200 prose-pre:bg-slate-50 prose-pre:text-sm prose-li:text-slate-700 prose-img:rounded-lg prose-hr:border-slate-200"
                dangerouslySetInnerHTML={{ __html: post.html_content }}
              />
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 border-t border-slate-200 pt-8">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
                  Tagged with
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/writings?tag=${tag.slug}`}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-sail-blue/40 hover:bg-sail-blue/5 hover:text-sail-blue"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
              <h3 className="mb-3 font-serif text-2xl font-semibold text-slate-900">
                Ready to transform your Trade Compliance?
              </h3>
              <p className="mb-6 text-slate-600">
                See how SAIL can help you classify faster and stay compliant.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="lg" variant="sail" asChild>
                  <Link href="mailto:info@sailgtx.com">
                    Claim Your Free Audit
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                  asChild
                >
                  <Link href="mailto:info@sailgtx.com">Talk to Founder</Link>
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 border-t border-slate-200 pt-8">
                <h2 className="mb-6 font-serif text-2xl font-semibold text-slate-900">
                  Related Articles
                </h2>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/writings/${relatedPost.slug}`}
                      className="group block border-b border-slate-100 pb-4 transition-colors hover:border-slate-300"
                    >
                      {relatedPost.category && (
                        <div className="mb-1 text-xs font-medium text-slate-500">
                          {relatedPost.category.name}
                        </div>
                      )}
                      <h3 className="mb-1 font-serif text-lg font-semibold text-slate-900 group-hover:text-sail-blue">
                        {relatedPost.title}
                      </h3>
                      {relatedPost.excerpt && (
                        <p className="line-clamp-2 text-sm text-slate-600">
                          {relatedPost.excerpt}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <ArticleSidebar
            authors={post.authors}
            publishedAt={post.published_at}
            postTitle={post.title}
          />
        </div>
      </div>
    </main>
  );
}
