import { footerSections, socialMediaLinks } from "@/utils/constants";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0b0f2b] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl text-white"
              aria-label="SAIL home"
            >
              <span className="sail-wordmark">SAIL</span>
              <span className="font-brand text-2xl font-semibold tracking-tight">
                GTX
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Trade compliance software for brokers and enterprises that need
              audit-ready workflows and faster updates.
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button
                variant="sail"
                className="group relative w-full overflow-hidden transition-all duration-500 sm:w-auto"
                asChild
              >
                <Link
                  href="mailto:info@sailgtx.com"
                  className="flex items-center justify-center"
                >
                  Book Free Audit
                </Link>
              </Button>
              {/* TalkToFounderButton removed */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {footerSections.map(({ title, links }, idx) => (
              <div key={idx}>
                <h5 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  {title}
                </h5>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {links.map(({ text, href, target = "_self" }, idx) => (
                    <li key={idx}>
                      <Link
                        href={href}
                        target={target}
                        className="hover:text-white"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 border-b border-white/10" />

        <div className="flex flex-col gap-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <span className="sail-wordmark">SAIL</span>. All rights reserved.
          </span>
          {socialMediaLinks.length > 0 ? (
            <div className="flex items-center gap-2">
              {socialMediaLinks.map(({ icon: Icon, link }) => (
                <Button
                  key={link}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/10"
                  asChild
                >
                  <Link href={link} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4 text-white/70 hover:text-white" />
                  </Link>
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
