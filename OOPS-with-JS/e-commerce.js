
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
  { id: 2, name: "Mouse", category: "Electronics", price: 700, stock: 50 },
  { id: 3, name: "Shirt", category: "Fashion", price: 800, stock: 2 },
  { id: 4, name: "Shoes", category: "Fashion", price: 1500, stock: 8 }
];

// 1. Low stock
function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

// 2. Sort by price
function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total inventory value
function calculateTotalInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

// 4. Group by category
function groupByCategory() {
  return products.reduce((grouped, product) => {
    if (!grouped[product.category]) {
      grouped[product.category] = [];
    }
    grouped[product.category].push(product);
    return grouped;
  }, {});
}

// Test logs
console.log("Low Stock:", getLowStockProducts());
console.log("Sorted by Price:", sortProductsByPrice());
console.log("Total Value:", calculateTotalInventoryValue());
console.log("Grouped:", groupByCategory());
