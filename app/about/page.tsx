import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About us | NIE Branch",
  description: "Learn about this NIE branch, its approach to teacher training, and its accreditation.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <span className="text-xs uppercase tracking-[0.2em] text-gold-600">About us</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-brand-900">About {siteConfig.branchName}</h1>

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

      <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">Our approach</h2>
      <p className="mt-3 text-ink-700">
        Small batch sizes, instructors with real classroom experience, and a focus on practical
        teaching skills alongside the required coursework.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">Accreditation</h2>
      <p className="mt-3 text-ink-700">[NCTE registration number, if available]</p>
    </article>
  );
}
