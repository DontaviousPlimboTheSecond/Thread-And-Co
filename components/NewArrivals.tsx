"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/lib/products-data";

export default function NewArrivals() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(el.scrollLeft / maxScroll);
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="new-arrivals" className="py-20 md:py-32">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-10">
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

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-6 lg:px-12 pb-4"
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
