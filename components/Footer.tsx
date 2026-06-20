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
