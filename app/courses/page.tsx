import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export default function CoursesPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-2 text-center text-3xl font-semibold text-ink-900">Our courses</h1>
      <p className="mx-auto mb-10 max-w-xl text-center text-ink-700">
        The same course lineup taught across the NIE network.
      </p>
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}
