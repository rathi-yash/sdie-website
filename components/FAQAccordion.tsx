"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/faq";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-brand-100 overflow-hidden rounded-lg border border-brand-100 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-brand-900"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span
                className={`ml-3 shrink-0 text-lg text-gold-600 transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-ink-700">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
