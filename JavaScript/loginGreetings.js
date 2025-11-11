

// Declare the user's name
let userName = "John";

// Get current hour (0-23)
let currentHour = new Date().getHours();

// Determine greeting based on time
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour >= 12 && currentHour < 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
