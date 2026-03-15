export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew: boolean;
  colour: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Relaxed Linen Blazer",
    category: "Outerwear",
    price: "£185",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=750&fit=crop&q=80",
    isNew: true,
    colour: "Oatmeal",
  },
  {
    id: "2",
    name: "Silk Cami Top",
    category: "Everyday Essentials",
    price: "£95",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=750&fit=crop&q=80",
    isNew: true,
    colour: "Ivory",
  },
  {
    id: "3",
    name: "Wide-Leg Trousers",
    category: "Everyday Essentials",
    price: "£145",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=750&fit=crop&q=80",
    isNew: false,
    colour: "Charcoal",
  },
  {
    id: "4",
    name: "Merino Rollneck",
    category: "Everyday Essentials",
    price: "£125",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=750&fit=crop&q=80",
    isNew: true,
    colour: "Camel",
  },
  {
    id: "5",
    name: "Printed Wrap Dress",
    category: "Occasion Wear",
    price: "£165",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=750&fit=crop&q=80",
    isNew: true,
    colour: "Terracotta",
  },
  {
    id: "6",
    name: "Statement Earrings",
    category: "Accessories",
    price: "£45",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=750&fit=crop&q=80",
    isNew: false,
    colour: "Gold",
  },
  {
    id: "7",
    name: "Leather Tote Bag",
    category: "Accessories",
    price: "£220",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=750&fit=crop&q=80",
    isNew: true,
    colour: "Tan",
  },
  {
    id: "8",
    name: "Cashmere-Blend Scarf",
    category: "Accessories",
    price: "£75",
    image: "https://images.unsplash.com/photo-1601924921557-45e8e0e8ba84?w=500&h=750&fit=crop&q=80",
    isNew: false,
    colour: "Blush",
  },
  {
    id: "9",
    name: "Tailored Midi Skirt",
    category: "Occasion Wear",
    price: "£135",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=750&fit=crop&q=80",
    isNew: true,
    colour: "Navy",
  },
  {
    id: "10",
    name: "Cotton Poplin Shirt",
    category: "Everyday Essentials",
    price: "£110",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500&h=750&fit=crop&q=80",
    isNew: false,
    colour: "White",
  },
];
