import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = constructMetadata({
  title: "SAIL",
  description:
    "Modern trade compliance software for brokers and enterprises that need audit-ready workflows and faster tariff updates.",
  canonical: "/",
});

export default function Home() {
  return (
    <>
      <main className="bg-[#F6F3EB]">
        <section
          id="hero"
          className="relative overflow-hidden bg-[#0b0f2b] pb-24 pt-32 text-white"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero/hero.png"
              alt="Port of Oakland"
              fill
              priority
              className="object-cover object-center brightness-110"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
          <div className="absolute left-10 top-10 z-10 h-24 w-24 rounded-full border border-white/10" />
          <div className="absolute right-16 top-32 z-10 h-40 w-40 rounded-full border border-white/10" />
          <div className="relative z-20 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <Badge className="border border-[#D8FD49]/60 bg-[#D8FD49] text-black">
                Built for customs brokers
              </Badge>
              <h1 className="fade-up font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] md:text-6xl">
                Trade compliance, finally built for change.
              </h1>
              <p className="fade-up fade-up-delay max-w-xl text-lg text-white/85 md:text-xl">
                Stay audit-ready while tariff and regulatory changes update in
                minutes—not months.
              </p>
              <div className="fade-up flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex w-full items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-800 shadow-[0_16px_40px_rgba(3,6,20,0.45)] sm:w-auto">
                  <input
                    className="min-w-[200px] flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                    placeholder="Work email"
                    aria-label="Work email"
                  />
                  <Button variant="sail" className="h-10 px-4 text-sm" asChild>
                    <Link href="mailto:info@sailgtx.com">Request demo</Link>
                  </Button>
                </div>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:border-white/60 hover:bg-white/10"
                  asChild
                >
                  <Link href="mailto:info@sailgtx.com">Talk to Founder</Link>
                </Button>
              </div>
              <div className="fade-up flex flex-wrap items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D8FD49]" />
                  Audit-ready workflows
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D8FD49]" />
                  Updates in minutes
                </div>
              </div>
            </div>
            <div className="fade-up relative">
              <div className="absolute -right-10 top-10 h-56 w-56 rounded-full bg-[#343CED]/30 blur-[120px]" />
              <div className="relative rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-[0_30px_80px_rgba(5,8,30,0.45)] backdrop-blur">
                <div className="rounded-[20px] bg-white p-5 text-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.2)]">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Product preview (placeholder)</span>
                    <span className="rounded-full bg-[#D8FD49] px-2 py-0.5 text-[10px] font-semibold text-black">
                      Live
                    </span>
                  </div>
                  <div className="mt-4 flex h-48 items-center justify-center rounded-xl bg-[#eef0ff] text-xs uppercase tracking-widest text-slate-400">
                    UI preview placeholder
                  </div>
                  <div className="mt-4 grid gap-2 text-xs text-slate-500">
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                      <span>Updated classifications</span>
                      <span className="font-mono font-semibold text-slate-900">
                        312
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                      <span>Audit-ready files</span>
                      <span className="font-mono font-semibold text-slate-900">
                        98%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-4 w-40 rounded-[24px] border border-white/40 bg-white p-3 text-slate-900 shadow-[0_18px_40px_rgba(10,14,40,0.25)]">
                  <div className="text-xs text-slate-500">Shipment check</div>
                  <div className="mt-2 text-lg font-semibold">Low risk</div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-4/5 rounded-full bg-[#343CED]" />
                  </div>
                </div>
                <div className="absolute -bottom-10 right-24 w-24 rounded-[18px] border border-white/20 bg-[#0b0f2b] p-3 text-xs text-white shadow-[0_12px_30px_rgba(6,9,30,0.35)]">
                  <span className="font-mono">132</span> shipments saved
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f9fafc] py-10">
          <div className="sail-kicker mx-auto flex max-w-6xl flex-wrap items-center gap-8 px-6">
            <span className="text-slate-400">Trusted by</span>
            <div className="flex items-center gap-10">
              <img
                src="/logos/Koch_logo.svg"
                alt="Koch Industries"
                className="h-9 w-auto"
              />
              <img
                src="/logos/Invista_Logo-removebg-preview.png"
                alt="Invista"
                className="h-12 w-auto origin-left scale-[2.15]"
              />
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-[#f0f4ff] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="sail-kicker">
                <span className="sail-wordmark">SAIL</span> product suite
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900">
                Built for every workflow.
              </h2>
              <p className="mt-4 text-slate-600">
                Replace manual compliance tools with one platform designed for
                brokers, enterprises, and advisory teams.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Enterprise Compliance",
                  body: "Centralize classification, duties, and audit trails across global teams.",
                  href: "/solutions/enterprise-compliance",
                  tint: "from-[#e7ebff] via-white to-[#D8FD49]/50",
                },
                {
                  title: "Customs Brokerage",
                  body: "File faster with automated updates and reduce hold risk at the port.",
                  href: "/solutions/customs-brokerage",
                  tint: "from-[#f2f3ff] via-white to-[#e9fbe0]",
                },
                {
                  title: "Advisory & Trade Law",
                  body: "Deliver audit-ready documentation and compliance support for clients.",
                  href: "/solutions/advisory-trade-law",
                  tint: "from-[#f9f6ef] via-white to-[#e7ebff]",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="group flex h-full flex-col rounded-3xl border border-black/5 bg-[#F6F3EB] p-6 shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-[#343CED]/30 hover:bg-white"
                >
                  <div
                    className={`mb-6 h-44 rounded-2xl bg-gradient-to-br ${item.tint}`}
                  >
                    <div className="flex h-full items-end justify-between rounded-2xl border border-black/5 bg-white/40 p-4">
                      <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                        Live updates
                      </div>
                      <div className="h-8 w-8 rounded-full bg-[#343CED]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{item.body}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-[#343CED] underline-offset-4 hover:underline"
                  >
                    Learn more
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="product" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="sail-kicker">Product</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900">
                  Compliance that updates itself.
                </h2>
                <p className="mt-4 text-slate-600">
                  Tariff and regulatory change is constant.{" "}
                  <span className="sail-wordmark">SAIL</span> keeps your
                  classifications, duties, and documentation current without
                  months of manual rework.
                </p>
                <div className="mt-8 space-y-4 text-sm text-slate-600">
                  {[
                    "Continuous compliance monitoring",
                    "Audit-ready documentation trails",
                    "Accurate classification and duty calculation",
                    "Country of origin and FTA qualification",
                    "Supplier documentation collection",
                    "Integrations with email, SAP, Oracle, or standalone",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#343CED]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                <Card className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    Risk score
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-3xl font-semibold text-slate-900">
                      92
                    </span>
                    <span className="rounded-full bg-[#D8FD49] px-3 py-1 text-xs font-semibold text-black">
                      Low risk
                    </span>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 w-4/5 rounded-full bg-[#343CED]" />
                  </div>
                </Card>
                <Card className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    Checklist
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    {[
                      "Country of origin verified",
                      "Tariff updates applied",
                      "Documentation stored",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#343CED]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F6F3EB] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 max-w-2xl">
              <p className="sail-kicker">Product previews</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900">
                A modern compliance workspace.
              </h2>
              <p className="mt-4 text-slate-600">
                Feature screenshots will live here. We can swap in your real UI
                assets as soon as they are ready.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Audit trail",
                  body: "Track every change with a clean, exportable history.",
                },
                {
                  title: "Tariff update feed",
                  body: "See tariff changes applied across your product catalog.",
                },
                {
                  title: "Workflow approvals",
                  body: "Keep reviews and approvals in one shared workspace.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="rounded-3xl border border-black/5 bg-[#F6F3EB] p-6 shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-5 flex h-40 items-center justify-center rounded-2xl border border-dashed border-black/10 bg-white/70 text-xs uppercase tracking-widest text-slate-400">
                    Screenshot placeholder
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="sail-kicker">Coverage</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900">
                Everything a compliance team needs.
              </h2>
              <p className="mt-4 text-slate-600">
                <span className="sail-wordmark">SAIL</span> supports the core
                workflows that keep trade moving and audits clean.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Classification & duties",
                  body: "Keep classifications current and duty calculations accurate.",
                },
                {
                  title: "Country of origin",
                  body: "Validate origin data and apply regulatory changes fast.",
                },
                {
                  title: "FTA qualification",
                  body: "Track eligibility and documentation in one place.",
                },
                {
                  title: "Supplier documentation",
                  body: "Collect and verify docs from suppliers quickly.",
                },
                {
                  title: "Audit-ready trails",
                  body: "Every change logged with approvals and evidence.",
                },
                {
                  title: "Collaboration",
                  body: "Work with brokers, legal, and trade advisors in one workspace.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)]"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-[#343CED]">
                    Capability
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="bg-[#f0f4ff] py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="sail-kicker">How it works</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900">
                Connect. Update. Prove compliance.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Connect your data",
                  body: "Sync email, SAP, Oracle, and internal docs in one workspace.",
                },
                {
                  title: "Apply tariff changes",
                  body: "Stay current with updates mapped to every product and filing.",
                },
                {
                  title: "Prove compliance fast",
                  body: "Surface audit-ready evidence in seconds, not days.",
                },
              ].map((item, index) => (
                <Card
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#F6F3EB] p-6 shadow-[0_10px_20px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-xs font-semibold text-[#343CED]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F6F3EB] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="sail-kicker">Go live in 7 days</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900">
                What you can get done with{" "}
                <span className="sail-wordmark">SAIL</span> in 7 days.
              </h2>
              <p className="mt-4 text-slate-600">
                New compliance software should move fast.{" "}
                <span className="sail-wordmark">SAIL</span> gets teams updated
                in days, not quarters.
              </p>
            </div>
            <div className="relative mt-14">
              <div className="absolute left-4 right-4 top-4 h-px bg-slate-200" />
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    day: "Day 1",
                    title: "Connect data",
                    points: [
                      "Import classifications and duties",
                      "Sync email and shared documents",
                      "Map client data sources",
                    ],
                  },
                  {
                    day: "Day 3",
                    title: "Apply changes",
                    points: [
                      "Update tariffs across filings",
                      "Set workflow approvals",
                      "Surface compliance gaps",
                    ],
                  },
                  {
                    day: "Day 7",
                    title: "Audit-ready",
                    points: [
                      "Generate audit-ready evidence",
                      "Prevent avoidable port delays",
                      "Operate with confidence",
                    ],
                  },
                ].map((item) => (
                  <Card
                    key={item.day}
                    className="relative rounded-3xl border border-black/5 bg-[#F6F3EB] p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)]"
                  >
                    <div className="absolute -top-4 left-6 h-3 w-3 rounded-full border border-slate-300 bg-white" />
                    <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-semibold text-slate-600">
                      {item.day}
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#343CED]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="sail-kicker">Results</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900">
                  Real-world outcomes for compliance teams.
                </h2>
                <p className="mt-4 text-slate-600">
                  <span className="sail-wordmark">SAIL</span> delivers audit
                  readiness on demand and prevents costly delays at the border.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      label: "Shipments prevented from being stuck at port",
                      value: "132",
                    },
                    {
                      label: "Audit-ready documentation coverage",
                      value: "98%",
                    },
                    {
                      label: "Tariff updates applied each week",
                      value: "50+",
                    },
                    {
                      label: "Average time to go audit-ready",
                      value: "7 days",
                    },
                  ].map((item) => (
                    <Card
                      key={item.label}
                      className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_10px_20px_rgba(15,23,42,0.06)]"
                    >
                      <p className="font-mono text-sm font-semibold text-slate-900">
                        {item.value}
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        {item.label}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
              <Card className="rounded-3xl border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Case study
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  Koch Industries & Invista
                </h3>
                <p className="mt-4 text-sm text-slate-600">
                  “<span className="sail-wordmark">SAIL</span> keeps our
                  compliance files current as tariffs shift. We&apos;re
                  audit-ready without the manual scramble.”
                </p>
                <p className="mt-4 font-mono text-xs uppercase tracking-widest text-slate-500">
                  Trade compliance leadership
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f4ff] py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-[#343CED]/20 bg-gradient-to-br from-[#101430] to-[#1b1f45] px-10 py-12 text-white md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="sail-kicker-light">Get started</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight">
                  Modernize your compliance workflow today.
                </h2>
                <p className="mt-3 text-white/70">
                  Join <span className="sail-wordmark">SAIL</span> and keep
                  every shipment audit-ready with updates in minutes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="sail" asChild>
                  <Link href="mailto:info@sailgtx.com">Request demo</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:border-white/60 hover:bg-white/10"
                  asChild
                >
                  <Link href="mailto:info@sailgtx.com">Talk to Founder</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
