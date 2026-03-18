import type { Metadata } from "next";
import { Cormorant, DM_Sans } from "next/font/google";
import { generateJsonLd, safeJsonLdStringify } from "@/lib/schema";
import "./globals.css";

// Sales tracking dashboard available on Solanum Pro plan (£299/mo)
// Tracks: most-viewed products, styling appointment conversions, peak traffic

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thread & Co. | Women's Boutique Nottingham",
  description:
    "Thread & Co. — independent women's clothing boutique on Flying Horse Walk, Nottingham. Curated fashion, personal styling, new arrivals weekly. Rated 4.8/5 from 94 Google reviews.",
  openGraph: {
    title: "Thread & Co. | Women's Boutique Nottingham",
    description:
      "Independent women's clothing boutique on Flying Horse Walk, Nottingham. Curated fashion, personal styling, new arrivals weekly.",
    url: "https://thread-and-co-demo.vercel.app",
    siteName: "Thread & Co.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Thread & Co. — Women's Boutique Nottingham",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)] antialiased bg-tc-bg text-tc-navy`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(jsonLd) }}
        />
        {/* Google Analytics — uncomment and replace GA_MEASUREMENT_ID to activate
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}} />
        */}
      </body>
    </html>
  );
}
