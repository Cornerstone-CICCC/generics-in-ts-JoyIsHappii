// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.

class Dictionary<K, V> {
  private items: Map<K, V>;

  constructor() {
    this.items = new Map<K, V>();
  }

  add(key: K, value: V): void {
    this.items.set(key, value);
  }

  get(key: K): V | undefined {
    return this.items.get(key);
  }

  delete(key: K): boolean {
    return this.items.delete(key);
  }

  has(key: K): boolean {
    return this.items.has(key);
  }
}

// Example usage:
const stringNumberDict = new Dictionary<string, number>();
stringNumberDict.add('one', 1);
stringNumberDict.add('two', 2);
console.log(stringNumberDict.get('one')); // Output: 1
console.log(stringNumberDict.has('two')); // Output: true
stringNumberDict.delete('one');
console.log(stringNumberDict.get('one')); // Output: undefined

const numberStringDict = new Dictionary<number, string>();
numberStringDict.add(1, 'one');
numberStringDict.add(2, 'two');
console.log(numberStringDict.get(1)); // Output: 'one'
console.log(numberStringDict.has(2)); // Output: true
numberStringDict.delete(1);
console.log(numberStringDict.get(1)); // Output: undefined