import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import CourseCard from "@/components/CourseCard";
import FacultyCard from "@/components/FacultyCard";
import FAQAccordion from "@/components/FAQAccordion";
import FounderNote from "@/components/FounderNote";
import GalleryCarousel from "@/components/GalleryCarousel";
import MapEmbed from "@/components/MapEmbed";
import { siteConfig } from "@/lib/site-config";
import { courses } from "@/lib/courses";
import { faculty } from "@/lib/faculty";
import { faqs } from "@/lib/faq";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-900 px-4 py-20 text-center md:px-8 md:py-28">
        <div className="absolute inset-0 bg-grain mix-blend-overlay" aria-hidden="true" />
        <div className="relative">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-gold-400">
            {siteConfig.branchName}
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
            Become a confident,{" "}
            <span className="italic text-gold-400">job-ready</span> teacher
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-brand-100">
            Teacher training in {siteConfig.city}, led by faculty with {siteConfig.facultyExperience}{" "}
            years of classroom experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/contact">Enroll now</CTAButton>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="border-b border-brand-100 bg-paper px-4 py-10 md:px-8">
        <div className="mx-auto grid max-w-3xl grid-cols-1 divide-x divide-brand-100 text-center sm:grid-cols-3">
          <div className="px-2">
            <p className="font-display text-3xl font-semibold text-brand-700">{siteConfig.facultyExperience}</p>
            <p className="mt-1 text-sm text-ink-700">Years of faculty experience</p>
          </div>
          <div className="px-2">
            <p className="font-display text-3xl font-semibold text-brand-700">{siteConfig.coursesOffered}</p>
            <p className="mt-1 text-sm text-ink-700">Courses offered</p>
          </div>
          <div className="px-2">
            <p className="font-display text-3xl font-semibold text-brand-700">NCTE</p>
            <p className="mt-1 text-sm text-ink-700">Aligned curriculum</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-600">Programs</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-brand-900">Our courses</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section id="faculty" className="scroll-mt-20 border-t border-brand-100 bg-paper px-4 py-20 md:px-8">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-600">Faculty</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-brand-900">
            Meet your instructors
          </h2>
          <p className="mt-3 text-ink-700">
            Learn from instructors who have trained thousands of teachers.
          </p>
        </div>
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4 sm:flex-nowrap sm:gap-6">
          {faculty.map((member) => (
            <FacultyCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section id="gallery" className="scroll-mt-20 border-t border-brand-100 px-4 py-20 md:px-8">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-600">Gallery</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-brand-900">
            A look inside {siteConfig.branchName}
          </h2>
        </div>
        <GalleryCarousel />
      </section>

      <FounderNote />

      <section className="border-t border-brand-100 bg-paper px-4 py-20 md:px-8">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-600">Centre</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-brand-900">Visit the centre</h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="space-y-2 self-center text-sm text-ink-700">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.hours}</p>
            <p>{siteConfig.email}</p>
          </div>
          <MapEmbed />
        </div>
      </section>

      <section className="border-t border-brand-100 px-4 py-20 md:px-8">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-600">FAQ</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-brand-900">
            Frequently asked questions
          </h2>
        </div>
        <div className="mx-auto max-w-2xl">
          <FAQAccordion items={faqs.slice(0, 3)} />
        </div>
        <p className="mt-8 text-center">
          <Link href="/faq" className="text-sm font-medium text-brand-700 hover:text-gold-600">
            See all FAQs &rarr;
          </Link>
        </p>
      </section>
    </>
  );
}
