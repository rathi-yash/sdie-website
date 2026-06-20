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
