

let expenses = [300, 150, 800, 200, 100]; // food, travel, rent, bills, leisure

let total = expenses.reduce((sum, value) => sum + value, 0);
let average = total / expenses.length;

// Add 10% tax to total
let taxAmount = total * 0.10;
let finalAmount = total + taxAmount;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount After Tax:", finalAmount.toFixed(2));
