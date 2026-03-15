"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* SEASONAL BANNER — uncomment to announce sale, new season, event */}
      {/* <div className="bg-tc-navy text-tc-bg text-center py-2 text-xs uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)]">
        Spring Collection Now In Store
      </div> */}

      <section className="relative h-screen w-full overflow-hidden">
        {/* TODO: REPLACE — swap Unsplash image for real editorial photo of the boutique */}
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&h=1000&fit=crop&q=80"
          alt="Thread & Co. boutique interior with curated women's fashion"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Very light warm overlay */}
        <div className="absolute inset-0 bg-[rgba(250,247,242,0.15)]" />

        {/* Content — bottom-left aligned */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-dm-sans)] font-light text-tc-navy mb-4"
          >
            Nottingham&apos;s Edit
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-[family-name:var(--font-cormorant)] font-light text-tc-navy text-6xl md:text-8xl lg:text-[120px] leading-[0.9] tracking-wide"
          >
            Thread
            <br />
            & Co.
          </motion.h1>
        </div>

        {/* CTA — bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-8 right-8 md:bottom-16 md:right-16 lg:bottom-24 lg:right-24"
        >
          <a
            href="#new-arrivals"
            className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-navy tracking-wide group inline-flex items-center gap-2"
          >
            Explore the Collection
            <span className="block w-0 group-hover:w-6 h-px bg-tc-navy transition-all duration-500" />
          </a>
        </motion.div>
      </section>
    </>
  );
}
