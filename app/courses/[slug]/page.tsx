import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { courses, getCourseBySlug } from "@/lib/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = getCourseBySlug(params.slug);
  return {
    title: course ? `${course.name} | [branch name]` : "Course | [branch name]",
    description: course?.shortDescription ?? "Teacher training course details.",
  };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <span className="text-xs uppercase tracking-[0.2em] text-gold-600">Course</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-brand-900">{course.name}</h1>
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

      <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">What you&apos;ll learn</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink-700">
        {course.whatYouWillLearn.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">Career outcomes</h2>
      <p className="mt-3 text-sm text-ink-700">{course.careerOutcomes}</p>

      {course.note && (
        <p className="mt-4 rounded-lg bg-ink-50 p-3 text-sm text-ink-700">{course.note}</p>
      )}

      <div className="mt-10">
        <CTAButton href="/contact">Enroll now</CTAButton>
      </div>
    </article>
  );
}
