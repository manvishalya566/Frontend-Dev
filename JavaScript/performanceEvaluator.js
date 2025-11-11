
let marks = [85, 90, 88, 80, 92]; // Example marks for 5 subjects

let failedSubject = marks.some(mark => mark < 35);

let totalMarks = marks.reduce((sum, value) => sum + value, 0);
let percentage = totalMarks / marks.length;

if (failedSubject) {
    console.log("Detained (Failed Subject)");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

console.log("Percentage:", percentage.toFixed(2) + "%");
