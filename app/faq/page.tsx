import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ | SDIE",
  description: "Answers to frequently asked questions about our teacher training courses, admissions, and fees.",
};

export default function FAQPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-8 text-center font-display text-3xl font-semibold text-brand-900">
        Frequently asked questions
      </h1>
      <div className="mx-auto max-w-2xl">
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
