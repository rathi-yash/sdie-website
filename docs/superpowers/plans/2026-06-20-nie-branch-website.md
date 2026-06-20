# NIE branch website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full NIE branch marketing website (home, courses overview + 6 course pages, about, faculty, gallery, contact, FAQ) as specified in `docs/superpowers/specs/2026-06-20-nie-branch-website-design.md`, using real content from `CONTENT.md`, ready to deploy to Netlify.

**Architecture:** Next.js (App Router) static export + Tailwind CSS. Content lives in typed data files under `lib/`. Shared UI in `components/`. Enquiry form uses Netlify Forms (no custom backend). No automated test suite — this is a static content site with no business logic; verification is "build succeeds + dev server renders the page correctly" per task.

**Tech Stack:** Next.js 14 (App Router, `output: 'export'`), TypeScript, Tailwind CSS, Netlify (hosting + Forms).

---

## Task 0: Scaffold project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`, `postcss.config.js`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `.gitignore`, `netlify.toml`

- [ ] **Step 1: Create Next.js app**

```bash
cd "C:\Users\yash9\Desktop\SDIE\Website"
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --eslint --use-npm
```
When prompted to overwrite existing files (README etc.), keep existing `PRD-nie-branch-website.md`, `CONTENT.md`, and `docs/` — do not overwrite those.

- [ ] **Step 2: Configure static export**

Edit `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

module.exports = nextConfig;
```

- [ ] **Step 3: Add Netlify config**

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "out"
```

- [ ] **Step 4: Verify dev server runs**

Run: `npm run dev`
Expected: Server starts on `http://localhost:3000`, default Next.js starter page renders with no errors. Stop the server after confirming.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "Scaffold Next.js + Tailwind project with static export config"
```

---

## Task 1: Design tokens (Tailwind theme)

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Define color tokens and type scale**

Replace the `theme.extend` section of `tailwind.config.ts` with:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          400: "#3b82f6",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          900: "#1e3a8a",
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          300: "#cbd5e1",
          500: "#64748b",
          700: "#334155",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

`brand-*` is the swappable accent (currently deep blue). Every CTA/link/accent in the codebase must reference `brand-*`, never a raw hex value, so the palette can change later in one place.

- [ ] **Step 2: Verify Tailwind picks up the config**

Add a temporary test element to `app/page.tsx`: `<div className="bg-brand-600 text-white p-4">token check</div>`
Run: `npm run dev`, open `http://localhost:3000`
Expected: blue box renders. Remove the temporary element after confirming.

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "Add brand/ink design tokens to Tailwind theme"
```

---

## Task 2: Site content data layer

**Files:**
- Create: `lib/site-config.ts`, `lib/courses.ts`, `lib/faculty.ts`, `lib/faq.ts`

All content below is transcribed directly from `CONTENT.md`. Bracketed placeholders are kept verbatim as literal strings.

- [ ] **Step 1: Create `lib/site-config.ts`**

```ts
export const siteConfig = {
  branchName: "[branch name]",
  helpline: "[phone number]",
  whatsappLink: "https://wa.me/[phone number]",
  email: "[branch]@nie.net.in",
  address: "[address line], [city], [state]",
  hours: "Mon to Sat, 9 am to 6 pm",
  city: "[city]",
  yearsRunning: "15+",
  studentsTrained: "5,000+",
  coursesOffered: "6",
  socialLinks: {
    facebook: "[Facebook]",
    instagram: "[Instagram]",
    youtube: "[YouTube]",
  },
};
```

- [ ] **Step 2: Create `lib/courses.ts`**

```ts
export type Course = {
  slug: string;
  name: string;
  shortDescription: string;
  duration: string;
  description: string;
  eligibility: string;
  whatYouWillLearn: string[];
  careerOutcomes: string;
  note?: string;
};

export const courses: Course[] = [
  {
    slug: "ntt",
    name: "Nursery Teacher Training (NTT)",
    shortDescription:
      "Preschool pedagogy and classroom management for early childhood educators. 6 to 12 months.",
    duration: "[confirm, placeholder: 6 to 12 months]",
    description:
      "A diploma program that prepares you to teach and care for children in the preschool years, combining early childhood development theory with hands-on classroom practice.",
    eligibility: "[confirm, typically 10+2 pass]",
    whatYouWillLearn: [
      "Early childhood development and psychology",
      "Preschool curriculum planning and activity design",
      "Classroom management for young children",
      "Communication with parents and caregivers",
      "Practical teaching experience through supervised placements",
    ],
    careerOutcomes:
      "Graduates go on to teach in preschools, daycare centers, and nursery sections of schools, or start their own preschool.",
  },
  {
    slug: "ptt",
    name: "Primary Teacher Training (PTT)",
    shortDescription:
      "NCERT-guided practical and theoretical training for primary school teaching. 6 to 12 months.",
    duration: "[confirm, placeholder: 6 to 12 months]",
    description:
      "A vocational training program guided by NCERT standards, preparing you to teach at the primary school level through a mix of practical and theoretical training.",
    eligibility: "[confirm, typically 10+2 pass]",
    whatYouWillLearn: [
      "Primary-level curriculum and lesson planning",
      "Child psychology and learning styles",
      "Classroom management techniques",
      "Assessment and evaluation methods",
      "Supervised teaching practice",
    ],
    careerOutcomes:
      "Graduates are prepared for teaching roles in primary schools, both government and private.",
  },
  {
    slug: "english-speaking",
    name: "English Speaking Course",
    shortDescription: "Spoken fluency and classroom communication skills. 3 months.",
    duration: "[confirm, placeholder: 3 months]",
    description:
      "A focused program to build spoken English fluency and classroom communication skills, useful for both aspiring teachers and working professionals.",
    eligibility: "Open to all, no prior qualification required.",
    whatYouWillLearn: [
      "Conversational fluency and pronunciation",
      "Grammar fundamentals for everyday and professional use",
      "Public speaking and presentation skills",
      "Classroom communication techniques (for those pursuing teaching)",
    ],
    careerOutcomes:
      "Improved communication skills for teaching roles, interviews, and professional settings.",
  },
  {
    slug: "personality-development",
    name: "Personality Development Course",
    shortDescription:
      "Confidence, presentation, and soft skills for the classroom and beyond. 3 months.",
    duration: "[confirm, placeholder: 3 months]",
    description:
      "A program focused on building confidence, presentation skills, and professional soft skills, useful as a standalone course or alongside a teaching qualification.",
    eligibility: "Open to all, no prior qualification required.",
    whatYouWillLearn: [
      "Confidence building and public speaking",
      "Body language and professional presentation",
      "Interview preparation",
      "Time management and workplace etiquette",
    ],
    careerOutcomes:
      "Stronger interview performance and classroom presence, useful across teaching and non-teaching careers alike.",
  },
  {
    slug: "bed",
    name: "B.Ed Course",
    shortDescription:
      "Bachelor of Education with full curriculum support and practical training. 2 years.",
    duration: "[confirm, placeholder: 2 years]",
    description:
      "A Bachelor of Education program covering teaching methodology, curriculum design, and supervised classroom practice, preparing graduates for a full-time teaching career.",
    eligibility:
      "[confirm, typically a bachelor's degree with minimum required marks]",
    whatYouWillLearn: [
      "Educational psychology and pedagogy",
      "Curriculum and lesson design across subjects",
      "Classroom management and assessment",
      "Supervised teaching practice in real classrooms",
      "Educational technology and modern teaching tools",
    ],
    careerOutcomes:
      "Eligibility to teach at the secondary level, a foundational qualification for a long-term teaching career.",
    note: "[confirm the university affiliation this B.Ed is awarded through]",
  },
  {
    slug: "med",
    name: "M.Ed Course",
    shortDescription:
      "Advanced study for academic leadership and specialized teaching roles. 2 years.",
    duration: "[confirm, placeholder: 2 years]",
    description:
      "A Master of Education program for those looking to move into academic leadership, curriculum development, or specialized teaching roles.",
    eligibility: "[confirm, typically a B.Ed degree]",
    whatYouWillLearn: [
      "Advanced educational theory and research methods",
      "Curriculum development and educational leadership",
      "Specialized teaching strategies",
      "Educational policy and administration",
    ],
    careerOutcomes:
      "Pathways into senior teaching roles, academic coordination, school administration, or further research.",
    note: "[confirm the university affiliation]",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
```

- [ ] **Step 3: Create `lib/faculty.ts`**

```ts
export type FacultyMember = {
  name: string;
  role: string;
  credentials: string;
};

export const faculty: FacultyMember[] = [
  {
    name: "[faculty name]",
    role: "[role, e.g. NTT lead]",
    credentials: "[one or two lines, e.g. degree, years of experience, prior schools/institutions]",
  },
  {
    name: "[faculty name]",
    role: "[role, e.g. B.Ed coordinator]",
    credentials: "[one or two lines, e.g. degree, years of experience, prior schools/institutions]",
  },
  {
    name: "[faculty name]",
    role: "[role, e.g. centre director]",
    credentials: "[one or two lines, e.g. degree, years of experience, prior schools/institutions]",
  },
];
```

- [ ] **Step 4: Create `lib/faq.ts`**

```ts
export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "Is this course NCTE recognized?",
    answer:
      "[Answer once accreditation status is confirmed. Do not guess or leave vague, this is the single most-asked question for teacher training.]",
  },
  {
    question: "What are the fees and payment options?",
    answer:
      "[Answer once fee structure is confirmed. Note whether installment plans are offered.]",
  },
  {
    question: "Do you help with job placement after the course?",
    answer:
      "We provide interview preparation and connect graduates with hiring schools in [region].",
  },
  {
    question: "What are the class timings and mode of learning?",
    answer: "[Confirm: in-person, online, or hybrid, and typical batch timing.]",
  },
  {
    question: "What is the admission process and what documents do I need?",
    answer:
      "[List required documents, e.g. ID proof, previous mark sheets, passport photos, and the steps to enroll.]",
  },
  {
    question: "Can I switch courses after enrolling?",
    answer: "[Confirm centre policy.]",
  },
];
```

- [ ] **Step 5: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add lib/
git commit -m "Add site content data layer from CONTENT.md"
```

---

## Task 3: Shared layout components — Header and Footer

**Files:**
- Create: `components/Header.tsx`, `components/Footer.tsx`, `components/CTAButton.tsx`

- [ ] **Step 1: Create `components/CTAButton.tsx`**

```tsx
import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "whatsapp" | "outline";
};

export default function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  const base = "inline-block rounded-md px-5 py-2.5 text-sm font-medium transition-colors";
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    whatsapp: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-brand-600 text-brand-600 hover:bg-brand-50",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 2: Create `components/Header.tsx`**

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import CTAButton from "./CTAButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/faculty", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-ink-100 bg-white">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8">
        <div className="flex flex-col">
          <Link href="/" className="text-lg font-semibold text-ink-900">
            {siteConfig.branchName}
          </Link>
          <span className="text-xs text-ink-500">a branch of NIE / MSDEF</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-ink-700 hover:text-brand-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${siteConfig.helpline}`} className="text-sm text-ink-700">
            {siteConfig.helpline}
          </a>
          <CTAButton href="/contact">Enroll now</CTAButton>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-ink-100 px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2 py-2 text-sm text-ink-700 hover:bg-ink-50"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${siteConfig.helpline}`} className="px-2 py-2 text-sm text-ink-700">
            {siteConfig.helpline}
          </a>
          <div className="px-2 py-2">
            <CTAButton href="/contact">Enroll now</CTAButton>
          </div>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Create `components/Footer.tsx`**

```tsx
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/faculty", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="grid gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-ink-900">Quick links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink-700 hover:text-brand-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-ink-900">Centre contact</h3>
          <ul className="space-y-2 text-sm text-ink-700">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.helpline}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-ink-900">Follow us</h3>
          <ul className="space-y-2 text-sm text-ink-700">
            <li>{siteConfig.socialLinks.facebook}</li>
            <li>{siteConfig.socialLinks.instagram}</li>
            <li>{siteConfig.socialLinks.youtube}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100 px-4 py-4 text-center text-xs text-ink-500">
        {siteConfig.branchName} — a branch of NIE / MSDEF
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Wire into root layout**

Replace contents of `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIE Branch | Teacher Training Institute",
  description:
    "Teacher training courses including NTT, PTT, English Speaking, Personality Development, B.Ed, and M.Ed. A branch of NIE / MSDEF.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans text-ink-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Verify in browser**

Run: `npm run dev`, open `http://localhost:3000`
Expected: Header with nav and Footer render on every page; resize window below 768px width, confirm nav collapses to hamburger menu and toggling it shows/hides links.

- [ ] **Step 6: Commit**

```bash
git add components/ app/layout.tsx
git commit -m "Add Header, Footer, and CTAButton shared components"
```

---

## Task 4: Course card, Faculty card, WhatsApp button, FAQ accordion

**Files:**
- Create: `components/CourseCard.tsx`, `components/FacultyCard.tsx`, `components/WhatsAppButton.tsx`, `components/FAQAccordion.tsx`

- [ ] **Step 1: Create `components/CourseCard.tsx`**

```tsx
import Link from "next/link";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="block rounded-lg border border-ink-100 p-5 transition-shadow hover:shadow-md"
    >
      <h3 className="mb-2 font-semibold text-ink-900">{course.name}</h3>
      <p className="text-sm text-ink-700">{course.shortDescription}</p>
    </Link>
  );
}
```

- [ ] **Step 2: Create `components/FacultyCard.tsx`**

```tsx
import type { FacultyMember } from "@/lib/faculty";

export default function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="rounded-lg border border-ink-100 p-5 text-center">
      <div className="mx-auto mb-3 h-20 w-20 rounded-full bg-ink-100" aria-hidden="true" />
      <h3 className="font-semibold text-ink-900">{member.name}</h3>
      <p className="text-sm text-brand-600">{member.role}</p>
      <p className="mt-1 text-sm text-ink-700">{member.credentials}</p>
    </div>
  );
}
```

- [ ] **Step 3: Create `components/WhatsAppButton.tsx`**

```tsx
import { siteConfig } from "@/lib/site-config";

export default function WhatsAppButton({ label = "Chat on WhatsApp" }: { label?: string }) {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
    >
      {label}
    </a>
  );
}
```

- [ ] **Step 4: Create `components/FAQAccordion.tsx`**

```tsx
"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/faq";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-ink-100 rounded-lg border border-ink-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-ink-900"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span className="ml-2 shrink-0">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="px-4 pb-4 text-sm text-ink-700">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 5: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add components/
git commit -m "Add CourseCard, FacultyCard, WhatsAppButton, FAQAccordion components"
```

---

## Task 5: MapEmbed and EnquiryForm

**Files:**
- Create: `components/MapEmbed.tsx`, `components/EnquiryForm.tsx`

- [ ] **Step 1: Create `components/MapEmbed.tsx`**

```tsx
import { siteConfig } from "@/lib/site-config";

export default function MapEmbed() {
  const query = encodeURIComponent(siteConfig.address);
  return (
    <iframe
      title="Centre location map"
      src={`https://www.google.com/maps?q=${query}&output=embed`}
      className="h-72 w-full rounded-lg border border-ink-100"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
```

- [ ] **Step 2: Create `components/EnquiryForm.tsx`**

Netlify detects forms at build time by scanning the static HTML, so the form needs plain `name`/`data-netlify` attributes (no client-side-only submission). For Next.js, this also requires a static HTML copy of the form to exist in `public/` so Netlify's bot can index its fields — created in Task 9.

```tsx
"use client";

import { useState } from "react";
import { courses } from "@/lib/courses";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-ink-700">Thanks, we received your enquiry and will be in touch soon.</p>;
  }

  return (
    <form
      name="enquiry"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="enquiry" />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-ink-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink-900">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-md border border-ink-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="course" className="mb-1 block text-sm font-medium text-ink-900">
          Course interested in
        </label>
        <select
          id="course"
          name="course"
          required
          className="w-full rounded-md border border-ink-300 px-3 py-2 text-sm"
        >
          {courses.map((course) => (
            <option key={course.slug} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink-900">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded-md border border-ink-300 px-3 py-2 text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send enquiry"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong, please try again or call us directly.</p>
      )}
    </form>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/MapEmbed.tsx components/EnquiryForm.tsx
git commit -m "Add MapEmbed and EnquiryForm components"
```

---

## Task 6: Home page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Build the home page**

Replace contents of `app/page.tsx`:

```tsx
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import CourseCard from "@/components/CourseCard";
import FacultyCard from "@/components/FacultyCard";
import FAQAccordion from "@/components/FAQAccordion";
import MapEmbed from "@/components/MapEmbed";
import { siteConfig } from "@/lib/site-config";
import { courses } from "@/lib/courses";
import { faculty } from "@/lib/faculty";
import { faqs } from "@/lib/faq";

export default function HomePage() {
  return (
    <>
      <section className="px-4 py-16 text-center md:px-8 md:py-24">
        <h1 className="mx-auto max-w-2xl text-3xl font-semibold text-ink-900 md:text-4xl">
          Become a confident, job-ready teacher
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-700">
          Teacher training in {siteConfig.city}, part of the NIE network, training educators
          across India for over {siteConfig.yearsRunning} years.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <CTAButton href="/contact">Enroll now</CTAButton>
          <WhatsAppButton />
        </div>
      </section>

      <section className="border-y border-ink-100 bg-ink-50 px-4 py-10 md:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          <div>
            <p className="text-2xl font-semibold text-brand-600">{siteConfig.yearsRunning}</p>
            <p className="text-sm text-ink-700">Years training teachers</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-brand-600">{siteConfig.studentsTrained}</p>
            <p className="text-sm text-ink-700">Students trained</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-brand-600">{siteConfig.coursesOffered}</p>
            <p className="text-sm text-ink-700">Courses offered</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-brand-600">NCTE</p>
            <p className="text-sm text-ink-700">Aligned curriculum</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-semibold text-ink-900">Our courses</h2>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section className="border-t border-ink-100 px-4 py-16 md:px-8">
        <h2 className="mb-2 text-center text-2xl font-semibold text-ink-900">Meet your instructors</h2>
        <p className="mb-8 text-center text-ink-700">
          Learn from instructors who have trained thousands of teachers across the NIE network.
        </p>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member) => (
            <FacultyCard key={member.name} member={member} />
          ))}
        </div>
        <p className="mt-6 text-center">
          <Link href="/faculty" className="text-sm text-brand-600 hover:underline">
            Meet the full faculty &rarr;
          </Link>
        </p>
      </section>

      <section className="border-t border-ink-100 bg-ink-50 px-4 py-16 md:px-8">
        <h2 className="mb-2 text-center text-2xl font-semibold text-ink-900">Our results</h2>
        <p className="mx-auto max-w-2xl text-center text-ink-700">
          Our students go on to teach in schools across {siteConfig.city}.
        </p>
      </section>

      <section className="px-4 py-16 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-semibold text-ink-900">Visit the centre</h2>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="space-y-2 text-sm text-ink-700">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.hours}</p>
            <p>{siteConfig.email}</p>
          </div>
          <MapEmbed />
        </div>
      </section>

      <section className="border-t border-ink-100 px-4 py-16 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-semibold text-ink-900">Frequently asked questions</h2>
        <div className="mx-auto max-w-2xl">
          <FAQAccordion items={faqs.slice(0, 3)} />
        </div>
        <p className="mt-6 text-center">
          <Link href="/faq" className="text-sm text-brand-600 hover:underline">
            See all FAQs &rarr;
          </Link>
        </p>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify in browser**

Run: `npm run dev`, open `http://localhost:3000`
Expected: all sections render in order (hero, trust strip, course cards, faculty preview, results, centre details with map, FAQ preview). Resize to mobile width, confirm sections stack to single column and remain readable with no horizontal overflow.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "Build home page"
```

---

## Task 7: Courses overview and course detail template

**Files:**
- Create: `app/courses/page.tsx`, `app/courses/[slug]/page.tsx`

- [ ] **Step 1: Create courses overview page**

Create `app/courses/page.tsx`:

```tsx
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export default function CoursesPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-2 text-center text-3xl font-semibold text-ink-900">Our courses</h1>
      <p className="mx-auto mb-10 max-w-xl text-center text-ink-700">
        The same course lineup taught across the NIE network.
      </p>
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create course detail template**

Create `app/courses/[slug]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import CTAButton from "@/components/CTAButton";
import { courses, getCourseBySlug } from "@/lib/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <h1 className="text-3xl font-semibold text-ink-900">{course.name}</h1>
      <p className="mt-3 text-ink-700">{course.description}</p>

      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-semibold text-ink-900">Duration</dt>
          <dd className="text-sm text-ink-700">{course.duration}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-ink-900">Eligibility</dt>
          <dd className="text-sm text-ink-700">{course.eligibility}</dd>
        </div>
      </dl>

      <h2 className="mt-10 text-xl font-semibold text-ink-900">What you&apos;ll learn</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink-700">
        {course.whatYouWillLearn.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-ink-900">Career outcomes</h2>
      <p className="mt-3 text-sm text-ink-700">{course.careerOutcomes}</p>

      {course.note && (
        <p className="mt-4 rounded-md bg-ink-50 p-3 text-sm text-ink-700">{course.note}</p>
      )}

      <div className="mt-10">
        <CTAButton href="/contact">Enroll now</CTAButton>
      </div>
    </article>
  );
}
```

- [ ] **Step 3: Verify all 6 course pages build and render**

Run: `npm run dev`, visit `/courses`, then click through to each course card.
Expected: `/courses` lists all 6 courses linking correctly; each of `/courses/ntt`, `/courses/ptt`, `/courses/english-speaking`, `/courses/personality-development`, `/courses/bed`, `/courses/med` renders its own content with no shared/duplicated text and no dead links.

- [ ] **Step 4: Commit**

```bash
git add app/courses/
git commit -m "Build courses overview page and course detail template"
```

---

## Task 8: About, Faculty, Gallery, Contact, FAQ pages

**Files:**
- Create: `app/about/page.tsx`, `app/faculty/page.tsx`, `app/gallery/page.tsx`, `app/contact/page.tsx`, `app/faq/page.tsx`

- [ ] **Step 1: Create `app/about/page.tsx`**

```tsx
import { siteConfig } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <h1 className="text-3xl font-semibold text-ink-900">About {siteConfig.branchName}</h1>

      <p className="mt-6 text-ink-700">
        {siteConfig.branchName} is a branch of NIE, operating under the Maa Sumitra Devi Education
        Foundation (MSDEF), training teachers and education professionals in {siteConfig.city} for
        over {siteConfig.yearsRunning} years.
      </p>
      <p className="mt-4 text-ink-700">
        We offer the same course lineup taught across the NIE network: Nursery Teacher Training,
        Primary Teacher Training, English Speaking, Personality Development, B.Ed, and M.Ed. Our
        approach combines structured curriculum with hands-on classroom practice, so graduates
        leave ready to teach, not just certified to teach.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink-900">Our approach</h2>
      <p className="mt-3 text-ink-700">
        Small batch sizes, instructors with real classroom experience, and a focus on practical
        teaching skills alongside the required coursework.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink-900">Accreditation</h2>
      <p className="mt-3 text-ink-700">[NCTE registration number, if available]</p>
    </article>
  );
}
```

- [ ] **Step 2: Create `app/faculty/page.tsx`**

```tsx
import FacultyCard from "@/components/FacultyCard";
import { faculty } from "@/lib/faculty";

export default function FacultyPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-2 text-center text-3xl font-semibold text-ink-900">Meet your instructors</h1>
      <p className="mx-auto mb-10 max-w-xl text-center text-ink-700">
        Real instructors, real classroom experience. Here&apos;s who you&apos;ll be learning from.
      </p>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((member) => (
          <FacultyCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `app/gallery/page.tsx`**

```tsx
import { siteConfig } from "@/lib/site-config";

const placeholderImages = Array.from({ length: 6 }, (_, i) => i);

export default function GalleryPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-2 text-center text-3xl font-semibold text-ink-900">Picture gallery</h1>
      <p className="mx-auto mb-10 max-w-xl text-center text-ink-700">
        A look inside {siteConfig.branchName}, classrooms, events, and student activities.
      </p>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
        {placeholderImages.map((i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-md bg-ink-100 text-xs text-ink-500"
          >
            [photo placeholder]
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create `app/contact/page.tsx`**

```tsx
import EnquiryForm from "@/components/EnquiryForm";
import MapEmbed from "@/components/MapEmbed";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-2 text-center text-3xl font-semibold text-ink-900">Get in touch</h1>
      <p className="mx-auto mb-10 max-w-xl text-center text-ink-700">
        Have a question about a course, fees, or admissions? Reach out, we typically respond
        within [X hours/same day].
      </p>

      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-ink-900">Centre details</h2>
          <ul className="space-y-2 text-sm text-ink-700">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.helpline}</li>
            <li>
              <a href={siteConfig.whatsappLink} className="text-brand-600 hover:underline">
                Chat on WhatsApp
              </a>
            </li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.hours}</li>
          </ul>
          <div className="mt-6">
            <MapEmbed />
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-ink-900">Send an enquiry</h2>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create `app/faq/page.tsx`**

```tsx
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/faq";

export default function FAQPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-8 text-center text-3xl font-semibold text-ink-900">
        Frequently asked questions
      </h1>
      <div className="mx-auto max-w-2xl">
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Verify all pages render**

Run: `npm run dev`, visit `/about`, `/faculty`, `/gallery`, `/contact`, `/faq`.
Expected: each renders with no console errors; contact page shows form + map side-by-side on desktop, stacked on mobile; FAQ accordion expands/collapses on click.

- [ ] **Step 7: Commit**

```bash
git add app/about/ app/faculty/ app/gallery/ app/contact/ app/faq/
git commit -m "Build about, faculty, gallery, contact, and FAQ pages"
```

---

## Task 9: Netlify Forms static detection fragment

**Files:**
- Create: `public/__forms.html`

Netlify scans static HTML for forms at build/deploy time. Because the enquiry form is rendered client-side via React, Netlify's static HTML scanner needs a plain hidden copy with matching `name` and field `name` attributes to register the form.

- [ ] **Step 1: Create `public/__forms.html`**

```html
<!DOCTYPE html>
<html>
  <body>
    <form name="enquiry" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="tel" name="phone" />
      <select name="course"><option value="placeholder">placeholder</option></select>
      <textarea name="message"></textarea>
    </form>
  </body>
</html>
```

- [ ] **Step 2: Verify it's included in the export output**

Run: `npm run build`
Expected: build succeeds, `out/__forms.html` exists (check with `ls out/__forms.html` after build).

- [ ] **Step 3: Commit**

```bash
git add public/__forms.html
git commit -m "Add static form fragment for Netlify Forms detection"
```

---

## Task 10: SEO pass

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`
- Modify: `app/courses/page.tsx`, `app/courses/[slug]/page.tsx`, `app/about/page.tsx`, `app/faculty/page.tsx`, `app/gallery/page.tsx`, `app/contact/page.tsx`, `app/faq/page.tsx` (add per-page metadata)

- [ ] **Step 1: Add per-page metadata exports**

For each page file listed above, add a `metadata` export near the top (after imports). Example for `app/about/page.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | NIE Branch",
  description: "Learn about this NIE branch, its approach to teacher training, and its accreditation.",
};
```

Apply the equivalent pattern with page-appropriate title/description to: `app/courses/page.tsx` ("Courses | NIE Branch"), `app/faculty/page.tsx` ("Faculty | NIE Branch"), `app/gallery/page.tsx` ("Gallery | NIE Branch"), `app/contact/page.tsx` ("Contact | NIE Branch"), `app/faq/page.tsx` ("FAQ | NIE Branch").

For `app/courses/[slug]/page.tsx`, add a dynamic metadata function instead of a static export, right after `generateStaticParams`:

```tsx
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = getCourseBySlug(params.slug);
  return {
    title: course ? `${course.name} | NIE Branch` : "Course | NIE Branch",
    description: course?.shortDescription ?? "Teacher training course details.",
  };
}
```

- [ ] **Step 2: Create `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";

const baseUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/courses", "/about", "/faculty", "/gallery", "/contact", "/faq"].map(
    (route) => ({ url: `${baseUrl}${route}` })
  );
  const courseRoutes = courses.map((course) => ({ url: `${baseUrl}/courses/${course.slug}` }));
  return [...staticRoutes, ...courseRoutes];
}
```

Note: `baseUrl` is a placeholder until the real domain is confirmed — update it then.

- [ ] **Step 3: Create `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://example.com/sitemap.xml",
  };
}
```

- [ ] **Step 4: Verify build generates sitemap and metadata**

Run: `npm run build`
Expected: build succeeds; `out/sitemap.xml` and `out/robots.txt` exist; spot-check `out/about/index.html` contains a `<title>About us | NIE Branch</title>` tag.

- [ ] **Step 5: Commit**

```bash
git add app/sitemap.ts app/robots.ts app/about/page.tsx app/courses/ app/faculty/page.tsx app/gallery/page.tsx app/contact/page.tsx app/faq/page.tsx
git commit -m "Add per-page metadata, sitemap, and robots.txt"
```

---

## Task 11: Accessibility pass

**Files:**
- Modify: `components/Header.tsx`, `components/MapEmbed.tsx`, `app/gallery/page.tsx`, `app/layout.tsx`

- [ ] **Step 1: Confirm heading hierarchy**

Check every page has exactly one `<h1>` and that subsequent headings step down (`h2`, then `h3`) without skipping levels. This was already followed in Tasks 6-8; re-scan each page file to confirm no page has two `h1`s or jumps from `h1` to `h3`.

- [ ] **Step 2: Add skip-to-content link**

Edit `app/layout.tsx`, add a skip link as the first child of `<body>`:

```tsx
<body className="flex min-h-screen flex-col font-sans text-ink-900">
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
  >
    Skip to content
  </a>
  <Header />
  <main id="main-content" className="flex-1">
    {children}
  </main>
  <Footer />
</body>
```

- [ ] **Step 3: Verify color contrast**

Check `ink-500` (used for secondary text like the "a branch of NIE" tagline) against white background meets WCAG AA (4.5:1 for normal text). `#64748b` on `#ffffff` is ~4.6:1 — acceptable. No change needed, but if any future placeholder text uses a lighter gray than `ink-500`, do not use it for body copy.

- [ ] **Step 4: Verify keyboard navigation**

Run: `npm run dev`. Using only Tab/Enter/Space (no mouse): tab through the header nav, open the mobile menu (resize to <768px first) via Enter/Space on the hamburger button, tab through FAQ accordion items and open one with Enter.
Expected: focus is visible at every stop (Tailwind's default focus ring should already be present via browser defaults — if not visible, this is a gap to fix), hamburger button and accordion buttons respond to both Enter and Space.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx
git commit -m "Add skip-to-content link and verify accessibility basics"
```

---

## Task 12: Final responsive verification and production build

**Files:** none (verification only)

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: build completes with no errors or warnings about missing static params; `out/` directory contains an `index.html` plus a subfolder per route (`about/`, `courses/`, `courses/ntt/`, etc.).

- [ ] **Step 2: Serve the static export locally**

```bash
npx serve out
```
Open the printed local URL in a browser.

- [ ] **Step 3: Walk every page at 3 breakpoints**

For each of `/`, `/courses`, `/courses/ntt` (representative course page), `/about`, `/faculty`, `/gallery`, `/contact`, `/faq`: resize browser to ~375px (mobile), ~768px (tablet), ~1280px (desktop).
Expected: no horizontal scroll/overflow at any width, nav hamburger only appears below 768px, course/faculty grids reflow from 1 to 2 to 3-4 columns as width increases, all CTA buttons and links are clickable and lead somewhere real (no dead "read more" links per PRD requirement).

- [ ] **Step 4: Stop the local server, commit final state if any fixes were made during verification**

```bash
git status
```
If verification in Step 3 required any fixes, stage and commit them with a message describing what broke and what was changed. If no fixes were needed, no commit is required for this task.

---

## Task 13: Deploy to Netlify

**Files:** none (deployment only)

- [ ] **Step 1: Push to a remote (if not already done)**

Confirm with the user whether they want this pushed to GitHub/GitLab first (Netlify can deploy from a connected git repo or via direct CLI upload) — do not push without confirmation, since this is a visibility-affecting action.

- [ ] **Step 2: Connect or deploy via Netlify**

Either connect the repo in the Netlify dashboard (build command `npm run build`, publish directory `out`, both already set in `netlify.toml`) or run `netlify deploy --prod` via the Netlify CLI if already authenticated.

- [ ] **Step 3: Verify the live form**

Submit a real test enquiry through the deployed `/contact` page form. Check the Netlify dashboard under Forms to confirm the submission appears with all 4 fields populated.

- [ ] **Step 4: Verify the live site**

Click through every nav link and CTA on the deployed URL (not localhost) to catch any export-path issues that don't show up in dev mode (e.g. trailing slash mismatches).

---

## Plan self-review notes

- **Spec coverage:** every PRD/spec page (home, courses overview + 6 course pages, about, faculty, gallery, contact, FAQ) has a task; header/footer/nav, enquiry form, WhatsApp link, map embed, SEO basics, and accessibility/responsive passes are each their own task, matching design doc sections.
- **No placeholders in the plan itself:** all code blocks are complete and copy-pasteable; bracketed strings like `[phone number]` are intentional content placeholders carried over from `CONTENT.md`, not plan placeholders.
- **Type consistency:** `Course`, `FacultyMember`, `FAQItem` types defined once in `lib/` and reused identically across all components/pages that reference them.
