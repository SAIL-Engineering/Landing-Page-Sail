import { footerSections, socialMediaLinks } from "@/utils/constants";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="text-white w-full border-t border-black/10 bg-[#0f1115] px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Link
              href="/"
              className="sail-wordmark text-xl"
              aria-label="SAIL home"
            >
              SAIL
            </Link>
            <p className="text-white/70 mt-4 max-w-sm text-sm">
              Trade compliance software for brokers and enterprises that need
              audit-ready workflows and faster updates.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {footerSections.map(({ title, links }, idx) => (
              <div key={idx}>
                <h5 className="text-white/80 text-sm font-semibold uppercase tracking-wide">
                  {title}
                </h5>
                <ul className="text-white/60 mt-4 space-y-2 text-sm">
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

        <div className="border-white/10 my-10 border-b" />

        <div className="text-white/60 flex flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
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
                  className="hover:bg-white/10 rounded-full"
                  asChild
                >
                  <Link href={link} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-white/70 hover:text-white h-4 w-4" />
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
