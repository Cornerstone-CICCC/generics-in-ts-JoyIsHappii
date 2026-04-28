"use strict";
// Develop a generic function named `duplicateElements` that takes an array of type `T[]` and a number `n`, and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values of `n`.
const duplicateElements = (arr, n) => {
    const result = [];
    arr.forEach((element) => {
        for (let i = 0; i < n; i++) {
            result.push(element);
        }
    });
    return result;
};
console.log(duplicateElements([1, 2], 2)); // Output: [1, 1, 2, 2]
console.log(duplicateElements(["a", "b"], 2)); // Output: ["a", "a", "b", "b"]
console.log(duplicateElements([{ name: "Alice" }, { name: "Bob" }], 2)); // Output: [{ name: "Alice" }, { name: "Alice" }, { name: "Bob" }, { name: "Bob" }]
console.log(duplicateElements([], 5)); // Output: []
