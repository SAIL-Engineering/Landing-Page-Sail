"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const MobileNavItem = ({
    href,
    onClick,
    children,
  }: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <li>
      <Link
        href={href}
        className="block rounded-md py-4 text-base font-medium text-foreground"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-md text-white hover:bg-white/10"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-[300px] flex-col justify-between sm:w-[380px]"
      >
        <div>
          <SheetHeader className="mb-4">
            <SheetTitle className="sail-wordmark text-center">SAIL</SheetTitle>
          </SheetHeader>
          <div className="mb-6 space-y-3">
            <Button variant="sail" className="w-full" asChild>
              <Link
                href="mailto:info@sailgtx.com"
                onClick={() => setIsOpen(false)}
              >
                Request demo
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full border-slate-300/70 text-slate-700"
              asChild
            >
              <Link
                href="mailto:info@sailgtx.com"
                onClick={() => setIsOpen(false)}
              >
                Talk to Founder
              </Link>
            </Button>
          </div>
          <nav aria-label="Mobile menu">
            <ul className="space-y-1">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="solutions">
                  <AccordionTrigger>Solutions</AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-4 space-y-1">
                      <MobileNavItem
                        href="/solutions/enterprise-compliance"
                        onClick={() => setIsOpen(false)}
                      >
                        Enterprise Compliance
                      </MobileNavItem>
                      <MobileNavItem
                        href="/solutions/customs-brokerage"
                        onClick={() => setIsOpen(false)}
                      >
                        Customs Brokerage
                      </MobileNavItem>
                      <MobileNavItem
                        href="/solutions/advisory-trade-law"
                        onClick={() => setIsOpen(false)}
                      >
                        Advisory & Trade Law
                      </MobileNavItem>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <MobileNavItem href="/#product" onClick={() => setIsOpen(false)}>
                Product
              </MobileNavItem>
              <MobileNavItem href="/#how" onClick={() => setIsOpen(false)}>
                How it works
              </MobileNavItem>
              <MobileNavItem href="/#results" onClick={() => setIsOpen(false)}>
                Results
              </MobileNavItem>
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
