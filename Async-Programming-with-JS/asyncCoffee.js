function randomDelay(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maybeFail(operationName) {
  if (Math.random() < 0.2) {
    throw new Error(`${operationName} failed`);
  }
}

function boilWater() {
  return new Promise((resolve, reject) => {
    const delay = randomDelay();
    setTimeout(() => {
      try {
        maybeFail("Boiling water");
        console.log("Step: Water boiled");
        resolve("Boiled water");
      } catch (err) {
        reject(err);
      }
    }, delay);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    const delay = randomDelay();
    setTimeout(() => {
      try {
        maybeFail("Brewing coffee");
        console.log("Step: Coffee brewed");
        resolve("Brewed coffee");
      } catch (err) {
        reject(err);
      }
    }, delay);
  });
}
function pourIntoCup() {
  return new Promise((resolve, reject) => {
    const delay = randomDelay();
    setTimeout(() => {
      try {
        maybeFail("Pouring coffee");
        console.log("Step: Coffee poured into cup");
        resolve("Coffee in cup");
      } catch (err) {
        reject(err);
      }
    }, delay);
  });
}
console.log("Starting coffee automation...");
boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((err) => {
    console.error("Coffee process failed:", err.message);
  });