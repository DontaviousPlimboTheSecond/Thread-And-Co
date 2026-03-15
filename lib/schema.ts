export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Thread & Co.",
    description: "Independent women's clothing boutique in Nottingham",
    url: "https://thread-and-co-demo.vercel.app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "23 Flying Horse Walk",
      addressLocality: "Nottingham",
      postalCode: "NG1 2HN",
      addressCountry: "GB",
    },
    telephone: "01153456789",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "94",
    },
    priceRange: "££–£££",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=630&fit=crop&q=80",
  };
}
