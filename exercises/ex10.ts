// Develop a generic function named `customMap` that takes an array of type `T[]` and a mapping function `mapper: (item: T) => U`, and returns a new array of type `U[]`.
// Test the function with arrays of different types and custom mapping functions.

const customMap = <T, U>(array: T[], mapper: (item: T) => U): U[] => {
  const result: U[] = [];
  for (const item of array) {
    result.push(mapper(item));
  }
  return result;
};

// Example usage:
const numbers = [1, 2, 3, 4];
const squaredNumbers = customMap(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]

const strings = ['hello', 'world'];
const uppercasedStrings = customMap(strings, (str) => str.toUpperCase());
console.log(uppercasedStrings); // Output: ['HELLO', 'WORLD']

const objects = [{ name: 'Alice' }, { name: 'Bob' }];
const names = customMap(objects, (obj) => obj.name);
console.log(names); // Output: ['Alice', 'Bob']