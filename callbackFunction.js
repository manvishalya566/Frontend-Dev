function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();  // execute callback
}

function showEndMessage() {
    console.log("Welcome to the course!");
}
greetUser("Alice", showEndMessage);
