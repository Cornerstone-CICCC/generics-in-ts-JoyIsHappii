"use strict";
// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.
Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    items;
    constructor() {
        this.items = new Map();
    }
    add(key, value) {
        this.items.set(key, value);
    }
    get(key) {
        return this.items.get(key);
    }
    delete(key) {
        return this.items.delete(key);
    }
    has(key) {
        return this.items.has(key);
    }
}
// Example usage:
const stringNumberDict = new Dictionary();
stringNumberDict.add('one', 1);
stringNumberDict.add('two', 2);
console.log(stringNumberDict.get('one')); // Output: 1
console.log(stringNumberDict.has('two')); // Output: true
stringNumberDict.delete('one');
console.log(stringNumberDict.get('one')); // Output: undefined
const numberStringDict = new Dictionary();
numberStringDict.add(1, 'one');
numberStringDict.add(2, 'two');
console.log(numberStringDict.get(1)); // Output: 'one'
console.log(numberStringDict.has(2)); // Output: true
numberStringDict.delete(1);
console.log(numberStringDict.get(1)); // Output: undefined
