// oops concept demonstration in JavaScript
// opps (object oriented programming) 
// javascript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented programming.

// constructor function
// it is used to create multiple objects with the same properties and methods.
// by convention, constructor function names start with a capital letter.
// the 'this' keyword refers to the current instance of the object being created.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar.make); // Output: Toyota

function Tea(type){
    this.type = type;
    this.describe = function() {
        console.log("This is a " + this.type + " tea.");
    }
}
let leamonTea = new Tea("lemon");
console.log(leamonTea.describe()); // Output: This is a lemon tea.

Animal.prototype.sound = function() {
    return `${this.species} makes a sound.`;
};

let dog = new Animal("Dog");
console.log(dog.sound()); // Output: Dog makes a sound.