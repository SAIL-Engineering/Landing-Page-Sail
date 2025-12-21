import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Enterprise Compliance",
  description:
    "Unify global classification, duty calculation, and audit-ready documentation with SAIL for enterprise teams.",
  canonical: "/solutions/enterprise-compliance",
});

export default function EnterpriseCompliancePage() {
  return (
    <>
      <main className="bg-[#F6F3EB] pt-28">
        <section className="pb-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <Badge className="border border-[#D8FD49]/60 bg-[#D8FD49] text-black">
                Enterprise compliance
              </Badge>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Enterprise compliance without the chaos.
              </h1>
              <p className="text-lg text-slate-600">
                Unify classification, duty calculation, and audit trails across
                regions while tariff changes update in minutes.
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
                  Audit-ready documentation
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#343CED]" />
                  Global consistency
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <Card className="bg-white border border-black/5 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Global visibility
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">
                  One source of truth
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Keep every team aligned on classifications, duties, and
                  supporting documentation.
                </p>
              </Card>
              <Card className="bg-white border border-black/5 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Change management
                </p>
                <p className="mt-4 text-2xl font-semibold text-slate-900">
                  Updates in minutes
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  <span className="sail-wordmark">SAIL</span> updates tariff and
                  regulatory changes across your catalog without months of
                  manual work.
                </p>
              </Card>
            </div>
          </div>
          <div className="sail-kicker mx-auto mt-10 flex max-w-6xl flex-wrap items-center gap-6 px-6">
            <span className="text-slate-400">Trusted by</span>
            <span className="bg-white rounded-full border border-slate-200 px-3 py-1">
              Koch Industries
            </span>
            <span className="bg-white rounded-full border border-slate-200 px-3 py-1">
              Invista
            </span>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Audit-ready at any time",
                  body: "Surface compliant documentation instantly with clear trails of changes and approvals.",
                },
                {
                  title: "Enterprise consistency",
                  body: "Standardize classification and duty logic across every region and business unit.",
                },
                {
                  title: "Faster change cycles",
                  body: "Apply tariff updates and regulatory changes in minutes across your catalog.",
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
              <p className="sail-kicker">Integrations</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-900">
                Connect the systems you already run.
              </h2>
              <p className="mt-4 text-slate-600">
                <span className="sail-wordmark">SAIL</span> layers on top of
                your existing stack or runs standalone, so you can move fast
                without a rebuild.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-600">
                {[
                  "SAP and Oracle workflows",
                  "Shared email and document repositories",
                  "Custom data feeds and internal tools",
                  "Standalone compliance workspace",
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
                  body: "Sync classifications, duty tables, and documentation.",
                },
                {
                  title: "02 Apply changes",
                  body: "Update tariffs across every affected product.",
                },
                {
                  title: "03 Prove compliance",
                  body: "Deliver audit-ready evidence with one click.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="bg-white border border-black/5 p-6"
                >
                  <p className="text-xs uppercase tracking-widest text-slate-500">
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
            <div className="text-white flex flex-col items-start justify-between gap-8 rounded-3xl border border-[#343CED]/20 bg-gradient-to-br from-[#101430] to-[#1b1f45] px-10 py-12 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="sail-kicker-light">Enterprise ready</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold">
                  Bring enterprise compliance into one system.
                </h2>
                <p className="text-white/70 mt-3">
                  Get audit-ready documentation and tariff updates without the
                  manual scramble.
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
