"use strict";
// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(111);
console.log(numberStack.pop()); // Output: 111
console.log(numberStack.pop()); // Output: 2
console.log(numberStack.pop()); // Output: 1
const stringStack = new Stack();
stringStack.push("Hello");
stringStack.push("World");
stringStack.push("!");
console.log(stringStack.pop()); // Output: "!"
console.log(stringStack.pop()); // Output: "World"
console.log(stringStack.pop()); // Output: "Hello"
