// Q9.js

// PROTOTYPE VERSION (from Q5)
function PersonP(name) {
    this.name = name;
}
PersonP.prototype.showName = function () {
    console.log("Name:", this.name);
};

function StudentP(name, branch) {
    PersonP.call(this, name);
    this.branch = branch;
}
StudentP.prototype = Object.create(PersonP.prototype);
StudentP.prototype.constructor = StudentP;

StudentP.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

// CLASS VERSION
class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);  // calls Person constructor
        this.branch = branch;
    }
    showBranch() {
        console.log("Branch:", this.branch);
    }
}

// Test
const sOld = new StudentP("Old Bob", "IT");
const sNew = new Student("New Bob", "CSE");

sOld.showName(); 
sOld.showBranch();

sNew.showName();
sNew.showBranch();
