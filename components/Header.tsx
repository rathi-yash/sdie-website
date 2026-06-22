"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import CTAButton from "./CTAButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/#faculty", label: "Faculty" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-brand-700 bg-paper/95 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8">
        <div className="flex flex-col">
          <Link href="/" className="font-display text-xl font-semibold tracking-tight text-brand-700">
            {siteConfig.branchName}
          </Link>
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold-600">
            Teacher training institute
          </span>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm text-ink-700 transition-colors hover:text-brand-700"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
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
        <nav className="flex flex-col gap-1 border-t border-brand-100 bg-paper px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2 py-2 text-sm text-ink-700 hover:bg-brand-50"
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
