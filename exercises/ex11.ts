// Create a generic function named `safeAccess` that safely accesses nested properties of an object using an array of keys.
// Demonstrate the function with different object structures and key sequences, including arrays and objects.

function safeAccess<T, K extends Array<string | number>>(obj: T, keys: K): any {
  let current: any = obj;
  for (const key of keys) {
    if (current == null) return undefined;
    current = current[key];
  }
  return current;
}

// Example usage:
const data = {
  user: {
    name: 'Alice',
    address: {
      city: 'Wonderland',
      zip: '12345',
    },
  },
};

console.log(safeAccess(data, ['user', 'name'])); // Output: 'Alice'
console.log(safeAccess(data, ['user', 'address', 'city'])); // Output: 'Wonderland'
console.log(safeAccess(data, ['user', 'address', 'zip'])); // Output: '12345'
console.log(safeAccess(data, ['user', 'age'])); // Output: undefined
console.log(safeAccess(data, ['user', 'address', 'country'])); // Output: undefined
console.log(safeAccess(data, ['nonexistent', 'property'])); // Output: undefined