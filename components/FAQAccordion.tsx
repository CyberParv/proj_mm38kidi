"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  headline: string;
  subheadline?: string;
  items: FAQItem[];
}

export default function FAQAccordion({
  headline = "Frequently asked questions",
  subheadline = "Quick answers about shipping, returns, and our products.",
  items = [],
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const itemsToRender = items.length
    ? items
    : [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping arrives in 3–5 business days, with expedited options at checkout.",
        },
        {
          question: "What is your return policy?",
          answer: "You can return most items within 30 days for a full refund or store credit.",
        },
        {
          question: "Do you offer international shipping?",
          answer: "Yes, we ship to over 40 countries with duties shown at checkout.",
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you will receive an email with a tracking link.",
        },
      ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 space-y-4">
          {itemsToRender.map(function (item, i) {
            var isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-lg border bg-background">
                <button
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={function () { setOpenIndex(isOpen ? null : i); }}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-foreground">{item.question}</span>
                  <span className={"text-muted-foreground transition-transform " + (isOpen ? "rotate-180" : "")}>
                    &#9660;
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
