"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconMagnifierAlertOutline18 as FileSearch,
  IconEyeScannerOutline18 as Eye,
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
      "Confidence scores and full reasoning chains show exactly why a product maps to a specific HTS code — with citations, not guesses.",
    icon: FileSearch,
    preview: {
      title: "HTS Classification",
      badge: "95% confidence",
      content: (
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-[#6f695d]">Industrial Sensor Array</span>
            <span className="font-semibold text-sail-blue">8542.31.00.00</span>
          </div>
          <div className="space-y-1.5 border-l-2 border-sail-blue/40 pl-3 text-xs text-[#6f695d]">
            <div>Chapter 85: Electrical machinery</div>
            <div>Heading 8542: Electronic ICs</div>
            <div>Subheading 8542.31: Processors</div>
          </div>
        </div>
      ),
    },
  },
  {
    id: "coordinate",
    step: "02",
    title: "Coordinate",
    headline: "Keep everyone aligned as regulations shift.",
    description:
      "SAIL monitors HTS schedule updates, Section 301/232, and Chapter 99 changes. Brokers, suppliers, and finance work from one live source of truth.",
    icon: Eye,
    preview: {
      title: "Regulatory Alert",
      badge: "2 hours ago",
      content: (
        <div className="space-y-3 text-sm">
          <div className="font-medium text-slate-900">
            Section 301 List Update — Effective Jan 15
          </div>
          <div className="text-[#6f695d]">
            47 products in your catalog affected
          </div>
          <div className="space-y-1 text-xs text-[#6f695d]">
            <div>
              HTS 8471.50 → Rate change:{" "}
              <span className="text-red-500">25% → 35%</span>
            </div>
            <div>
              HTS 8542.31 →{" "}
              <span className="text-sail-blue">New exclusion available</span>
            </div>
          </div>
        </div>
      ),
    },
  },
  {
    id: "defend",
    step: "03",
    title: "Defend",
    headline: "Audit-ready documentation, always.",
    description:
      "Every classification includes the evidence chain: product specs, legal reasoning, and approvals. When CBP sends a CF-28, you respond in hours — not weeks.",
    icon: ShieldCheck,
    preview: {
      title: "CF-28 Response Packet",
      badge: "Ready to export",
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-sail-green" />
            <span className="text-[#6f695d]">
              Product specification (14 pages)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-sail-green" />
            <span className="text-[#6f695d]">
              Classification reasoning chain
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-sail-green" />
            <span className="text-[#6f695d]">
              HTS legal notes & CROSS rulings
            </span>
          </div>
        </div>
      ),
    },
  },
];

export function HowItWorksTabs() {
  const [activeTab, setActiveTab] = useState("classify");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      {/* Tab Navigation */}
      <TabsList className="mb-10 grid h-auto w-full grid-cols-2 gap-3 bg-transparent p-0 md:grid-cols-3">
        {stepsData.map((step) => (
          <TabsTrigger
            key={step.id}
            value={step.id}
            className="group relative flex flex-col items-start gap-2 rounded-none border border-[#e0dbcf] bg-white p-4 text-left transition-all duration-300 hover:border-sail-blue/40 hover:bg-[#fffdf8] data-[state=active]:border-sail-blue/60 data-[state=active]:shadow-lg data-[state=active]:shadow-sail-blue/10 md:p-5"
          >
            {/* Step Icon & Number */}
            <div className="flex w-full items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-sail-blue/10 transition-all duration-300 group-data-[state=active]:scale-110 group-data-[state=active]:bg-sail-blue">
                <step.icon className="h-5 w-5 text-sail-blue transition-all duration-300 group-data-[state=active]:text-white" />
              </div>
              <span className="font-mono text-xs font-semibold text-sail-blue/70 transition-opacity group-data-[state=active]:opacity-100">
                STEP {step.step}
              </span>
            </div>

            {/* Step Title */}
            <div className="text-lg font-semibold text-slate-900 transition-colors md:text-xl">
              {step.title}
            </div>

            {/* Active Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sail-blue to-sail-green opacity-0 transition-all duration-300 group-data-[state=active]:opacity-100" />
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
          <Card className="group rounded-none border border-[#e0dbcf] bg-white p-8 ring-0 transition-all duration-500 hover:border-sail-blue/40 hover:shadow-2xl hover:shadow-sail-blue/10 md:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                    {step.headline}
                  </h3>
                  <p className="text-base leading-relaxed text-[#5d584e] md:text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Additional features or benefits could go here */}
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-sail-blue/10 px-3 py-1 text-xs font-medium text-sail-blue">
                    Fast
                  </span>
                  <span className="rounded-full bg-sail-green/20 px-3 py-1 text-xs font-medium text-[#3b4a00]">
                    Accurate
                  </span>
                  <span className="rounded-full bg-[#f3efe6] px-3 py-1 text-xs font-medium text-[#6f695d]">
                    Audit-Ready
                  </span>
                </div>
              </div>

              {/* Right: Preview Card */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md rounded-none border border-[#e0dbcf] bg-[#fffdf8] p-6 transition-all duration-500 hover:border-sail-blue/30 hover:shadow-2xl hover:shadow-sail-blue/10">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#6f695d]">
                      {step.preview.title}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-[#6f695d]">
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
                ? "w-8 bg-sail-blue"
                : "w-2 bg-[#e0dbcf] hover:bg-[#cfc8b7]"
            }`}
            aria-label={`Go to step ${step.step}`}
          />
        ))}
      </div>
    </Tabs>
  );
}
