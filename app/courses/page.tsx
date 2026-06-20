import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses | [branch name]",
  description: "Explore our teacher training courses including NTT, PTT, English Speaking, Personality Development, B.Ed, and M.Ed.",
};

export default function CoursesPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-2 text-center font-display text-3xl font-semibold text-brand-900">Our courses</h1>
      <p className="mx-auto mb-10 max-w-xl text-center text-ink-700">
        A complete teacher training course lineup.
      </p>
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}
