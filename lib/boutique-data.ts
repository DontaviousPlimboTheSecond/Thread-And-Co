export const boutiqueData = {
  name: "Thread & Co.",
  type: "Independent women's clothing boutique",
  address: "23 Flying Horse Walk, Nottingham NG1 2HN",
  phone: "0115 345 6789",
  rating: 4.8,
  reviewCount: 94,
  priceRange: "££–£££",
  openingHours: {
    "Monday–Saturday": "09:30–18:00",
    Sunday: "11:00–16:00",
  },
  brandValues: [
    "Independent, not a chain",
    "Curated not cluttered",
    "Sustainable where possible",
    "Personal styling on request",
  ],
} as const;

export type Collection = {
  id: string;
  name: string;
  descriptor: string;
  image: string;
};

export const collections: Collection[] = [
  {
    id: "occasion-wear",
    name: "Occasion Wear",
    descriptor: "Dressed for the moment.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop&q=80",
  },
  {
    id: "everyday-essentials",
    name: "Everyday Essentials",
    descriptor: "The pieces you reach for first.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop&q=80",
  },
  {
    id: "outerwear",
    name: "Outerwear",
    descriptor: "For Nottingham weather and beyond.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop&q=80",
  },
  {
    id: "accessories",
    name: "Accessories",
    descriptor: "The details that finish it.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "new-in",
    name: "New In",
    descriptor: "This week's edit.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=500&fit=crop&q=80",
  },
];

export const reviews = [
  {
    id: "1",
    quote:
      "Finally a boutique in Nottingham that actually curates. Every piece feels intentional.",
    author: "Sarah M.",
  },
  {
    id: "2",
    quote:
      "Bought a dress here for a wedding — three people asked where I got it.",
    author: "Emma R.",
  },
  {
    id: "3",
    quote:
      "The staff remember what you've bought before and make suggestions. Genuinely personal service.",
    author: "Claire T.",
  },
];

export const marqueeItems = [
  "Curated not cluttered",
  "Independent since 2019",
  "Personal styling on request",
  "Nottingham's favourite edit",
  "Sustainable where possible",
];
