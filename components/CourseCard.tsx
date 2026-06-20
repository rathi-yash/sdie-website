import Link from "next/link";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block rounded-lg border border-brand-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg"
    >
      <span className="mb-3 block h-px w-10 bg-gold-500 transition-all duration-200 group-hover:w-16" />
      <h3 className="mb-2 font-display text-lg font-semibold text-brand-900">{course.name}</h3>
      <p className="text-sm leading-relaxed text-ink-700">{course.shortDescription}</p>
    </Link>
  );
}
