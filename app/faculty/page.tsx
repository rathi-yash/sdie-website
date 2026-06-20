import FacultyCard from "@/components/FacultyCard";
import { faculty } from "@/lib/faculty";

export default function FacultyPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-2 text-center text-3xl font-semibold text-ink-900">Meet your instructors</h1>
      <p className="mx-auto mb-10 max-w-xl text-center text-ink-700">
        Real instructors, real classroom experience. Here&apos;s who you&apos;ll be learning from.
      </p>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((member) => (
          <FacultyCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
