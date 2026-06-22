# Homepage Gallery Carousel

## Problem

The `/gallery` page only shows 6 placeholder boxes (no real photos exist yet) and lives on its own route. The site should instead show photos as a carousel directly on the homepage, and the standalone gallery page/route should be removed.

## Design

- **New component `components/GalleryCarousel.tsx`**: built on `embla-carousel-react` (~6kb gzipped, no other deps added). Renders the same 6 placeholder slides used today, ready to be swapped for real images later. Includes prev/next arrow buttons, dot indicators, autoplay with pause-on-hover, and Embla's built-in swipe/keyboard support.
- **Homepage (`app/page.tsx`)**: add a "Gallery" section containing `<GalleryCarousel />`, placed after the Faculty section and before `<FounderNote />`.
- **Remove `app/gallery/page.tsx`** entirely.
- **Remove the "Gallery" nav link** from `components/Header.tsx` and `components/Footer.tsx` (both currently link to `/gallery`).
- **Remove `/gallery`** from `app/sitemap.ts`'s static routes list.
- **Add dependency**: `embla-carousel-react` to `package.json`.

## Out of scope

- Real photo content (still placeholders).
- Events section (explicitly dropped from this request).
