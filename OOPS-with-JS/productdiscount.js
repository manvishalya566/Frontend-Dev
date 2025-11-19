
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  const newPrice = this.price - (this.price * percent) / 100;
  return newPrice;
};


const p1 = new Product("Laptop", 50000);
const p2 = new Product("Shoes", 2000);
const p3 = new Product("Watch", 3000);

console.log("Laptop discounted:", p1.applyDiscount(10));
console.log("Shoes discounted:", p2.applyDiscount(20));
console.log("Watch discounted:", p3.applyDiscount(5));

