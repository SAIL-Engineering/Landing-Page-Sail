import { ReactNode, forwardRef, ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import MobileMenu from "./ui/mobile-menu";
import { Button } from "./ui/button";

const NavItem = ({
  href,
  target = "_self",
  children,
}: {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  children: ReactNode;
}) => (
  <NavigationMenuLink
    asChild
    className={navigationMenuTriggerStyle()}
    href={href}
    target={target}
  >
    <Link href={href}>{children}</Link>
  </NavigationMenuLink>
);

const DropdownNavItem = ({
  trigger,
  children,
}: {
  trigger: string;
  children: ReactNode;
}) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
    <NavigationMenuContent>{children}</NavigationMenuContent>
  </NavigationMenuItem>
);

const ListItem = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#f2f4ff] hover:text-[#343CED] focus:bg-[#f2f4ff] focus:text-[#343CED]",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-600/90 dark:text-gray-500">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-6xl">
        <nav
          className="sail-nav-dark flex items-center justify-between rounded-full px-4 py-3 lg:px-6"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={cn("sail-wordmark text-2xl text-white")}
              aria-label="SAIL Home"
            >
              SAIL
            </Link>
          </div>

          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="text-sm text-white/90">
                <DropdownNavItem trigger="Solutions">
                  <ul className="grid w-[360px] gap-3 bg-white p-4 md:w-[420px]">
                    <ListItem
                      href="/solutions/enterprise-compliance"
                      title="Enterprise Compliance"
                    >
                      Centralized classification, duties, and audit trails.
                    </ListItem>
                    <ListItem
                      href="/solutions/customs-brokerage"
                      title="Customs Brokerage"
                    >
                      Faster filing and fewer holds at the port.
                    </ListItem>
                    <ListItem
                      href="/solutions/advisory-trade-law"
                      title="Advisory & Trade Law"
                    >
                      Audit-ready documentation for every client.
                    </ListItem>
                  </ul>
                </DropdownNavItem>
                <NavItem href="/#product">Product</NavItem>
                <NavItem href="/#how">How it works</NavItem>
                <NavItem href="/#results">Results</NavItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="outline"
              className="border-white/50 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900"
              asChild
            >
              <Link href="mailto:info@sailgtx.com">Talk to Founder</Link>
            </Button>
            <Button variant="sail" asChild>
              <Link href="mailto:info@sailgtx.com">Request free audit</Link>
            </Button>
          </div>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
