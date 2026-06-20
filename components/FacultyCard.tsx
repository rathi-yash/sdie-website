import type { FacultyMember } from "@/lib/faculty";

export default function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="w-full max-w-[15rem] rounded-lg border border-brand-100 bg-white p-6 text-center sm:p-8">
      <div
        className="mx-auto mb-4 h-32 w-32 rounded-full border-2 border-gold-400 bg-brand-50"
        aria-hidden="true"
      />
      <h3 className="font-display text-lg font-semibold text-brand-900">{member.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-wide text-gold-600">{member.role}</p>
      <p className="mt-2 text-sm text-ink-700">{member.credentials}</p>
    </div>
  );
}
