import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/utils";
import { zenblog, BlogPost, hasZenblogConfig } from "@/lib/zenblog";
import { Metadata } from "next/types";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleSidebar } from "@/components/article-sidebar";

import { TalkToFounderButton } from "@/components/talk-to-founder-button";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!hasZenblogConfig) {
    return constructMetadata({
      title: "Writings | SAIL GTX",
      description: "Zenblog is not configured for this environment.",
      canonical: "/writings",
    });
  }

  try {
    const { data: post } = await zenblog.posts.get(
      { slug: params.slug },
      { cache: "no-store" },
    );

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
  if (!hasZenblogConfig) {
    return (
      <main className="sail-shell min-h-screen">
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-32">
          <div className="sail-card rounded-none bg-white p-8 text-center ring-0">
            <h1 className="mb-3 font-serif text-3xl font-semibold text-slate-900">
              Writings are unavailable
            </h1>
            <p className="mb-6 text-[#5d584e]">
              Zenblog is not configured for this environment. Set
              <span className="font-mono"> NEXT_PUBLIC_ZENBLOG_BLOG_ID</span> to
              publish posts.
            </p>
            <Link
              href="/writings"
              className="inline-flex items-center gap-2 border border-[#e0dbcf] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#5d584e] transition-colors hover:border-sail-blue/40 hover:text-sail-blue"
            >
              Back to Writings
            </Link>
          </div>
        </div>
      </main>
    );
  }

  let post: BlogPost;

  try {
    const response = await zenblog.posts.get(
      { slug: params.slug },
      { cache: "no-store" },
    );
    post = response.data;
  } catch {
    notFound();
  }

  // Fetch related posts from same category or latest posts
  const relatedPostsResponse = await zenblog.posts.list({
    category: post.category?.slug,
    limit: 3,
    cache: "no-store",
  });
  const relatedPosts =
    relatedPostsResponse.data
      ?.filter((p) => p.slug !== post.slug)
      .slice(0, 3) || [];

  return (
    <main className="sail-shell min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-[#e0dbcf] bg-white pt-24">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[#6f695d]">
            <Link
              href="/"
              className="font-medium transition-colors hover:text-sail-blue"
            >
              Home
            </Link>
            <span className="text-[#c8c0b0]">/</span>
            <Link
              href="/writings"
              className="font-medium transition-colors hover:text-sail-blue"
            >
              Writings
            </Link>
            <span className="text-[#c8c0b0]">/</span>
            {post.category && (
              <>
                <Link
                  href={`/writings?category=${post.category.slug}`}
                  className="font-medium transition-colors hover:text-sail-blue"
                >
                  {post.category.name}
                </Link>
                <span className="text-[#c8c0b0]">/</span>
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
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <article className="sail-card min-w-0 rounded-none bg-white p-8 ring-0 md:p-10">
            {/* Category badge */}
            {post.category && (
              <div className="mb-4">
                <span className="sail-pill">{post.category.name}</span>
              </div>
            )}

            {/* Title */}
            <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="mb-8 text-lg leading-relaxed text-[#5d584e]">
                {post.excerpt}
              </p>
            )}

            {/* Meta info (mobile) */}
            <div className="mb-10 flex flex-wrap items-center gap-4 border-b border-[#e0dbcf] pb-6 lg:hidden">
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
                    <p className="text-[#6f695d]">
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
                className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-2xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-xl prose-p:leading-[1.75] prose-p:text-[#5d584e] prose-a:text-sail-blue prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-2 prose-blockquote:border-[#d9d0be] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[#6f695d] prose-strong:font-semibold prose-strong:text-slate-900 prose-code:rounded-none prose-code:bg-[#f3efe6] prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-[#4a4338] prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-none prose-pre:border prose-pre:border-[#e0dbcf] prose-pre:bg-[#fffdf8] prose-pre:text-sm prose-li:text-[#5d584e] prose-img:rounded-none prose-hr:border-[#e0dbcf]"
                dangerouslySetInnerHTML={{ __html: post.html_content }}
              />
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 border-t border-[#e0dbcf] pt-8">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-[#6f695d]">
                  Tagged with
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/writings?tag=${tag.slug}`}
                      className="rounded-none border border-[#e0dbcf] bg-[#fffdf8] px-4 py-2 text-sm font-medium text-[#5d584e] transition-all duration-300 hover:border-sail-blue/40 hover:bg-white hover:text-sail-blue"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="sail-card mt-12 rounded-none p-8 text-center">
              <h3 className="mb-3 font-serif text-2xl font-semibold text-slate-900">
                Ready to transform your Trade Compliance?
              </h3>
              <p className="mb-6 text-[#5d584e]">
                See how SAIL can help you classify faster and stay compliant.
              </p>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" variant="sail" className="w-full sm:w-auto" asChild>
                  <Link href="/free-audit">Book Free Audit</Link>
                </Button>
                <TalkToFounderButton
                  size="lg"
                  className="w-full border-[#e0dbcf] bg-white text-slate-900 hover:bg-[#fffdf8] sm:w-auto"
                />
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 border-t border-[#e0dbcf] pt-8">
                <h2 className="mb-6 font-serif text-2xl font-semibold text-slate-900">
                  Related Articles
                </h2>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/writings/${relatedPost.slug}`}
                      className="group block border-b border-[#e0dbcf] pb-4 transition-colors hover:border-sail-blue/40"
                    >
                      {relatedPost.category && (
                        <div className="mb-1 text-xs font-medium text-[#6f695d]">
                          {relatedPost.category.name}
                        </div>
                      )}
                      <h3 className="mb-1 font-serif text-lg font-semibold text-slate-900 group-hover:text-sail-blue">
                        {relatedPost.title}
                      </h3>
                      {relatedPost.excerpt && (
                        <p className="line-clamp-2 text-sm text-[#5d584e]">
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
