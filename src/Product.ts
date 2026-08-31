export type ProductCategory = "Electronics" | "Clothing" | "Food" | "Other";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: ProductCategory;
  description?: string;
}
