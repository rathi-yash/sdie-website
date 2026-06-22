# Homepage Consolidation: Courses Overview + Contact

## Problem

`/courses` (overview) duplicates the homepage's existing "Our courses" section. `/contact` is a separate page reached via a full navigation, adding friction to a single conversion-focused site. Both should be merged into the homepage as scrollable sections, matching the existing Faculty/Gallery anchor-link pattern. `/about` and `/courses/[slug]` detail pages stay as separate pages.

## Design

- **Remove `app/courses/page.tsx`.** Keep `app/courses/[slug]/page.tsx` untouched.
- **Remove `app/contact/page.tsx`.** Move its content (centre details list, WhatsApp link, `<MapEmbed />`, `<EnquiryForm />`) into a new homepage section placed after FAQ, before the Footer.
- **Anchor IDs:**
  - Add `id="programs"` (scroll-mt-20) to the homepage's existing "Our courses" section.
  - Add `id="contact"` (scroll-mt-20) to the new Contact section.
- **Nav updates** (`Header.tsx`, `Footer.tsx`): change `/courses` → `/#programs`, `/contact` → `/#contact`. "About" keeps linking to `/about`.
- **CTA updates:** all 4 existing `<CTAButton href="/contact">Enroll now</CTAButton>` instances (homepage hero, Header desktop, Header mobile, course detail pages) change to `href="/#contact"`. On the homepage itself this is an in-page anchor; from other pages (`/about`, `/courses/[slug]`) it navigates to `/#contact` and the browser scrolls to it on load.
- **Sitemap:** remove `/courses` and `/contact` from `app/sitemap.ts` static routes; course detail slugs stay.

## Out of scope

- CTA additions/placement beyond updating existing links (separate follow-up request).
- Any change to `/about` or course detail pages beyond the CTA href update.
