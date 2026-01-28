import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import Link from "next/link";


export const metadata: Metadata = constructMetadata({
  title: "Advisory & Trade Law",
  description:
    "Advisory workflows for trade law teams delivering audit-ready compliance for clients.",
  canonical: "/solutions/advisory-trade-law",
});

export default function AdvisoryTradeLawPage() {
  return (
    <>
      <main className="bg-[#F6F3EB] pt-28">
        <section className="pb-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <Badge className="border border-[#D8FD49]/60 bg-[#D8FD49] text-black">
                Advisory & trade law
              </Badge>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Advisory workflows built for client-ready compliance.
              </h1>
              <p className="text-lg text-slate-600">
                Deliver audit-ready documentation and clear compliance guidance
                without manual chasing across systems.
              </p>
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
                <Button variant="sail" className="w-full sm:w-auto" asChild>
                  <Link href="mailto:info@sailgtx.com">Book Free Audit</Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#343CED]" />
                  Audit-ready evidence
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#343CED]" />
                  Client-ready deliverables
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <Card className="border border-black/5 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Documentation
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">
                  One shared record
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Centralize evidence, correspondence, and regulatory updates
                  for every client.
                </p>
              </Card>
              <Card className="border border-black/5 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Advisory insight
                </p>
                <p className="mt-4 text-2xl font-semibold text-slate-900">
                  Faster guidance
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Keep clients aligned with tariff changes and compliance
                  updates in minutes.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Client-ready deliverables",
                  body: "Package documentation and audit trails in a consistent format.",
                },
                {
                  title: "Change visibility",
                  body: "Surface regulatory updates across every client account.",
                },
                {
                  title: "Collaborative workflows",
                  body: "Work with brokers, legal, and compliance teams in one place.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="rounded-3xl border border-black/5 bg-[#F6F3EB] p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="sail-kicker">Workflow</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-slate-900">
                Deliver compliance advice with clarity.
              </h2>
              <p className="mt-4 text-slate-600">
                <span className="sail-wordmark">SAIL</span> keeps every client
                engagement audit-ready with consistent documentation and live
                updates.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-600">
                {[
                  "Centralize client files and correspondence",
                  "Apply regulatory updates across engagements",
                  "Export audit-ready evidence in seconds",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#343CED]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {[
                {
                  title: "01 Intake & review",
                  body: "Collect client documentation and classify requirements.",
                },
                {
                  title: "02 Apply changes",
                  body: "Track tariffs and regulatory changes across matters.",
                },
                {
                  title: "03 Deliver reports",
                  body: "Share audit-ready evidence with clients and regulators.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_12px_26px_rgba(15,23,42,0.08)]"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-600">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-[#343CED]/20 bg-gradient-to-br from-[#101430] to-[#1b1f45] px-6 py-8 text-white sm:px-10 sm:py-12 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="sail-kicker-light">Get started</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight">
                  Deliver compliance with confidence.
                </h2>
                <p className="mt-3 text-white/70">
                  Create audit-ready deliverables and keep clients current.
                </p>
              </div>
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
                <Button variant="sail" className="w-full sm:w-auto" asChild>
                  <Link href="mailto:info@sailgtx.com">Book Free Audit</Link>
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
