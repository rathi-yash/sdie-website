import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/faq";

export default function FAQPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h1 className="mb-8 text-center text-3xl font-semibold text-ink-900">
        Frequently asked questions
      </h1>
      <div className="mx-auto max-w-2xl">
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
