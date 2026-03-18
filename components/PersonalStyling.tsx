"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const stylingSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name")
    .max(100, "Name must be under 100 characters")
    .regex(/^[a-zA-Z\s\-'.]+$/, "Name contains invalid characters"),
  email: z
    .string()
    .email("Please enter a valid email")
    .max(254, "Email must be under 254 characters"),
  phone: z
    .string()
    .min(6, "Please enter your phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+]?[\d\s\-()]{6,20}$/, "Please enter a valid phone number"),
  reason: z.enum(
    ["special-occasion", "wardrobe-refresh", "gift", "just-browsing", "other"],
    { error: "Please select a reason" }
  ),
  date: z
    .string()
    .min(1, "Please select a date")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please select a valid date"),
  time: z.enum(
    ["09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],
    { error: "Please select a time" }
  ),
  notes: z
    .string()
    .max(1000, "Notes must be under 1000 characters")
    .optional(),
});

type StylingFormData = z.infer<typeof stylingSchema>;

const timeSlots = [
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export default function PersonalStyling() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<StylingFormData>({
    resolver: zodResolver(stylingSchema),
  });

  const onSubmit = async (data: StylingFormData) => {
    setSubmitting(true);
    setFormError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 429) {
        setFormError("Too many requests. Please try again in a few minutes.");
        return;
      }

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setFormError(body?.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setFormError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="styling" className="py-20 md:py-32">
      {/* PERSONAL STYLING — appointments via this form land in owner's inbox
          Solanum Growth plan (£129/mo) includes monthly form and content updates */}

      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            {/* TODO: REPLACE — use real styling session photo */}
            <Image
              src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=1100&fit=crop&q=80"
              alt="Personal styling session at Thread & Co."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right: Content + Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <h2 className="font-[family-name:var(--font-cormorant)] font-light text-4xl md:text-5xl lg:text-6xl text-tc-navy leading-tight">
              Your personal
              <br />
              stylist.
            </h2>

            <p className="mt-6 text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-muted leading-relaxed max-w-md">
              We remember what you&apos;ve bought before. We make suggestions.
              We&apos;re here when you don&apos;t know what you&apos;re looking
              for.
            </p>

            <div className="mt-4 space-y-2 text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-navy">
              <p className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-tc-gold flex-shrink-0" />
                One-to-one styling appointments
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-tc-gold flex-shrink-0" />
                Occasion-specific outfit curation
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-tc-gold flex-shrink-0" />
                Wardrobe refresh consultations
              </p>
            </div>

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10 bg-tc-surface p-8 border border-tc-hairline"
              >
                <p className="font-[family-name:var(--font-cormorant)] text-xl text-tc-navy">
                  Thank you.
                </p>
                <p className="mt-2 text-sm font-[family-name:var(--font-dm-sans)] font-light text-tc-muted">
                  We&apos;ll be in touch to confirm your appointment.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 space-y-5"
              >
                <div>
                  <Label
                    htmlFor="name"
                    className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] text-tc-muted"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="mt-1 bg-transparent border-tc-hairline focus:border-tc-navy font-[family-name:var(--font-dm-sans)] font-light text-sm"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] text-tc-muted"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-1 bg-transparent border-tc-hairline focus:border-tc-navy font-[family-name:var(--font-dm-sans)] font-light text-sm"
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] text-tc-muted"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="mt-1 bg-transparent border-tc-hairline focus:border-tc-navy font-[family-name:var(--font-dm-sans)] font-light text-sm"
                      placeholder="07XXX XXX XXX"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="reason"
                    className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] text-tc-muted"
                  >
                    What are you shopping for?
                  </Label>
                  <Select
                    onValueChange={(value) => { if (value) setValue("reason", value as "special-occasion" | "wardrobe-refresh" | "gift" | "just-browsing" | "other"); }}
                  >
                    <SelectTrigger className="mt-1 bg-transparent border-tc-hairline font-[family-name:var(--font-dm-sans)] font-light text-sm">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="special-occasion">
                        Special Occasion
                      </SelectItem>
                      <SelectItem value="wardrobe-refresh">
                        Wardrobe Refresh
                      </SelectItem>
                      <SelectItem value="gift">Gift</SelectItem>
                      <SelectItem value="just-browsing">
                        Just Browsing
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.reason && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.reason.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label
                      htmlFor="date"
                      className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] text-tc-muted"
                    >
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      {...register("date")}
                      className="mt-1 bg-transparent border-tc-hairline focus:border-tc-navy font-[family-name:var(--font-dm-sans)] font-light text-sm"
                    />
                    {errors.date && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.date.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="time"
                      className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] text-tc-muted"
                    >
                      Preferred Time
                    </Label>
                    <Select
                      onValueChange={(value) => { if (value) setValue("time", value as StylingFormData["time"]); }}
                    >
                      <SelectTrigger className="mt-1 bg-transparent border-tc-hairline font-[family-name:var(--font-dm-sans)] font-light text-sm">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.time && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.time.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="notes"
                    className="text-[10px] uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] text-tc-muted"
                  >
                    Additional Notes
                  </Label>
                  <Textarea
                    id="notes"
                    {...register("notes")}
                    className="mt-1 bg-transparent border-tc-hairline focus:border-tc-navy font-[family-name:var(--font-dm-sans)] font-light text-sm resize-none"
                    rows={3}
                    placeholder="Tell us anything that might help us prepare..."
                  />
                </div>

                {formError && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-4 py-2">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-tc-black text-tc-bg px-8 py-3 text-xs uppercase tracking-[0.15em] font-[family-name:var(--font-dm-sans)] hover:bg-tc-navy transition-colors duration-300 disabled:opacity-50"
                >
                  {submitting ? "Booking..." : "Book Appointment"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
