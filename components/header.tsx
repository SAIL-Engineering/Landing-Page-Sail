"use client";

import {
  ReactNode,
  forwardRef,
  ComponentPropsWithoutRef,
  useState,
  useRef,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileMenu from "./ui/mobile-menu";
import { Button } from "./ui/button";
import {
  IconBoxScaleOutline18 as Ship,
  IconUsersOutline18 as Building,
  IconChartColumnOutline18 as PieChart,
  IconScrollTextOutline18 as Gavel,
} from "nucleo-ui-outline-18";
import { TalkToFounderButton } from "@/components/talk-to-founder-button";

const solutions = [
  {
    title: "Customs Brokers",
    description: "Accurate HTS codes with audit-ready documentation",
    href: "/#audiences",
    icon: Ship,
  },
  {
    title: "Enterprise Teams",
    description: "Product catalog monitoring at scale",
    href: "/#audiences",
    icon: Building,
  },
  {
    title: "Trade Advisory",
    description: "White-label classification services",
    href: "/#audiences",
    icon: PieChart,
  },
  {
    title: "Trade Law",
    description: "Litigation-grade classification evidence",
    href: "/#audiences",
    icon: Gavel,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl">
        <nav
          className="sail-nav-light flex items-center justify-between rounded-none px-6 py-3"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn("flex items-center gap-2 text-2xl text-slate-900")}
            aria-label="SAIL Home"
          >
            <span className="sail-wordmark">SAIL</span>
            <span className="font-brand text-2xl font-semibold tracking-tight">
              GTX
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 rounded-none px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-150 hover:bg-black/5 hover:text-slate-900"
                aria-expanded={isOpen}
              >
                Solutions
                <span
                  className={cn(
                    "text-xs transition-transform duration-150",
                    isOpen && "rotate-180",
                  )}
                >
                  ▼
                </span>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div
                  className="animate-in fade-in slide-in-from-top-2 absolute left-0 top-full mt-2 w-80 duration-150"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="overflow-hidden rounded-xl border border-[#e0dbcf] bg-white shadow-xl">
                    <div className="p-2">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.title}
                          href={solution.href}
                          className="group flex items-start gap-3 rounded-lg p-3 transition-all duration-150 hover:bg-[#fffdf8]"
                        >
                          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-sail-blue/10 transition-all duration-150 group-hover:bg-sail-blue">
                            <solution.icon className="h-4 w-4 text-sail-blue transition-all duration-150 group-hover:text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-semibold text-slate-900">
                              {solution.title}
                            </div>
                            <div className="mt-0.5 text-xs leading-snug text-slate-600">
                              {solution.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Writings */}
            <Link
              href="/writings"
              className="rounded-none px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-150 hover:bg-black/5 hover:text-slate-900"
            >
              Writings
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <TalkToFounderButton size="sm" />
            <Button
              variant="sail"
              size="sm"
              className="transition-all duration-150 hover:scale-105"
              asChild
            >
              <Link href="/free-audit">Book Free Audit</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
