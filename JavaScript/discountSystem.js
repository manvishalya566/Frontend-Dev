

let totalPurchase = 6200;
let discountRate = 0;

if (totalPurchase >= 10000) discountRate = 25;
else if (totalPurchase >= 5000) discountRate = 15;
else if (totalPurchase >= 2000) discountRate = 5;

let discountAmount = (totalPurchase * discountRate) / 100;
let finalPrice = totalPurchase - discountAmount;

console.log("Original Total:", totalPurchase);
console.log("Discount Applied:", discountRate + "%");
console.log("Final Price:", Math.round(finalPrice));
