"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { collections } from "@/lib/boutique-data";

export default function Collections() {
  return (
    <section id="collections" className="py-20 md:py-32">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-[family-name:var(--font-cormorant)] font-light text-5xl md:text-7xl text-tc-navy"
        >
          Collections
        </motion.h2>
      </div>

      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Row 1: Large left (60%) + 2 stacked right (40%) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Occasion Wear — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-3 relative group cursor-pointer overflow-hidden"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4]">
              {/* TODO: REPLACE — use real collection imagery */}
              <Image
                src={collections[0].image}
                alt={collections[0].name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <h3 className="font-[family-name:var(--font-cormorant)] font-light text-3xl md:text-5xl text-white leading-tight">
                  {collections[0].name}
                </h3>
                <p className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-white/80 mt-2">
                  {collections[0].descriptor}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right stack: Everyday Essentials + Outerwear */}
          <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
            {[collections[1], collections[2]].map((col, i) => (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 * (i + 1),
                  ease: "easeOut",
                }}
                className="relative group cursor-pointer overflow-hidden flex-1"
              >
                <div className="relative aspect-[4/3] md:h-full md:aspect-auto">
                  <Image
                    src={col.image}
                    alt={col.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                    <h3 className="font-[family-name:var(--font-cormorant)] font-light text-2xl md:text-3xl text-white leading-tight">
                      {col.name}
                    </h3>
                    <p className="text-xs font-[family-name:var(--font-dm-sans)] font-light text-white/80 mt-1">
                      {col.descriptor}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2: Accessories left + New In right — equal row height */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 md:grid-rows-[360px]">
          {/* Left: Accessories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-2 relative group cursor-pointer overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
              <Image
                src={collections[3].image}
                alt={collections[3].name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <h3 className="font-[family-name:var(--font-cormorant)] font-light text-2xl md:text-3xl text-white leading-tight">
                  {collections[3].name}
                </h3>
                <p className="text-xs font-[family-name:var(--font-dm-sans)] font-light text-white/80 mt-1">
                  {collections[3].descriptor}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: New In — wide banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-3 relative group cursor-pointer overflow-hidden"
          >
            <div className="relative aspect-[16/9] md:aspect-auto md:h-full">
              <Image
                src={collections[4].image}
                alt={collections[4].name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                <h3 className="font-[family-name:var(--font-cormorant)] font-light text-2xl md:text-4xl text-white leading-tight">
                  {collections[4].name}
                </h3>
                <p className="text-xs font-[family-name:var(--font-dm-sans)] font-light text-white/80 mt-1">
                  {collections[4].descriptor}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
