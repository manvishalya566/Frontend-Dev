"use strict";

console.log("===== Q9 JSON Audit =====");

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const obj = JSON.parse(rawData[i]);

        if (!obj.user || !obj.age)
            throw new Error("Missing required keys");

        obj.age = Number(obj.age);
        if (obj.age < 18) throw new Error("Underage user");

        clean.push(obj);

    } catch (err) {
        errors.push({ line: i, error: err.message });
        console.log(`Line ${i} Error: ${err.message}`);
    }
}

console.log("\nValid Entries:", clean);
console.log("Errors:", errors);
