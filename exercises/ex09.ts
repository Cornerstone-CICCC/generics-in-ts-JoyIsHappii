// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(111);

console.log(numberStack.pop()); // Output: 111
console.log(numberStack.pop()); // Output: 2
console.log(numberStack.pop()); // Output: 1

const stringStack = new Stack<string>();

stringStack.push("Hello");
stringStack.push("World");
stringStack.push("!");

console.log(stringStack.pop()); // Output: "!"
console.log(stringStack.pop()); // Output: "World"
console.log(stringStack.pop()); // Output: "Hello"
