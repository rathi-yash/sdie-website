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
