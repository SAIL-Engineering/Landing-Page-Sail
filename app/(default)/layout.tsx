"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionNav } from "@/components/section-nav";
import { MobileNav } from "@/components/mobile-nav";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      {isHomePage && <ScrollProgress />}
      {isHomePage && <SectionNav />}
      <MobileNav />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
