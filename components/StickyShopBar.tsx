"use client";

import { useState, useEffect } from "react";

export default function StickyShopBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const locationSection = document.getElementById("location");
    if (!locationSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(locationSection);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-tc-surface/95 backdrop-blur-md border-t border-tc-hairline">
      <a
        href="#new-arrivals"
        className="flex items-center justify-between px-6 py-4"
      >
        <span className="text-xs uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] font-light text-tc-navy">
          Explore the Collection
        </span>
        <svg
          className="w-4 h-4 text-tc-navy"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}
