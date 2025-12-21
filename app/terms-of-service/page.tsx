import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service",
  description: "The terms of service for SAIL.",
  canonical: "/terms-of-service",
});

export default function TermsOfService() {
  return (
    <main className="bg-white pt-28">
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <p className="sail-kicker">Terms</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900">
          <span className="sail-wordmark">SAIL</span> Terms of Service
        </h1>
        <p className="mt-4 text-slate-600">
          These Terms govern your use of{" "}
          <span className="sail-wordmark">SAIL</span>’s website and services. By
          using <span className="sail-wordmark">SAIL</span>, you agree to these
          Terms.
        </p>

        <div className="mt-10 space-y-8 text-slate-600">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Use of the service
            </h2>
            <p className="mt-3">
              You agree to use <span className="sail-wordmark">SAIL</span> in
              compliance with applicable laws and to provide accurate
              information during signup and usage.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Accounts and security
            </h2>
            <p className="mt-3">
              You are responsible for safeguarding your account credentials and
              for activity under your account.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Changes to the service
            </h2>
            <p className="mt-3">
              We may update or modify the service over time. We will strive to
              provide reasonable notice for material changes.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Contact
            </h2>
            <p className="mt-3">
              Questions about these Terms? Contact{" "}
              <a
                className="font-semibold text-[#343CED] hover:underline"
                href="mailto:info@sailgtx.com"
              >
                info@sailgtx.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
