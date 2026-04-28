// Create a generic function named `identity` that takes a single argument of type `T` and returns that argument.
// Create a few test cases, such as using the function with numbers, strings, and custom objects to demonstrate its type flexibility.

const identify = <T>(arg: T): T => {
  return arg;
};

console.log(identify(12)); // Output: 12
console.log(identify("Hello, World!")); // Output: "Hello, World!"
console.log(identify({ name: "Alice", age: 30 })); // Output: { name: "Alice", age: 30 }
