import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import Link from "next/link";
import Image from "next/image";
import HeroAnimation from "@/components/hero-animation";
import {
  IconArrowRightOutline18 as ArrowRight,
  IconShieldCheckOutline18 as ShieldCheck,
  IconMagnifierAlertOutline18 as FileSearch,
  IconEyeScannerOutline18 as Eye,
  IconRefreshOutline18 as RefreshCw,
  IconBoxScaleOutline18 as Scale,
  IconBoxOutline18 as Package,
  IconEarthOutline18 as Globe,
  IconScrollTextOutline18 as FileText,
  IconShieldOutline18 as ClipboardCheck,
  IconUsersOutline18 as Users,
  IconBellOnOutline18 as AlertTriangle,
  IconClockRotateClockwiseOutline18 as Clock,
  IconBoxCheckOutline18 as CheckCircle,
  IconBoltOutline18 as Zap,
  IconBox2Outline18 as Database,
  IconChartColumnOutline18 as BarChart3,
  IconEnvelopeOutline18 as Send,
} from "nucleo-ui-outline-18";

export const metadata: Metadata = constructMetadata({
  title: "SAIL",
  description:
    "Trade Compliance that keeps up with the world. Classification, monitoring, and audit-ready documentation for brokers, enterprises, and trade professionals.",
  canonical: "/",
});

export default function Home() {
  return (
    <>
      <main className="bg-[#F6F3EB]">
        {/* ═══════════════════════════════════════════════════════════════════
            HERO - "Trade Compliance that keeps up with the world"
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          id="hero"
          className="relative overflow-hidden bg-[#0b0f2b] pb-20 pt-32 text-white"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero/hero.png"
              alt="Port of Oakland"
              fill
              priority
              loading="eager"
              className="object-cover object-center brightness-110"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />

          <div className="relative z-20 mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left: Copy */}
              <div className="space-y-8">
                <Badge className="border border-[#D8FD49]/60 bg-[#D8FD49] text-black">
                  Live in days, not months
                </Badge>

                <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Trade Compliance that keeps up with the world.
                </h1>

                <p className="max-w-lg text-lg text-white/80">
                  Regulations change weekly. Your Trade Compliance data
                  shouldn&apos;t fall behind.{" "}
                  <span className="sail-wordmark">SAIL</span>{" "}
                  <span style={{ fontFamily: "var(--font-nunito-sans)" }}>
                    GTX
                  </span>{" "}
                  keeps your entire product catalog current, accurate, and
                  audit-ready—without the manual scramble.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    variant="sail"
                    size="lg"
                    className="group text-base transition-all duration-300 hover:bg-[#343CED] hover:text-white"
                    asChild
                  >
                    <Link href="mailto:info@sailgtx.com">
                      <span className="group-hover:hidden">
                        Get Your Free Audit
                      </span>
                      <span className="hidden group-hover:inline">
                        Identify Millions in Savings
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/40 bg-white/5 text-white hover:bg-white hover:text-slate-900"
                    asChild
                  >
                    <Link href="mailto:info@sailgtx.com">Talk to Founder</Link>
                  </Button>
                </div>
              </div>

              {/* Right: Product UI Preview */}
              <div className="relative h-[450px] w-full lg:h-[500px]">
                <HeroAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            LOGO BAR
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-slate-200/50 bg-white py-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6">
            <span className="text-sm font-medium text-slate-500">
              Trusted by Trade Compliance teams at
            </span>
            <div className="flex items-center gap-12">
              <Image
                src="/logos/Koch_logo.svg"
                alt="Koch Industries"
                width={100}
                height={28}
                className="h-7 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
              <Image
                src="/logos/Invista_Logo-removebg-preview.png"
                alt="Invista"
                width={120}
                height={44}
                className="h-11 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            THE PROBLEM - "Your Trade Compliance data is already out of date"
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="sail-kicker">The Reality</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Your Trade Compliance data is already out of date.
                </h2>
                <p className="mt-6 text-lg text-slate-600">
                  Most Trade Compliance teams are running on spreadsheets last
                  touched six months ago. When tariffs shift—and they shift
                  constantly—someone has to manually review thousands of product
                  classifications. That someone is usually already behind.
                </p>
                <p className="mt-4 text-slate-600">
                  <span className="sail-wordmark">SAIL</span> monitors
                  regulatory changes and automatically flags affected products.
                  Your catalog stays current. Your team stays focused on
                  exceptions, not maintenance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="mb-6 font-mono text-sm font-semibold text-slate-500">
                  The math doesn&apos;t work:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      label: "Average enterprise product catalog",
                      value: "15,000+ SKUs",
                    },
                    {
                      label: "Annual HTS schedule changes",
                      value: "2,000+ modifications",
                    },
                    {
                      label: "Time to manually re-classify one product",
                      value: "45 minutes",
                    },
                    {
                      label: "Full catalog review",
                      value: "Never actually completed",
                      highlight: true,
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between rounded-lg bg-white p-4"
                    >
                      <span className="text-sm text-slate-600">
                        {stat.label}
                      </span>
                      <span
                        className={`font-mono text-sm font-semibold ${stat.highlight ? "text-red-600" : "text-slate-900"}`}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            HOW IT WORKS - Refined Cards (Classify → Monitor → Maintain → Defend)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#0b0f2b] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="sail-kicker-light">How It Works</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
                From chaos to cleared. Continuously.
              </h2>
            </div>

            {/* 2x2 Grid of Steps - Refined styling */}
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
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
                          <span className="text-slate-300">
                            Industrial Sensor Array
                          </span>
                          <span className="font-semibold text-[#D8FD49]">
                            8542.31.00.00
                          </span>
                        </div>
                        <div className="space-y-1.5 border-l-2 border-[#343CED] pl-3 text-xs text-slate-400">
                          <div>Chapter 85: Electrical machinery</div>
                          <div>Heading 8542: Electronic ICs</div>
                          <div>Subheading 8542.31: Processors</div>
                        </div>
                      </div>
                    ),
                  },
                },
                {
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
                        <div className="text-slate-400">
                          47 products in your catalog affected
                        </div>
                        <div className="space-y-1 text-xs text-slate-400">
                          <div>
                            HTS 8471.50 → Rate change:{" "}
                            <span className="text-red-400">25% → 35%</span>
                          </div>
                          <div>
                            HTS 8542.31 →{" "}
                            <span className="text-[#D8FD49]">
                              New exclusion available
                            </span>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                },
                {
                  step: "03",
                  title: "Maintain",
                  headline:
                    "Keep 10,000 products current without 10,000 hours.",
                  description:
                    "Continuous Trade Compliance monitoring across your entire product catalog. Stale classifications surface automatically. Re-classification runs in the background.",
                  icon: RefreshCw,
                  preview: {
                    title: "Catalog Health",
                    badge: "Last scan: 12m ago",
                    content: (
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">
                            Products monitored
                          </span>
                          <span className="font-semibold text-white">
                            12,847
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">
                            Current & verified
                          </span>
                          <span className="font-semibold text-[#D8FD49]">
                            98.2%
                          </span>
                        </div>
                        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-700">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#343CED] to-[#D8FD49]"
                            style={{ width: "98.2%" }}
                          />
                        </div>
                      </div>
                    ),
                  },
                },
                {
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
                          <CheckCircle className="h-4 w-4 text-[#D8FD49]" />
                          <span className="text-slate-300">
                            Product specification (14 pages)
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#D8FD49]" />
                          <span className="text-slate-300">
                            Classification reasoning chain
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#D8FD49]" />
                          <span className="text-slate-300">
                            HTS legal notes & CROSS rulings
                          </span>
                        </div>
                      </div>
                    ),
                  },
                },
              ].map((item) => (
                <Card
                  key={item.step}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur transition hover:border-[#343CED]/40 hover:from-white/10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#343CED] to-[#343CED]/70 shadow-lg shadow-[#343CED]/20">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-[#D8FD49]">
                      STEP {item.step}
                    </span>
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-white/90">{item.headline}</p>
                  <p className="mb-8 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>

                  {/* Mini Preview Card - Refined */}
                  <div className="rounded-xl border border-white/10 bg-[#0b0f2b]/80 p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-300">
                        {item.preview.title}
                      </span>
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-300">
                        {item.preview.badge}
                      </span>
                    </div>
                    {item.preview.content}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CAPABILITIES - Bento Grid
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="sail-kicker">Capabilities</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Everything your Trade Compliance workflow needs.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Real-Time Classification",
                  body: "HTS codes with confidence scores, legal reasoning, and evidence chains.",
                  icon: Zap,
                },
                {
                  title: "Continuous Monitoring",
                  body: "Product catalog checked against regulatory changes daily.",
                  icon: Eye,
                },
                {
                  title: "Tariff Stack Calculator",
                  body: "MFN + Section 301 + 232 + Chapter 99 + IEPA + MPF/HMF.",
                  icon: BarChart3,
                },
                {
                  title: "CF-28/29 Response",
                  body: "Audit documentation generated instantly with evidence chains.",
                  icon: FileText,
                },
                {
                  title: "Product Catalog",
                  body: "Central source of truth with version history and approvals.",
                  icon: Database,
                },
                {
                  title: "Entity Screening",
                  body: "OFAC, BIS Entity List, denied parties. Checked continuously.",
                  icon: ShieldCheck,
                },
                {
                  title: "Broker Collaboration",
                  body: "Share classification data directly. No more email attachments.",
                  icon: Send,
                },
                {
                  title: "Regulatory Alerts",
                  body: "HTS changes, tariff mods, new exclusions. Know first.",
                  icon: AlertTriangle,
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#343CED]/30 hover:shadow-md"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#343CED]/10">
                    <item.icon className="h-4 w-4 text-[#343CED]" />
                  </div>
                  <h3 className="mb-1 font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            WHO WE SERVE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F6F3EB] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="sail-kicker">Who We Serve</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Built for everyone who touches Trade Compliance.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Most platforms are built for one buyer.{" "}
                <span className="sail-wordmark">SAIL</span> works across the
                entire Trade Compliance ecosystem—because that&apos;s how the
                work actually flows.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Customs Brokers",
                  timeline: "Sign Up Now",
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
                  title: "Trade Advisory",
                  timeline: "White-label ready",
                  isLink: false,
                  description:
                    "Deliver classification accuracy your clients can't get in-house. Scale your practice without scaling your headcount.",
                  features: [
                    "Client-specific workspaces",
                    "Branded documentation",
                    "Expertise augmentation",
                    "Research acceleration",
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
              ].map((audience) => (
                <Card
                  key={audience.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#343CED]/30 hover:shadow-lg"
                >
                  {audience.isLink ? (
                    <Link
                      href="mailto:info@sailgtx.com"
                      className="mb-4 inline-flex items-center gap-1 rounded-full bg-[#343CED] px-3 py-1 text-xs font-bold text-white transition hover:bg-[#2a32c7]"
                    >
                      {audience.timeline}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ) : (
                    <div className="mb-4 inline-block rounded-full bg-[#D8FD49] px-3 py-1 text-xs font-bold text-black">
                      {audience.timeline}
                    </div>
                  )}
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {audience.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    {audience.description}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500">
                    {audience.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#343CED]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            INTEGRATIONS - Fixed Logo Grid
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="border-y border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 text-center">
              <p className="sail-kicker">Integrations</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900">
                Connects to the systems you already use.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                <span className="sail-wordmark">SAIL</span> fits into existing
                workflows. ERP integration, email forwarding, broker portals. No
                rip-and-replace required.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                { src: "/logos/SAP_2011_logo.svg", alt: "SAP", width: 80 },
                { src: "/logos/Oracle_logo.svg", alt: "Oracle", width: 100 },
                {
                  src: "/logos/U.S._Customs_and_Border_Protection_logo.png",
                  alt: "CBP",
                  width: 50,
                },
                {
                  src: "/logos/ace_logo_transparent.png",
                  alt: "ACE",
                  width: 60,
                },
                {
                  src: "/logos/Slack_Technologies-Logo.wine.png",
                  alt: "Slack",
                  width: 90,
                },
                {
                  src: "/logos/Microsoft_Office_Teams_(2019–2025).svg.png",
                  alt: "Teams",
                  width: 40,
                },
                {
                  src: "/logos/Microsoft_Outlook_Icon_(2025–present).svg",
                  alt: "Outlook",
                  width: 36,
                },
                {
                  src: "/logos/gmail-logo-brandlogos.net_ni0u393lv.svg",
                  alt: "Gmail",
                  width: 90,
                },
                { src: "/logos/Box,_Inc._logo.svg.png", alt: "Box", width: 70 },
                {
                  src: "/logos/Microsoft_Office_SharePoint_(2019–2025).svg",
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
                    className="h-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                    style={{ maxHeight: "40px", width: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CASE STUDY - Invista (With Invista Brand Colors)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-gradient-to-br from-[#F6F3EB] to-[#EBE8E0] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="sail-kicker">Case Study</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  How Invista transformed Trade Compliance operations.
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  From reactive firefighting to continuous confidence.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border-l-4 border-[#003366] bg-white p-5 shadow-sm">
                    <p className="mb-2 text-sm font-semibold text-[#003366]">
                      The Challenge
                    </p>
                    <p className="text-sm text-slate-700">
                      Invista&apos;s Trade Compliance team managed 8,000+
                      product classifications across multiple business units.
                      Every tariff change meant weeks of manual review. CF-28
                      responses took 3-4 weeks to compile.
                    </p>
                  </div>
                  <div className="rounded-xl border-l-4 border-[#343CED] bg-white p-5 shadow-sm">
                    <p className="mb-2 text-sm font-semibold text-[#343CED]">
                      The Approach
                    </p>
                    <p className="text-sm text-slate-700">
                      <span className="sail-wordmark">SAIL</span> GTX deployed
                      in 11 days. Full product catalog imported. Classification
                      confidence scores generated. Continuous monitoring
                      activated.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="mb-6 text-sm font-semibold text-[#003366]">
                    The Results
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        metric: "Time to classify new product",
                        before: "45 minutes",
                        after: "3 minutes",
                      },
                      {
                        metric: "CF-28 response time",
                        before: "3-4 weeks",
                        after: "Same day",
                      },
                      {
                        metric: "Products reviewed after tariff change",
                        before: "~15% sampled",
                        after: "100% automated",
                      },
                      {
                        metric: "Classification confidence",
                        before: "Unknown",
                        after: "98.2% verified",
                      },
                      {
                        metric: "Catalog currency",
                        before: "Updated quarterly",
                        after: "Continuously",
                      },
                    ].map((row) => (
                      <div
                        key={row.metric}
                        className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
                      >
                        <span className="text-sm text-slate-600">
                          {row.metric}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-slate-400 line-through">
                            {row.before}
                          </span>
                          <span className="font-mono text-sm font-semibold text-[#003366]">
                            {row.after}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="rounded-2xl border-l-4 border-[#003366] bg-white p-6 shadow-sm">
                  <p className="text-slate-700">
                    &ldquo;We used to dread tariff changes. Now{" "}
                    <span className="sail-wordmark">SAIL</span> flags exactly
                    what&apos;s affected and generates the re-classification
                    analysis automatically. We just review and approve. Our team
                    finally has time for strategic work.&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#003366]">
                    — Trade Compliance Director, Invista
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            METRICS - Empowering Copy
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="sail-kicker">Your Competitive Edge</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Work faster. File smarter. Sleep better.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                The numbers that let you outpace the competition.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
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
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-4xl font-bold text-[#343CED]">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-medium text-slate-900">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            TIME TO VALUE - More Emotional
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F6F3EB] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="sail-kicker">Time to Value</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Stop waiting. Start winning.
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  While competitors spend months in implementation hell—meetings
                  with consultants, painful data migrations, endless training
                  sessions—you&apos;ll already be classifying, filing, and
                  recovering duties.
                </p>
                <p className="mt-4 font-medium text-[#343CED]">
                  <span className="sail-wordmark">SAIL</span> deploys in days
                  for brokers, weeks for enterprises. That&apos;s it.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      day: "Day 1",
                      task: "Account setup, product catalog import",
                      emoji: "🚀",
                    },
                    {
                      day: "Day 3",
                      task: "Classification engine calibrated to your products",
                      emoji: "⚙️",
                    },
                    {
                      day: "Day 7",
                      task: "Full regulatory monitoring active",
                      emoji: "📡",
                    },
                    {
                      day: "Day 14",
                      task: "Team trained, workflows live",
                      emoji: "✅",
                    },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#343CED] to-[#343CED]/70 font-mono text-sm font-semibold text-white shadow-lg">
                        {item.day.split(" ")[1]}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-slate-900">
                          {item.day}
                        </span>
                        <span className="ml-2 text-slate-600">{item.task}</span>
                      </div>
                      <span className="text-xl">{item.emoji}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="mb-4 text-sm font-semibold text-slate-500">
                  Meanwhile, your competitors are stuck with:
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
                    <div
                      key={comp.name}
                      className="flex items-center justify-between rounded-xl border border-red-100 bg-white p-4"
                    >
                      <span className="text-slate-600">{comp.name}</span>
                      <span className="font-mono text-sm text-red-400">
                        {comp.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-center text-sm italic text-slate-500">
                  Every month they wait is a month you&apos;re ahead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CTA - Final Push
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#343CED] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-8 text-center text-white md:flex-row md:text-left">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                  See what&apos;s hiding in your trade data.
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  Get a free audit of your classification accuracy. No
                  commitment. No sales pitch. Just a clear picture of where you
                  stand.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#D8FD49] text-black hover:bg-[#c8ed39]"
                  asChild
                >
                  <Link href="mailto:info@sailgtx.com">
                    Get Your Free Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white hover:text-[#343CED]"
                  asChild
                >
                  <Link href="mailto:info@sailgtx.com">Talk to Founder</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
