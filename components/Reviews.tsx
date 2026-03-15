"use client";

import { motion } from "framer-motion";
import { reviews, boutiqueData } from "@/lib/boutique-data";

export default function Reviews() {
  return (
    <section className="py-20 md:py-32 bg-tc-surface">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Rating line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(boutiqueData.rating) ? "text-tc-gold" : "text-tc-hairline"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-[family-name:var(--font-dm-sans)] font-light text-tc-muted">
            {boutiqueData.rating} from {boutiqueData.reviewCount} Google reviews
          </span>
        </motion.div>

        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Decorative gold quote mark */}
              <span className="font-[family-name:var(--font-cormorant)] text-7xl md:text-8xl text-tc-gold/30 leading-none absolute -top-6 -left-2 select-none">
                &ldquo;
              </span>

              <blockquote className="font-[family-name:var(--font-cormorant)] italic text-xl md:text-2xl lg:text-[28px] text-tc-navy leading-relaxed pt-8">
                {review.quote}
              </blockquote>

              <p className="mt-6 text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] font-light text-tc-muted">
                {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
