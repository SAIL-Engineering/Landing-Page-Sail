"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Author {
  slug: string;
  name: string;
  image_url?: string;
  bio?: string;
  twitter?: string;
  website?: string;
}

interface ArticleSidebarProps {
  authors?: Author[] | null;
  publishedAt: string;
  postTitle: string;
}

export function ArticleSidebar({
  authors,
  publishedAt,
  postTitle,
}: ArticleSidebarProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      // Silently fail - clipboard copy not critical
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: postTitle,
          url: window.location.href,
        });
      } catch {
        // Silently fail - user likely cancelled the share
      }
    }
  };

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-6">
        {/* Author Info */}
        {authors && authors.length > 0 && (
          <div className="border-b border-slate-200 pb-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {authors.length === 1 ? "Author" : "Authors"}
            </p>
            <div className="space-y-4">
              {authors.map((author) => (
                <details key={author.slug} className="group cursor-pointer">
                  <summary className="flex list-none items-center gap-3">
                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-slate-100">
                      {author.image_url && (
                        <Image
                          src={author.image_url}
                          alt={author.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-slate-900">
                        {author.name}
                      </p>
                      <p className="text-xs text-slate-500">View bio</p>
                    </div>
                  </summary>
                  {author.bio && (
                    <div className="pl-13 mt-3">
                      <p className="text-sm text-slate-600">{author.bio}</p>
                      {(author.twitter || author.website) && (
                        <div className="mt-2 flex gap-3 text-xs">
                          {author.twitter && (
                            <a
                              href={`https://twitter.com/${author.twitter}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sail-blue hover:underline"
                            >
                              Twitter
                            </a>
                          )}
                          {author.website && (
                            <a
                              href={author.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sail-blue hover:underline"
                            >
                              Website
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Meta Information */}
        <div className="border-b border-slate-200 pb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Published
          </p>
          <p className="text-sm text-slate-700">
            {new Date(publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Share Section */}
        <div className="border-b border-slate-200 pb-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Share
          </p>
          <div className="flex gap-2">
            {typeof navigator !== "undefined" &&
              "share" in navigator &&
              typeof navigator.share === "function" && (
                <button
                  onClick={handleShare}
                  className="flex-1 rounded border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  Share
                </button>
              )}
            <button
              onClick={handleCopyLink}
              className="flex-1 rounded border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              {copySuccess ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Back to Writings */}
        <Link
          href="/writings"
          className="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          All Writings
        </Link>
      </div>
    </aside>
  );
}
