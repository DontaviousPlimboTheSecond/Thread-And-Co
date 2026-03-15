"use client";

import { boutiqueData } from "@/lib/boutique-data";

const footerLinks = [
  { label: "New In", href: "#new-arrivals" },
  { label: "Collections", href: "#collections" },
  { label: "Styling", href: "#styling" },
  { label: "Visit Us", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="bg-tc-bg border-t border-tc-hairline">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto py-16 md:py-20">
        {/* Name */}
        <p className="font-[family-name:var(--font-cormorant)] font-light text-3xl text-tc-navy">
          Thread & Co.
        </p>

        {/* Gold hairline */}
        <div className="w-12 h-px bg-tc-gold mt-4 mb-8" />

        {/* Links row */}
        <div className="flex flex-wrap gap-6 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] font-light text-tc-navy hover:text-tc-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact + Instagram */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
          <a
            href={`tel:${boutiqueData.phone.replace(/\s/g, "")}`}
            className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-muted hover:text-tc-navy transition-colors"
          >
            {boutiqueData.phone}
          </a>
          <span className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-muted">
            {boutiqueData.address}
          </span>

          {/* Instagram — TODO: REPLACE with real Instagram URL */}
          <a
            href="https://instagram.com/threadandco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-navy hover:text-tc-gold transition-colors"
            aria-label="Follow Thread & Co. on Instagram"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @threadandco
          </a>
        </div>

        {/* Bottom line */}
        <div className="border-t border-tc-hairline pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs font-[family-name:var(--font-dm-sans)] font-light text-tc-muted">
            &copy; 2026 Thread & Co.
          </p>
          <a
            href="https://solanumdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-[family-name:var(--font-dm-sans)] font-light text-tc-muted/60 hover:text-tc-muted transition-colors"
          >
            Website by Solanum Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
