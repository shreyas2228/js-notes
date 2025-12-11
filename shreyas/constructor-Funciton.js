// creating a constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;
}

// creating an instance of Car
let myCar = new Car("BMW", "X5");
console.log(myCar.make); // Output: BMW

let myCar2 = new Car("Audi", "Q7");
console.log(myCar2.model); // Output: Q7

function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function() {
    return `${this.species} makes a sound.`;
}
let cat = new Animal("Cat");
console.log(cat.sound()); // Output: Cat makes a sound.


// prototypr chain demonstration

Array.prototype.shreyas = function() {
    return `custom method ${this}`;
};

let arr = [1, 2, 3];
console.log(arr.shreyas()); // Output: custom method 1,2,3

// class in javaScript
// it is a blueprint for creating objects with predefined properties and methods.

class vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        return `The vehicle is a ${this.make} ${this.model}.`;
    }
}


// inheritance in JavaScript
// it is a mechanism where one class can inherit properties and methods from another class.

class car extends vehicle { 

    drive() {
        return `The car ${this.make} ${this.model} is driving.`;
    }
}
let myVehicle = new vehicle("Toyota", "Camry");
console.log(myVehicle.start()); // Output: The vehicle is a Toyota Camry.

console.log(myVehicle.drive()); // Error: myVehicle.drive is not a function

// encapsulation in JavaScript
// it is the concept of wrapping data (properties) and methods (functions) into a single unit or class.

class BankAccount {
    #balance = 0; // private property

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}


// polymorphism in JavaScript
// it is the ability of different classes to be treated as instances of the same class through a common interface.

class Bird {
    fly() {
        return "The bird is flying.";
    }   
}

class penguin extends Bird {
    fly() {
        return "Penguins cannot fly.";
    }
}

let myBird = new Bird();
let myPenguin = new penguin();

console.log(myBird.fly()); // Output: The bird is flying.
console.log(myPenguin.fly()); // Output: Penguins cannot fly. 

// getters and setters in JavaScript

class Employee {
    constructor(name, salary) {
        this.name = name;
        this._salary = salary; // private property convention
    }
    get salary() {
        return this._salary;
    }
    set salary(newSalary) {
        if (newSalary > 0) {
            this._salary = newSalary;
        } else {
            console.log("Invalid salary amount.");
        }
    }
}