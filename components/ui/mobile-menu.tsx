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
          className="rounded-none text-slate-700 hover:bg-black/5"
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
            <SheetTitle className="text-center">
              <span className="sail-wordmark">SAIL</span>{" "}
              <span style={{ fontFamily: "var(--font-nunito-sans)" }}>GTX</span>
            </SheetTitle>
          </SheetHeader>
          <div className="mb-6 space-y-3">
            <Button
              variant="sail"
              className="group relative w-full overflow-hidden transition-all duration-500"
              asChild
            >
              <Link
                href="mailto:info@sailgtx.com"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center"
              >
                Book Free Audit
              </Link>
            </Button>
            {/* TalkToFounderButton removed */}
          </div>
          <nav aria-label="Mobile menu">
            <ul className="space-y-1">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="solutions">
                  <AccordionTrigger>Solutions</AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-4 space-y-1">
                      <MobileNavItem
                        href="/#audiences"
                        onClick={() => setIsOpen(false)}
                      >
                        Customs Brokers
                      </MobileNavItem>
                      <MobileNavItem
                        href="/#audiences"
                        onClick={() => setIsOpen(false)}
                      >
                        Enterprise Teams
                      </MobileNavItem>
                      <MobileNavItem
                        href="/#audiences"
                        onClick={() => setIsOpen(false)}
                      >
                        Trade Advisory
                      </MobileNavItem>
                      <MobileNavItem
                        href="/#audiences"
                        onClick={() => setIsOpen(false)}
                      >
                        Trade Law
                      </MobileNavItem>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <MobileNavItem href="/writings" onClick={() => setIsOpen(false)}>
                Writings
              </MobileNavItem>
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
