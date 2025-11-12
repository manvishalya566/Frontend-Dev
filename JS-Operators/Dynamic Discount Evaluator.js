const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

let discountedCart = cart.map(product => {
  let discount = 0;
  if (product.category === "electronics") discount = 0.10;
  else if (product.category === "fashion") discount = 0.05;

  let discountedPrice = product.price - product.price * discount;
  return { ...product, discountedPrice };
});

let total = discountedCart.reduce((sum, p) => sum + p.discountedPrice, 0);

// Extra 5% discount if total > 50000
if (total > 50000) total -= total * 0.05;

console.log("🛒 Final Cart Summary:");
discountedCart.forEach(p => {
  console.log(`${p.item} (${p.category}) → ₹${p.discountedPrice.toFixed(2)}`);
});
console.log(`Final Total: ₹${total.toFixed(2)}`);
