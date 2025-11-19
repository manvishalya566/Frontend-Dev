

console.log("Start");


setTimeout(() => {
  console.log("Timeout callback (macrotask)");
}, 0);


Promise.resolve().then(() => {
  console.log("Promise microtask (microtask)");
});


console.log("Sync log inside main");

console.log("End");

