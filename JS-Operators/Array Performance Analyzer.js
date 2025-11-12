// Generate 8 random scores between 30 and 100
let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// Calculations
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = (scores.reduce((sum, val) => sum + val, 0) / scores.length).toFixed(2);
let passed = scores.filter(score => score >= 50).length;

console.log(`
🎯 Student Performance Analyzer
Scores: ${scores.join(", ")}
Highest: ${highest}
Lowest: ${lowest}
Average: ${average}
Students Passed: ${passed}/${scores.length}
`);
