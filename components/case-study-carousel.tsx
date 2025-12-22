"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  IconChevronLeftOutline18 as ChevronLeft,
  IconChevronRightOutline18 as ChevronRight,
} from "nucleo-ui-outline-18";

interface CaseStudy {
  company: string;
  title: string;
  subtitle: string;
  challenge: string;
  approach: string;
  results: Array<{
    metric: string;
    before: string;
    after: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    company: "Fortune 500 Chemicals Company",
    title:
      "How a Fortune 500 Chemicals Company transformed Trade Compliance operations.",
    subtitle: "From reactive firefighting to continuous confidence.",
    challenge:
      "A Fortune 500 Chemicals Company's Trade Compliance team managed 8,000+ product classifications across multiple business units. Every tariff change meant weeks of manual review. CF-28 responses took 3-4 weeks to compile.",
    approach:
      "SAIL GTX deployed in 11 days. Full product catalog imported. Classification confidence scores generated. Continuous monitoring activated.",
    results: [
      {
        metric: "Time to classify new product",
        before: "45 minutes",
        after: "3 minutes",
      },
      {
        metric: "CF-28 response time",
        before: "3-4 weeks",
        after: "Same day",
      },
      {
        metric: "Products reviewed after tariff change",
        before: "~15% sampled",
        after: "100% automated",
      },
      {
        metric: "Classification confidence",
        before: "Unknown",
        after: "98.2% verified",
      },
      {
        metric: "Catalog currency",
        before: "Updated quarterly",
        after: "Continuously",
      },
    ],
    testimonial: {
      quote:
        "We used to dread tariff changes. Now SAIL flags exactly what's affected and generates the re-classification analysis automatically. We just review and approve. Our team finally has time for strategic work.",
      author: "Director of Trade Compliance",
      role: "Fortune 500 Chemicals Company",
    },
  },
  // Add more case studies here in the future
];

export function CaseStudyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const totalSlides = caseStudies.length;

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000); // Change slide every 8 seconds

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Content */}
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Side - Challenge & Approach */}
        <div
          className="transition-all duration-700 ease-sail"
          key={`left-${currentSlide}`}
        >
          <p className="sail-kicker-light">Case Study</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {currentCase.title}
          </h2>
          <p className="mt-4 text-lg text-slate-400">{currentCase.subtitle}</p>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm transition-all duration-500 hover:border-[#343CED]/50 hover:shadow-md">
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-400">
                The Challenge
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                {currentCase.challenge}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm transition-all duration-500 hover:border-[#343CED]/50 hover:shadow-md">
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[#D8FD49]">
                The Approach
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                <span className="sail-wordmark text-white">SAIL</span> GTX{" "}
                {currentCase.approach}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Results & Testimonial */}
        <div
          className="space-y-6 transition-all duration-700 ease-sail"
          key={`right-${currentSlide}`}
        >
          <Card className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 shadow-xl backdrop-blur-sm">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  Optimization Results
                </p>
                <Badge
                  variant="outline"
                  className="border-sail-green bg-sail-green/10 text-sail-green shadow-sm shadow-sail-green/20"
                >
                  Verified
                </Badge>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-5">
                {currentCase.results.map((row, index) => (
                  <div
                    key={row.metric}
                    className="flex items-center justify-between border-b border-white/10 pb-4 transition-all duration-300 last:border-0 last:pb-0"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <span className="text-sm text-slate-400">{row.metric}</span>
                    <div className="flex flex-col items-end gap-1 sm:flex-row sm:items-center sm:gap-3">
                      <span className="text-xs text-slate-500 line-through">
                        {row.before}
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#D8FD49]">
                        {row.after}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm">
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-lg italic leading-relaxed text-white/90">
                  &ldquo;{currentCase.testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-700" />
                  <div>
                    <p className="font-semibold text-white">
                      {currentCase.testimonial.author}
                    </p>
                    <p className="text-sm text-slate-400">
                      {currentCase.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Navigation Controls - Only show if more than 1 slide */}
      {totalSlides > 1 && (
        <>
          {/* Desktop: Side Arrow Buttons */}
          <div className="absolute -left-16 top-1/2 hidden -translate-y-1/2 xl:block">
            <button
              onClick={goToPrevious}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-sail-blue hover:bg-sail-blue/20 hover:shadow-lg hover:shadow-sail-blue/30"
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>
          <div className="absolute -right-16 top-1/2 hidden -translate-y-1/2 xl:block">
            <button
              onClick={goToNext}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-sail-blue hover:bg-sail-blue/20 hover:shadow-lg hover:shadow-sail-blue/30"
              aria-label="Next case study"
            >
              <ChevronRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>

          {/* Mobile: Bottom Arrow Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4 xl:hidden">
            <button
              onClick={goToPrevious}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-sail-blue hover:bg-sail-blue/20"
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-sail-blue hover:bg-sail-blue/20"
              aria-label="Next case study"
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  currentSlide === index
                    ? "w-8 bg-sail-green shadow-lg shadow-sail-green/30"
                    : "w-2 bg-white/30 hover:bg-white/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Pause indicator (visible when paused) */}
      {isPaused && totalSlides > 1 && (
        <div className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white/60 backdrop-blur-sm">
          Paused
        </div>
      )}
    </div>
  );
}
