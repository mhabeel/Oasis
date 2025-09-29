export type MenuItem = { id: string; name: string; description?: string; price: number };
export type Category = { id: string; label: string; items: MenuItem[] };

export const CATEGORIES: Category[] = [
  { id: "salads", label: "Salads", items: [
    { id: "salad-1", name: "Fattoush", description: "Crisp veg, sumac, toasted pita", price: 11.5 },
    { id: "salad-2", name: "Tabbouleh", description: "Parsley, bulgur, lemon", price: 10 },
  ]},
  { id: "tajin", label: "Tajin", items: [
    { id: "tajin-1", name: "Lamb Tajin", description: "Apricot, almond, saffron", price: 19 },
    { id: "tajin-2", name: "Vegetable Tajin", description: "Seasonal veg, preserved lemon", price: 16 },
  ]},
  { id: "drinks", label: "Drinks", items: [
    { id: "drink-1", name: "Mint Tea", description: "Fresh mint, light sugar", price: 4 },
    { id: "drink-2", name: "Pomegranate Spritz", description: "Soda, pomegranate, lime", price: 5.5 },
  ]},
];
