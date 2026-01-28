import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import Link from "next/link";
import { GridOverlay } from "@/components/landing/grid-overlay";
import {
  IconScrollTextOutline18 as FileText,
  IconChartColumnOutline18 as BarChart3,
  IconBellOnOutline18 as AlertTriangle,
  IconBoxCheckOutline18 as CheckCircle,
  IconClockRotateClockwiseOutline18 as Clock,
  IconUsersOutline18 as Users,
} from "nucleo-ui-outline-18";

export const metadata: Metadata = constructMetadata({
  title: "Free Trade Compliance Audit | SAIL GTX",
  description:
    "Replace audit guesswork with an evidence-first compliance scan for your highest-risk entries.",
  canonical: "/free-audit",
});

export default function FreeAuditPage() {
  return (
    <main className="sail-shell min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b0f2b] pb-20 pt-32 text-white">
        <GridOverlay className="opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,60,237,0.35),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(216,253,73,0.15),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  Free Audit
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-sail-green/80">
                  Evidence-first audit pack
                </span>
              </div>
              <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Stop guessing which entries need a compliance audit.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/70">
                For years, detecting HS misclassification, misvalued items, or
                incorrect origin meant random audits, manual chasing, and
                instinct. Regulators follow confidential rulebooks while teams
                fight to keep up with shifting guidance.
              </p>
              <p className="mt-4 max-w-2xl text-lg text-white/70">
                SAIL turns your data into a focused risk assessment and
                defensible audit pack: decision traces, stacked tariffs,
                exposure findings, and a prioritized fix list you can act on
                immediately.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
                <span className="border border-white/20 bg-white/10 px-3 py-1">
                  15K-30K entries
                </span>
                <span className="border border-white/20 bg-white/10 px-3 py-1">
                  Risk-ranked review
                </span>
                <span className="border border-white/20 bg-white/10 px-3 py-1">
                  Evidence-ready output
                </span>
              </div>
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <Button
                  variant="sail"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <Link href="mailto:info@sailgtx.com">Book Free Audit</Link>
                </Button>
                {/* TalkToFounderButton removed */}
              </div>
            </div>

            <div className="sail-card overflow-hidden rounded-none bg-white text-slate-900 ring-0">
              <div className="border-b border-[#e0dbcf] bg-[#f3efe6] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#6b5f50]">
                Audit Pack
              </div>
              <div className="grid gap-4 p-5 md:grid-cols-2">
                {[
                  {
                    title: "Decision Trace",
                    body: "Reasoning chain with citations, rulings, and approvals.",
                    icon: FileText,
                  },
                  {
                    title: "Tariff Stack",
                    body: "MFN + 301/232 + Chapter 99, stacked with duty deltas.",
                    icon: BarChart3,
                  },
                  {
                    title: "Exposure Map",
                    body: "Risk-ranked entries for misclassification or origin errors.",
                    icon: AlertTriangle,
                  },
                  {
                    title: "Fix List",
                    body: "SKU-level corrections and next actions to reduce exposure.",
                    icon: CheckCircle,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-[#e0dbcf] bg-[#fffdf8] p-4"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-none bg-sail-blue/10">
                      <item.icon className="h-4 w-4 text-sail-blue" />
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#5d584e]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why audits failed */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="sail-kicker">Why this matters</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Historically, trade non-compliance was a guessing game.
              </h2>
              <p className="mt-4 text-lg text-[#5d584e]">
                Teams ran random audits because they couldn&apos;t see which
                shipments were worth the time. Misclassification, misvaluation,
                and origin errors hid inside huge volumes of entries.
              </p>
              <p className="mt-4 text-lg text-[#5d584e]">
                With regulations shifting constantly, the only way to find
                issues was manual review across HTS books, rulings, and emails.
                It was slow, expensive, and incomplete.
              </p>
            </div>
            <div className="space-y-4">
              <div className="sail-card rounded-none bg-[#fffdf8] p-6 ring-0">
                <p className="text-sm uppercase tracking-[0.3em] text-[#6f695d]">
                  What changes with SAIL
                </p>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  From random audits to ranked risk.
                </h3>
                <p className="mt-3 text-[#5d584e]">
                  We score entries for likely non-compliance, stack tariffs, and
                  surface the highest-risk items first. You get a defensible
                  evidence pack instead of another spreadsheet guess.
                </p>
              </div>
              <div className="sail-card rounded-none bg-white p-6 ring-0">
                <p className="text-sm uppercase tracking-[0.3em] text-[#6f695d]">
                  Built for brokers
                </p>
                <p className="mt-3 text-[#5d584e]">
                  Outputs are broker-ready: decision traces, tariff stacks,
                  exposure maps, and a fix list you can act on immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="sail-kicker">How it works</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Audit 15K-30K entries without the guesswork.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#5d584e]">
              A focused intake, a defensible analysis, and a report you can
              share with brokers and leadership.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Share 15K-30K entries",
                body: "Send HS codes, product details, origin, value, and dates.",
                icon: Users,
              },
              {
                title: "We score risk",
                body: "We rank likelihood of non-compliance across the set.",
                icon: BarChart3,
              },
              {
                title: "We document evidence",
                body: "Decision traces + tariff stacks for high-risk entries.",
                icon: FileText,
              },
              {
                title: "You get the audit pack",
                body: "Exposure map, fix list, and clear next actions.",
                icon: CheckCircle,
              },
            ].map((step) => (
              <Card
                key={step.title}
                className="sail-card rounded-none p-5 ring-0"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-none bg-sail-blue/10">
                  <step.icon className="h-4 w-4 text-sail-blue" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#5d584e]">{step.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What we need */}
      <section className="bg-sail-oat py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="sail-kicker">What we need</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Targeted inputs. Outsized impact.
              </h2>
              <p className="mt-4 text-[#5d584e]">
                We only need enough data to model your workflow and surface the
                entries most likely to be non-compliant.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "15K-30K SKUs or entries",
                "HS codes + product descriptions",
                "Country of origin",
                "Entry dates + transaction values",
                "Known exclusions or trade remedies",
                "Broker notes or rulings",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-[#e0dbcf] bg-white px-4 py-3 text-sm font-medium text-slate-900"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example report */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="sail-kicker">Example report</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                See what a high-impact audit looks like.
              </h2>
              <p className="mt-4 text-[#5d584e]">
                Below is an illustrative excerpt from a duty audit report. It
                shows how SAIL highlights the highest-impact discrepancies and
                quantifies the financial impact for immediate action.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[#6f695d]">
                <span className="border border-[#e0dbcf] bg-[#fffdf8] px-3 py-1">
                  Illustrative sample
                </span>
                <span className="border border-[#e0dbcf] bg-[#fffdf8] px-3 py-1">
                  Duty variance
                </span>
                <span className="border border-[#e0dbcf] bg-[#fffdf8] px-3 py-1">
                  Root-cause clarity
                </span>
              </div>
            </div>
            <div className="sail-card rounded-none bg-white p-6 ring-0">
              <div className="border-b border-[#e0dbcf] pb-4 text-xs uppercase tracking-[0.3em] text-[#6f695d]">
                Illustrative findings
              </div>
              <div className="mt-4 space-y-4 text-sm text-[#4b4640]">
                <div className="grid grid-cols-1 gap-4 border border-[#e0dbcf] bg-[#fffdf8] p-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6f695d]">
                      Manufacturer A
                    </p>
                    <p className="mt-2 font-semibold text-slate-900">
                      Axial Flow Header
                    </p>
                    <p className="mt-2 text-[#5d584e]">
                      40% rate variance from misapplied schedule.
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6f695d]">
                      Impact
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      $420k
                    </p>
                    <p className="mt-1 text-xs text-[#6f695d]">Overpayment</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 border border-[#e0dbcf] bg-[#fffdf8] p-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6f695d]">
                      Manufacturer B
                    </p>
                    <p className="mt-2 font-semibold text-slate-900">
                      Powertrain Module
                    </p>
                    <p className="mt-2 text-[#5d584e]">
                      52% rate variance from component content errors.
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6f695d]">
                      Impact
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      $260k
                    </p>
                    <p className="mt-1 text-xs text-[#6f695d]">Overpayment</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 border border-[#e0dbcf] bg-[#fffdf8] p-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6f695d]">
                      Manufacturer C
                    </p>
                    <p className="mt-2 font-semibold text-slate-900">
                      Gearbox Assembly
                    </p>
                    <p className="mt-2 text-[#5d584e]">
                      52% rate variance from reciprocal agreement errors.
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6f695d]">
                      Impact
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      $220k
                    </p>
                    <p className="mt-1 text-xs text-[#6f695d]">Overpayment</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-[#e0dbcf] pt-4 text-sm text-[#5d584e]">
                <span className="font-semibold text-slate-900">$19M</span> in
                potential overpayments identified across the sample set.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="sail-card rounded-none bg-white p-10 text-center ring-0">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-none bg-sail-blue/10">
              <Clock className="h-5 w-5 text-sail-blue" />
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold text-slate-900">
              Bring certainty to your compliance program.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[#5d584e]">
              Book a free audit and get a defensible report you can share with
              brokers and leadership.
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                variant="sail"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="mailto:info@sailgtx.com">Book Free Audit</Link>
              </Button>
              {/* TalkToFounderButton removed */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
