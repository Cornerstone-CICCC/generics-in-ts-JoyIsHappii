"use strict";
// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.
Object.defineProperty(exports, "__esModule", { value: true });
const filterByType = (array, type) => {
    return array.filter((item) => item instanceof type);
};
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Animal {
    species;
    constructor(species) {
        this.species = species;
    }
}
const mixedArray = [
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
