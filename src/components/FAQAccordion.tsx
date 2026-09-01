"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/content/services";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="border-t border-line">
      {items.map((item, i) => (
        <Accordion.Item key={i} value={`q${i}`} className="border-b border-line">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-start justify-between gap-6 py-5 text-left">
              <span className="font-display text-[1.0625rem] font-semibold leading-snug text-ink sm:text-[1.15rem]">
                {item.q}
              </span>
              <Plus
                className="mt-1 h-5 w-5 shrink-0 text-brand transition-transform duration-300 ease-out group-data-[state=open]:rotate-45"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
            <p className="max-w-prose pb-6 pr-10 text-[1.0625rem] leading-[1.72] text-ink-soft">
              {item.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
