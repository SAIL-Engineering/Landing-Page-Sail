import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Customs Brokerage",
  description:
    "Customs brokerage workflows that keep filings current and shipments moving with fast tariff updates.",
  canonical: "/solutions/customs-brokerage",
});

export default function CustomsBrokeragePage() {
  return (
    <>
      <main className="bg-[#F6F3EB] pt-28">
        <section className="pb-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <Badge className="border border-[#D8FD49]/60 bg-[#D8FD49] text-black">
                Customs brokerage
              </Badge>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Brokerage workflows that keep shipments moving.
              </h1>
              <p className="text-lg text-slate-600">
                Stay current on tariff and regulatory changes, file faster, and
                prevent costly holds at the port.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="sail" asChild>
                  <Link href="/signup">Sign up</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#343CED]/30 text-slate-800 hover:border-[#343CED]/60"
                  asChild
                >
                  <Link href="mailto:info@sailgtx.com">Talk to Founder</Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#343CED]" />
                  132 shipments prevented from port delays
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#343CED]" />
                  Audit-ready documentation
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <Card className="border border-black/5 bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Filing speed
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">
                  Faster submissions
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Automatically apply tariff updates to reduce rework and
                  accelerate clearance.
                </p>
              </Card>
              <Card className="border border-black/5 bg-white p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Accuracy
                </p>
                <p className="mt-4 text-2xl font-semibold text-slate-900">
                  Less reclassification
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Keep classifications current to avoid costly delays and
                  chargebacks.
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
                  title: "Stay current on changes",
                  body: "Tariff and regulatory updates applied in minutes across filings.",
                },
                {
                  title: "Prevent avoidable holds",
                  body: "Reduce port delays by keeping documentation and classification accurate.",
                },
                {
                  title: "Broker-ready evidence",
                  body: "Provide audit trails and supporting docs without manual chasing.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border border-black/5 bg-[#F6F3EB] p-6"
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
              <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-900">
                Built for high-volume brokerage teams.
              </h2>
              <p className="mt-4 text-slate-600">
                <span className="sail-wordmark">SAIL</span> keeps your filings
                current and ready for audits without slowing your team down.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-600">
                {[
                  "Import data from clients and internal systems",
                  "Apply tariff changes across every shipment",
                  "Produce audit-ready documentation instantly",
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
                  title: "01 Connect data",
                  body: "Sync client documents, emails, and internal systems.",
                },
                {
                  title: "02 Apply updates",
                  body: "Keep every filing aligned with the latest tariffs.",
                },
                {
                  title: "03 File with confidence",
                  body: "Submit with audit-ready proof in place.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border border-black/5 bg-white p-6"
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
            <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-[#343CED]/20 bg-gradient-to-br from-[#101430] to-[#1b1f45] px-10 py-12 text-white md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="sail-kicker-light">Get started</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold">
                  Keep every shipment moving.
                </h2>
                <p className="mt-3 text-white/70">
                  Sign up and modernize your brokerage workflow today.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="sail" asChild>
                  <Link href="/signup">Sign up</Link>
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
