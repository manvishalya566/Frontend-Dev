

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working in ${this.department}.`);
  }
}

class Manager extends Employee {
  work() {
    console.log(`${this.name} is managing the ${this.department} department.`);
  }
}

const e1 = new Employee("Rita", "Sales");
const m1 = new Manager("Arun", "Marketing");

e1.work();   // Employee version
m1.work();   // Manager overridden version
