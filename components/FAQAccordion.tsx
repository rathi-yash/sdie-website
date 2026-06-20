"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/faq";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-ink-100 rounded-lg border border-ink-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-ink-900"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span className="ml-2 shrink-0">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="px-4 pb-4 text-sm text-ink-700">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
