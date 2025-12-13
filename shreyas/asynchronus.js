// asynchronus is a module that provides functions for asynchronous operations
// such as fetching data from an API and processing it.
// It uses Promises and async/await syntax for handling asynchronous code.

// eg  setTimeout to simulate an asynchronous operation

// clousure in JavaScript are a function that retains access to its lexical scope even when the function is executed outside that scope.

function outer(){
    let count = 0;
    return function inner(){
        count++;
        console.log("Count is: " + count);
    }
}

let counter = outer();
console.log(outer());
