"use strict";


const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

console.log("===== Q3: Transaction Validator =====");

for (let tx of transactions) {
    try {
        if (tx === null) throw new Error("Null entry");
        if (!tx.id) throw new Error("Missing ID");
        if (tx.amount === undefined) throw new Error("Missing Amount");
        if (tx.amount < 0) throw new Error("Negative Amount");

        valid.push(tx);
        console.log(`Transaction ${tx.id} => VALID`);

    } catch (err) {
        invalid.push({ tx, error: err.message });
        console.log(`Invalid Transaction: ${err.message}`);
    }
}

console.log("\nValid List:", valid);
console.log("Invalid List:", invalid);
console.log(`Valid Count: ${valid.length}, Invalid Count: ${invalid.length}`);
