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
        <p className="sail-kicker">Case Study</p>
        <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          How a Fortune 500 Chemicals Company transformed Trade Compliance
          operations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5d584e]">
          From reactive firefighting to continuous confidence in just 11 days
        </p>
      </div>

      {/* Before/After Comparison */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* BEFORE */}
        <Card className="relative overflow-hidden rounded-none border border-red-300 bg-[#fff3f0] p-6 ring-0 sm:p-8">
          <div className="absolute right-4 top-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
              <span className="text-2xl font-bold text-red-400">×</span>
            </div>
          </div>

          <div className="mb-6">
            <Badge className="border-red-300 bg-white text-red-600">
              Before SAIL
            </Badge>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              The Challenge
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">
                  8,000+ products
                </span>{" "}
                classified across multiple business units
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">
                  Weeks of manual review
                </span>{" "}
                required for every tariff change
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">
                  3-4 weeks to compile
                </span>{" "}
                CF-28 audit responses
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">
                  45 minutes per product
                </span>{" "}
                for manual classification
              </p>
            </div>
          </div>

          {/* Dramatic stat */}
          <div className="mt-8 rounded-none border border-red-200 bg-white p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600">~15%</div>
              <div className="mt-2 text-sm text-slate-600">
                of catalog reviewed after changes
              </div>
              <div className="mt-1 text-xs text-red-500">
                Leaving 85% at risk
              </div>
            </div>
          </div>
        </Card>

        {/* AFTER */}
        <Card className="relative overflow-hidden rounded-none border border-sail-green/40 bg-[#f4ffe0] p-6 ring-0 sm:p-8">
          <div className="absolute right-4 top-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sail-green/20">
              <Check className="h-6 w-6 text-sail-green" />
            </div>
          </div>

          <div className="mb-6">
            <Badge className="border-sail-green/60 bg-white text-[#3b4a00]">
              After SAIL
            </Badge>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              The Results
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sail-green"></div>
              <p className="text-sm text-[#5d584e]">
                <span className="font-semibold text-[#3b4a00]">
                  Full deployment in 11 days
                </span>{" "}
                with complete catalog import
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sail-green"></div>
              <p className="text-sm text-[#5d584e]">
                <span className="font-semibold text-[#3b4a00]">
                  Automatic daily monitoring
                </span>{" "}
                of all regulatory changes
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sail-green"></div>
              <p className="text-sm text-[#5d584e]">
                <span className="font-semibold text-[#3b4a00]">
                  Same-day CF-28 responses
                </span>{" "}
                with full evidence chains
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sail-green"></div>
              <p className="text-sm text-[#5d584e]">
                <span className="font-semibold text-[#3b4a00]">
                  3 minutes per product
                </span>{" "}
                with AI-powered classification
              </p>
            </div>
          </div>

          {/* Dramatic stat */}
          <div className="mt-8 rounded-none border border-sail-green/30 bg-white p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3b4a00]">100%</div>
              <div className="mt-2 text-sm text-slate-900">
                of catalog automatically reviewed
              </div>
              <div className="mt-1 text-xs text-[#3b4a00]">
                Zero products at risk
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Metrics Comparison - Dramatic Before → After */}
      <Card className="overflow-hidden rounded-none border border-[#e0dbcf] bg-white ring-0">
        <div className="border-b border-[#e0dbcf] bg-[#f3efe6] px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-slate-900">
              Key Performance Metrics
            </p>
            <Badge className="border-sail-blue/40 bg-sail-blue/10 text-sail-blue">
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
                after: "95%",
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
                className="group relative overflow-hidden rounded-none border border-[#e0dbcf] bg-white p-5 transition-all duration-500 hover:border-sail-blue/50 hover:shadow-lg hover:shadow-sail-blue/10"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    {item.metric}
                  </h4>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="text-xs text-red-500 line-through opacity-60">
                      {item.before}
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 text-sail-blue" />
                      <div className="font-mono text-lg font-bold text-sail-blue">
                        {item.after}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-none bg-sail-green/35 px-3 py-1.5">
                  <div className="text-xs font-semibold text-slate-900">
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
      <Card className="rounded-none border border-[#e0dbcf] bg-[#fffdf8] p-8 ring-0 lg:p-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-sail-blue to-sail-green p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900">
                <span className="text-2xl font-bold text-white">I</span>
              </div>
            </div>
          </div>

          <blockquote className="text-xl italic leading-relaxed text-slate-900 md:text-2xl">
            &ldquo;We used to <span className="text-red-400">dread</span> tariff
            changes. Now <span className="text-sail-blue">SAIL</span> flags
            exactly what&apos;s affected and generates the re-classification
            analysis automatically. We just review and approve. Our team finally
            has time for <span className="text-slate-900">strategic work</span>
            .&rdquo;
          </blockquote>

          <div className="mt-8">
            <p className="font-semibold text-slate-900">
              Director of Trade Compliance
            </p>
            <p className="mt-1 text-sail-blue">Fortune 500 Chemicals Company</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
