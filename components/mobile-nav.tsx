"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  IconEarthOutline18 as Home,
  IconBoltOutline18 as Zap,
  IconBox2Outline18 as Layers,
  IconUsersOutline18 as Users,
  IconShieldCheckOutline18 as Star,
  IconArrowRightOutline18 as Rocket,
} from "nucleo-ui-outline-18";

const sections = [
  { id: "hero", label: "Home", icon: Home },
  { id: "how", label: "How", icon: Zap },
  { id: "capabilities", label: "Features", icon: Layers },
  { id: "audiences", label: "Who", icon: Users },
  { id: "case-study", label: "Results", icon: Star },
  { id: "cta", label: "Start", icon: Rocket },
];

export function MobileNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show nav after scrolling past initial hero
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
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
        threshold: [0, 0.1, 0.2, 0.3, 0.5],
        rootMargin: "-10% 0px -40% 0px",
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for nav height
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
        "fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 xl:hidden",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0",
      )}
      aria-label="Mobile navigation"
    >
      {/* Background with blur effect */}
      <div className="relative border-t border-slate-200/20 bg-white/80 backdrop-blur-xl">
        {/* Active section indicator line */}
        <div
          className="absolute left-0 top-0 h-1 bg-gradient-to-r from-sail-blue to-sail-green transition-all duration-500 ease-sail"
          style={{
            width: `${100 / sections.length}%`,
            transform: `translateX(${sections.findIndex((s) => s.id === activeSection) * 100}%)`,
          }}
        />

        {/* Navigation Items */}
        <div className="safe-bottom mx-auto flex max-w-lg items-center justify-around px-4 py-2">
          {sections.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={(e) => handleClick(e, id)}
                className={cn(
                  "group relative flex flex-1 flex-col items-center gap-1 py-2 transition-all duration-300",
                  isActive
                    ? "text-sail-blue"
                    : "text-slate-400 hover:text-slate-600",
                )}
                aria-label={`Navigate to ${label}`}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Icon container with scale effect */}
                <div
                  className={cn(
                    "relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
                    isActive
                      ? "bg-sail-blue/10 shadow-sm shadow-sail-blue/20"
                      : "bg-transparent group-hover:bg-slate-100",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-all duration-300",
                      isActive
                        ? "scale-110 text-sail-blue"
                        : "text-slate-400 group-hover:scale-105 group-hover:text-slate-600",
                    )}
                  />

                  {/* Pulse effect on active */}
                  {isActive && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-sail-blue/20" />
                  )}
                </div>

                {/* Label */}
                <span
                  className={cn(
                    "text-[10px] font-semibold transition-all duration-300",
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-60 group-hover:scale-100 group-hover:opacity-80",
                  )}
                >
                  {label}
                </span>

                {/* Active dot indicator */}
                <span
                  className={cn(
                    "absolute -top-0.5 h-1 w-1 rounded-full bg-sail-green transition-all duration-300",
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
