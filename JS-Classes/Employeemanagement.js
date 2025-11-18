class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * (percent / 100));
    }
}

let employees = [
    new Employee(1, "John", "IT", 40000),
    new Employee(2, "Alex", "HR", 30000),
    new Employee(3, "David", "Finance", 35000),
    new Employee(4, "Max", "Marketing", 45000),
    new Employee(5, "Sara", "Sales", 38000)
];

let total = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("Total Annual Payout:", total);
