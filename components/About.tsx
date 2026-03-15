"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { boutiqueData } from "@/lib/boutique-data";

export default function About() {
  return (
    <section id="about" className="pt-20 md:pt-32 pb-12 md:pb-16">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-5xl lg:text-6xl text-tc-navy leading-tight">
              About Thread & Co.
            </h2>

            <div className="mt-8 space-y-5 text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-navy/80 leading-relaxed">
              <p>
                Thread & Co. was born from a simple idea: Nottingham deserved a
                boutique where every piece on the rail felt intentional. Tucked
                inside Flying Horse Walk — the covered arcade just off Poultry —
                we&apos;ve been curating women&apos;s fashion since 2019 with
                one guiding principle: less, but better.
              </p>
              <p>
                We&apos;re not a chain, and we never will be. Our team knows
                your wardrobe, remembers what you bought last season, and
                genuinely cares about helping you find something you&apos;ll
                love wearing. That&apos;s not a marketing line — it&apos;s what
                our customers say about us.
              </p>
            </div>

            {/* Brand values */}
            <div className="mt-10 space-y-4">
              {boutiqueData.brandValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="w-px h-8 bg-tc-gold flex-shrink-0" />
                  <span className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-navy">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            {/* TODO: REPLACE — use real photo of the shop or team */}
            <Image
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=1100&fit=crop&q=80"
              alt="Inside Thread & Co. boutique on Flying Horse Walk, Nottingham"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
