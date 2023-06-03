// Asynchronous Basics in Node js

// In synchronous operations tasks are performed one at a time.
// In Asynchronous, Second Task do not wait to finish First Task.

// Example of asynchronous 1

// console.log("start exe..");
// setTimeout(() => {
//   console.log("logic exe..");
// }, 2000);
// console.log("complete exe..");

// Example of asynchronous 2

let a = 10;
let b = 0;
setTimeout(() => {
  b = 20;
}, 2000);
console.log(a + b);

// The above example demonstrate the drawback of asynchronous language.
// It should have printed 30 but due to asynchronous nature we get wromg answer 10.
