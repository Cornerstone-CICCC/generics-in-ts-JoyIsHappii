// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.

const filterByType = <T, U extends T>(
  array: T[],
  type: new (...args: any[]) => U
): U[] => {
  return array.filter((item): item is U => item instanceof type);
};

class Person {
  constructor(public name: string) {}
}

class Animal {
  constructor(public species: string) {}
}

const mixedArray: (Person | Animal | number)[] = [
  new Person('Alice'),
  new Animal('Cat'),
  42,
  new Person('Bob'),
  new Animal('Dog'),
];

const people = filterByType(mixedArray, Person);
console.log(people);
// [Person { name: 'Alice' }, Person { name: 'Bob' }]

const animals = filterByType(mixedArray, Animal);
console.log(animals);
// [Animal { species: 'Cat' }, Animal { species: 'Dog' }]
