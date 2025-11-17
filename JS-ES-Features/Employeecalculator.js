"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("===== Q2: Employee Bonus Calculator =====");

for (let emp of employees) {
    try {
        if (!emp.name || !emp.salary || !emp.years)
            throw new Error("Missing employee property");

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (!isFinite(salary)) throw new Error("Invalid salary value");
        if (!isFinite(years)) throw new Error("Invalid years value");

        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        console.log(
            `Name: ${emp.name}, Salary: ₹${salary}, Years: ${years}, Bonus: ₹${bonus.toFixed(2)}`
        );

    } catch (err) {
        console.log(`Error for employee ${emp.name}: ${err.message}`);
    }
}
