

function submitOrder(orderData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 50% failure rate
      if (Math.random() < 0.5) {
        reject(new Error("submitOrder: network error"));
      } else {
        resolve("Order submitted successfully");
      }
    }, 500); // quick response for demo
  });
}

async function processOrder(orderData, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await submitOrder(orderData);
      console.log(`Attempt ${attempt}: Success - ${result}`);
      return result;
    } catch (err) {
      console.warn(`Attempt ${attempt}: Failed - ${err.message}`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
      // optional small delay before retry:
      await new Promise((res) => setTimeout(res, 300));
    }
  }
}

// Execute
(async () => {
  try {
    const finalResult = await processOrder({ item: "Pizza" }, 3);
    console.log("Final result:", finalResult);
  } catch (err) {
    console.error(err.message); // graceful handling of final failure
  }
})();
