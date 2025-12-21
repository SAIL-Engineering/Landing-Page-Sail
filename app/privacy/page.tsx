import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description: "The privacy policy for SAIL.",
  canonical: "/privacy",
});

export default function PrivacyPolicy() {
  return (
    <main className="bg-white pt-28">
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <p className="sail-kicker">Privacy policy</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900">
          <span className="sail-wordmark">SAIL</span> Privacy Policy
        </h1>
        <p className="mt-4 text-slate-600">
          This Privacy Policy explains how{" "}
          <span className="sail-wordmark">SAIL</span> collects, uses, and
          protects personal information when you use our website and services.
        </p>

        <div className="mt-10 space-y-8 text-slate-600">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Information we collect
            </h2>
            <p className="mt-3">
              We collect information you provide directly, such as your name,
              email address, and company details when you create an account or
              contact us. We also collect basic usage and device information to
              improve the service.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              How we use information
            </h2>
            <p className="mt-3">
              We use information to provide and improve{" "}
              <span className="sail-wordmark">SAIL</span>, respond to requests,
              maintain security, and communicate about product updates.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Data sharing
            </h2>
            <p className="mt-3">
              We do not sell your personal information. We may share data with
              trusted service providers who help us operate the platform.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-slate-900">
              Contact
            </h2>
            <p className="mt-3">
              If you have questions about this policy, contact us at{" "}
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
