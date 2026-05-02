"use strict";
// Implement a generic function named `reverseArray` that takes an array of type `T[]` and reverses the order of elements in the same array.
// Provide test cases using arrays of different types, including numbers, strings, and custom objects.
Object.defineProperty(exports, "__esModule", { value: true });
const reverseArray = (arr) => {
    arr.reverse();
    return arr;
};
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c", "d"])); // Output: ["d", "c", "b", "a"]
console.log(reverseArray([{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }])); // Output: [{ name: "Charlie" }, { name: "Bob" }, { name: "Alice" }]
