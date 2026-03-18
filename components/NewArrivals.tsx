"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/lib/products-data";

export default function NewArrivals() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(el.scrollLeft / maxScroll);
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < maxScroll - 10);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      el.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [updateScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 324; // 300px card + 24px gap
    el.scrollBy({
      left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  };

  return (
    <section id="new-arrivals" className="py-20 md:py-32">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-10 flex items-end justify-between">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-[family-name:var(--font-cormorant)] font-light text-5xl md:text-7xl text-tc-navy"
          >
            New In
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-3 text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-muted"
          >
            This week&apos;s edit.
          </motion.p>
        </div>

        {/* Desktop scroll arrows */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="w-10 h-10 border border-tc-hairline flex items-center justify-center text-tc-navy hover:border-tc-navy transition-colors duration-300 disabled:opacity-20 disabled:cursor-default"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3L5 8L10 13" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="w-10 h-10 border border-tc-hairline flex items-center justify-center text-tc-navy hover:border-tc-navy transition-colors duration-300 disabled:opacity-20 disabled:cursor-default"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3L11 8L6 13" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-6 lg:px-12 pb-4 scroll-smooth"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="flex-shrink-0 w-[260px] md:w-[300px] group cursor-pointer"
          >
            <div className="relative aspect-[2/3] overflow-hidden mb-4">
              {/* TODO: REPLACE — swap Unsplash images for real product photography */}
              <Image
                src={product.image}
                alt={`${product.name} in ${product.colour}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 260px, 300px"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-tc-gold/90 text-white text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] px-3 py-1 rounded-full">
                  New In
                </span>
              )}
            </div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-tc-navy">
              {product.name}
            </h3>
            <p className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] font-light text-tc-muted mt-1">
              {product.category}
            </p>
            <p className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-navy mt-1">
              {product.price}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Scroll progress bar */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mt-6">
        <div className="h-px bg-tc-hairline relative">
          <motion.div
            className="h-px bg-tc-navy absolute top-0 left-0"
            style={{ width: `${scrollProgress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </section>
  );
}
