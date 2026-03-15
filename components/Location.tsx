"use client";

import { motion } from "framer-motion";
import { boutiqueData } from "@/lib/boutique-data";

export default function Location() {
  return (
    <section id="location" className="pt-12 md:pt-16 pb-20 md:pb-32">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Hairline divider */}
        <div className="w-full h-px bg-tc-hairline mb-16 md:mb-20" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-5xl lg:text-6xl text-tc-navy mb-4"
        >
          Visit us.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-muted mb-12 max-w-md"
        >
          We&apos;re in Flying Horse Walk — the covered arcade off Poultry,
          Nottingham city centre.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden border border-tc-hairline"
          >
            {/* TODO: REPLACE — add Google Maps API key for production */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.8!2d-1.1478!3d52.9534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c18f8b5e0b6f%3A0x4e5e6b6b7c8f5a0d!2sFlying%20Horse%20Walk%2C%20Nottingham!5e0!3m2!1sen!2suk!4v1"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thread & Co. location on Google Maps"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* Address */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] text-tc-muted mb-2">
                Address
              </p>
              <a
                href="https://www.google.com/maps/search/23+Flying+Horse+Walk+Nottingham+NG1+2HN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-navy hover:text-tc-gold transition-colors"
              >
                {boutiqueData.address}
              </a>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] text-tc-muted mb-2">
                Phone
              </p>
              <a
                href={`tel:${boutiqueData.phone.replace(/\s/g, "")}`}
                className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-navy hover:text-tc-gold transition-colors"
              >
                {boutiqueData.phone}
              </a>
            </div>

            {/* Opening Hours */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] text-tc-muted mb-3">
                Opening Hours
              </p>
              <div className="space-y-2">
                {Object.entries(boutiqueData.openingHours).map(
                  ([days, hours]) => (
                    <div key={days} className="flex justify-between max-w-xs">
                      <span className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-navy">
                        {days}
                      </span>
                      <span className="text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-muted">
                        {hours}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
