"use strict";
// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.
const filterByType = (arr, targetType) => {
    return arr.filter((item) => item instanceof targetType);
};
console.log(filterByType([1, "a", 2, "b", 3], Number)); // Output: [1, 2, 3]
console.log(filterByType([1, "a", 2, "b", 3], String));
