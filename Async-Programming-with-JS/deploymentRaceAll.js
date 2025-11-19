

function serverResponse(serverName, responseTimeMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${serverName} failed to deploy`));
      } else {
        resolve(`${serverName} responded in ${responseTimeMs}ms`);
      }
    }, responseTimeMs);
  });
}

const serverA = serverResponse("Server A", 2000); // 2s
const serverB = serverResponse("Server B", 3000); // 3s

// Promise.all: wait for all
Promise.all([serverA, serverB])
  .then((results) => {
    console.log("Deployment completed for all servers");
    results.forEach((res) => console.log(res));
  })
  .catch((err) => {
    console.error("One or more deployments failed (all):", err.message);
  });

// Promise.race: first responder
Promise.race([serverA, serverB])
  .then((firstResult) => {
    console.log("Fastest response:", firstResult);
  })
  .catch((err) => {
    console.error("Fastest response had an error:", err.message);
  });
