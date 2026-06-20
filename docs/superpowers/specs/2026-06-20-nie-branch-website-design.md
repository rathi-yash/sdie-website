# Design: NIE branch teacher training institute website

## Overview

A marketing website for a single branch of NIE (National Institute of Education, under MSDEF), built to fix the parent site's trust problems (broken links, no accreditation info, stock photos, unedited copy) and drive enrollment enquiries via form, call, or WhatsApp. Full requirements in `PRD-nie-branch-website.md`; real ready-to-use copy in `CONTENT.md`.

## Decisions from brainstorming

- **Single branch only.** No multi-tenant/config-driven architecture for hypothetical future branches. Content lives in typed local data files (e.g. `lib/courses.ts`, `lib/faculty.ts`) purely for component reuse across the 6 course pages, not for multi-branch support.
- **Fees:** "Contact for fees" — no confirmed numbers yet, CTA points to contact instead of publishing figures.
- **NCTE registration number:** client will provide; reserved as a bracketed placeholder until then.
- **Brand identity:** free to set its own — accent color is deep blue/teal (warm, trustworthy, institutional), defined as Tailwind theme tokens so it can be swapped later with a one-line config change, not a find-and-replace across components.
- **Content:** real, ready-to-use copy already exists in `CONTENT.md` (provided by user). Bracketed placeholders (e.g. `[phone number]`, `[city]`, `[address line]`) are kept **verbatim** in the live components — not replaced with realistic dummy values — so they remain easy to grep across the codebase and fill in once confirmed.
- **Tech stack:** Next.js (App Router) + Tailwind CSS, static export (`output: 'export'`).
- **Hosting + forms:** Netlify for everything — static hosting and Netlify Forms (native `data-netlify="true"` form handling, no third-party form service, no custom backend). Drops the AWS S3/CloudFront/Amplify option from the PRD entirely.
- **Mobile-first is a build constraint, not a final pass.** Every component is built mobile-first with Tailwind responsive utilities (single-column on small screens, multi-column from `md`/`lg` up); nav collapses to a hamburger menu below `md`.

## Architecture

```
app/
  layout.tsx              # root layout: Header, Footer, fonts, metadata
  page.tsx                 # home
  courses/
    page.tsx               # courses overview
    [slug]/page.tsx         # course template, statically generated for all 6 slugs
  about/page.tsx
  faculty/page.tsx
  gallery/page.tsx
  contact/page.tsx
  faq/page.tsx
components/
  Header.tsx                # helpline, "branch of NIE" badge, nav, hamburger menu, enroll CTA
  Footer.tsx
  CourseCard.tsx
  FacultyCard.tsx
  CTAButton.tsx              # variants: enroll / whatsapp
  WhatsAppButton.tsx          # wa.me link, [wa.me link] placeholder until number confirmed
  EnquiryForm.tsx              # Netlify Forms-compatible
  MapEmbed.tsx
  FAQAccordion.tsx
lib/
  courses.ts                 # 6 courses: slug, name, description, duration, eligibility, syllabus, outcomes — sourced from CONTENT.md
  faculty.ts                  # faculty card data (placeholder entries, real names pending)
  site-config.ts               # centre details: address, phone, hours, email — bracketed placeholders from CONTENT.md
content/
  CONTENT.md                  # source content reference (existing)
```

### Course page template

`app/courses/[slug]/page.tsx` is statically generated for all 6 course slugs (`generateStaticParams`) from `lib/courses.ts`. Each course's full copy (description, duration, eligibility, what you'll learn, career outcomes) comes directly from `CONTENT.md`, including its bracketed placeholders for duration/eligibility where marked "confirm."

### Forms

`EnquiryForm.tsx` renders a static HTML form with `data-netlify="true"`, `name="enquiry"`, and a hidden `form-name` field (required for Next.js static export + Netlify Forms detection — Netlify needs a plain HTML version of the form present at build time, handled via a hidden duplicate form in `public/` or a prerendered static form fragment). Fields per `CONTENT.md`: name, phone number, course interested in (dropdown of all 6 courses), message (optional). Submit button: "Send enquiry". On success, redirect to a simple `/thank-you` page (or inline success state — implementation detail for the plan stage).

### WhatsApp integration

`WhatsAppButton.tsx` wraps an `<a href="https://wa.me/[phone number]">` link (bracketed placeholder kept until real number is provided). Used in header CTA, hero, and contact page.

### Map embed

`MapEmbed.tsx` is a simple `<iframe>` Google Maps embed component, given an address string from `site-config.ts` (bracketed placeholder address until confirmed).

## Error handling

This is a static marketing site with no custom backend — error surface is small:
- Form submission failures (network/Netlify-side) show an inline error message with a retry prompt; no server-side validation needed beyond what Netlify Forms provides.
- Missing/placeholder content (bracketed values) is a known, intentional state, not an error — no special handling needed beyond keeping it visually unobtrusive (plain text, not broken layout).
- No dynamic data fetching, so no loading states or API error boundaries are needed for v1.

## Testing

No automated test suite is justified for a static marketing site with no business logic — testing is manual/visual:
- Responsive check at common breakpoints (mobile ~375px, tablet ~768px, desktop ~1280px) for every page.
- Manual click-through of all CTAs, nav links, and the course card → course page flow (PRD explicitly calls out "no placeholder read more links that go nowhere").
- Manual form submission test against Netlify Forms (verify submission appears in Netlify dashboard) post-deploy.
- Lighthouse pass for performance/accessibility/SEO basics before calling v1 done.

## Out of scope (unchanged from PRD)

Student login/results portal, online payments, online exam system, multi-branch CMS.

## Open items requiring client input before full launch

(Tracked here, not blocking the build — placeholders cover all of these.)
- Real phone/WhatsApp number, address, email, hours
- Real fee figures (or confirmation to keep "contact for fees" permanently)
- NCTE registration number / accreditation documents
- Faculty names, credentials, bios, headshots
- Real campus/classroom/event photography
- Confirmed course durations and eligibility (marked "confirm" in CONTENT.md)
- University affiliation for B.Ed/M.Ed
- Real placement/outcome numbers or testimonials
- Social media links (Facebook/Instagram/YouTube)
