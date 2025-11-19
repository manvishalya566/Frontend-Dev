

function delay(ms = 1000) {
  return (result, cb) => setTimeout(() => cb(result), ms);
}

// Callback-hell version:
function pipelineWithCallbacks() {
  console.log("Callback pipeline starting...");
  // design -> build -> test -> deploy -> celebrate
  setTimeout(() => {
    console.log("design complete");
    setTimeout(() => {
      console.log("build complete");
      setTimeout(() => {
        console.log("test complete");
        setTimeout(() => {
          console.log("deploy complete");
          setTimeout(() => {
            console.log("celebrate! 🎉");
            console.log("Callback pipeline finished.");
          }, 1000); // celebrate
        }, 1000); // deploy
      }, 1000); // test
    }, 1000); // build
  }, 1000); // design
}


function asyncStage(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${stageName} complete`);
      resolve(stageName);
    }, 1000);
  });
}

async function pipelineWithAsyncAwait() {
  console.log("Async/Await pipeline starting...");
  try {
    await asyncStage("design");
    await asyncStage("build");
    await asyncStage("test");
    await asyncStage("deploy");
    await asyncStage("celebrate 🎉");
    console.log("Async/Await pipeline finished.");
  } catch (err) {
    console.error("Pipeline error:", err);
  }
}


pipelineWithCallbacks();
setTimeout(() => {
  pipelineWithAsyncAwait();
}, 7000); 
