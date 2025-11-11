

let name = "Alice";
let age = 25;
let isStudent = true;
let hobbies = ["Reading", "Gaming"];
let profile = { city: "New York", country: "USA" };
let emptyValue = null;
let unknownValue;

// Prepare summary object for console.table
let summary = {
    name: { value: name, type: typeof name },
    age: { value: age, type: typeof age },
    isStudent: { value: isStudent, type: typeof isStudent },
    hobbies: { value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    profile: { value: profile, type: typeof profile },
    emptyValue: { value: emptyValue, type: typeof emptyValue }, // null is object type in JS
    unknownValue: { value: unknownValue, type: typeof unknownValue }
};

console.table(summary);
