// Asynchronous
console.log("Task 1");

setTimeout(() => {
  console.log("Task 2");
}, 2000);

console.log("Task 3");

// Output: Task 1 → Task 3 → (after 2s) Task 2
