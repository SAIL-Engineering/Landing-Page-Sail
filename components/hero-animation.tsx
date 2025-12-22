"use client";

import React from "react";
import {
  IconBoxCheckOutline18 as CheckCircle2,
  IconBoxOutline18 as Package,
  IconArrowTrendUpOutline18 as TrendingUp,
  IconShieldCheckOutline18 as FileCheck,
  IconShieldCheckOutline18 as ShieldCheck,
  IconArrowBoldUpOutline18 as ArrowUpRight,
} from "nucleo-ui-outline-18";

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT CLASSIFICATION TABLE
// ─────────────────────────────────────────────────────────────────────────────
const ClassificationTable = () => {
  const products = [
    {
      sku: "GTX-8542-31",
      name: "Industrial Sensor Array",
      hts: "8542.31.00.00",
      status: "verified",
    },
    {
      sku: "GTX-8471-50",
      name: "Compute Module X1",
      hts: "8471.50.01.50",
      status: "verified",
    },
    {
      sku: "GTX-9403-20",
      name: "Storage Cabinet Steel",
      hts: "9403.20.00.18",
      status: "pending",
    },
  ];

  return (
    <div className="w-[340px] overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#343CED]/10">
            <Package className="h-4 w-4 text-[#343CED]" />
          </div>
          <span className="font-semibold text-slate-900">Product Library</span>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          3 items
        </span>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[1fr_1.2fr_1fr] gap-2 border-b border-slate-50 bg-slate-50/50 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        <span>SKU</span>
        <span>Product</span>
        <span>HTS Code</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-slate-50">
        {products.map((product, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_1.2fr_1fr] items-center gap-2 px-5 py-3 transition-colors hover:bg-slate-50/50"
          >
            <span className="truncate font-mono text-xs font-semibold text-[#343CED]">
              {product.sku}
            </span>
            <span className="truncate text-sm text-slate-700">
              {product.name}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-[10px] text-slate-600">
                {product.hts}
              </span>
              {product.status === "verified" && (
                <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// DUTY SAVINGS WIDGET
// ─────────────────────────────────────────────────────────────────────────────
const DutySavingsWidget = () => {
  return (
    <div className="w-[200px] overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D8FD49]/30">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
          </div>
          <span className="text-xs font-semibold text-slate-500">
            Duty Savings
          </span>
        </div>

        <div className="mb-1 text-2xl font-bold text-slate-900">$127,450</div>
        <div className="mb-3 flex items-center gap-1.5 text-xs text-emerald-600">
          <ArrowUpRight className="h-3 w-3" />
          <span className="font-semibold">+18.3%</span>
          <span className="text-slate-400">vs last quarter</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#343CED] to-[#D8FD49]"
            style={{ width: "72%" }}
          />
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] text-slate-400">
          <span>Recovered</span>
          <span className="font-semibold text-slate-600">72%</span>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SHIPMENT STATUS CHIP
// ─────────────────────────────────────────────────────────────────────────────
const ShipmentStatusChip = () => {
  return (
    <div className="flex items-center gap-3 rounded-full border border-slate-200/60 bg-white px-4 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
        <ShieldCheck className="h-4 w-4 text-emerald-600" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-900">Cleared</span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
        </div>
        <span className="text-[11px] text-slate-500">
          Entry #7501-2024-0847
        </span>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPLIANCE SCORE WIDGET
// ─────────────────────────────────────────────────────────────────────────────
const ComplianceScore = () => {
  return (
    <div className="w-[140px] overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
      <div className="mb-2 flex items-center gap-1.5">
        <FileCheck className="h-3.5 w-3.5 text-[#343CED]" />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Compliance
        </span>
      </div>
      <div className="text-3xl font-bold text-slate-900">98%</div>
      <div className="mt-1 text-[11px] text-slate-500">Audit-ready</div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN HERO ANIMATION EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function HeroAnimation() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      data-testid="hero-animation"
    >
      {/* Decorative Background */}
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#343CED]/10 blur-[100px]" />
      <div className="absolute -left-10 bottom-20 h-48 w-48 rounded-full bg-[#D8FD49]/20 blur-[80px]" />

      {/* Layered Card Composition */}
      <div className="relative">
        {/* Main Card: Classification Table */}
        <div className="relative z-10 transform transition-transform duration-500 hover:scale-[1.02]">
          <ClassificationTable />
        </div>

        {/* Floating Card: Duty Savings - Top Right */}
        <div className="absolute -right-16 -top-8 z-20 transform transition-transform duration-500 hover:-translate-y-1">
          <DutySavingsWidget />
        </div>

        {/* Floating Chip: Shipment Status - Bottom Left */}
        <div className="absolute -bottom-6 -left-12 z-20 transform transition-transform duration-500 hover:translate-x-1">
          <ShipmentStatusChip />
        </div>

        {/* Floating Card: Compliance Score - Bottom Right */}
        <div className="absolute -bottom-12 -right-8 z-20 transform transition-transform duration-500 hover:translate-y-1">
          <ComplianceScore />
        </div>
      </div>
    </div>
  );
}
