

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 30% chance to fail
      if (Math.random() < 0.3) reject("Profile failed");
      else resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) reject("Posts failed");
      else resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) reject("Messages failed");
      else resolve("Messages Loaded");
    }, 1000);
  });
}

async function loadDashboard() {
  const startTime = Date.now();
  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages(),
  ]);

  const endTime = Date.now();
  const totalTimeSec = ((endTime - startTime) / 1000).toFixed(2);

  console.log(`Total time taken: ${totalTimeSec}s`);

  results.forEach((res, idx) => {
    const moduleNames = ["Profile", "Posts", "Messages"];
    if (res.status === "fulfilled") {
      console.log(`${moduleNames[idx]} succeeded: ${res.value}`);
    } else {
      console.log(`${moduleNames[idx]} failed: ${res.reason}`);
    }
  });
}

loadDashboard();
