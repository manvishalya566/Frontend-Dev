

function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Promise-based version
function getBugs() {
  return new Promise((resolve, reject) => {
    // Simulate random failure (30% chance)
    const simulatedFailure = Math.random() < 0.3;
    setTimeout(() => {
      if (simulatedFailure) {
        reject(new Error("Failed to fetch bugs from server"));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

// Using the callback version (just to show original usage)
fetchBugs((bugs) => {
  console.log("Callback version (legacy) returned bugs:");
  console.table(bugs);
});

// Using the Promise version
getBugs()
  .then((bugs) => {
    console.log("Promise version returned bugs:");
    // console.table gives a neat tabular view
    console.table(bugs.map((bug, idx) => ({ id: idx + 1, bug })));
  })
  .catch((err) => {
    console.error("Error fetching bugs:", err.message);
  });
