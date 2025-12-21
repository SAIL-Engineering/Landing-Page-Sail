import { ComponentType } from "react";

export const CONTACT_EMAIL = "info@sailgtx.com";

export const footerSections = [
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

export const HCAPTCHA_SITE_KEY_PUBLIC = "fa6c8c52-7694-45b0-97ec-7814072256b4";

type SocialMediaLink = {
  icon: ComponentType<{ className?: string }>;
  link: string;
};

export const socialMediaLinks: SocialMediaLink[] = [];
