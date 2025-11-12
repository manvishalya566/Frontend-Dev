let count = 0;

function increment() {
  count++;
  console.log(`Count: ${count}`);

  function showNested() {
    console.log(`(Nested Scope) Current Count: ${count}`);
  }
  showNested();
}

function decrement() {
  count--;
  console.log(`Count: ${count}`);

  function showNested() {
    console.log(`(Nested Scope) Current Count: ${count}`);
  }
  showNested();
}

// Simulate clicks
increment();
increment();
decrement();
