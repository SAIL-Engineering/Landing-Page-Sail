# SAIL landing page notes

## Context
- Brand: SAIL (all caps). Wordmark uses Nunito Sans Black.
- Fonts: Geist (base), IBM Plex Serif (headings), JetBrains Mono (kickers/numbers), Nunito Sans (wordmark).
- Primary goal: drive self-serve signup (customs broker ICP).
- Visual refs: ramp.com, clerk.com, glean.com. Tone: bold, intentional, not "AI slop".
- Colors in use: Primary Blue #343CED, Bright Green #D8FD49, Oatmeal #F6F3EB, plus black/white.
- Hero background: retro Port of Oakland image in `public/hero/hero.png` with a dark overlay.

## What was built / changed
- Landing page layout and styling in `app/(default)/page.tsx` with sections:
  - Hero (image background, email signup, CTAs, metrics chip, placeholder UI card).
  - Trusted by strip with Koch + Invista logos.
  - Solutions cards (Enterprise, Customs Brokerage, Advisory & Trade Law).
  - Product section (risk score + checklist placeholder cards).
  - Product previews section (screenshot placeholders).
  - Coverage grid.
  - How it works.
  - 7-day timeline.
  - Results + case study.
  - CTA band.
- Buttons: custom `variant="sail"` in `components/ui/button.tsx` + `.sail-cta` styling in `app/globals.css`.
- Fonts wired in `app/layout.tsx`. Wordmark class in `app/globals.css`:
  - `.sail-wordmark { font-family: var(--font-nunito-sans); font-weight: 900; text-transform: uppercase; }`
- Header: logo uses wordmark, larger size, and CTA label changed to "Talk to Founder".
- Footer: replaced old PearAI content; wordmark used; CTA label updated.
- Mobile menu: wordmark and "Talk to Founder".
- Cleaned up PearAI content, pages, and API routes.
- Metadata updated to SAIL in `lib/utils.ts` and elsewhere.

## Current logo sizing
- Koch logo: `/public/logos/Koch_logo.svg` with `h-9`.
- Invista logo: `/public/logos/Invista_Logo-removebg-preview.png` with `h-12` and `scale-[2.15]`.
- Trusted strip lives in `app/(default)/page.tsx`.

## Notes on dev hiccup
- Hero "double render" in dev is likely React Strict Mode behavior. Check prod build if needed.

## Copy and brand rules
- Every mention of Sail should be all caps "SAIL" and use the Nunito Sans wordmark style.
- CTA label: "Talk to Founder" (not Sales).
- Focus copy on tariff changes, audit readiness, avoiding port delays, rapid compliance updates.

## Outstanding polish ideas
- Adjust section backgrounds for more contrast (already started with white / oatmeal / light blue variations).
- If you provide cropped logos, we can remove scale hacks and simplify logo sizing.
- Replace placeholder UI cards with real screenshots when available.

## Where to continue next
1) Copy pass: tighten hero + section copy, align with Altana trade/tariffs language, refine differentiators.
2) Visual pass: ensure contrast/readability across all sections, finalize navbar polish.
3) Replace placeholders with real product screenshots.
4) Confirm production build for any render flicker or layout shift.

## Key files
- `app/(default)/page.tsx`
- `components/header.tsx`
- `components/footer.tsx`
- `components/ui/mobile-menu.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `lib/utils.ts`

## Competitor notes: Altana (trade & tariffs)
- Awaiting direct copy or bullets from Altana page to map positioning + feature set.
- Add notes here once provided:
  - Primary promise:
  - Key workflows highlighted:
  - Proof points / metrics:
  - Target personas:
  - Differentiators claimed:
  - CTA style and offer:

## Competitor notes: Altana (trade & tariffs) - summarized

### Core positioning
- Public-private network for tariffs & trade compliance.
- Built with U.S. Customs and Border Protection (CBP).
- Emphasis on continuous compliance + AI + shared product data.
- "Global Entry for Goods" framing via Product Passports.

### Target personas
- Importers
- Suppliers
- Logistics providers
- Regulators

### Key promises
- Faster clearance for trusted goods via pre-validation.
- Continuous compliance via AI-driven Product Passports.
- More accurate duties + classification + origin + FTA qualification.
- Risk screening for tariff evasion, sanctions, forced labor, narcotics.

### Headline workflow buckets
- Streamlined compliance: manage value chains + supplier docs + Product Passports.
- Faster, more accurate filing: AI-powered product catalogs.
- Efficient enforcement: AI screens risk; low-risk pre-validated.

### Proof points (claims)
- $5M+ average detention costs avoided.
- $300M+ average duty savings identified.
- 8x faster customs filing.

### “Network solution” framing
- Shared view of products + risk factors.
- Collaboration between business + regulators on tariffs.

### Feature set (tariffs & compliance)
- Automated duty calculation (incl. tariff stacking + Section 232 predictions).
- Tariff simulation by supplier/component/country.
- Transaction screening (misclassification, COO, valuation, forced labor, restricted parties).
- PGA analysis (auto-populate attestations).
- Continuous auditing (over/underpayments).
- HS classification (AI-driven).
- FTA qualification and filing.
- Supplier collaboration + traceability.
- Government collaboration (submit Product Passports).
- Enforcement tooling (transshipment, counternarcotics risk).

### Offer: "Reclaim Your Revenue" (free duty audit)
- Audit up to 100,000 entries; report in ~15 business days.
- Claims: $19.2M+ overpayments found in 2 months; $924k on 3 shipments.
- CTA: request free audit / schedule demo.

### Case study narrative
- AI-powered HS code misclassification detection.
- Shift from random sampling to risk-based auditing.
- Atlas model spans 400M companies, 2.5B shipments.
- Accuracy claims: 96%+ on ~75% of records at low error rate.
- Positioning: AI enables 100% audit coverage in seconds vs weeks.

### Messaging patterns to match or counter
- Public-private trust + regulator partnership.
- Network + Product Passport as core concept.
- Strong, quantified outcomes + audit framing.
- Risk targeting vs random audit sampling.
- Heavy AI + scale narrative.

### Opportunities for SAIL differentiation
- Broker-first self-serve onboarding (faster time-to-value).
- Practical workflows for trade compliance teams vs government network.
- Fast updates + audit readiness without large integration overhead.
- "Go live in 7 days" vs enterprise-level rollout.
