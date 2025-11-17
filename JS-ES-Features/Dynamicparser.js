"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("===== Q1: Dynamic Data Parser =====");

for (let i = 0; i < apiData.length; i++) {
    const original = apiData[i];
    
    const asString = String(original);
    const asBoolean = Boolean(original);
    const asNumber = Number(original);

    const isValid = typeof asNumber === "number" && isFinite(asNumber);

    console.log(`Index ${i} => Original: ${original}, String: "${asString}", Boolean: ${asBoolean}, Number: ${asNumber}`);

    if (isValid) {
        validNumbers.push({ original, number: asNumber });
    } else {
        invalidNumbers.push({ original, reason: "Invalid numeric value" });
    }
}

console.log("\nValid Numeric Entries:", validNumbers);
console.log("Invalid Numeric Entries:", invalidNumbers);
console.log(`Valid Count: ${validNumbers.length}, Invalid Count: ${invalidNumbers.length}`);
