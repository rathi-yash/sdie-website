import type { FacultyMember } from "@/lib/faculty";

export default function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="border border-brand-100 bg-white p-6 text-center">
      <div
        className="mx-auto mb-4 h-20 w-20 rounded-full border-2 border-gold-400 bg-brand-50"
        aria-hidden="true"
      />
      <h3 className="font-display text-base font-semibold text-brand-900">{member.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-wide text-gold-600">{member.role}</p>
      <p className="mt-2 text-sm text-ink-700">{member.credentials}</p>
    </div>
  );
}
