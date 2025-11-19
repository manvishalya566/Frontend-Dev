

function randomDelay(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stepFactory(stepName, successRate = 0.8) {
  return () =>
    new Promise((resolve, reject) => {
      const delay = randomDelay();
      setTimeout(() => {
        if (Math.random() > successRate) {
          reject(new Error(`${stepName} failed`));
        } else {
          resolve(`${stepName} successful`);
        }
      }, delay);
    });
}

const takeOrder = stepFactory("Order taken", 0.95);
const prepare = stepFactory("Food prepared", 0.9);
const pack = stepFactory("Package ready", 0.95);
const dispatch = stepFactory("Out for delivery", 0.9);
const deliver = stepFactory("Delivery completed", 0.9);

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    const step1 = await takeOrder();
    console.log("Step 1:", step1); // Order taken

    const step2 = await prepare();
    console.log("Step 2:", step2); // Food prepared

    const step3 = await pack();
    console.log("Step 3:", step3); // Package ready

    const step4 = await dispatch();
    console.log("Step 4:", step4); // Out for delivery

    const step5 = await deliver();
    console.log(step5); // Delivery completed!
    console.log("Pipeline finished successfully.");
  } catch (err) {
    console.error("Pipeline failed! Reason:", err.message);
  }
}



runPipeline();
