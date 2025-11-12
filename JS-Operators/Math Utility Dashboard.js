let x = 16.75;

let rounded = Math.round(x);
let sqrt = Math.sqrt(x);
let power = Math.pow(x, 3);
let random = Math.floor(Math.random() * 41) + 10;

console.log(`
📊 Math Dashboard
-----------------------
Original Number: ${x}
Rounded: ${rounded}
Square Root: ${sqrt.toFixed(3)}
Power (x³): ${power.toFixed(2)}
Random (10–50): ${random}
`);
