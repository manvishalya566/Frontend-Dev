
let currentSalary = 40000;
let incrementRate = 8; // in %

console.log("Year | Salary");
for (let year = 1; year <= 5; year++) {
    currentSalary += (currentSalary * incrementRate) / 100;
    console.log(`Year ${year}: ₹${Math.round(currentSalary)}`);
}
