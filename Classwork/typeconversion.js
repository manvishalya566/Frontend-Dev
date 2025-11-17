// Given values
let a = "50";
let b = "hello";
let c = false;
let d = null;
let e = "100px";

// Convert using Number()
console.log("Number():");
console.log(Number(a)); // 50
console.log(Number(b)); // NaN
console.log(Number(c)); // 0
console.log(Number(d)); // 0
console.log(Number(e)); // NaN

console.log("Boolean():");
console.log(Boolean(a)); // true
console.log(Boolean(b)); // true
console.log(Boolean(c)); // false
console.log(Boolean(d)); // false
console.log(Boolean(e)); // true

console.log("String():");
console.log(String(a)); // "50"
console.log(String(b)); // "hello"
console.log(String(c)); // "false"
console.log(String(d)); // "null"
console.log(String(e)); // "100px"
