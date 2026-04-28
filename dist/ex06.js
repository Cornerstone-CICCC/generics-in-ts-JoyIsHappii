"use strict";
// Define a generic function named `createPair` that takes two arguments of types `A` and `B` and returns them as a pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B` parameters.
const createPair = (a, b) => {
    return [a, b];
};
console.log(createPair(1, 2)); // Output: [1, 2]
console.log(createPair('a', 'b')); // Output: ['a', 'b']
console.log(createPair(1, 'a')); // Output: [1, 'a']
