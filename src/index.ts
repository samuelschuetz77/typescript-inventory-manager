import { products } from "./inventory";
import { displayProduct, calculateInventoryValue, findLowStock, findByCategory } from "./inventory";

console.log("=== INVENTORY ===\n");
for (const product of products) {
  displayProduct(product);
  console.log("");
}

console.log("=== INVENTORY VALUE ===");
console.log(`$${calculateInventoryValue(products).toFixed(2)}`); //rounded to 2 decimals 
console.log("");

console.log("=== LOW STOCK ===");
const lowStock = findLowStock(products, 5);
for (const product of lowStock) {
  console.log(`${product.name} - ${product.quantity} remaining`);
}
console.log("");

console.log("=== ELECTRONICS ===");
const electronics = findByCategory(products, "Electronics");
for (const product of electronics) {
  console.log(product.name);
}
