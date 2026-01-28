# SAIL GTX Landing Page - Project Overview

## Mission

Build a premium, conversion-focused landing page for SAIL GTX that positions the product as the modern, fast-deploying alternative to enterprise Trade Compliance platforms like Altana. Target audience: customs brokers and enterprise compliance teams who need audit-ready workflows, faster tariff updates, and streamlined classification—without months-long implementations.

**Primary Goal:** Drive self-serve signups and demo requests from customs broker ICP while establishing SAIL as a credible, sophisticated competitor in the trade compliance space.

---

## Brand Identity

### Visual Identity

- **Brand Name:** SAIL (always all caps)
- **Wordmark:** Nunito Sans Black, uppercase
- **Typography:**
  - Base text: Geist
  - Headings: IBM Plex Serif
  - Kickers/numbers: JetBrains Mono
  - Wordmark: Nunito Sans (900 weight)

### Color Palette

- **Primary Blue:** `#343CED` (brand identity, CTAs on hover)
- **Bright Green:** `#D8FD49` (primary CTA background, accents)
- **Oatmeal:** `#F6F3EB` (light section backgrounds)
- **Dark Navy:** `#0b0f2b` (dark section backgrounds, text)
- **Supporting:** Black, white, slate gradients

### Design Philosophy

- **Visual References:** ramp.com, clerk.com, glean.com
- **Tone:** Bold, intentional, premium—not "AI slop"
- **Aesthetic:** Modern SaaS with glassmorphism, subtle gradients, and micro-animations
- **Hero Background:** Retro Port of Oakland image (`public/hero/hero.png`) with dark overlay

---

## Recent Updates & Accomplishments

### UI/UX Refinements (December 2024)

#### 1. **Audit Button Standardization** ✅

**Problem:** Inconsistent button copy and janky hover animations across 5 different locations
**Solution:**

- Unified all audit buttons to show "Claim Your Free Audit"
- Smooth 500ms hover animation that changes text to "Save Millions!"
- Background color transitions from `#D8FD49` (neon green) to `#343CED` (brand blue)
- Text color changes from black to white on hover
- Added scale effects (0.95 → 1.0) for buttery smooth transitions
- Removed icon that felt "out of place"

**Locations Updated:**

1. Hero section (main page)
2. Footer CTA section (main page)
3. Header navigation
4. Mobile menu
5. Footer component

**Technical Implementation:**

```tsx
// Smooth crossfade with scale
<span className="transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
  Claim Your Free Audit
</span>
<span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
  Save Millions!
</span>
```

#### 2. **Integrations Section Logo Fixes** ✅

**Problem:** Oracle and SharePoint logos not appearing; inconsistent sizing
**Solution:**

- Renamed logo files for consistency:
  - `Microsoft_Office_SharePoint_(2019–2025).svg` → `sharepoint.svg`
  - `Oracle_logo.svg` → `oracle.svg`
  - `U.S._Customs_and_Border_Protection_logo.png` → `cbp.png`
  - `Slack_Technologies-Logo.wine.png` → `slack.png`
  - `Microsoft_Office_Teams_(2019–2025).svg.png` → `teams.png`
  - `Microsoft_Outlook_Icon_(2025–present).svg` → `outlook.svg`
- Updated `src` paths in Image components
- Increased size of US CBP and Slack logos for better visual balance
- All logos now properly visible with consistent styling

#### 3. **Case Study Section Redesign** ✅

**Problem:** Light theme cards, poor readability, inconsistent with Hero aesthetic
**Solution:**

- Switched entire section to dark theme (`#0b0f2b` background)
- Redesigned all cards to match "Hero Widget" style:
  - Dark backgrounds with `bg-white/5`
  - Glassmorphism with `backdrop-blur-sm`
  - Subtle borders `border-white/10`
  - Neon accents with brand colors
- Improved typography contrast (white/slate-300 on dark)
- Enhanced "Results" card to look like a high-tech dashboard widget

#### 4. **Time to Value Section Redesign** ✅

**Problem:** Emoji-based list items, light theme, looked basic
**Solution:**

- Replaced emojis with Nucleo icons (Package, RefreshCw, Eye, CheckCircle)
- Converted timeline items to premium "Hero Widget" style cards
- Added icon containers with gradient backgrounds
- Redesigned competitor comparison cards:
  - Dark red theme for competitor entries (`border-red-500/20`, `bg-red-950/20`)
  - Clear visual distinction between SAIL's speed and competitor delays
- All text now uses proper dark theme styling

#### 5. **Next.js Configuration Updates** ✅

- Added `transpilePackages: ["nucleo-ui-outline-18"]` to `next.config.js`
- Fixes Webpack module resolution issues in dev mode
- Ensures smooth HMR (Hot Module Replacement)

---

## Current Site Structure

### Page Sections (`app/(default)/page.tsx`)

1. **Hero Section**
   - Retro port background image with dark overlay
   - Headline + value prop
   - Dual CTAs: "Claim Your Free Audit" + "Talk to Founder"
   - Animated "Hero widgets" showing Product Library, Duty Savings, and Compliance metrics
   - Modern glassmorphism design

2. **Trusted By Strip**
   - Koch and Invista logos
   - Social proof for enterprise credibility

3. **Solutions Cards**
   - Enterprise Compliance
   - Customs Brokerage
   - Advisory & Trade Law
   - Each with icon, description, and benefits

4. **Product Section**
   - Interactive feature cards
   - Risk scoring UI examples
   - Checklist and workflow previews

5. **Integrations Grid**
   - Oracle, SharePoint, US CBP, Slack, Teams, Outlook
   - All logos properly sized and visible
   - Grayscale with color on hover

6. **How It Works**
   - 4-step process with dark-themed cards
   - Icons for: Classify, Monitor, Maintain, Defend
   - Detailed workflow descriptions

7. **Case Study (Invista)**
   - Dark-themed premium cards
   - Challenge/Approach breakdown
   - Results dashboard widget
   - Customer quote with attribution

8. **Competitive Metrics**
   - 5 key stats (15x faster, Same day, 100%, Daily, 98%+)
   - Clean, centered presentation

9. **Time to Value**
   - Dark-themed section
   - Day 1-14 timeline with icon cards
   - Competitor comparison (showing months vs days)

10. **Final CTA Band**
    - Dark background
    - Dual CTAs matching hero
    - Clear value proposition

### Components

- **Header** (`components/header.tsx`)
  - Fixed position with glassmorphic nav
  - SAIL wordmark
  - Solutions dropdown
  - Product/How it works/Results links
  - Dual CTAs

- **Footer** (`components/footer.tsx`)
  - Dark theme (`#0f1115`)
  - SAIL wordmark
  - Dual CTAs
  - Footer links grid
  - Social media icons

- **Mobile Menu** (`components/ui/mobile-menu.tsx`)
  - Sheet-based drawer
  - Full navigation
  - Matching CTAs

---

## Key Technical Decisions

### CSS Architecture

- **Global Styles:** `app/globals.css`
  - Custom `.sail-cta` class for primary buttons
  - `.sail-wordmark` for brand typography
  - `.sail-kicker` and `.sail-kicker-light` for section labels
  - Hover state overrides with `!important` for background color changes

### Button System

- Custom `variant="sail"` in `components/ui/button.tsx`
- Gradient background with 3D shadow effects
- Smooth hover transitions with color and scale changes
- Consistent across all CTAs

### Icon System

- Nucleo UI Outline 18px icons throughout
- Imported individually for tree-shaking
- Consistent sizing and styling

### Image Optimization

- Next.js Image component for all logos and graphics
- WebP/AVIF format support
- 30-day cache TTL for static assets

---

## Competitor Analysis: Altana

### Altana's Positioning

- **Core Value:** Public-private network for tariffs & trade compliance
- **Key Partnership:** Built with U.S. Customs and Border Protection (CBP)
- **Main Concept:** "Global Entry for Goods" via Product Passports
- **Primary Promise:** Continuous compliance through AI + shared product data

### Altana's Claims

- **$5M+** average detention costs avoided
- **$300M+** average duty savings identified
- **8x faster** customs filing
- **96%+ accuracy** on ~75% of records

### Altana's Target Personas

- Importers
- Suppliers
- Logistics providers
- Regulators

### Altana's Feature Set

- Automated duty calculation (tariff stacking, Section 232)
- Tariff simulation by supplier/component/country
- Transaction screening (misclassification, COO, valuation, forced labor)
- HS classification (AI-driven)
- FTA qualification and filing
- Supplier collaboration + traceability
- Government collaboration (Product Passports)

### SAIL's Differentiation Strategy

1. **Speed to Value**
   - SAIL: 7-14 days to go live
   - Altana: Enterprise-level rollout (months)
   - **Messaging:** "Stop waiting. Start winning."

2. **Target Audience**
   - SAIL: Broker-first, self-serve onboarding
   - Altana: Enterprise + government network
   - **Messaging:** Built for teams who do the work, not committees

3. **Practical Workflows**
   - SAIL: Audit-ready documentation, fast updates, classification
   - Altana: Network solution, Product Passports, regulator collaboration
   - **Messaging:** Real workflows for real compliance teams

4. **Simplicity**
   - SAIL: No large integration overhead
   - Altana: Public-private network infrastructure
   - **Messaging:** "Trade Compliance that keeps up with the world"

---

## What's Left to Build

### Phase 1: Core Functionality (MVP)

**Status: 🚧 In Progress**

1. **Authentication & User Management**
   - [ ] Sign up flow
   - [ ] Login/logout
   - [ ] Password reset
   - [ ] Email verification
   - [ ] User profile management

2. **Onboarding Experience**
   - [ ] Product catalog import (CSV/API)
   - [ ] Initial classification setup
   - [ ] Integration connections (ERPs, customs systems)
   - [ ] Workspace setup
   - [ ] Team invites

3. **Product Dashboard**
   - [ ] Product library view
   - [ ] Classification status
   - [ ] Confidence scores
   - [ ] Bulk actions
   - [ ] Search and filtering

4. **Classification Engine**
   - [ ] AI-powered HTS code suggestions
   - [ ] Confidence scoring algorithm
   - [ ] Reasoning chains
   - [ ] Manual override capability
   - [ ] Classification history

5. **Monitoring System**
   - [ ] Tariff change notifications
   - [ ] HTS schedule updates (daily sync)
   - [ ] Product impact analysis
   - [ ] Email/Slack alerts
   - [ ] Change log

6. **Audit Documentation**
   - [ ] Evidence chain generation
   - [ ] CF-28 response builder
   - [ ] Export capability (PDF, CSV)
   - [ ] Audit trail
   - [ ] Compliance reports

### Phase 2: Advanced Features

**Status: 📋 Planned**

1. **Duty Recovery**
   - [ ] Overpayment detection
   - [ ] Drawback opportunity identification
   - [ ] Filing assistance
   - [ ] ROI tracking

2. **Team Collaboration**
   - [ ] Role-based access control
   - [ ] Comments and annotations
   - [ ] Approval workflows
   - [ ] Activity feed

3. **Integrations**
   - [ ] Oracle NetSuite connector
   - [ ] SAP integration
   - [ ] Customs broker portals
   - [ ] SharePoint document sync
   - [ ] Slack notifications
   - [ ] Teams notifications
   - [ ] Email (Outlook) integration

4. **Advanced Analytics**
   - [ ] Duty savings dashboard
   - [ ] Classification accuracy metrics
   - [ ] Time savings reports
   - [ ] Team performance
   - [ ] Predictive insights

5. **Regulatory Intelligence**
   - [ ] Section 301 tracking
   - [ ] Section 232 monitoring
   - [ ] FTA qualification checks
   - [ ] Country of origin analysis
   - [ ] Forced labor compliance

### Phase 3: Enterprise Features

**Status: 🎯 Future**

1. **Advanced Workflows**
   - [ ] Custom classification rules
   - [ ] Automated re-classification
   - [ ] Batch processing
   - [ ] API for developers
   - [ ] Webhooks

2. **White-Label Capabilities**
   - [ ] Broker-branded portals
   - [ ] Custom domains
   - [ ] Logo customization

3. **Compliance Automation**
   - [ ] Auto-file to customs systems
   - [ ] PGA analysis automation
   - [ ] Continuous audit mode
   - [ ] Risk scoring engine

---

## Technical Stack

### Frontend

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Components:** Radix UI primitives
- **Icons:** Nucleo UI Outline 18px
- **Fonts:** Geist, IBM Plex Serif, JetBrains Mono, Nunito Sans
- **Animations:** CSS transitions + Framer Motion (for hero animation)

### Infrastructure (Current)

- **Hosting:** Vercel
- **Analytics:** Vercel Analytics + Speed Insights
- **Domain:** TBD

### Future Backend Stack

- **Database:** PostgreSQL (likely Supabase or Neon)
- **Auth:** NextAuth.js or Clerk
- **API:** Next.js API Routes / tRPC
- **File Storage:** S3-compatible (for documents, CSVs)
- **Queue:** Background jobs for HTS updates and classification
- **Email:** Resend or SendGrid
- **Monitoring:** Sentry

---

## Success Metrics

### Landing Page KPIs

- [ ] Conversion rate (visitor → demo request)
- [ ] Conversion rate (visitor → sign up)
- [ ] Time on page
- [ ] Scroll depth
- [ ] CTA click-through rate
- [ ] Mobile vs desktop performance

### Product KPIs (Future)

- [ ] Time to first classification
- [ ] Classification accuracy
- [ ] Daily active users
- [ ] Products classified per user
- [ ] Duty savings identified
- [ ] NPS score

---

## Immediate Next Steps

### Design Polish

1. **Logo Assets**
   - [ ] Get properly cropped/sized Koch logo (remove scale hacks)
   - [ ] Optimize all integration logos for web
   - [ ] Add more customer logos as they come

2. **Visual Assets**
   - [ ] Replace screenshot placeholders with actual product UI
   - [ ] Create custom illustrations for "How It Works"
   - [ ] Design section dividers/transitions

3. **Responsive Design**
   - [ ] Mobile optimization pass
   - [ ] Tablet breakpoint refinement
   - [ ] Touch target sizing

### Copy Refinement

1. **Messaging**
   - [ ] A/B test CTA copy variations
   - [ ] Tighten value props in each section
   - [ ] Add more specific "before/after" outcomes
   - [ ] Incorporate tariff-specific urgency

2. **SEO**
   - [ ] Meta descriptions for all pages
   - [ ] OpenGraph images
   - [ ] Schema markup for case studies
   - [ ] Blog content strategy

### Performance

1. **Optimization**
   - [ ] Image optimization audit
   - [ ] Font loading strategy
   - [ ] Lazy loading for below-fold content
   - [ ] Lighthouse score optimization

2. **Testing**
   - [ ] Cross-browser testing
   - [ ] Accessibility audit (WCAG AA)
   - [ ] Load testing
   - [ ] Error tracking setup

---

## Open Questions & Decisions Needed

1. **Branding**
   - Is "SAIL GTX" the final name or just "SAIL"?
   - Any trademark considerations?

2. **Pricing**
   - Will pricing be public on the landing page?
   - Freemium model or enterprise-only?

3. **Demo Flow**
   - Live demo environment or recorded video?
   - Calendar booking vs. email-based scheduling?

4. **Legal**
   - Terms of Service content
   - Privacy Policy details
   - Cookie consent requirements

5. **Market Positioning**
   - Primary competition: Altana, Descartes, other?
   - Key differentiator to emphasize: speed, simplicity, or broker focus?

---

## Key Files Reference

### Core Application

- `app/(default)/page.tsx` - Main landing page
- `app/layout.tsx` - Root layout with fonts and metadata
- `app/globals.css` - Global styles, custom classes

### Components

- `components/header.tsx` - Navigation header
- `components/footer.tsx` - Site footer
- `components/ui/mobile-menu.tsx` - Mobile navigation
- `components/ui/button.tsx` - Button component with variants
- `components/ui/card.tsx` - Card component
- `components/hero-animation.tsx` - Hero section animated widgets

### Configuration

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

### Assets

- `public/hero/hero.png` - Hero background image
- `public/logos/` - Company and integration logos

---

## Notes

### Development Quirks

- React Strict Mode causes double render in dev (normal behavior)
- Nunito Sans font warning is non-fatal
- `.next` cache occasionally needs clearing after major refactors

### Brand Guidelines

- Always use "SAIL" in all caps
- CTA label is "Talk to Founder" (not "Talk to Sales")
- Focus messaging on: tariff changes, audit readiness, port delays, rapid updates
- Maintain premium, sophisticated tone—avoid "startup-y" language

---

**Last Updated:** December 21, 2024
**Version:** 2.0
**Status:** Landing page ready for production, product MVP in planning
