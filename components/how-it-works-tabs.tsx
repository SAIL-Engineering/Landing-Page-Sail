"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconMagnifierAlertOutline18 as FileSearch,
  IconEyeScannerOutline18 as Eye,
  IconRefreshOutline18 as RefreshCw,
  IconShieldCheckOutline18 as ShieldCheck,
  IconBoxCheckOutline18 as CheckCircle,
} from "nucleo-ui-outline-18";

const stepsData = [
  {
    id: "classify",
    step: "01",
    title: "Classify",
    headline: "Get the code right the first time.",
    description:
      "Classification confidence scores with full reasoning chains. See exactly why a product maps to a specific HTS code—not just the answer, but the legal logic behind it.",
    icon: FileSearch,
    preview: {
      title: "HTS Classification",
      badge: "98% Confidence",
      content: (
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-300">Industrial Sensor Array</span>
            <span className="font-semibold text-sail-green">8542.31.00.00</span>
          </div>
          <div className="space-y-1.5 border-l-2 border-sail-blue pl-3 text-xs text-slate-400">
            <div>Chapter 85: Electrical machinery</div>
            <div>Heading 8542: Electronic ICs</div>
            <div>Subheading 8542.31: Processors</div>
          </div>
        </div>
      ),
    },
  },
  {
    id: "monitor",
    step: "02",
    title: "Monitor",
    headline: "Know when regulations change before they hit.",
    description:
      "SAIL tracks HTS schedule updates, Section 301/232 modifications, IEPA changes, and Chapter 99 provisions. When something affects your catalog, you know immediately.",
    icon: Eye,
    preview: {
      title: "Regulatory Alert",
      badge: "2 hours ago",
      content: (
        <div className="space-y-3 text-sm">
          <div className="font-medium text-white">
            Section 301 List Update — Effective Jan 15
          </div>
          <div className="text-slate-400">47 products in your catalog affected</div>
          <div className="space-y-1 text-xs text-slate-400">
            <div>
              HTS 8471.50 → Rate change:{" "}
              <span className="text-red-400">25% → 35%</span>
            </div>
            <div>
              HTS 8542.31 →{" "}
              <span className="text-sail-green">New exclusion available</span>
            </div>
          </div>
        </div>
      ),
    },
  },
  {
    id: "maintain",
    step: "03",
    title: "Maintain",
    headline: "Keep 10,000 products current without 10,000 hours.",
    description:
      "Continuous Trade Compliance monitoring across your entire product catalog. Stale classifications surface automatically. Re-classification runs in the background.",
    icon: RefreshCw,
    preview: {
      title: "Catalog Health",
      badge: "Last scan: 12m ago",
      content: (
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Products monitored</span>
            <span className="font-semibold text-white">12,847</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Current & verified</span>
            <span className="font-semibold text-sail-green">98.2%</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sail-blue to-sail-green"
              style={{ width: "98.2%" }}
            />
          </div>
        </div>
      ),
    },
  },
  {
    id: "defend",
    step: "04",
    title: "Defend",
    headline: "Audit-ready documentation, always.",
    description:
      "Every classification includes the evidence chain: product specs, material composition, legal reasoning, and approval history. When CBP sends a CF-28, you respond in hours—not weeks.",
    icon: ShieldCheck,
    preview: {
      title: "CF-28 Response Packet",
      badge: "Ready to export",
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-sail-green" />
            <span className="text-slate-300">Product specification (14 pages)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-sail-green" />
            <span className="text-slate-300">Classification reasoning chain</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-sail-green" />
            <span className="text-slate-300">HTS legal notes & CROSS rulings</span>
          </div>
        </div>
      ),
    },
  },
];

export function HowItWorksTabs() {
  const [activeTab, setActiveTab] = useState("classify");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full"
    >
      {/* Tab Navigation */}
      <TabsList className="mb-12 grid h-auto w-full grid-cols-2 gap-3 bg-transparent p-0 md:grid-cols-4">
        {stepsData.map((step) => (
          <TabsTrigger
            key={step.id}
            value={step.id}
            className="group relative flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all duration-300 data-[state=active]:border-sail-blue/50 data-[state=active]:bg-white/10 data-[state=active]:shadow-lg data-[state=active]:shadow-sail-blue/20 hover:border-white/20 hover:bg-white/10 md:p-5"
          >
            {/* Step Icon & Number */}
            <div className="flex w-full items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sail-blue to-sail-blue-light shadow-lg shadow-sail-blue/20 transition-all duration-300 group-data-[state=active]:scale-110 group-data-[state=active]:shadow-sail-blue/40">
                <step.icon className="h-5 w-5 text-white" />
              </div>
              <span className="font-mono text-xs font-semibold text-sail-green opacity-60 transition-opacity group-data-[state=active]:opacity-100">
                STEP {step.step}
              </span>
            </div>

            {/* Step Title */}
            <div className="text-lg font-semibold text-white transition-colors md:text-xl">
              {step.title}
            </div>

            {/* Active Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-sail-blue to-sail-green opacity-0 transition-all duration-300 group-data-[state=active]:opacity-100" />
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      {stepsData.map((step) => (
        <TabsContent
          key={step.id}
          value={step.id}
          className="mt-0 animate-slide-up"
        >
          <Card className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur transition-all duration-500 hover:border-sail-blue/40 hover:from-white/10 md:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-white md:text-3xl">
                    {step.headline}
                  </h3>
                  <p className="text-base leading-relaxed text-white/70 md:text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Additional features or benefits could go here */}
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-sail-blue/20 px-3 py-1 text-xs font-medium text-sail-blue-light">
                    Fast
                  </span>
                  <span className="rounded-full bg-sail-green/20 px-3 py-1 text-xs font-medium text-sail-green">
                    Accurate
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                    Audit-Ready
                  </span>
                </div>
              </div>

              {/* Right: Preview Card */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md rounded-xl border border-white/10 bg-sail-navy/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-sail-blue/30 hover:shadow-2xl hover:shadow-sail-blue/20">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">
                      {step.preview.title}
                    </span>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-300">
                      {step.preview.badge}
                    </span>
                  </div>
                  {step.preview.content}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      ))}

      {/* Progress Dots for Mobile */}
      <div className="mt-6 flex justify-center gap-2 md:hidden">
        {stepsData.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveTab(step.id)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeTab === step.id
                ? "w-8 bg-sail-green"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to step ${step.step}`}
          />
        ))}
      </div>
    </Tabs>
  );
}
