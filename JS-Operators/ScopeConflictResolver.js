// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
  // Local variable
  let salary = 40000;

  // Add bonus if employee is permanent
  if (isPermanent) {
    salary += bonus;
  }

  console.log(`Total Salary: ₹${salary}`);
}

// Test cases
calculateSalary(true);   // Permanent employee
calculateSalary(false);  // Temporary employee

// Demonstrate global variable scope
console.log(`Global Bonus: ₹${bonus}`); // Remains unchanged
