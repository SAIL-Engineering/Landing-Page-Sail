import { ComponentType } from "react";

type FooterLink = {
  text: string;
  href: string;
  target?: "_self" | "_blank";
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const footerSections: FooterSection[] = [
  {
    title: "Solutions",
    links: [
      {
        text: "Enterprise Compliance",
        href: "/solutions/enterprise-compliance",
      },
      {
        text: "Customs Brokerage",
        href: "/solutions/customs-brokerage",
      },
      {
        text: "Advisory & Trade Law",
        href: "/solutions/advisory-trade-law",
      },
    ],
  },
  {
    title: "Product",
    links: [
      {
        text: "Product Overview",
        href: "/#product",
      },
      {
        text: "How it works",
        href: "/#how",
      },
      {
        text: "Results",
        href: "/#results",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        text: "Privacy Policy",
        href: "/privacy",
      },
      {
        text: "Terms of Service",
        href: "/terms-of-service",
      },
      {
        text: "Contact",
        href: "mailto:info@sailgtx.com",
      },
    ],
  },
];

type SocialMediaLink = {
  icon: ComponentType<{ className?: string }>;
  link: string;
};

export const socialMediaLinks: SocialMediaLink[] = [];
