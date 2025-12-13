// prototypalInheritance.js is a demonstration of prototypal inheritance in JavaScript.
// It shows how objects can inherit properties and methods from other objects using prototypes.
// Example of prototypal inheritance in JavaScript

// Parent object

function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

let alice = new Person("Alice")
alice.greet(); // Output: Hello, my name is Alice