"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "how", label: "How It Works" },
  { id: "capabilities", label: "Capabilities" },
  { id: "audiences", label: "Who We Serve" },
  { id: "case-study", label: "Results" },
  { id: "cta", label: "Get Started" },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show nav after scrolling past hero
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort by intersection ratio to prioritize the most visible section
        const sortedEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (sortedEntries.length > 0) {
          setActiveSection(sortedEntries[0].target.id);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5], // Multiple thresholds for better tracking
        rootMargin: "-10% 0px -40% 0px", // Less aggressive margins
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 xl:block",
        isVisible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-label="Page sections"
    >
      <ul className="space-y-4">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={cn(
                "group flex items-center gap-3 transition-all duration-300",
                activeSection === id
                  ? "text-sail-blue"
                  : "text-slate-400 hover:text-slate-600",
              )}
            >
              {/* Animated dot */}
              <span className="relative flex items-center">
                {/* Background glow when active */}
                <span
                  className={cn(
                    "absolute h-3 w-3 rounded-full bg-sail-blue blur-sm transition-all duration-300",
                    activeSection === id ? "opacity-60" : "opacity-0",
                  )}
                />
                {/* Main dot */}
                <span
                  className={cn(
                    "relative h-2 w-2 rounded-full transition-all duration-300",
                    activeSection === id
                      ? "w-8 bg-gradient-to-r from-sail-blue to-sail-green shadow-lg shadow-sail-blue/30"
                      : "bg-slate-300 group-hover:bg-slate-400",
                  )}
                />
              </span>

              {/* Label - slides in when active */}
              <span
                className={cn(
                  "text-xs font-medium transition-all duration-300",
                  activeSection === id
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                )}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Connecting line */}
      <div className="absolute left-[3px] top-0 -z-10 h-full w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
    </nav>
  );
}
