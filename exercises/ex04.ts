// Write a generic function called `getFirstElement` that accepts an array of type `T[]` and returns the first element.
// Create test cases using arrays of various types to demonstrate that the function works correctly.
// Don't forget to cover the situation where the array is empty.

const getFirstElement = <T>(arr: T[]): T | undefined => {
  return arr[0];
};

console.log(getFirstElement([1, 2, 3, 4, 5])); // Output: 1
console.log(getFirstElement(["a", "b", "c", "d"])); // Output: "a"
console.log(getFirstElement([{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }])); // Output: { name: "Alice" }
console.log(getFirstElement([])); // Output: undefined