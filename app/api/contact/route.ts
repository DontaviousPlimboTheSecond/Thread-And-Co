import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// --- Rate Limiting (in-memory, per-IP) ---
// In production with multiple instances, use Redis or similar.
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // max 5 submissions per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  return false;
}

function getRateLimitHeaders(ip: string) {
  const entry = rateLimitMap.get(ip);
  const remaining = entry
    ? Math.max(0, RATE_LIMIT_MAX_REQUESTS - entry.count)
    : RATE_LIMIT_MAX_REQUESTS;
  const resetTime = entry ? entry.resetTime : Date.now() + RATE_LIMIT_WINDOW_MS;

  return {
    "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
    "X-RateLimit-Remaining": String(remaining),
    "X-RateLimit-Reset": String(Math.ceil(resetTime / 1000)),
  };
}

// --- Strict validation schema ---
const VALID_REASONS = [
  "special-occasion",
  "wardrobe-refresh",
  "gift",
  "just-browsing",
  "other",
] as const;

const VALID_TIMES = [
  "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
] as const;

const contactSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be under 100 characters")
      .regex(/^[a-zA-Z\s\-'.]+$/, "Name contains invalid characters"),
    email: z
      .string()
      .email("Invalid email address")
      .max(254, "Email must be under 254 characters"),
    phone: z
      .string()
      .min(6, "Phone number too short")
      .max(20, "Phone number too long")
      .regex(
        /^[+]?[\d\s\-()]{6,20}$/,
        "Phone number must contain only digits, spaces, dashes, or parentheses"
      ),
    reason: z.enum(VALID_REASONS, {
      error: "Invalid reason selected",
    }),
    date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
      .refine((val) => {
        const d = new Date(val);
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return d >= now;
      }, "Date must not be in the past"),
    time: z.enum(VALID_TIMES, {
      error: "Invalid time selected",
    }),
    notes: z
      .string()
      .max(1000, "Notes must be under 1000 characters")
      .optional()
      .default(""),
  })
  .strict(); // reject any unexpected fields

export async function POST(request: NextRequest) {
  // --- Get client IP ---
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";

  // --- Rate limit check ---
  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        error: "Too many requests. Please try again later.",
      },
      {
        status: 429,
        headers: {
          ...getRateLimitHeaders(ip),
          "Retry-After": String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)),
        },
      }
    );
  }

  // --- Parse and validate body ---
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400, headers: getRateLimitHeaders(ip) }
    );
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        details: result.error.flatten().fieldErrors,
      },
      { status: 422, headers: getRateLimitHeaders(ip) }
    );
  }

  // --- Forward to Formspree (server-side, key never exposed to client) ---
  const formspreeUrl = process.env.FORMSPREE_URL;
  if (!formspreeUrl) {
    console.error("FORMSPREE_URL environment variable is not set");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500, headers: getRateLimitHeaders(ip) }
    );
  }

  try {
    const formData = new FormData();
    const validated = result.data;
    formData.append("name", validated.name);
    formData.append("email", validated.email);
    formData.append("phone", validated.phone);
    formData.append("reason", validated.reason);
    formData.append("date", validated.date);
    formData.append("time", validated.time);
    if (validated.notes) {
      formData.append("notes", validated.notes);
    }

    const response = await fetch(formspreeUrl, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      console.error("Formspree error:", response.status);
      return NextResponse.json(
        { error: "Failed to submit. Please try again." },
        { status: 502, headers: getRateLimitHeaders(ip) }
      );
    }

    return NextResponse.json(
      { success: true, message: "Appointment request received." },
      { status: 200, headers: getRateLimitHeaders(ip) }
    );
  } catch (err) {
    console.error("Form submission error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: getRateLimitHeaders(ip) }
    );
  }
}
