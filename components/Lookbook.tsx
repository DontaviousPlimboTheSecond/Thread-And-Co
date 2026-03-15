"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Lookbook() {
  return (
    <section className="py-20 md:py-32">
      {/* Top hairline */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="h-px bg-tc-hairline mb-16 md:mb-24" />
      </div>

      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            {/* TODO: REPLACE — use real lookbook/editorial imagery */}
            <Image
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1100&fit=crop&q=80"
              alt="Spring editorial — model in curated outfit from Thread & Co."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1100&fit=crop&q=80"
              alt="Spring editorial — styled accessories and outerwear"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Centred overlaid text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-tc-bg/85 backdrop-blur-sm px-8 py-6 md:px-14 md:py-10 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] font-[family-name:var(--font-dm-sans)] font-light text-tc-muted mb-2">
                Lookbook
              </p>
              <h3 className="font-[family-name:var(--font-cormorant)] font-light text-2xl md:text-4xl lg:text-5xl text-tc-navy leading-tight">
                The Spring Edit
              </h3>
              <p className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-muted mt-3">
                Now in store and online.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="h-px bg-tc-hairline mt-16 md:mt-24" />
      </div>
    </section>
  );
}
