"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IconBoxCheckOutline18 as Check,
  IconArrowRightOutline18 as ArrowRight,
} from "nucleo-ui-outline-18";

export function CaseStudyVisual() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <p className="sail-kicker-light">Case Study</p>
        <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
          How Invista transformed Trade Compliance operations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          From reactive firefighting to continuous confidence in just 11 days
        </p>
      </div>

      {/* Before/After Comparison */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* BEFORE */}
        <Card className="relative overflow-hidden rounded-2xl border border-red-500/30 bg-red-950/20 p-8 backdrop-blur-sm">
          <div className="absolute right-4 top-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
              <span className="text-2xl font-bold text-red-400">×</span>
            </div>
          </div>

          <div className="mb-6">
            <Badge className="border-red-500/40 bg-red-500/10 text-red-300">
              Before SAIL
            </Badge>
            <h3 className="mt-4 text-2xl font-bold text-white">
              The Challenge
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-400"></div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">8,000+ products</span>{" "}
                classified across multiple business units
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-400"></div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">
                  Weeks of manual review
                </span>{" "}
                required for every tariff change
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-400"></div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">
                  3-4 weeks to compile
                </span>{" "}
                CF-28 audit responses
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-400"></div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">
                  45 minutes per product
                </span>{" "}
                for manual classification
              </p>
            </div>
          </div>

          {/* Dramatic stat */}
          <div className="mt-8 rounded-xl border border-red-500/20 bg-red-950/40 p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400">~15%</div>
              <div className="mt-2 text-sm text-slate-400">
                of catalog reviewed after changes
              </div>
              <div className="mt-1 text-xs text-red-300">
                Leaving 85% at risk
              </div>
            </div>
          </div>
        </Card>

        {/* AFTER */}
        <Card className="relative overflow-hidden rounded-2xl border border-sail-green/30 bg-sail-green/5 p-8 backdrop-blur-sm">
          <div className="absolute right-4 top-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sail-green/20">
              <Check className="h-6 w-6 text-sail-green" />
            </div>
          </div>

          <div className="mb-6">
            <Badge className="border-sail-green/60 bg-sail-green/20 text-sail-green">
              After SAIL
            </Badge>
            <h3 className="mt-4 text-2xl font-bold text-white">
              The Results
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sail-green"></div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-sail-green">
                  Full deployment in 11 days
                </span>{" "}
                with complete catalog import
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sail-green"></div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-sail-green">
                  Automatic daily monitoring
                </span>{" "}
                of all regulatory changes
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sail-green"></div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-sail-green">
                  Same-day CF-28 responses
                </span>{" "}
                with full evidence chains
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sail-green"></div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-sail-green">
                  3 minutes per product
                </span>{" "}
                with AI-powered classification
              </p>
            </div>
          </div>

          {/* Dramatic stat */}
          <div className="mt-8 rounded-xl border border-sail-green/20 bg-sail-green/10 p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-sail-green">100%</div>
              <div className="mt-2 text-sm text-white">
                of catalog automatically reviewed
              </div>
              <div className="mt-1 text-xs text-sail-green">
                Zero products at risk
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Metrics Comparison - Dramatic Before → After */}
      <Card className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="border-b border-white/10 bg-white/5 px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-white">
              Key Performance Metrics
            </p>
            <Badge className="border-sail-green/60 bg-sail-green/20 text-sail-green">
              Verified Results
            </Badge>
          </div>
        </div>

        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                metric: "Classification Time",
                before: "45 min",
                after: "3 min",
                improvement: "15x faster",
              },
              {
                metric: "CF-28 Response",
                before: "3-4 weeks",
                after: "Same day",
                improvement: "20x faster",
              },
              {
                metric: "Catalog Coverage",
                before: "~15%",
                after: "100%",
                improvement: "Complete",
              },
              {
                metric: "Update Frequency",
                before: "Quarterly",
                after: "Continuously",
                improvement: "Real-time",
              },
              {
                metric: "Confidence Score",
                before: "Unknown",
                after: "98.2%",
                improvement: "Verified",
              },
              {
                metric: "Deployment Time",
                before: "6+ months",
                after: "11 days",
                improvement: "16x faster",
              },
            ].map((item, index) => (
              <div
                key={item.metric}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:border-sail-blue/50 hover:bg-white/10"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white">
                    {item.metric}
                  </h4>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="text-xs text-red-400 line-through opacity-60">
                      {item.before}
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 text-sail-green" />
                      <div className="font-mono text-lg font-bold text-sail-green">
                        {item.after}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-lg bg-sail-green/10 px-3 py-1.5">
                  <div className="text-xs font-semibold text-sail-green">
                    {item.improvement}
                  </div>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sail-blue/5 to-sail-green/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Testimonial */}
      <Card className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-sail-blue to-sail-green p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-800">
                <span className="text-2xl font-bold text-white">I</span>
              </div>
            </div>
          </div>

          <blockquote className="text-xl italic leading-relaxed text-white/90 md:text-2xl">
            &ldquo;We used to <span className="text-red-400">dread</span>{" "}
            tariff changes. Now <span className="text-sail-green">SAIL</span>{" "}
            flags exactly what&apos;s affected and generates the
            re-classification analysis automatically. We just review and
            approve. Our team finally has time for{" "}
            <span className="text-sail-green">strategic work</span>.&rdquo;
          </blockquote>

          <div className="mt-8">
            <p className="font-semibold text-white">
              Director of Trade Compliance
            </p>
            <p className="mt-1 text-sail-green">Invista</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
