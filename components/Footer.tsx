import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/#faculty", label: "Faculty" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold-500 bg-brand-900 text-brand-50">
      <div className="grid gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-white">{siteConfig.branchName}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold-400">
            Teacher training institute
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-400">
            Quick links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-brand-100 hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-400">
            Centre contact
          </h3>
          <ul className="space-y-2 text-sm text-brand-100">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.helpline}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.hours}</li>
          </ul>
          <ul className="mt-4 flex gap-4 text-sm text-brand-100">
            <li>{siteConfig.socialLinks.facebook}</li>
            <li>{siteConfig.socialLinks.instagram}</li>
            <li>{siteConfig.socialLinks.youtube}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-700/60 px-4 py-4 text-center text-xs text-brand-200">
        &copy; {siteConfig.branchName}
      </div>
    </footer>
  );
}
