"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setProgress(scrollPercent);
      setIsVisible(scrollTop > 100); // Show after scrolling 100px
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div
        className={`fixed left-0 right-0 top-0 z-[100] h-1 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-sail-blue via-sail-blue-light to-sail-green transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Subtle glow effect at the end of progress bar */}
      <div
        className={`fixed top-0 z-[99] h-1 w-32 bg-gradient-to-r from-transparent via-sail-green/50 to-transparent blur-sm transition-all duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${progress}%`,
          transform: "translateX(-50%)",
        }}
      />
    </>
  );
}
