import { Product, ProductCategory } from "./Product"; // i dont understand why anyone would use blazor -- this is so crisp and easy

export const products: Product[] = [
  {
    id: 1,
    name: "Gaming Mouse",
    price: 49.99,
    quantity: 8,
    category: "Electronics",
    description: "Wireless gaming mouse",
  },
  {
    id: 2,
    name: "Keyboard",
    price: 89.99,
    quantity: 2,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    price: 59.99,
    quantity: 3,
    category: "Electronics",
    description: "Noise-cancelling over-ear headphones",
  },
  {
    id: 4,
    name: "T-Shirt",
    price: 19.99,
    quantity: 25,
    category: "Clothing",
  },
  {
    id: 5,
    name: "Winter Jacket",
    price: 129.99,
    quantity: 4,
    category: "Clothing",
    description: "Insulated waterproof jacket",
  },
  {
    id: 6,
    name: "Coffee Beans",
    price: 14.99,
    quantity: 40,
    category: "Food",
    description: "1lb bag of dark roast coffee beans",
  },
  {
    id: 7,
    name: "Notebook",
    price: 4.99,
    quantity: 60,
    category: "Other",
  },
];

export function displayProduct(product: Product): void {
  console.log(product.name);
  console.log(`Price: $${product.price.toFixed(2)}`);
  console.log(`Quantity: ${product.quantity}`);
  console.log(`Category: ${product.category}`);
  console.log(`Description: ${product.description ?? "No description available"}`);
}

export function calculateInventoryValue(productList: Product[]): number {
  return productList.reduce((total, product) => total + product.price * product.quantity, 0); // 0 is the accumulator or intiial value here
 // this function is a little complex.. call 1 would go like:
 // 1. total (incoming) = 0, product lets say is $10 with quantity $2 so w do 10 * 2 = 20
 // 2. since we got 20 last time thats what goes in here: total (inocming) = $20 next product is $5 and only 1 quantity so we get $25 out
 // 3. 25 out last time so 25 in here. etc et, thats an accumulator/reduce refresher 
}

export function findLowStock(productList: Product[], minimumQuantity: number): Product[] {
  return productList.filter((product) => product.quantity < minimumQuantity);
}

export function findByCategory(productList: Product[], category: ProductCategory): Product[] {
  return productList.filter((product) => product.category === category);
}
