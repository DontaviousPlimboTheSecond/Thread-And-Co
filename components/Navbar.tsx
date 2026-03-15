"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "New In", href: "#new-arrivals" },
  { label: "Collections", href: "#collections" },
  { label: "Styling", href: "#styling" },
  { label: "About", href: "#about" },
  { label: "Visit Us", href: "#location" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tc-bg/90 backdrop-blur-md border-b border-tc-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light text-tc-navy tracking-wide"
        >
          Thread & Co.
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] font-light text-tc-navy hover:text-tc-gold transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-tc-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-tc-navy origin-center"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px bg-tc-navy"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="block w-5 h-px bg-tc-navy origin-center"
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-tc-bg border-b border-tc-hairline"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] font-light text-tc-navy"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
