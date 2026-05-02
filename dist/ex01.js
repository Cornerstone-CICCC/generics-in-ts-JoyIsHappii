"use strict";
// Create a function called concatSum that takes two generic arguments.
// These arguments could be strings or numbers. If both are strings, use the concat method; otherwise, just sum the numbers.
// If they are not of the same type, print an error message to the console; If they are not string or number, print an error message
Object.defineProperty(exports, "__esModule", { value: true });
const concatSum = (a, b) => {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return ("Arguments must be of the same type and either strings or numbers.");
    }
};
console.log(concatSum("Hello, ", "world!")); // Output: "Hello, world!"
console.log(concatSum(5, 10)); // Output: 15
console.log(concatSum("Hello", 5)); // Output: Arguments must be of the same type and either strings or numbers.
