"use strict";
// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.
class Dictionary {
    items = new Map();
    add(key, value) {
        this.items.set(key, value);
    }
    get(key) {
        return this.items.get(key);
    }
    delete(key) {
        this.items.delete(key);
    }
}
// Test cases
const dict = new Dictionary();
dict.add("one", 1);
dict.add("two", 2);
// console.log(dict.get("one")); // Output: 1
// console.log(dict.get("two")); // Output: 2
dict.delete("one");
console.log(dict.get("one")); // Output: undefined
dict.delete("two");
console.log(dict.get("two")); // Output: undefined
