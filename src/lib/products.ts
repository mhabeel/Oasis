export type Product = {
  id: string;
  name: string;
  price: number; // EUR
  image: string; // /products/filename.jpg in public folder
  description?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "olive-oil-500ml",
    name: "Extra Virgin Olive Oil (500ml)",
    price: 12.5,
    image: "/products/olive-oil.jpg",
    description: "Cold-pressed, Moroccan olives.",
  },
  {
    id: "harissa-jar",
    name: "Harissa Paste (200g)",
    price: 6.0,
    image: "/products/harissa.jpg",
    description: "Smoky & spicy condiment.",
  },
  {
    id: "mint-tea-pack",
    name: "Moroccan Mint Tea Pack",
    price: 8.0,
    image: "/products/mint-tea.jpg",
    description: "Green tea with fresh mint aroma.",
  },
];
