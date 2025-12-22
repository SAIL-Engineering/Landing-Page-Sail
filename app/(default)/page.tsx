import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import Link from "next/link";
import Image from "next/image";
import HeroAnimation from "@/components/hero-animation";
import { HowItWorksTabs } from "@/components/how-it-works-tabs";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CaseStudyVisual } from "@/components/case-study-visual";
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
              src="/hero/hero.webp"
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
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: Copy */}
              <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
                <Badge className="animate-scale-in border border-sail-green/60 bg-sail-green text-black shadow-lg shadow-sail-green/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sail-green/40">
                  Live in days, not months
                </Badge>

                <h1 className="font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Trade Compliance that keeps up with the world.
                </h1>

                <p className="mx-auto max-w-lg text-base text-white/80 sm:text-lg lg:mx-0">
                  Regulations change weekly. Your Trade Compliance data
                  shouldn&apos;t fall behind.{" "}
                  <span className="sail-wordmark">SAIL</span>{" "}
                  <span style={{ fontFamily: "var(--font-nunito-sans)" }}>
                    GTX
                  </span>{" "}
                  keeps your entire product catalog current, accurate, and
                  audit-ready—without the manual scramble.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                  <Button
                    variant="sail"
                    size="lg"
                    className="group relative overflow-hidden text-base transition-all duration-500"
                    asChild
                  >
                    <Link
                      href="mailto:info@sailgtx.com"
                      className="flex items-center justify-center"
                    >
                      <span className="transition-all duration-500 group-hover:scale-95 group-hover:opacity-0">
                        Claim Your Free Audit
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                        Save Millions!
                      </span>
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

              {/* Right: Product UI Preview - Optimized for mobile */}
              <div className="relative mt-8 h-[350px] w-full sm:h-[400px] lg:mt-0 lg:h-[500px]">
                <HeroAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            LOGO BAR - Elegant Social Proof
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-slate-200/50 bg-white py-12">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50 to-transparent opacity-50" />

          <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6">
            <span className="text-sm font-semibold text-slate-600">
              Trusted by Trade Compliance teams at
            </span>
            <div className="flex items-center gap-12">
              <div className="group relative">
                <Image
                  src="/logos/Koch_logo.svg"
                  alt="Koch Industries"
                  width={100}
                  height={28}
                  className="h-7 w-auto opacity-60 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-sail-blue/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="group relative">
                <Image
                  src="/logos/Invista_Logo-removebg-preview.png"
                  alt="Invista"
                  width={120}
                  height={44}
                  className="h-11 w-auto opacity-60 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-sail-blue/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            THE PROBLEM - "Your Trade Compliance data is already out of date"
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <ScrollReveal direction="left">
                <div>
                  <p className="sail-kicker">The Reality</p>
                  <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                    Your Trade Compliance data is already out of date.
                  </h2>
                  <p className="mt-6 text-lg text-slate-600">
                    Most Trade Compliance teams are running on spreadsheets last
                    touched six months ago. When tariffs shift—and they shift
                    constantly—someone has to manually review thousands of
                    product classifications. That someone is usually already
                    behind.
                  </p>
                  <p className="mt-4 text-slate-600">
                    <span className="sail-wordmark">SAIL</span> monitors
                    regulatory changes and automatically flags affected
                    products. Your catalog stays current. Your team stays
                    focused on exceptions, not maintenance.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
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
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            HOW IT WORKS - Interactive Tabs (Award-Winning UX)
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="how" className="bg-sail-navy py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <p className="sail-kicker-light">How It Works</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
                  From chaos to cleared. Continuously.
                </h2>
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
                  Everything your Trade Compliance workflow needs.
                </h2>
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
                {
                  title: "Product Catalog",
                  body: "Central source of truth with version history and approvals.",
                  icon: Database,
                  preview:
                    "Maintain classification history with approval workflows and version control.",
                },
                {
                  title: "Entity Screening",
                  body: "OFAC, BIS Entity List, denied parties. Checked continuously.",
                  icon: ShieldCheck,
                  preview:
                    "Automated screening against all major denied party lists updated daily.",
                },
                {
                  title: "Broker Collaboration",
                  body: "Share classification data directly. No more email attachments.",
                  icon: Send,
                  preview:
                    "Real-time data sharing with customs brokers through secure portals.",
                },
                {
                  title: "Regulatory Alerts",
                  body: "HTS changes, tariff mods, new exclusions. Know first.",
                  icon: AlertTriangle,
                  preview:
                    "Receive instant notifications when regulations change affecting your business.",
                },
              ].map((item, index) => (
                <Card
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-sail-blue/40 hover:shadow-2xl hover:shadow-sail-blue/10"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-sail-blue/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-sail-blue group-hover:shadow-lg group-hover:shadow-sail-blue/30">
                    <item.icon className="h-4 w-4 text-sail-blue transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
                  </div>
                  <h3 className="mb-1 font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sail-blue">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    {item.body}
                  </p>

                  {/* Expandable preview on hover */}
                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100">
                    <div className="border-t border-sail-blue/20 pt-3">
                      <p className="text-xs leading-relaxed text-sail-blue/80">
                        {item.preview}
                      </p>
                    </div>
                  </div>

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
                  Built for everyone who touches Trade Compliance.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                  <span className="sail-wordmark">SAIL</span> works across the
                  entire Trade Compliance ecosystem—because that&apos;s how the
                  work actually flows.
                </p>
              </div>
            </ScrollReveal>

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
              ].map((audience, index) => (
                <Card
                  key={audience.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sail-blue/40 hover:shadow-2xl hover:shadow-sail-blue/10"
                  style={{
                    animationDelay: `${index * 75}ms`,
                  }}
                >
                  {audience.isLink ? (
                    <Link
                      href="mailto:info@sailgtx.com"
                      className="mb-4 inline-flex items-center gap-1 rounded-full bg-sail-blue px-3 py-1 text-xs font-bold text-white transition-all duration-300 hover:gap-2 hover:bg-sail-blue-hover hover:shadow-lg hover:shadow-sail-blue/30"
                    >
                      {audience.timeline}
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  ) : (
                    <div className="mb-4 inline-block rounded-full bg-sail-green px-3 py-1 text-xs font-bold text-black shadow-sm shadow-sail-green/20">
                      {audience.timeline}
                    </div>
                  )}
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sail-blue">
                    {audience.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    {audience.description}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-500">
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
                { src: "/logos/oracle.svg", alt: "Oracle", width: 110 },
                {
                  src: "/logos/cbp.png",
                  alt: "CBP",
                  width: 90,
                },
                {
                  src: "/logos/ace_logo_transparent.png",
                  alt: "ACE",
                  width: 60,
                },
                {
                  src: "/logos/slack.png",
                  alt: "Slack",
                  width: 120,
                },
                {
                  src: "/logos/teams.png",
                  alt: "Teams",
                  width: 50,
                },
                {
                  src: "/logos/outlook.svg",
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
        <section id="case-study" className="bg-sail-navy py-24 text-white">
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
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                  The numbers that let you outpace the competition.
                </p>
              </div>
            </ScrollReveal>

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
              ].map((stat, index) => (
                <ScrollReveal
                  key={stat.label}
                  delay={index * 100}
                  direction="up"
                >
                  <div className="text-center">
                    <div className="font-serif text-4xl font-bold text-sail-blue">
                      {stat.value}
                    </div>
                    <div className="mt-2 font-medium text-slate-900">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {stat.subtext}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            TIME TO VALUE - Dark Theme & Nucleo Icons
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#0b0f2b] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="sail-kicker-light">Time to Value</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Stop waiting. Start winning.
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  While competitors spend months in implementation hell—meetings
                  with consultants, painful data migrations, endless training
                  sessions—you&apos;ll already be classifying, filing, and
                  recovering duties.
                </p>
                <p className="mt-4 font-medium text-[#D8FD49]">
                  <span className="sail-wordmark">SAIL</span> deploys in days
                  for brokers, weeks for enterprises. That&apos;s it.
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
                      task: "Full regulatory monitoring active",
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
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm transition hover:border-[#343CED]/50 hover:bg-white/10 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#343CED] to-[#343CED]/70 shadow-lg shadow-[#343CED]/20">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#D8FD49]">
                            {item.day}
                          </span>
                        </div>
                        <span className="font-medium text-white">
                          {item.task}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="mb-4 text-sm font-semibold text-slate-400">
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
                    <Card
                      key={comp.name}
                      className="flex items-center justify-between rounded-xl border border-red-500/20 bg-red-950/20 p-5 backdrop-blur-sm transition hover:border-red-500/40"
                    >
                      <span className="text-slate-300">{comp.name}</span>
                      <span className="font-mono text-sm font-semibold text-red-400">
                        {comp.time}
                      </span>
                    </Card>
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
        <section
          id="cta"
          className="relative overflow-hidden bg-sail-blue py-20"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sail-blue via-sail-blue-light to-sail-blue opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sail-green/10 via-transparent to-transparent" />

          <ScrollReveal>
            <div className="relative mx-auto max-w-7xl px-6">
              <div className="flex flex-col items-center justify-between gap-8 text-center text-white md:flex-row md:text-left">
                <div className="max-w-2xl">
                  <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                    See what&apos;s hiding in your trade data.
                  </h2>
                  <p className="mt-4 text-lg text-white/90">
                    Get a free audit of your classification accuracy. No
                    commitment. No sales pitch. Just a clear picture of where
                    you stand.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-sail-green text-black transition-all duration-500 hover:scale-105 hover:bg-sail-green-light hover:shadow-2xl hover:shadow-sail-green/40"
                    asChild
                  >
                    <Link
                      href="mailto:info@sailgtx.com"
                      className="flex items-center justify-center"
                    >
                      <span className="transition-all duration-500 group-hover:scale-95 group-hover:opacity-0">
                        Claim Your Free Audit
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                        Save Millions!
                      </span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/50 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-sail-blue hover:shadow-xl"
                    asChild
                  >
                    <Link href="mailto:info@sailgtx.com">Talk to Founder</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}
