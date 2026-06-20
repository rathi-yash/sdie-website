import type { FacultyMember } from "@/lib/faculty";

export default function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="rounded-lg border border-ink-100 p-5 text-center">
      <div className="mx-auto mb-3 h-20 w-20 rounded-full bg-ink-100" aria-hidden="true" />
      <h3 className="font-semibold text-ink-900">{member.name}</h3>
      <p className="text-sm text-brand-600">{member.role}</p>
      <p className="mt-1 text-sm text-ink-700">{member.credentials}</p>
    </div>
  );
}
