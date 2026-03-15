"use client";

import { marqueeItems } from "@/lib/boutique-data";

export default function Marquee() {
  const content = marqueeItems.join(" \u25C6 ") + " \u25C6 ";

  return (
    <div className="bg-tc-surface border-y border-tc-hairline py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-xs uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] font-light text-tc-navy mx-0 shrink-0"
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
