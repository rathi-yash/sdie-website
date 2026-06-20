# PRD: NIE branch teacher training institute website

## 1. Background

This is a website for a branch of NIE (National Institute of Education, under Maa Sumitra Devi Education Foundation), a teacher training institute network in India. The branch offers the same course lineup as the parent institute: NTT, PTT, English Speaking, Personality Development, B.Ed, and M.Ed.

The parent site (nie.net.in) has weak trust signals: broken "read more" links, no NCTE affiliation mentioned anywhere, unedited director copy, a stock-template photo gallery, and no fee or syllabus transparency. This site should inherit credibility from the NIE name while fixing all of that.

## 2. Goals

- Convert visitors into enrollment enquiries (form fill, call, or WhatsApp message)
- Establish trust fast: real faculty, real accreditation, real numbers, working links
- Make it easy for a parent or prospective teacher to find course details, fees, and how to start
- Reflect that this is a real, established local centre, not a fly-by-night operation

### Success metrics (initial)
- Enquiry form / WhatsApp click-through rate from homepage
- Time to find course details (should be one click from homepage)
- Mobile usability (most Indian traffic for this audience will be mobile-first)

## 3. Audience

- Parents researching NTT/PTT for their child's preschool or primary teacher
- Working adults or recent graduates considering B.Ed/M.Ed for a teaching career
- People who found NIE through word of mouth or a Google search and want to verify legitimacy before visiting in person

## 4. Scope

**In scope for v1:**
- Marketing site: home, courses (overview + individual course pages), about, faculty, gallery, contact/centre info, FAQ
- Enquiry/registration form
- WhatsApp click-to-chat integration
- Mobile-responsive, fast-loading

**Out of scope for v1 (note for later phases):**
- Student login/results portal
- Online payment processing
- Online exam system
- Multi-branch CMS (this is a single-branch site; if NIE wants to roll this template out to other branches later, that's a v2 conversation)

## 5. Site map

```
Home
Courses (overview)
  -> Nursery Teacher Training (NTT)
  -> Primary Teacher Training (PTT)
  -> English Speaking Course
  -> Personality Development Course
  -> B.Ed Course
  -> M.Ed Course
About us
Faculty
Gallery
Contact / Centre details
FAQ (can live on its own page or as a homepage section, decide once content volume is known)
```

## 6. Page requirements

### Home
- Header: helpline number, "a branch of NIE" badge, nav, enroll CTA
- Hero: headline, one-line value prop, enroll + WhatsApp CTAs
- Trust strip: years running, students trained, courses offered, NCTE alignment
- Course cards (all 6, linking to individual pages)
- Faculty preview (3 to 4 instructors, photo, name, credential line)
- Results/placement or testimonial section
- Centre details: address, hours, map embed
- FAQ preview (3 to 5 questions)
- Footer: links, social, centre contact

### Course pages (one template, 6 instances)
Each course page needs:
- Course name and one-line description
- Duration
- Eligibility
- Fee (or fee range, confirm with client whether to publish exact numbers)
- What you will learn (syllabus highlights, not full syllabus PDF unless one exists)
- Career outcomes / what this qualifies you for
- Enroll CTA

### About us
- Branch history and relationship to NIE/MSDEF
- Mission/approach (rewritten, professional tone, not the original rambling director copy)
- Accreditation and affiliation details (NCTE registration number if available)

### Faculty
- Grid of instructor cards: photo, name, role, one or two lines of credentials
- This replaces the single unverifiable "Director's Pen" message from the parent site

### Gallery
- Real campus/classroom/event photos only, no stock template images
- Organize by category (classrooms, events, students) if there are enough photos

### Contact / centre details
- Address, phone, WhatsApp, email, hours
- Embedded Google Map
- Enquiry form

### FAQ
- Is this NCTE recognized
- Fees and payment options
- Job placement assistance specifics
- Class timing and mode (in-person/online/hybrid)
- Admission process and required documents

## 7. Course catalog (confirm details with client before publishing)

| Course | Duration (placeholder, confirm) | Notes |
|---|---|---|
| Nursery Teacher Training (NTT) | 6 to 12 months | Preschool pedagogy, child development |
| Primary Teacher Training (PTT) | 6 to 12 months | NCERT-guided, practical and theoretical |
| English Speaking Course | 3 months | Spoken fluency, classroom communication |
| Personality Development Course | 3 months | Confidence, presentation, soft skills |
| B.Ed | 2 years | Confirm university affiliation for the degree to carry weight |
| M.Ed | 2 years | Confirm university affiliation |

## 8. Design direction

- Flat, clean, no gradients or heavy shadows
- One accent color plus neutral grays, used consistently for CTAs and links
- Sentence case headings, not Title Case or all caps
- Generous whitespace, card-based layout for courses and faculty
- Real photography over stock imagery wherever possible
- All CTAs functional from day one. no placeholder "read more" links that go nowhere

## 9. Functional requirements

- Enquiry form: name, phone, course interested in, preferred centre (if multiple branches later), submits to email or a simple backend
- WhatsApp click-to-chat link (`https://wa.me/91XXXXXXXXXX`)
- Google Maps embed for centre location
- Mobile navigation (hamburger menu)
- Basic SEO: meta titles/descriptions per page, sitemap.xml, proper heading structure

## 10. Non-functional requirements

- Mobile-first responsive design
- Fast load on average Indian mobile connections (optimize images, avoid heavy JS frameworks if not needed)
- Accessible: proper alt text, sufficient color contrast, keyboard-navigable nav
- Works on common browsers without requiring the latest Chrome

## 11. Suggested tech stack

- **Frontend:** Next.js with Tailwind CSS. Static-generates well for SEO, component reuse makes the 6 course pages trivial to template
- **Forms:** simple API route or a third-party form handler (Formspree, Web3Forms) to avoid building a backend for v1
- **Hosting:** since this is also a good portfolio opportunity, consider S3 plus CloudFront (static export) or Amplify for hosting, this fits naturally if you want a deployment story to talk about alongside your AWS work
- **Domain/DNS:** Route 53 if going the AWS route, or whatever registrar the client already uses

Alternative for a faster/cheaper build: plain HTML/CSS/JS with a static site generator (11ty) if Next.js feels heavier than this project needs.

## 12. Content needed from client before launch

- Real photos: campus, classrooms, events, faculty headshots
- Faculty names, credentials, and bios
- Confirmed course durations, fees, and eligibility per course
- NCTE registration number / accreditation documents
- Branch address, hours, phone, WhatsApp number
- Any real placement/outcome numbers (avoid vague claims like "100% job assistance" without backing)

## 13. Suggested build order (for Claude Code)

1. Scaffold project, set up Tailwind config and design tokens (colors, type scale, spacing)
2. Build reusable components: header, footer, course card, faculty card, CTA button, form
3. Build homepage
4. Build course page template, populate with 6 courses (placeholder content is fine initially, tag clearly with TODO comments)
5. Build about, faculty, gallery, contact, FAQ pages
6. Wire up form submission and WhatsApp link
7. SEO pass: meta tags, sitemap, alt text
8. Responsive/accessibility pass
9. Deploy

## 14. Open questions

- Single branch site, or should the architecture anticipate multiple branches later
- Exact fee figures: publish on-site or "contact for fees"
- Does a real NCTE registration number exist for this branch to display
- Any existing brand colors/logo from NIE that this branch should inherit, or is this branch free to set its own visual identity
