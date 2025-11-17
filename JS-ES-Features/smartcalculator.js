"use strict";

console.log("===== Q7 Smart Calculator =====");

function calculate(operation, a, b) {
    try {
        switch (operation) {
            case "add": return a + b;
            case "subtract": return a - b;
            case "divide":
                if (b === 0) throw new Error("Divide by zero");
                return a / b;
            case "power": return a ** b;
            case "root":
                if (a < 0) throw new Error("Negative root not allowed");
                return a ** (1 / b);
            default: throw new Error("Invalid Operation");
        }
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}

console.log(calculate("divide", 25, 0));
