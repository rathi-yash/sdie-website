import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About us | [branch name]",
  description: "Learn about our teacher training institute, our approach, and our accreditation.",
};

const reasons = [
  {
    title: "Affordable Excellence",
    body: "We believe high-quality career training shouldn't be a financial burden. Our courses are priced competitively with flexible payment options to ensure every aspiring teacher can achieve their dream.",
  },
  {
    title: "Holistic Personality Development",
    body: "A great teacher needs more than a certificate. We integrate dedicated modules on public speaking, communication skills, grooming, and classroom leadership to build your confidence.",
  },
  {
    title: "Modern Pedagogy",
    body: "From understanding child psychology to mastering digital teaching tools and creative arts, our training covers everything a 21st-century school looks for.",
  },
  {
    title: "Recognized Certification",
    body: "Our programs are fully aligned with premium national standards and recognized frameworks, giving your resume the weight it needs to stand out.",
  },
  {
    title: "Local School Network",
    body: "Strategically located in Noida, we maintain strong relationships with top-tier local schools, giving our students an edge when it comes to practical training and job placements.",
  },
];

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <span className="text-xs uppercase tracking-[0.2em] text-gold-600">About us</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-brand-900 md:text-4xl">
        Empowering the Next Generation of Educators in Noida
      </h1>

      <p className="mt-6 font-display text-lg italic text-brand-700">
        Premium, affordable, and career-focused teacher training designed to unlock your potential.
      </p>

      <p className="mt-6 text-ink-700">
        At {siteConfig.branchName}, we believe that teaching is not just a profession, it is a
        calling. Located in the heart of {siteConfig.city}, our institute is dedicated to shaping
        passionate individuals into highly skilled, confident, and modern educators.
      </p>
      <p className="mt-4 text-ink-700">
        We specialize in comprehensive Nursery Teacher Training (NTT) and Nursery Primary Teacher
        Training (NPTT) programs. Our curriculum is carefully crafted to blend core academic
        theories with global best practices in early childhood education. We don&apos;t just teach
        you how to manage a classroom, we prepare you to inspire young minds.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">
        Why Choose {siteConfig.branchName}?
      </h2>
      <ul className="mt-4 space-y-5">
        {reasons.map((reason) => (
          <li key={reason.title}>
            <p className="font-display text-base font-semibold text-brand-900">{reason.title}</p>
            <p className="mt-1 text-sm text-ink-700">{reason.body}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
