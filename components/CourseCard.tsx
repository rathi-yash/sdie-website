import Link from "next/link";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="block rounded-lg border border-ink-100 p-5 transition-shadow hover:shadow-md"
    >
      <h3 className="mb-2 font-semibold text-ink-900">{course.name}</h3>
      <p className="text-sm text-ink-700">{course.shortDescription}</p>
    </Link>
  );
}
