import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import Link from "next/link";
import Image from "next/image";
import { HowItWorksTabs } from "@/components/how-it-works-tabs";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CaseStudyVisual } from "@/components/case-study-visual";
import { GridOverlay } from "@/components/landing/grid-overlay";
import {
  IconArrowRightOutline18 as ArrowRight,
  IconShieldCheckOutline18 as ShieldCheck,
  IconEyeScannerOutline18 as Eye,
  IconRefreshOutline18 as RefreshCw,
  IconBoxOutline18 as Package,
  IconScrollTextOutline18 as FileText,
  IconBoxCheckOutline18 as CheckCircle,
  IconBoltOutline18 as Zap,
  IconBox2Outline18 as Database,
  IconChartColumnOutline18 as BarChart3,
  IconEnvelopeOutline18 as Send,
} from "nucleo-ui-outline-18";
import { TalkToFounderButton } from "@/components/talk-to-founder-button";

export const metadata: Metadata = constructMetadata({
  title: "SAIL",
  description:
    "Trade Compliance that keeps up with the world. Classification, monitoring, and audit-ready documentation for brokers, enterprises, and trade professionals.",
  canonical: "/",
});

export default function Home() {
  const workflowTabs = [
    { label: "HTS Book", color: "#f6c453" },
    { label: "CROSS Rulings", color: "#ff8a8a" },
    { label: "PGA (FDA/EPA)", color: "#7dd3fc" },
    { label: "SharePoint", color: "#60a5fa" },
    { label: "Teams", color: "#8b5cf6" },
    { label: "Email Intake", color: "#f97316" },
    { label: "Excel Tracker", color: "#22c55e" },
    { label: "TMS Portal", color: "#94a3b8" },
  ];

  return (
    <>
      <main className="sail-shell">
        {/* ═══════════════════════════════════════════════════════════════════
            HERO - "Trade Compliance that keeps up with the world"
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="hero"
          className="relative overflow-hidden bg-[#0b0f2b] pb-24 pt-32 text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,60,237,0.35),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(216,253,73,0.15),_transparent_55%)]" />
          <GridOverlay className="opacity-10" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left: Copy */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <span className="border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    Compliance command center
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-sail-green/80">
                    Built for trade compliance leaders
                  </span>
                </div>

                <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Every classification becomes a defensible decision.
                </h1>

                <p className="mx-auto max-w-xl text-base text-white/70 sm:text-lg lg:mx-0">
                  <span className="sail-wordmark">SAIL</span>{" "}
                  <span className="font-brand">GTX</span> is a workspace for HTS
                  classification, tariff stacking, and audit defense. Reasoning,
                  evidence, and approvals are captured as the work happens.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                  <Button
                    variant="sail"
                    size="lg"
                    className="group relative overflow-hidden text-base transition-all duration-500"
                    asChild
                  >
                    <Link
                      href="/free-audit"
                      className="flex items-center justify-center"
                    >
                      Book Free Audit
                    </Link>
                  </Button>
                  <TalkToFounderButton
                    size="lg"
                    className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-slate-900"
                  />
                </div>

                <div className="grid gap-4 text-left sm:grid-cols-3">
                  {[
                    {
                      label: "Confidence",
                      value: "98%+",
                    },
                    {
                      label: "Time to value",
                      value: "Days, not months",
                    },
                    {
                      label: "Coverage",
                      value: "Full catalog",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">
                        {stat.label}
                      </span>
                      <span className="mt-2 block text-lg font-semibold text-white">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Command Center Preview */}
              <div className="relative">
                <div className="overflow-hidden border border-white/10 bg-[#11163a]">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.3em] text-white/60">
                    <span>Workspace: Classification</span>
                    <span>Live audit trail</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                          HTS 7210.41.00.00
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          Steel coil sheets - cold rolled
                        </p>
                      </div>
                      <div className="border border-sail-green/40 bg-sail-green/20 px-3 py-1 text-xs font-semibold text-sail-green">
                        Approved
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 lg:grid-cols-2">
                      <div className="border border-white/10 bg-[#0f1333] p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                          Decision trace
                        </p>
                        <ul className="mt-3 space-y-2 text-xs text-white/70">
                          {[
                            "Chapter 72: Iron and steel",
                            "Heading 7210: Flat-rolled products",
                            "Subheading 7210.41: Cold-rolled, plated",
                            "Broker approval logged",
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 bg-sail-green" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 font-mono text-xs text-white/60">
                          {">"} Review pending{" "}
                          <span className="inline-block h-4 w-1 animate-pulse bg-sail-green" />
                        </div>
                      </div>

                      <div className="border border-white/10 bg-[#0f1333] p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                          Tariff stack
                        </p>
                        <div className="mt-3 space-y-2 text-xs text-white/70">
                          {[
                            { label: "Base NTR", value: "Free" },
                            { label: "IEEPA China/HK", value: "10%" },
                            { label: "IEEPA Reciprocal", value: "10%" },
                            { label: "Section 232 Steel", value: "50%" },
                            { label: "Section 301 List I", value: "25%" },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="flex items-center justify-between border-b border-white/10 pb-2 last:border-0 last:pb-0"
                            >
                              <span>{item.label}</span>
                              <span className="font-mono text-white">
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                          Total duty rate:{" "}
                          <span className="font-mono text-white">57%</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                      {[
                        { label: "Evidence", value: "7 documents" },
                        { label: "Approvals", value: "2 reviewers" },
                        { label: "Cycle time", value: "3 hours" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="border border-white/10 bg-[#0f1333] p-3"
                        >
                          <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                            {stat.label}
                          </div>
                          <div className="mt-2 text-sm font-semibold text-white">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 hidden border border-white/10 bg-[#11163a] px-4 py-3 text-xs text-white/70 lg:block">
                  CF-28 packet ready to export
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            THE PROBLEM - "Your Trade Compliance data is already out of date"
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative py-24">
          <div className="sail-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <ScrollReveal direction="left">
                <div>
                  <p className="sail-kicker-muted">Where it breaks</p>
                  <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                    Compliance is still a patchwork of tabs, inboxes, and tribal
                    knowledge.
                  </h2>
                  <p className="mt-6 text-lg text-[#5d584e]">
                    Every tariff change triggers a scramble across HTS books,
                    CROSS rulings, spreadsheets, and emails. The work is
                    defensible only when the evidence chain is assembled — and
                    that takes time most brokers don&apos;t have.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        label: "Manual review per SKU",
                        value: "45 minutes",
                      },
                      {
                        label: "Catalog coverage",
                        value: "~15%",
                      },
                      {
                        label: "CF-28 response",
                        value: "3-4 weeks",
                      },
                      {
                        label: "HTS changes / year",
                        value: "2,000+",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="sail-card flex items-center justify-between rounded-none px-4 py-3"
                      >
                        <span className="text-xs uppercase tracking-[0.2em] text-[#6f695d]">
                          {stat.label}
                        </span>
                        <span className="font-mono text-sm font-semibold text-slate-900">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="sail-card overflow-hidden rounded-none">
                  <div className="flex items-center justify-between border-b border-[#e0dbcf] bg-[#f3efe6] px-4 py-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#6b5f50]">
                      Current workflow
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#6b5f50]">
                      8 systems
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 border-b border-[#e0dbcf] bg-[#f9f3e6] px-4 py-3">
                    {workflowTabs.map((tab) => (
                      <div
                        key={tab.label}
                        className="flex items-center gap-2 border border-[#e0dbcf] bg-white px-3 py-1 text-xs text-[#4a4338]"
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: tab.color }}
                        />
                        <span>{tab.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-4 bg-[#fffdf8] p-5">
                    <div className="border border-[#e8dcc5] bg-[#fff8e6] p-4">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[#8a6b2d]">
                        Open docs
                      </div>
                      <div className="mt-3 space-y-2 text-sm text-[#4a4338]">
                        <div className="flex items-center justify-between">
                          <span>Classification notes.xlsx</span>
                          <span className="text-xs text-[#8a7b65]">v12</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>PGA checklist.docx</span>
                          <span className="text-xs text-[#8a7b65]">draft</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>DDP quote calcs.xlsx</span>
                          <span className="text-xs text-[#8a7b65]">today</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-[#d4e3fb] bg-[#eef4ff] p-4">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[#3f5f9b]">
                        Status
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#3c4963]">
                        Five tabs open, two inboxes, and a shared drive just to
                        get one decision out the door.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            HOW IT WORKS - Interactive Tabs (Award-Winning UX)
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="how" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="sail-kicker">How It Works</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  From chaos to cleared, with evidence.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-[#5d584e]">
                  The same pillars the app is built on — classification clarity,
                  coordinated updates, and audit-ready defense.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <HowItWorksTabs />
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CAPABILITIES - Bento Grid
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="capabilities" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="sail-kicker">Capabilities</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  The compliance stack, in one system.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-[#5d584e]">
                  Built for the daily reality of brokers and trade compliance
                  teams — from classification to audit defense.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Real-Time Classification",
                  body: "HTS codes with confidence scores, legal reasoning, and evidence chains.",
                  icon: Zap,
                  preview:
                    "Get HTS codes in seconds with AI-powered classification and full legal reasoning.",
                },
                {
                  title: "Continuous Monitoring",
                  body: "Product catalog checked against regulatory changes daily.",
                  icon: Eye,
                  preview:
                    "Automatic daily scans detect tariff changes affecting your products instantly.",
                },
                {
                  title: "Tariff Stack Calculator",
                  body: "MFN + Section 301 + 232 + Chapter 99 + IEPA + MPF/HMF.",
                  icon: BarChart3,
                  preview:
                    "Calculate total landed costs with all applicable tariffs and fees automatically.",
                },
                {
                  title: "CF-28/29 Response",
                  body: "Audit documentation generated instantly with evidence chains.",
                  icon: FileText,
                  preview:
                    "Generate complete audit responses with product specs and legal justification.",
                },
              ].map((item, index) => (
                <Card
                  key={item.title}
                  className="sail-card group relative overflow-hidden rounded-none p-5 ring-0 transition-all duration-500 hover:-translate-y-1 hover:border-sail-blue/40 hover:shadow-2xl hover:shadow-sail-blue/10"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-sail-blue/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-sail-blue group-hover:shadow-lg group-hover:shadow-sail-blue/30">
                    <item.icon className="h-4 w-4 text-sail-blue transition-all duration-500 group-hover:text-white" />
                  </div>
                  <h3 className="mb-1 font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sail-blue">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5d584e] transition-colors duration-300 group-hover:text-slate-700">
                    {item.body}
                  </p>

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sail-blue/5 via-transparent to-sail-green/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            WHO WE SERVE
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="audiences" className="bg-sail-oat py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="sail-kicker">Who We Serve</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  Built for customs brokers first.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-[#5d584e]">
                  <span className="sail-wordmark">SAIL</span> works across the
                  entire Trade Compliance ecosystem—because that&apos;s how the
                  work actually flows.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Customs Brokers",
                  timeline: "Book Free Audit",
                  isLink: true,
                  description:
                    "Stop chasing clients for classification data. Get accurate HTS codes with documentation you can trust—before the shipment arrives.",
                  features: [
                    "Classification confidence scores",
                    "Audit-ready documentation",
                    "Direct client collaboration",
                    "Real-time regulatory updates",
                  ],
                },
                {
                  title: "Enterprise Teams",
                  timeline: "Live in 2 weeks",
                  isLink: false,
                  description:
                    "Finally, a product catalog that stays current. Monitor 10,000+ SKUs without dedicating full-time headcount to maintenance.",
                  features: [
                    "Continuous catalog monitoring",
                    "Stale classification alerts",
                    "Bulk re-classification workflows",
                    "Full audit trail",
                  ],
                },
                {
                  title: "Trade Law",
                  timeline: "Litigation-grade",
                  isLink: false,
                  description:
                    "Build defensible positions with classification reasoning chains and evidence documentation.",
                  features: [
                    "Legal reasoning exports",
                    "CROSS ruling research",
                    "Classification dispute support",
                    "Prior disclosure documentation",
                  ],
                },
              ].map((audience, index) => (
                <Card
                  key={audience.title}
                  className="sail-card group relative overflow-hidden rounded-none p-6 ring-0 transition-all duration-500 hover:-translate-y-2 hover:border-sail-blue/40 hover:shadow-2xl hover:shadow-sail-blue/10"
                  style={{
                    animationDelay: `${index * 75}ms`,
                  }}
                >
                  {audience.isLink ? (
                    <Link
                      href="/free-audit"
                      className="mb-4 inline-flex items-center gap-1 rounded-none bg-sail-blue px-3 py-1 text-xs font-bold text-white transition-all duration-300 hover:gap-2 hover:bg-sail-blue-hover hover:shadow-lg hover:shadow-sail-blue/30"
                    >
                      {audience.timeline}
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  ) : (
                    <div className="mb-4 inline-block rounded-none bg-sail-green px-3 py-1 text-xs font-bold text-black shadow-sm shadow-sail-green/20">
                      {audience.timeline}
                    </div>
                  )}
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sail-blue">
                    {audience.title}
                  </h3>
                  <p className="mb-4 text-sm text-[#5d584e] transition-colors duration-300 group-hover:text-slate-700">
                    {audience.description}
                  </p>
                  <ul className="space-y-2 text-sm text-[#6f695d]">
                    {audience.features.map((feature, i) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${i * 30}ms` }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-sail-blue transition-all duration-300 group-hover:scale-150 group-hover:bg-sail-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sail-blue/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            INTEGRATIONS - Fixed Logo Grid
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="border-y border-[#e0dbcf] bg-[#fffdf8] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 text-center">
              <p className="sail-kicker">Integrations</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900">
                Connects to the systems you already use.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[#5d584e]">
                <span className="sail-wordmark">SAIL</span> fits into existing
                workflows. ERP integration, email forwarding, broker portals. No
                rip-and-replace required.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                {
                  type: "image",
                  src: "/logos/SAP_2011_logo.svg",
                  alt: "SAP",
                  width: 80,
                },
                {
                  type: "image",
                  src: "/logos/cbp.png",
                  alt: "CBP",
                  width: 90,
                },
                {
                  type: "image",
                  src: "/logos/ace_logo_transparent.png",
                  alt: "ACE",
                  width: 60,
                },
                {
                  type: "image",
                  src: "/logos/slack.png",
                  alt: "Slack",
                  width: 120,
                },
                {
                  type: "image",
                  src: "/logos/teams.png",
                  alt: "Teams",
                  width: 50,
                },
                {
                  type: "image",
                  src: "/logos/oracle.svg",
                  alt: "Oracle",
                  width: 110,
                },
                {
                  type: "image",
                  src: "/logos/Box,_Inc._logo.svg.png",
                  alt: "Box",
                  width: 70,
                },
                {
                  type: "image",
                  src: "/logos/outlook.svg",
                  alt: "Outlook",
                  width: 36,
                },
                {
                  type: "image",
                  src: "/logos/gmail-logo-brandlogos.net_ni0u393lv.svg",
                  alt: "Gmail",
                  width: 90,
                },
                {
                  type: "image",
                  src: "/logos/sharepoint.svg",
                  alt: "SharePoint",
                  width: 36,
                },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={40}
                    className="h-auto opacity-70 transition hover:scale-110 hover:opacity-100"
                    style={{ maxHeight: "40px", width: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CASE STUDY - Dramatic Before/After (Award-Winning UX)
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="case-study" className="bg-sail-oat py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <CaseStudyVisual />
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            METRICS - Empowering Copy
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="sail-kicker">Your Competitive Edge</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                  Work faster. File smarter. Sleep better.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5d584e]">
                  The numbers that let you outpace the competition.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  value: "15x",
                  label: "Faster product classification",
                  subtext: "45 min → 3 min",
                },
                {
                  value: "Same day",
                  label: "CF-28 response turnaround",
                  subtext: "vs. 3-4 weeks",
                },
                {
                  value: "100%",
                  label: "Catalog coverage after changes",
                  subtext: "vs. ~15% sampling",
                },
                {
                  value: "Daily",
                  label: "Regulatory monitoring",
                  subtext: "Never miss a change",
                },
                {
                  value: "98%+",
                  label: "Classification confidence",
                  subtext: "With evidence chains",
                },
              ].map((stat, index) => (
                <ScrollReveal
                  key={stat.label}
                  delay={index * 100}
                  direction="up"
                >
                  <div className="sail-card flex h-full flex-col items-center justify-center rounded-none px-4 py-6 text-center">
                    <div className="font-serif text-3xl font-bold text-sail-blue md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 font-medium text-slate-900">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-xs text-[#6f695d]">
                      {stat.subtext}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            TIME TO VALUE - Light, broker-first
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative bg-[#f7f8fa] py-24">
          <div className="sail-grid absolute inset-0 opacity-15" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="sail-kicker">Time to Value</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900">
                  Live in days. Defend in weeks.
                </h2>
                <p className="mt-4 text-lg text-[#5d584e]">
                  While competitors spend months in implementation purgatory,
                  you&apos;re already classifying, monitoring, and responding.
                </p>
                <p className="mt-4 font-medium text-slate-900">
                  <span className="sail-wordmark">SAIL</span> deploys in days
                  for brokers and weeks for enterprises.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      day: "Day 1",
                      task: "Account setup, product catalog import",
                      icon: Package,
                    },
                    {
                      day: "Day 3",
                      task: "Classification engine calibrated to your products",
                      icon: RefreshCw,
                    },
                    {
                      day: "Day 7",
                      task: "Regulatory monitoring active",
                      icon: Eye,
                    },
                    {
                      day: "Day 14",
                      task: "Team trained, workflows live",
                      icon: CheckCircle,
                    },
                  ].map((item) => (
                    <Card
                      key={item.day}
                      className="sail-card flex items-center gap-4 rounded-none bg-white p-4 ring-0 transition hover:border-sail-blue/40 hover:shadow-lg hover:shadow-sail-blue/10"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-none border border-sail-blue/20 bg-sail-blue/10">
                        <item.icon className="h-6 w-6 text-sail-blue" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-sail-blue">
                            {item.day}
                          </span>
                        </div>
                        <span className="font-medium text-slate-900">
                          {item.task}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="mb-4 text-sm font-semibold text-[#6f695d]">
                    Meanwhile, traditional rollouts stall on:
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Traditional GTS implementations",
                        time: "6-18 months",
                      },
                      {
                        name: "Competitor enterprise platforms",
                        time: "3-6 months",
                      },
                      { name: "Consulting-led projects", time: "12+ months" },
                    ].map((comp) => (
                      <Card
                        key={comp.name}
                        className="flex items-center justify-between rounded-none border border-[#f1b3ad] bg-white p-5 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] ring-0"
                      >
                        <span className="text-sm text-[#5d584e]">
                          {comp.name}
                        </span>
                        <span className="font-mono text-sm font-semibold text-red-500">
                          {comp.time}
                        </span>
                      </Card>
                    ))}
                  </div>
                  <p className="mt-6 text-center text-sm italic text-[#6f695d]">
                    Every month they wait is a month you&apos;re ahead.
                  </p>
                </div>

                <div className="sail-card overflow-hidden rounded-none">
                  <div className="border-b border-[#e0dbcf] bg-[#f3efe6] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#6b5f50]">
                    Product evidence snapshot
                  </div>
                  <div className="grid gap-4 bg-[#fffdf8] p-5">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="sail-card rounded-none bg-white p-4 ring-0">
                        <p className="sail-kicker-muted">Product</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-900">
                            Industrial Sensor Array
                          </span>
                          <span className="font-mono text-xs font-semibold text-sail-blue">
                            8542.31.00.00
                          </span>
                        </div>
                        <div className="mt-4 space-y-3 text-xs text-[#6f695d]">
                          <div className="flex items-center justify-between">
                            <span>Confidence</span>
                            <span className="font-mono text-slate-900">
                              98%
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-[#e0dbcf]">
                            <div className="h-1.5 w-[92%] bg-sail-blue" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Tariff stack</span>
                            <span className="font-mono text-slate-900">
                              32.5%
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-[#e0dbcf]">
                            <div className="h-1.5 w-[68%] bg-sail-green" />
                          </div>
                        </div>
                      </div>

                      <div className="sail-card rounded-none bg-white p-4 ring-0">
                        <p className="sail-kicker-muted">Evidence chain</p>
                        <ul className="mt-3 space-y-3 text-sm text-[#5d584e]">
                          {[
                            "Product spec sheet (14 pages)",
                            "Supplier material composition",
                            "3 matching CROSS rulings",
                            "Broker approval logged",
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 bg-sail-blue" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
                      <div className="sail-card rounded-none bg-white p-4 ring-0">
                        <div className="flex items-center justify-between">
                          <p className="sail-kicker-muted">Tariff stack</p>
                          <span className="font-mono text-xs font-semibold text-slate-900">
                            Total 57%
                          </span>
                        </div>
                        <div className="mt-3 space-y-2 text-xs text-[#5d584e]">
                          {[
                            {
                              code: "7210.41.00.00",
                              label: "Base NTR",
                              rate: "Free",
                              duty: "$0",
                            },
                            {
                              code: "9903.01.24",
                              label: "IEEPA China/HK",
                              rate: "10%",
                              duty: "$700",
                            },
                            {
                              code: "9903.01.25",
                              label: "IEEPA Reciprocal",
                              rate: "10%",
                              duty: "$700",
                            },
                            {
                              code: "9903.81.87",
                              label: "Section 232 Steel",
                              rate: "50%",
                              duty: "$1,500",
                            },
                            {
                              code: "9903.91.01",
                              label: "Section 301 List I",
                              rate: "25%",
                              duty: "$1,750",
                            },
                          ].map((item) => (
                            <div
                              key={`${item.code}-${item.rate}`}
                              className="flex items-start justify-between gap-3 border-b border-[#e0dbcf] pb-2 last:border-0 last:pb-0"
                            >
                              <div className="min-w-0">
                                <div className="font-mono text-[11px] text-slate-900">
                                  {item.code}
                                </div>
                                <div className="text-xs text-[#6f695d]">
                                  {item.label}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-mono text-xs font-semibold text-slate-900">
                                  {item.rate}
                                </div>
                                <div className="text-[11px] text-[#6f695d]">
                                  {item.duty}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 border border-[#e0dbcf] bg-[#fffdf8] px-3 py-2 text-xs text-[#6f695d]">
                          Stacked on $10,000 entered value
                        </div>
                      </div>

                      <div className="sail-card rounded-none bg-white p-4 ring-0">
                        <div className="flex items-center justify-between">
                          <p className="sail-kicker-muted">Decision trace</p>
                          <span className="font-mono text-xs font-semibold text-slate-900">
                            Ready to export
                          </span>
                        </div>
                        <div className="mt-3 grid gap-3">
                          {[
                            { label: "Inputs", value: "7 documents" },
                            { label: "Approvals", value: "2 reviewers" },
                            { label: "Cycle time", value: "3 hours" },
                          ].map((stat) => (
                            <div
                              key={stat.label}
                              className="border border-[#e0dbcf] bg-[#fffdf8] p-3"
                            >
                              <div className="text-xs uppercase tracking-[0.2em] text-[#6f695d]">
                                {stat.label}
                              </div>
                              <div className="mt-2 text-sm font-semibold text-slate-900">
                                {stat.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CTA - Final Push
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="cta"
          className="relative overflow-hidden bg-sail-blue py-20"
        >
          <GridOverlay className="opacity-10" />
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sail-blue via-sail-blue-light to-sail-blue opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sail-green/10 via-transparent to-transparent" />

          <ScrollReveal>
            <div className="relative mx-auto max-w-7xl px-6">
              <div className="flex flex-col items-center justify-between gap-8 text-center text-white md:flex-row md:text-left">
                <div className="max-w-2xl">
                  <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                    See your decision trace before the next shipment.
                  </h2>
                  <p className="mt-4 text-lg text-white/90">
                    Get a free audit of classification accuracy and tariff
                    exposure. No commitment — just the evidence chain you can
                    act on.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 md:justify-start">
                    <span className="rounded-none border border-white/30 px-3 py-1">
                      Decision trace
                    </span>
                    <span className="rounded-none border border-white/30 px-3 py-1">
                      Tariff stack
                    </span>
                    <span className="rounded-none border border-white/30 px-3 py-1">
                      CF-28 readiness
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-sail-green text-black transition-all duration-500 hover:scale-105 hover:bg-sail-green-light hover:shadow-2xl hover:shadow-sail-green/40"
                    asChild
                  >
                    <Link
                      href="/free-audit"
                      className="flex items-center justify-center"
                    >
                      Book Free Audit
                    </Link>
                  </Button>
                  <TalkToFounderButton
                    size="lg"
                    className="border-white/50 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sail-blue hover:shadow-xl"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}
